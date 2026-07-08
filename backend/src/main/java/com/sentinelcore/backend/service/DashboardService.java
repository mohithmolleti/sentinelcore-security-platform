package com.sentinelcore.backend.service;

import com.sentinelcore.backend.dto.DashboardStatsDTO;
import com.sentinelcore.backend.entity.Asset;
import com.sentinelcore.backend.repository.AssetRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {

    private final AssetRepository assetRepository;

    public DashboardService(AssetRepository assetRepository) {
        this.assetRepository = assetRepository;
    }

    public DashboardStatsDTO getDashboardStats() {

        List<Asset> assets = assetRepository.findAll();

        long totalAssets = assets.size();

        long healthyAssets = assets.stream()
                .filter(asset -> "Healthy".equalsIgnoreCase(asset.getStatus()))
                .count();

        long runningAssets = assets.stream()
                .filter(asset -> "Running".equalsIgnoreCase(asset.getStatus()))
                .count();

        long warningAssets = assets.stream()
                .filter(asset -> "Warning".equalsIgnoreCase(asset.getStatus()))
                .count();

        long criticalAssets = assets.stream()
                .filter(asset -> "Critical".equalsIgnoreCase(asset.getStatus()))
                .count();

        return DashboardStatsDTO.builder()
                .totalAssets(totalAssets)
                .healthyAssets(healthyAssets)
                .runningAssets(runningAssets)
                .warningAssets(warningAssets)
                .criticalAssets(criticalAssets)
                .build();
    }
}