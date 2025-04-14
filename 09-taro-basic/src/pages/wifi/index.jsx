import React, { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import { AtButton, AtList, AtListItem, AtMessage } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Wifi = () => {
  const [wifiStatus, setWifiStatus] = useState(false);
  const [connectedWifi, setConnectedWifi] = useState(null);
  const [wifiList, setWifiList] = useState([]);
  const [loading, setLoading] = useState(false);

  // 初始化WiFi模块
  const initWifi = async () => {
    try {
      await Taro.startWifi();
      setWifiStatus(true);
      Taro.onWifiConnected((res) => {
        setConnectedWifi(res.wifi);
      });
    } catch (err) {
      Taro.showToast({ title: "初始化失败", icon: "none" });
    }
  };

  // 获取已连接WiFi
  const getConnectedWifiInfo = async () => {
    try {
      const res = await Taro.getConnectedWifi();
      setConnectedWifi(res.wifi);
    } catch (err) {
      setConnectedWifi(null);
    }
  };

  // 扫描周边WiFi
  const scanWifi = async () => {
    if (!wifiStatus) return;
    setLoading(true);
    try {
      await Taro.startWifi();
      const res = await Taro.getWifiList();
      Taro.onGetWifiList((result) => {
        setWifiList(
          result.wifiList.sort((a, b) => b.signalStrength - a.signalStrength)
        );
      });
    } catch (err) {
      Taro.showToast({ title: "扫描失败", icon: "none" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initWifi();
    return () => {
      Taro.stopWifi();
      Taro.offWifiConnected();
    };
  }, []);

  return (
    <View className="wifi-page">
      <AtMessage />
      <View className="status-card">
        <View>WiFi状态：{wifiStatus ? "已开启" : "未开启"}</View>
        {connectedWifi && (
          <View className="connected-info">
            <View>当前连接：{connectedWifi.SSID}</View>
            <View>信号强度：{connectedWifi.signalStrength}%</View>
          </View>
        )}
      </View>

      <View className="action-buttons">
        <AtButton type="primary" loading={loading} onClick={scanWifi}>
          {loading ? "扫描中..." : "扫描周边WiFi"}
        </AtButton>
      </View>

      <AtList>
        {wifiList.map((wifi) => (
          <AtListItem
            key={wifi.SSID}
            title={wifi.SSID}
            note={`信号强度: ${wifi.signalStrength}%`}
            extraText={wifi.secure ? "加密" : "开放"}
          />
        ))}
      </AtList>
    </View>
  );
};

export default Wifi;
