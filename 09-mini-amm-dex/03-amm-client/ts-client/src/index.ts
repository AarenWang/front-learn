import type { QuoteRequest, QuoteResponse, SwapRequest, SwapResponse } from "./types.js";

export type { QuoteRequest, QuoteResponse, SwapRequest, SwapResponse };

export class MinaAmmClient {
  constructor(private readonly baseUrl: string) {}

  async fetchQuote(request: QuoteRequest): Promise<QuoteResponse> {
    return this.post<QuoteResponse>("/quote", request);
  }

  async submitSwap(request: SwapRequest): Promise<SwapResponse> {
    return this.post<SwapResponse>("/swap", request);
  }

  private async post<T>(path: string, payload: unknown): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(`Request failed (${response.status}): ${message}`);
    }

    return (await response.json()) as T;
  }
}
