import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro, { useDidShow, useDidHide } from "@tarojs/taro";
import { useState, useEffect, useRef } from "react";
import "./index.scss";

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60) || 0;
  const secs = Math.floor(seconds % 60) || 0;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
};

const MusicBox = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audio = useRef(Taro.createInnerAudioContext());

  useEffect(() => {
    audio.current.src =
      "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/music/%E8%B5%B5%E9%9B%B7%20-%20%E9%BC%93%E6%A5%BC.ogg";
    audio.current.autoplay = false;
    audio.current.onCanplay(() => {
      setDuration(audio.current.duration);
    });

    audio.current.onPlay(() => {
      setIsPlaying(true);
    });

    audio.current.onPause(() => {
      setIsPlaying(false);
    });

    audio.current.onTimeUpdate(() => {
      setCurrentTime(audio.current.currentTime);
      setDuration(audio.current.duration);
    });

    return () => {
      audio.current.destroy();
    };
  }, []);

  const handlePlay = () => {
    if (!isPlaying) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  };

  const handleStop = () => {
    audio.current.stop();
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <View className="music-box">
      <Text className="title">鼓楼 - 赵雷</Text>

      <View className="time-display">
        <Text>{formatTime(currentTime)}</Text>
        <Text>/</Text>
        <Text>{formatTime(duration)}</Text>
      </View>

      <View className="controls">
        <AtButton type="primary" onClick={handlePlay} className="control-btn">
          {isPlaying ? "暂停" : "播放"}
        </AtButton>

        <AtButton type="secondary" onClick={handleStop} className="control-btn">
          停止
        </AtButton>
      </View>
    </View>
  );
};

export default MusicBox;
