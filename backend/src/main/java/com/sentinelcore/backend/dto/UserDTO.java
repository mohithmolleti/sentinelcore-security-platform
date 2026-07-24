package com.sentinelcore.backend.dto;

import com.sentinelcore.backend.entity.Role;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDTO {

    private Long id;

    private String fullName;

    private String username;

    private String email;

    private Role role;

    private Boolean enabled;

}