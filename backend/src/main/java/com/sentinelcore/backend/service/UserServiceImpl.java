package com.sentinelcore.backend.service;

import com.sentinelcore.backend.dto.UserDTO;
import com.sentinelcore.backend.entity.User;
import com.sentinelcore.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public List<UserDTO> getAllUsers() {

        return userRepository.findAll().stream().map(this::mapToDTO).toList();
    }

    @Override
    public UserDTO getUserById(Long id) {

        User user = userRepository.findById(id).orElseThrow();

        return mapToDTO(user);
    }

    @Override
    public UserDTO updateUser(Long id, UserDTO dto) {

        User user = userRepository.findById(id).orElseThrow();

        user.setFullName(dto.getFullName());
        user.setEmail(dto.getEmail());
        user.setRole(dto.getRole());
        user.setEnabled(dto.getEnabled());

        userRepository.save(user);

        return mapToDTO(user);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    private UserDTO mapToDTO(User user) {

        return UserDTO.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .username(user.getUsername())
                .email(user.getEmail())
                .role(user.getRole())
                .enabled(user.getEnabled())
                .build();
    }
}