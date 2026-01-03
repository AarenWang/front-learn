export interface QuoteRequest {
  fromAsset: string;
  toAsset: string;
  amount: number;
}

export interface SwapRequest extends QuoteRequest {
  walletAddress: string;
}

export interface QuoteResponse {
  fromAsset: string;
  toAsset: string;
  amountIn: number;
  amountOut: number;
  fee: number;
}

export interface SwapResponse {
  transactionId: string;
  status: string;
  submittedAt?: string;
  message?: string;
}
