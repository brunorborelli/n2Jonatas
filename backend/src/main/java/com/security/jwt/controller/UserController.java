package com.security.jwt.controller;

import com.security.jwt.model.User;
import com.security.jwt.model.UserDTO;
import com.security.jwt.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/register")
    public ResponseEntity<User> save(@RequestBody UserDTO user) {
        return ResponseEntity.ok(userService.save(user));
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<User>> findAll() {
        return ResponseEntity.ok(userService.findAll());
    }

    @PutMapping(value = "/toggle-status")
    public void toggleStatus(@RequestBody User user) {
        userService.toggleActive(user);
    }

    @GetMapping(value = "/{username}")
    public ResponseEntity<User> findById(@PathVariable String username) {
        return ResponseEntity.ok(userService.findByUsername(username));
    }
}
