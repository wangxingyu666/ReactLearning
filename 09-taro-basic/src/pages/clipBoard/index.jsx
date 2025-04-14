import React, { useState } from "react";
import { View, Text, Button, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const ClipBoard = () => {
  const [inputText, setInputText] = useState("");
  const [clipboardContent, setClipboardContent] = useState("");
  const [error, setError] = useState("");

  // 设置剪贴板内容
  const setClipboardData = async () => {
    if (!inputText.trim()) {
      setError("请输入要复制的内容");
      return;
    }

    try {
      await Taro.setClipboardData({
        data: inputText,
      });
      Taro.showToast({
        title: "复制成功",
        icon: "success",
        duration: 2000,
      });
      setError("");
    } catch (err) {
      setError("复制失败：" + err.errMsg);
    }
  };

  // 获取剪贴板内容
  const getClipboardData = async () => {
    try {
      const res = await Taro.getClipboardData();
      setClipboardContent(res.data);
      setError("");
    } catch (err) {
      setError("获取剪贴板内容失败：" + err.errMsg);
      setClipboardContent("");
    }
  };

  return (
    <View className="clipboard-page">
      <View className="input-section">
        <Input
          className="text-input"
          type="text"
          placeholder="请输入要复制的内容"
          value={inputText}
          onInput={(e) => setInputText(e.detail.value)}
        />
        <Button className="action-button" onClick={setClipboardData}>
          复制到剪贴板
        </Button>
      </View>

      <View className="display-section">
        <Button className="action-button" onClick={getClipboardData}>
          读取剪贴板内容
        </Button>
        {clipboardContent && (
          <View className="content-display">
            <Text className="label">剪贴板内容：</Text>
            <Text className="content">{clipboardContent}</Text>
          </View>
        )}
      </View>

      {error && (
        <View className="error-message">
          <Text>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default ClipBoard;
