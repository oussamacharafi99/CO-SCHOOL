package com.coschool.controllers;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.Map;

@RequestMapping("api/chat")
@RestController
@CrossOrigin("*")
public class ChatController {

    private final ChatClient chatClient;

    public ChatController(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    @PostMapping("/ask")
    public ResponseEntity<String> askQuestion(@RequestBody Map<String, String> payload) {
        String question = payload.get("question");
        try {
            String response = chatClient.prompt()
                    .user(question)
                    .call()
                    .content();

            if (response == null || response.isEmpty()) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("No response from AI service");
            }


            String[] words = response.split("\\s+");
            String limitedResponse = String.join(" ", java.util.Arrays.copyOf(words, Math.min(words.length, 60)));

            return ResponseEntity.ok(limitedResponse);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to communicate with AI service: " + e.getMessage());
        }
    }
}
