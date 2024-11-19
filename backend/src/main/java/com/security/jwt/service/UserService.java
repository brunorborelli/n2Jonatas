package com.security.jwt.service;

import com.security.jwt.model.User;
import com.security.jwt.model.UserDTO;
import com.security.jwt.repository.UserRepository;
import com.security.jwt.utils.Utils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User save(UserDTO user) {
            Optional<User> user1 = userRepository.findByUsername(user.getUsername());
        if (!userRepository.existsByUsername(user.getUsername())) {
            User newUser = new User();
            newUser.setName(user.getName());
            newUser.setUsername(user.getUsername());
            newUser.setPassword(Utils.hashPassword(user.getPassword()));
            newUser.addRole(user.getRole());
            newUser.setActive(true);
            return userRepository.save(newUser);
        }

        throw null;
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(null);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public void toggleActive(User user) {
        user.setActive(!user.isActive());
        userRepository.save(user);
    }
}
