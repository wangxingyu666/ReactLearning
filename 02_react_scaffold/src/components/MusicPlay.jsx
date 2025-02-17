import React, { useState } from "react";

const ImageRotator = () => {
  // 控制飞行和旋转状态
  const [isFlying, setIsFlying] = useState(false);

  // 处理点击按钮时的飞行与旋转开关
  const toggleFly = () => {
    setIsFlying(!isFlying);
  };

  return (
    <div
      style={{
        position: "relative", // 为了让图片可以绝对定位
        height: "100vh", // 让容器高度充满整个页面
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px", // 初始位置在右上角
          right: "20px",
          width: "100px",
          height: "100px",
          transform: isFlying ? "rotate(360deg)" : "rotate(0deg)", // 旋转效果
          transition: "transform 2s ease-in-out", // 旋转的平滑过渡
          animation: isFlying
            ? "flyToBottomLeft 4s forwards" // 飞向左下角的动画
            : "none", // 动画触发
        }}
      >
        <img
          src="https://1840165925wu.oss-cn-nanjing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250217155756.png"
          alt="旋转图片"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%", // 保持圆形
          }}
        />
      </div>

      <button
        onClick={toggleFly}
        style={{
          padding: "10px 20px",
          fontSize: "1.2em",
          cursor: "pointer",
          backgroundColor: isFlying ? "red" : "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          position: "absolute",
          bottom: "20px", // 按钮位置设置在页面底部
          left: "50%",
          transform: "translateX(-50%)", // 按钮水平居中
        }}
      >
        {isFlying ? "停止起飞" : "开始起飞"}
      </button>

      {/* 添加飞行的动画 */}
      <style>
        {`
          @keyframes flyToBottomLeft {
            0% {
              top: 20px;
              right: 20px;
            }
            100% {
              top: 90%;
              left: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ImageRotator;
