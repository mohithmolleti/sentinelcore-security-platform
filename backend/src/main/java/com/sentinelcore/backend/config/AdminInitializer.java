package com.sentinelcore.backend.config;

import com.sentinelcore.backend.entity.Role;
import com.sentinelcore.backend.entity.User;
import com.sentinelcore.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AdminInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {

        if (userRepository.findByUsername("admin").isEmpty()) {

            User admin = User.builder()
                    .fullName("System Administrator")
                    .username("admin")
                    .email("admin@sentinelcore.com")
                    .password(passwordEncoder.encode("admin123"))
                    .role(Role.ADMIN)
                    .enabled(true)
                    .build();

            userRepository.save(admin);

            System.out.println("==================================");
            System.out.println("Default Admin Created Successfully");
            System.out.println("Username : admin");
            System.out.println("Password : admin123");
            System.out.println("==================================");
        }
    }
}