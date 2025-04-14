import { View, Text, Image } from "@tarojs/components";
import { GridView, ListView } from "@tarojs/components";
import "./index.scss";
import {
  TapGestureHandler,
  HorizontalDragGestureHandler,
  StickyHeader,
} from "@tarojs/components";

const SkylinePage = () => {
  // GridView 数据
  const gridData = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `项目 ${i + 1}`,
    color: `hsl(${(i * 20) % 360}, 70%, 70%)`,
  }));

  // ListView 数据
  const listData = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    title: `列表项 ${i + 1}`,
    desc: `这是第 ${i + 1} 个列表项的描述信息`,
  }));

  // 媒体数据
  const mediaData = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    title: `媒体 ${i + 1}`,
    imageUrl: `https://picsum.photos/300/200?random=${i}`,
  }));

  return (
    <View className="skyline-page">
      {/* GridView 示例 */}
      <View className="section">
        <Text className="section-title">GridView 组件</Text>
        <GridView
          className="grid-view"
          crossAxisCount={4}
          crossAxisGap={20}
          mainAxisGap={20}
        >
          {gridData.map((item) => (
            <View key={item.id}>
              <TapGestureHandler
                onTapped={() => console.log("点击项目", item.id)}
              >
                <View
                  className="grid-item"
                  style={{ backgroundColor: item.color }}
                >
                  <Text className="grid-item-text">{item.title}</Text>
                </View>
              </TapGestureHandler>
            </View>
          ))}
        </GridView>
      </View>

      {/* ListView 示例 */}
      <View className="section">
        <Text className="section-title">ListView 组件</Text>
        <StickyHeader className="sticky-header">
          <Text className="header-text">吸顶导航栏</Text>
        </StickyHeader>
        <View className="list-container">
          <ListView className="list-view" scrollY height={300}>
            {listData.map((item) => (
              <HorizontalDragGestureHandler
                key={item.id}
                onDragStart={() => console.log("开始滑动")}
                onDragEnd={() => console.log("结束滑动")}
              >
                <View className="list-item">
                  <Text className="list-item-title">{item.title}</Text>
                  <Text className="list-item-desc">{item.desc}</Text>
                </View>
              </HorizontalDragGestureHandler>
            ))}
          </ListView>
        </View>
      </View>

      {/* 媒体展示区域 */}
      <View className="section media-section">
        <Text className="section-title">媒体组件</Text>
        <View className="media-container">
          {mediaData.map((item) => (
            <TapGestureHandler
              key={item.id}
              onTapped={() => console.log("点击媒体", item.id)}
            >
              <View className="media-item">
                <Image
                  className="media-image"
                  src={item.imageUrl}
                  mode="aspectFill"
                />
                <Text className="media-title">{item.title}</Text>
              </View>
            </TapGestureHandler>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SkylinePage;
