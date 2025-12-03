package com.mina.amm.client;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public record QuoteResponse(
        @JsonProperty("fromAsset") String fromAsset,
        @JsonProperty("toAsset") String toAsset,
        @JsonProperty("amountIn") double amountIn,
        @JsonProperty("amountOut") double amountOut,
        @JsonProperty("fee") double fee
) {
}
