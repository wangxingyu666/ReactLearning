import { Carousel } from "antd";

const MainBanner = () => {
  return (
    <Carousel autoplay>
      <div>
        <img
          src="https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/fengjin1.jpg"
          alt="banner1"
          style={{ width: "100%", height: 400 }}
        />
      </div>
      <div>
        <img
          src="https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/fenjin2.jpg"
          alt="banner2"
          style={{ width: "100%", height: 400 }}
        />
      </div>
      <div>
        <img
          src="https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/fenjin3.jpg"
          alt="banner3"
          style={{ width: "100%", height: 400 }}
        />
      </div>
    </Carousel>
  );
};

export default MainBanner;
