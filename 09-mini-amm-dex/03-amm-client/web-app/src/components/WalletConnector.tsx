import { useState } from "react";

type WalletApi = {
  enable: () => Promise<unknown>;
  getUsedAddresses: () => Promise<string[]>;
};

type Props = {
  onConnected: (api: WalletApi) => void;
};

const supportedWallets = ["nami", "eternl", "flint"] as const;

export function WalletConnector({ onConnected }: Props) {
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async (walletKey: (typeof supportedWallets)[number]) => {
    setError(null);
    setConnecting(true);
    try {
      const cardano = (window as unknown as { cardano?: Record<string, WalletApi> }).cardano;
      const wallet = cardano?.[walletKey];
      if (!wallet || typeof wallet.enable !== "function") {
        setError(`未检测到 ${walletKey} 钱包扩展。`);
        return;
      }
      const api = (await wallet.enable()) as WalletApi;
      onConnected(api);
    } catch (err) {
      console.error(err);
      setError("钱包连接失败，请确认扩展已安装并解锁。");
    } finally {
      setConnecting(false);
    }
  };

  return (
    <div className="wallet-connector">
      <div className="wallet-buttons">
        {supportedWallets.map((wallet) => (
          <button key={wallet} disabled={connecting} onClick={() => connectWallet(wallet)}>
            连接 {wallet}
          </button>
        ))}
      </div>
      {error && <p className="muted error-text">{error}</p>}
    </div>
  );
}
