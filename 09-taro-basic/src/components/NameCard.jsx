import { View, Image } from "@tarojs/components";

const NameCard = ({ cardInfo }) => {
  return (
    <View>
      <View>
        <Image
          src="https://guke-bucket.oss-cn-nanjing.aliyuncs.com/images/yz.jpg"
          style={{ width: "100px", height: "100px", borderRadius: "100px" }}
        />
      </View>
      <View>
        <View>{cardInfo.name}</View>
        <View>{cardInfo.phone}</View>
      </View>
    </View>
  );
};

export default NameCard;
