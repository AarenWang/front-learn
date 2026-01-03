import { FormEvent, useState } from "react";
import type { QuoteResponse } from "../lib/minaAmmClient";

type Props = {
  onQuote: (fromAsset: string, toAsset: string, amount: number) => Promise<void>;
  onSwap: (fromAsset: string, toAsset: string, amount: number) => Promise<void>;
  quote: QuoteResponse | null;
};

export function SwapForm({ onQuote, onSwap, quote }: Props) {
  const [fromAsset, setFromAsset] = useState("MINA");
  const [toAsset, setToAsset] = useState("cUSD");
  const [amount, setAmount] = useState(10);
  const [loading, setLoading] = useState(false);

  const handleQuote = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    await onQuote(fromAsset, toAsset, amount);
    setLoading(false);
  };

  const handleSwap = async () => {
    setLoading(true);
    await onSwap(fromAsset, toAsset, amount);
    setLoading(false);
  };

  return (
    <section className="panel">
      <h3>兑换</h3>
      <form className="swap-form" onSubmit={handleQuote}>
        <div className="form-row">
          <label htmlFor="from">出售资产</label>
          <input id="from" value={fromAsset} onChange={(e) => setFromAsset(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="to">买入资产</label>
          <input id="to" value={toAsset} onChange={(e) => setToAsset(e.target.value)} />
        </div>
        <div className="form-row">
          <label htmlFor="amount">数量</label>
          <input
            id="amount"
            type="number"
            value={amount}
            min={0}
            step={0.01}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </div>
        <div className="actions">
          <button type="submit" disabled={loading}>
            获取报价
          </button>
          <button type="button" disabled={loading || !quote} onClick={handleSwap}>
            提交交换
          </button>
        </div>
      </form>
    </section>
  );
}
