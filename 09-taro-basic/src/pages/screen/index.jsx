import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";

export default function Screen() {
  const [isListening, setIsListening] = useState(false);

  // 截屏事件回调函数
  const handleUserCaptureScreen = () => {
    Taro.showToast({
      title: "检测到截屏操作",
      icon: "none",
      duration: 2000,
    });
  };

  // 开启截屏监听
  const startScreenCapture = () => {
    try {
      Taro.onUserCaptureScreen(handleUserCaptureScreen);
      setIsListening(true);
      Taro.showToast({
        title: "截屏监听已开启",
        icon: "success",
        duration: 2000,
      });
    } catch (error) {
      Taro.showToast({
        title: "开启监听失败",
        icon: "error",
        duration: 2000,
      });
    }
  };

  // 关闭截屏监听
  const stopScreenCapture = () => {
    try {
      Taro.offUserCaptureScreen(handleUserCaptureScreen);
      setIsListening(false);
      Taro.showToast({
        title: "截屏监听已关闭",
        icon: "success",
        duration: 2000,
      });
    } catch (error) {
      Taro.showToast({
        title: "关闭监听失败",
        icon: "error",
        duration: 2000,
      });
    }
  };

  // 组件卸载时清理监听器
  useEffect(() => {
    return () => {
      if (isListening) {
        Taro.offUserCaptureScreen(handleUserCaptureScreen);
      }
    };
  }, [isListening]);

  return (
    <View className="screen-page">
      <View className="screen-content">
        <View className="status-text">
          当前状态: {isListening ? "监听中" : "未监听"}
        </View>
        <AtButton
          type={isListening ? "secondary" : "primary"}
          onClick={isListening ? stopScreenCapture : startScreenCapture}
        >
          {isListening ? "停止监听" : "开始监听"}
        </AtButton>
      </View>
    </View>
  );
}
