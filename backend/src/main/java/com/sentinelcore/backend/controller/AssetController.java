package com.sentinelcore.backend.controller;

import com.sentinelcore.backend.entity.Asset;
import com.sentinelcore.backend.service.AssetService;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/assets")
public class AssetController {

    private final AssetService assetService;

    public AssetController(AssetService assetService) {
        this.assetService = assetService;
    }

    @GetMapping
    public List<Asset> getAllAssets() {
        return assetService.getAllAssets();
    }

   @PostMapping
public Asset createAsset(@Valid @RequestBody Asset asset) {
    return assetService.saveAsset(asset);
}
    
    @GetMapping("/{id}")
public Asset getAssetById(@PathVariable Long id) {
    return assetService.getAssetById(id);
}
@PutMapping("/{id}")
public Asset updateAsset(@PathVariable Long id, @Valid @RequestBody Asset asset) {
    return assetService.updateAsset(id, asset);
}
@DeleteMapping("/{id}")
public void deleteAsset(@PathVariable Long id) {
    assetService.deleteAsset(id);
}
}