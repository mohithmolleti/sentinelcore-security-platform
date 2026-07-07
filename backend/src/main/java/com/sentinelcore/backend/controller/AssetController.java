package com.sentinelcore.backend.controller;

import com.sentinelcore.backend.entity.Asset;
import com.sentinelcore.backend.service.AssetService;
import org.springframework.web.bind.annotation.*;

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
    public Asset createAsset(@RequestBody Asset asset) {
        return assetService.saveAsset(asset);
    }
}