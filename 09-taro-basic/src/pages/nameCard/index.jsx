import { View } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import { useState } from "react";
import CardDisplay from "../../components/CardDisplay";

const defaultCard = {
  name: "",
  position: "",
  company: "",
  contact: "",
  email: "",
};

export default function NameCard() {
  const [formData, setFormData] = useState(
    Taro.getStorageSync("businessCard") || defaultCard
  );

  const handleSubmit = () => {
    Taro.setStorageSync("businessCard", formData);
    Taro.showToast({ title: "保存成功", icon: "success" });
  };

  return (
    <View className="name-card">
      <AtForm>
        <AtInput
          name="name"
          title="姓名"
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
        />
        <AtInput
          name="position"
          title="职位"
          value={formData.position}
          onChange={(value) => setFormData({ ...formData, position: value })}
        />
        <AtInput
          name="company"
          title="公司"
          value={formData.company}
          onChange={(value) => setFormData({ ...formData, company: value })}
        />
        <AtInput
          name="contact"
          title="联系电话"
          value={formData.contact}
          onChange={(value) => setFormData({ ...formData, contact: value })}
        />
        <AtInput
          name="email"
          title="邮箱"
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
        />
        <AtButton type="primary" onClick={handleSubmit} className="save-btn">
          保存名片
        </AtButton>
      </AtForm>

      <View className="preview-section">
        <CardDisplay userInfo={formData} />
      </View>
    </View>
  );
}
