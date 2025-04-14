import React, { useState } from "react";
import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const BlueTooth = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState("");

  // 初始化蓝牙模块
  const initBluetooth = async () => {
    try {
      await Taro.openBluetoothAdapter();
      return true;
    } catch (error) {
      setError("请打开手机蓝牙功能");
      return false;
    }
  };

  // 检查蓝牙权限（仅iOS需要）
  const checkBluetoothPermission = async () => {
    const systemInfo = Taro.getSystemInfoSync();
    if (systemInfo.platform === "ios") {
      try {
        const res = await Taro.authorize({
          scope: "scope.bluetooth",
        });
        return true;
      } catch (error) {
        setError("请授权蓝牙权限");
        return false;
      }
    }
    return true;
  };

  // 开始搜索蓝牙设备
  const startSearch = async () => {
    // 初始化蓝牙
    const bluetoothReady = await initBluetooth();
    if (!bluetoothReady) return;

    // 检查权限
    const hasPermission = await checkBluetoothPermission();
    if (!hasPermission) return;

    Taro.startBluetoothDevicesDiscovery({
      success: () => {
        setIsSearching(true);
        setError("");
        // 监听新设备
        Taro.onBluetoothDeviceFound((res) => {
          setDevices((prevDevices) => {
            const newDevice = res.devices[0];
            // 检查设备是否已存在
            const exists = prevDevices.some(
              (device) => device.deviceId === newDevice.deviceId
            );
            if (!exists) {
              return [...prevDevices, newDevice];
            }
            return prevDevices;
          });
        });
      },
      fail: (err) => {
        setError("启动蓝牙搜索失败：" + err.errMsg);
      },
    });
  };

  // 停止搜索蓝牙设备
  const stopSearch = () => {
    Taro.stopBluetoothDevicesDiscovery({
      success: () => {
        setIsSearching(false);
        setError("");
      },
      fail: (err) => {
        setError("停止蓝牙搜索失败：" + err.errMsg);
      },
    });
  };

  return (
    <View className="bluetooth-page">
      <View className="control-section">
        <Button
          className={`search-button ${isSearching ? "searching" : ""}`}
          onClick={isSearching ? stopSearch : startSearch}
        >
          {isSearching ? "停止搜索" : "开始搜索"}
        </Button>
      </View>

      {error && (
        <View className="error-message">
          <Text>{error}</Text>
        </View>
      )}

      <View className="devices-section">
        <Text className="section-title">发现的设备</Text>
        <View className="devices-list">
          {devices.map((device, index) => (
            <View key={device.deviceId} className="device-item">
              <Text className="device-name">{device.name || "未知设备"}</Text>
              <Text className="device-id">ID: {device.deviceId}</Text>
              <Text className="device-rssi">信号强度: {device.RSSI}dBm</Text>
            </View>
          ))}
          {devices.length === 0 && (
            <View className="no-devices">
              <Text>{isSearching ? "搜索中..." : "暂无设备"}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default BlueTooth;
