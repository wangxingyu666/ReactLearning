import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";

export default function Discover() {
  const handleNavigate = (url) => {
    Taro.navigateTo({ url });
  };

  return (
    <View className="discover-page">
      <AtList>
        <AtListItem
          title="联系人"
          arrow="right"
          onClick={() => handleNavigate("/pages/contact/index")}
        />
        <AtListItem
          title="设备"
          arrow="right"
          onClick={() => handleNavigate("/pages/device/index")}
        />
        <AtListItem
          title="蓝牙"
          arrow="right"
          onClick={() => handleNavigate("/pages/blueTooth/index")}
        />
        <AtListItem
          title="剪切板"
          arrow="right"
          onClick={() => handleNavigate("/pages/clipBoard/index")}
        />
        <AtListItem
          title="扫码"
          arrow="right"
          onClick={() => handleNavigate("/pages/scan/index")}
        />
        <AtListItem
          title="截屏监听"
          arrow="right"
          onClick={() => handleNavigate("/pages/screen/index")}
        />
        <AtListItem
          title="网路"
          arrow="right"
          onClick={() => handleNavigate("/pages/netWork/index")}
        />
        <AtListItem
          title="wifi"
          arrow="right"
          onClick={() => handleNavigate("/pages/wifi/index")}
        />
      </AtList>
    </View>
  );
}
