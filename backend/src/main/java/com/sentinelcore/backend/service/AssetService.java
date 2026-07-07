package com.sentinelcore.backend.service;

import com.sentinelcore.backend.entity.Asset;
import com.sentinelcore.backend.repository.AssetRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssetService {

    private final AssetRepository assetRepository;

    public AssetService(AssetRepository assetRepository) {
        this.assetRepository = assetRepository;
    }

    public List<Asset> getAllAssets() {
        return assetRepository.findAll();
    }

    public Asset saveAsset(Asset asset) {
        return assetRepository.save(asset);
    }
    public Asset getAssetById(Long id) {
    return assetRepository.findById(id).orElse(null);
}
public Asset updateAsset(Long id, Asset updatedAsset) {

    Asset asset = assetRepository.findById(id).orElse(null);

    if (asset != null) {
        asset.setAssetName(updatedAsset.getAssetName());
        asset.setAssetType(updatedAsset.getAssetType());
        asset.setIpAddress(updatedAsset.getIpAddress());
        asset.setOperatingSystem(updatedAsset.getOperatingSystem());
        asset.setLocation(updatedAsset.getLocation());
        asset.setStatus(updatedAsset.getStatus());

        return assetRepository.save(asset);
    }

    return null;
}
public void deleteAsset(Long id) {
    assetRepository.deleteById(id);
}
}
