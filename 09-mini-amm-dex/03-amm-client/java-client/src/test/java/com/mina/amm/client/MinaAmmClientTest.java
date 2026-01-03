package com.mina.amm.client;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class MinaAmmClientTest {

    @Test
    void deserializesQuoteResponse() throws Exception {
        String json = "{" +
                "\"fromAsset\":\"MINA\"," +
                "\"toAsset\":\"cUSD\"," +
                "\"amountIn\":10.0," +
                "\"amountOut\":9.5," +
                "\"fee\":0.05" +
                "}";
        ObjectMapper mapper = new ObjectMapper();
        QuoteResponse response = mapper.readValue(json, QuoteResponse.class);
        assertEquals("MINA", response.fromAsset());
        assertEquals("cUSD", response.toAsset());
        assertEquals(10.0, response.amountIn());
        assertEquals(9.5, response.amountOut());
        assertEquals(0.05, response.fee());
    }

    @Test
    void deserializesSwapResponse() throws Exception {
        String json = "{" +
                "\"transactionId\":\"abc123\"," +
                "\"status\":\"submitted\"," +
                "\"submittedAt\":\"2024-01-01T00:00:00Z\"," +
                "\"message\":\"Swap created\"" +
                "}";
        ObjectMapper mapper = new ObjectMapper();
        SwapResponse response = mapper.readValue(json, SwapResponse.class);
        assertNotNull(response);
        assertEquals("abc123", response.transactionId());
        assertEquals("submitted", response.status());
        assertEquals("2024-01-01T00:00:00Z", response.submittedAt());
        assertEquals("Swap created", response.message());
    }
}
