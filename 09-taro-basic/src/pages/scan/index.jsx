import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import { useState } from "react";

import "./index.scss";

export default function Scan() {
  const [scanResult, setScanResult] = useState("");

  const handleScan = () => {
    Taro.scanCode({
      success: (res) => {
        setScanResult(res.result);
        Taro.showToast({ title: "扫码成功", icon: "success" });
      },
      fail: (err) => {
        Taro.showToast({ title: "扫码失败", icon: "error" });
        console.error("扫码错误：", err);
      },
    });
  };

  return (
    <View className="scan-page">
      <AtButton type="primary" onClick={handleScan} className="scan-btn">
        开始扫码
      </AtButton>
      {scanResult && (
        <View className="result-section">
          <View className="result-title">扫码结果：</View>
          <View className="result-content">{scanResult}</View>
        </View>
      )}
    </View>
  );
}
