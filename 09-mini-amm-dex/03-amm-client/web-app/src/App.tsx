import { useMemo, useState } from "react";
import { MinaAmmClient, type QuoteResponse, type SwapResponse } from "./lib/minaAmmClient";
import { SwapForm } from "./components/SwapForm";
import { WalletConnector } from "./components/WalletConnector";

type WalletApi = {
  getUsedAddresses: () => Promise<string[]>;
  signTx?: (payload: string, partialSign?: boolean) => Promise<string>;
};

function App() {
  const [walletApi, setWalletApi] = useState<WalletApi | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [swap, setSwap] = useState<SwapResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const client = useMemo(() => new MinaAmmClient("https://amm-devnet.example.com"), []);

  const onWalletConnected = async (api: WalletApi) => {
    setWalletApi(api);
    try {
      const addresses = await api.getUsedAddresses();
      const first = addresses?.[0];
      setWalletAddress(first ?? null);
    } catch (err) {
      console.error(err);
      setError("无法读取卡尔达诺钱包地址，请确认钱包已解锁。");
    }
  };

  const handleQuote = async (fromAsset: string, toAsset: string, amount: number) => {
    setError(null);
    setSwap(null);
    try {
      const nextQuote = await client.fetchQuote({ fromAsset, toAsset, amount });
      setQuote(nextQuote);
    } catch (err) {
      console.error(err);
      setError("获取报价失败，请检查网络或AMM节点配置。");
    }
  };

  const handleSwap = async (fromAsset: string, toAsset: string, amount: number) => {
    setError(null);
    if (!walletAddress) {
      setError("请先连接 Cardano 钱包。");
      return;
    }
    try {
      const nextSwap = await client.submitSwap({
        fromAsset,
        toAsset,
        amount,
        walletAddress,
      });
      setSwap(nextSwap);
    } catch (err) {
      console.error(err);
      setError("提交交换失败，请稍后重试。");
    }
  };

  return (
    <div className="page">
      <header>
        <div>
          <h1>Mina Swap 演示</h1>
          <p className="muted">使用 React + TypeScript + Cardano 钱包连接的最小示例。</p>
        </div>
        <WalletConnector onConnected={onWalletConnected} />
      </header>

      <main>
        <SwapForm onQuote={handleQuote} onSwap={handleSwap} quote={quote} />

        <section className="panel">
          <h3>钱包状态</h3>
          <p>{walletAddress ? `已连接地址：${walletAddress}` : "尚未连接 Cardano 钱包"}</p>
        </section>

        {quote && (
          <section className="panel success">
            <h3>最新报价</h3>
            <p>
              {quote.amountIn} {quote.fromAsset} ≈ {quote.amountOut} {quote.toAsset}
            </p>
            <p className="muted">包含手续费 {quote.fee}</p>
          </section>
        )}

        {swap && (
          <section className="panel">
            <h3>交换提交结果</h3>
            <p>状态：{swap.status}</p>
            {swap.transactionId && <p>Tx Hash: {swap.transactionId}</p>}
            {swap.message && <p className="muted">{swap.message}</p>}
          </section>
        )}

        {error && (
          <section className="panel error">
            <h3>错误</h3>
            <p>{error}</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
