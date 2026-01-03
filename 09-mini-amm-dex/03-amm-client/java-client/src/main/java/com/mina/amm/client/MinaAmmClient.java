package com.mina.amm.client;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.Map;
import java.util.Objects;

/**
 * Minimal HTTP wrapper for interacting with a Mina AMM service.
 */
public class MinaAmmClient {
    private final String baseUrl;
    private final HttpClient httpClient;
    private final ObjectMapper mapper;

    public MinaAmmClient(String baseUrl) {
        this.baseUrl = Objects.requireNonNull(baseUrl, "baseUrl");
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
        this.mapper = new ObjectMapper().disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
    }

    public QuoteResponse fetchQuote(String fromAsset, String toAsset, double amount) {
        Map<String, Object> payload = Map.of(
                "fromAsset", fromAsset,
                "toAsset", toAsset,
                "amount", amount
        );
        return post("/quote", payload, QuoteResponse.class);
    }

    public SwapResponse submitSwap(String fromAsset, String toAsset, double amount, String walletAddress) {
        Map<String, Object> payload = Map.of(
                "fromAsset", fromAsset,
                "toAsset", toAsset,
                "amount", amount,
                "walletAddress", walletAddress
        );
        return post("/swap", payload, SwapResponse.class);
    }

    private <T> T post(String path, Object payload, Class<T> responseClass) {
        try {
            String body = mapper.writeValueAsString(payload);
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(baseUrl + path))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(body, StandardCharsets.UTF_8))
                    .build();
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() >= 200 && response.statusCode() < 300) {
                return mapper.readValue(response.body(), responseClass);
            }
            throw new IllegalStateException("Unexpected response status: " + response.statusCode() + " body: " + response.body());
        } catch (IOException | InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new RuntimeException("Failed to POST to " + path, e);
        }
    }
}
