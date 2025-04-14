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
      </AtList>
    </View>
  );
}
