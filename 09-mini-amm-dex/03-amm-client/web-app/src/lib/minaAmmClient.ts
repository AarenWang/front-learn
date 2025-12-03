export type QuoteRequest = {
  fromAsset: string;
  toAsset: string;
  amount: number;
};

export type SwapRequest = QuoteRequest & { walletAddress: string };

export type QuoteResponse = {
  fromAsset: string;
  toAsset: string;
  amountIn: number;
  amountOut: number;
  fee: number;
};

export type SwapResponse = {
  transactionId: string;
  status: string;
  submittedAt?: string;
  message?: string;
};

export class MinaAmmClient {
  constructor(private readonly baseUrl: string) {}

  async fetchQuote(payload: QuoteRequest): Promise<QuoteResponse> {
    return this.post<QuoteResponse>("/quote", payload);
  }

  async submitSwap(payload: SwapRequest): Promise<SwapResponse> {
    return this.post<SwapResponse>("/swap", payload);
  }

  private async post<T>(path: string, payload: unknown): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Request failed (${response.status}): ${text}`);
    }

    return (await response.json()) as T;
  }
}
