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
          title="音乐盒子"
          arrow="right"
          onClick={() => handleNavigate("/pages/musicBox/index")}
        />
        <AtListItem
          title="记账本"
          arrow="right"
          onClick={() => handleNavigate("/pages/countBook/index")}
        />
        <AtListItem
          title="个人名片"
          arrow="right"
          onClick={() => handleNavigate("/pages/nameCard/index")}
        />
      </AtList>
    </View>
  );
}
