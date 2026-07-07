package com.sentinelcore.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "assets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Asset {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String assetName;

    @Column(nullable = false)
    private String assetType;

    @Column(nullable = false, unique = true)
    private String ipAddress;

    private String operatingSystem;

    private String location;

    private String status;

    private LocalDateTime createdAt;
}