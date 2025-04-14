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
          title="容器"
          arrow="right"
          onClick={() => handleNavigate("/pages/container/index")}
        />
        <AtListItem
          title="基础内容"
          arrow="right"
          onClick={() => handleNavigate("/pages/basic/index")}
        />
        <AtListItem
          title="表单组件"
          arrow="right"
          onClick={() => handleNavigate("/pages/form/index")}
        />
        <AtListItem
          title="skyline"
          arrow="right"
          onClick={() => handleNavigate("/pages/skyline/index")}
        />
        <AtListItem
          title="媒体组件"
          arrow="right"
          onClick={() => handleNavigate("/pages/media/index")}
        />
        <AtListItem
          title="地图"
          arrow="right"
          onClick={() => handleNavigate("/pages/map/index")}
        />
        <AtListItem
          title="定位"
          arrow="right"
          onClick={() => handleNavigate("/pages/location/index")}
        />
      </AtList>
    </View>
  );
}
