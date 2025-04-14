import { useState } from "react";
import { View, WebView, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const OpenAbility = () => {
  const [loading, setLoading] = useState(false);
  const [webViewRef, setWebViewRef] = useState(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  // 处理WebView加载开始
  const handleLoad = () => {
    setLoading(true);
    Taro.showLoading({ title: "加载中..." });
  };

  // 处理WebView加载完成
  const handleLoaded = () => {
    setLoading(false);
    Taro.hideLoading();
  };

  // 处理WebView加载错误
  const handleError = () => {
    setLoading(false);
    Taro.hideLoading();
    Taro.showToast({
      title: "页面加载失败",
      icon: "none",
      duration: 2000,
    });
  };

  // 处理网页状态变化
  const handleStateChange = (e) => {
    const { canGoBack, canGoForward } = e.detail;
    setCanGoBack(canGoBack);
    setCanGoForward(canGoForward);
  };

  // 后退操作
  const goBack = () => {
    if (webViewRef && canGoBack) {
      webViewRef.goBack();
    }
  };

  // 前进操作
  const goForward = () => {
    if (webViewRef && canGoForward) {
      webViewRef.goForward();
    }
  };

  // 刷新操作
  const refresh = () => {
    if (webViewRef) {
      webViewRef.reload();
    }
  };

  return (
    <View className="webview-page">
      <WebView
        src="https://taro.zone"
        onLoad={handleLoad}
        onLoaded={handleLoaded}
        onError={handleError}
        onStateChange={handleStateChange}
        ref={(ref) => setWebViewRef(ref)}
      />

      <View className="navigation-bar">
        <Button className="nav-btn" disabled={!canGoBack} onClick={goBack}>
          返回
        </Button>
        <Button
          className="nav-btn"
          disabled={!canGoForward}
          onClick={goForward}
        >
          前进
        </Button>
        <Button className="nav-btn" onClick={refresh}>
          刷新
        </Button>
      </View>
    </View>
  );
};

export default OpenAbility;
