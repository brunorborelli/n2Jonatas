package com.security.jwt.controller;

import com.security.jwt.model.AuthResponse;
import com.security.jwt.model.LoginRequest;
import com.security.jwt.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("authenticate")
    public ResponseEntity<AuthResponse> authenticate(@RequestBody LoginRequest authentication) {
        String token = authenticationService.authenticate(authentication);
        return ResponseEntity.ok(new AuthResponse(token));
    }
}

