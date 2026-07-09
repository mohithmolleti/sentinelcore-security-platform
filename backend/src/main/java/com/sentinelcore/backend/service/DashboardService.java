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
                .filter(a -> "Healthy".equalsIgnoreCase(a.getStatus()))
                .count();

        long runningAssets = assets.stream()
                .filter(a -> "Running".equalsIgnoreCase(a.getStatus()))
                .count();

        long warningAssets = assets.stream()
                .filter(a -> "Warning".equalsIgnoreCase(a.getStatus()))
                .count();

        long criticalAssets = assets.stream()
                .filter(a -> "Critical".equalsIgnoreCase(a.getStatus()))
                .count();

        List<DashboardStatsDTO.ChartData> distribution = List.of(
                new DashboardStatsDTO.ChartData("Running", runningAssets),
                new DashboardStatsDTO.ChartData("Healthy", healthyAssets),
                new DashboardStatsDTO.ChartData("Warning", warningAssets),
                new DashboardStatsDTO.ChartData("Critical", criticalAssets)
        );

        return DashboardStatsDTO.builder()
                .totalAssets(totalAssets)
                .healthyAssets(healthyAssets)
                .runningAssets(runningAssets)
                .warningAssets(warningAssets)
                .criticalAssets(criticalAssets)
                .assetDistribution(distribution)
                .build();
    }
}