import { View, Text, Button } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import "./index.scss";

export default function NetWork() {
  const [networkType, setNetworkType] = useState("");
  const [isConnected, setIsConnected] = useState(true);
  const [localIP, setLocalIP] = useState("");
  const [isListening, setIsListening] = useState(false);

  // 网络状态变化回调函数
  const handleNetworkStatusChange = (res) => {
    const { isConnected, networkType } = res;
    setIsConnected(isConnected);
    setNetworkType(networkType);
  };

  // 获取网络类型
  const getNetworkTypeInfo = async () => {
    try {
      const res = await Taro.getNetworkType();
      setNetworkType(res.networkType);
    } catch (error) {
      console.error("获取网络类型失败：", error);
    }
  };

  // 获取本地IP地址
  const getLocalIPInfo = async () => {
    try {
      const res = await Taro.getLocalIPAddress();
      setLocalIP(res.localip);
    } catch (error) {
      console.error("获取本地IP地址失败：", error);
    }
  };

  // 开启网络状态监听
  const startNetworkListener = () => {
    Taro.onNetworkStatusChange(handleNetworkStatusChange);
    setIsListening(true);
  };

  // 关闭网络状态监听
  const stopNetworkListener = () => {
    Taro.offNetworkStatusChange(handleNetworkStatusChange);
    setIsListening(false);
  };

  // 组件挂载时获取初始网络信息
  useEffect(() => {
    getNetworkTypeInfo();
    getLocalIPInfo();
    return () => {
      // 组件卸载时清理监听器
      if (isListening) {
        stopNetworkListener();
      }
    };
  }, []);

  return (
    <View className="network-container">
      <View className="network-card">
        <Text className="card-title">网络状态信息</Text>
        <View className="info-item">
          <Text className="label">网络状态：</Text>
          <Text className="value">{isConnected ? "已连接" : "未连接"}</Text>
        </View>
        <View className="info-item">
          <Text className="label">网络类型：</Text>
          <Text className="value">{networkType || "未知"}</Text>
        </View>
        <View className="info-item">
          <Text className="label">本地IP：</Text>
          <Text className="value">{localIP || "未知"}</Text>
        </View>
      </View>

      <View className="control-panel">
        <Button
          className={`monitor-btn ${isListening ? "active" : ""}`}
          onClick={isListening ? stopNetworkListener : startNetworkListener}
        >
          {isListening ? "关闭网络监听" : "开启网络监听"}
        </Button>
      </View>
    </View>
  );
}
