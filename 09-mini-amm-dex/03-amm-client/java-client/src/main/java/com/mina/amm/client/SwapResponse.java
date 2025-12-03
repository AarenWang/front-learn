package com.mina.amm.client;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public record SwapResponse(
        @JsonProperty("transactionId") String transactionId,
        @JsonProperty("status") String status,
        @JsonProperty("submittedAt") String submittedAt,
        @JsonProperty("message") String message
) {
}
