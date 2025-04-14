import {
  View,
  ScrollView,
  Swiper,
  SwiperItem,
  CoverView,
  Image,
  MovableArea,
  MovableView,
} from "@tarojs/components";
import { useState } from "react";
import Taro from "@tarojs/taro";
import "./index.scss";

const Container = () => {
  // 准备Swiper展示的图片数据
  const swiperImages = [
    "https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/1.jpg",
    "https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/2.jpg",
    "https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/3.jpg",
  ];

  // 准备ScrollView展示的列表数据
  const [listItems, setListItems] = useState(
    Array.from({ length: 20 }, (_, i) => `列表项 ${i + 1}`)
  );

  // 下拉刷新状态
  const [refreshing, setRefreshing] = useState(false);
  // 加载更多状态
  const [loading, setLoading] = useState(false);

  return (
    <View className="container">
      {/* ScrollView组件示例：可滚动视图容器 */}
      <View className="section">
        <View className="section-title">
          ScrollView示例（下拉刷新/上拉加载）
        </View>
        <ScrollView
          className="scroll-view"
          scrollY // 允许垂直滚动
          scrollWithAnimation // 使用动画效果
          refresherEnabled // 开启下拉刷新
          refresherTriggered={refreshing} // 控制下拉刷新状态
          refresherBackground="#f5f5f5" // 下拉刷新背景色
          onRefresherRefresh={() => {
            // 下拉刷新触发
            setRefreshing(true);
            // 模拟刷新数据
            setTimeout(() => {
              // 更新数据（这里模拟刷新，实际应用中应该调用API获取新数据）
              setListItems(
                Array.from({ length: 20 }, (_, i) => `刷新后的列表项 ${i + 1}`)
              );
              setRefreshing(false);
              Taro.showToast({
                title: "刷新成功",
                icon: "success",
                duration: 2000,
              });
            }, 1500);
          }}
          onScrollToLower={() => {
            // 滚动到底部触发加载更多
            if (loading) return; // 防止重复加载
            setLoading(true);
            // 模拟加载更多数据
            setTimeout(() => {
              // 追加数据（这里模拟加载更多，实际应用中应该调用API获取更多数据）
              const newItems = Array.from(
                { length: 5 },
                (_, i) => `加载的新列表项 ${listItems.length + i + 1}`
              );
              setListItems([...listItems, ...newItems]);
              setLoading(false);
            }, 1000);
          }}
        >
          {listItems.map((item, index) => (
            <View key={index} className="scroll-item">
              {item}
            </View>
          ))}
          {loading && (
            <View className="loading-indicator">正在加载更多...</View>
          )}
        </ScrollView>
      </View>

      {/* Swiper组件示例：轮播图容器 */}
      <View className="section">
        <View className="section-title">Swiper示例</View>
        <Swiper
          className="swiper"
          indicatorDots // 显示面板指示点
          autoplay // 自动播放
          interval={3000} // 自动播放间隔时间（毫秒）
          circular // 循环播放
        >
          {swiperImages.map((image, index) => (
            <SwiperItem key={index}>
              <Image className="swiper-image" src={image} mode="aspectFill" />
            </SwiperItem>
          ))}
        </Swiper>
      </View>

      {/* CoverView组件示例：可覆盖在原生组件上的文本视图 */}
      <View className="section">
        <View className="section-title">CoverView示例</View>
        <View className="cover-container">
          <Image
            className="background-image"
            src="https://mqxu-oss.oss-cn-hangzhou.aliyuncs.com/banner/1.jpg"
            mode="aspectFill"
          />
          <CoverView className="cover-view">
            <CoverView className="cover-text">这是一个CoverView示例</CoverView>
            <CoverView className="cover-description">
              CoverView可以覆盖在原生组件上
            </CoverView>
          </CoverView>
        </View>
      </View>
      {/* MovableArea和MovableView组件示例：可移动的视图容器 */}
      <View className="section">
        <View className="section-title">MovableView示例</View>
        <MovableArea className="movable-area">
          <MovableView
            className="movable-view"
            direction="all"
            onChange={(e) => {
              console.log("位置变化：", e.detail);
            }}
          >
            <View className="movable-content">拖动我</View>
          </MovableView>
        </MovableArea>
      </View>
    </View>
  );
};

export default Container;
