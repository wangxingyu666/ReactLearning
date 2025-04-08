import { View } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";

import "./index.scss";

export default function CountBook() {
  const [records, setRecords] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("餐饮");

  useEffect(() => {
    const saved = Taro.getStorageSync("expenses");
    if (saved) setRecords(saved);
  }, []);

  const handleSubmit = () => {
    if (!amount || isNaN(amount)) {
      Taro.showToast({ title: "请输入有效金额", icon: "none" });
      return;
    }

    const newRecord = {
      id: Date.now(),
      amount: parseFloat(amount),
      category,
      date: new Date().toLocaleDateString(),
    };

    const updated = [...records, newRecord];
    Taro.setStorageSync("expenses", updated);
    setRecords(updated);
    setAmount("");
  };

  return (
    <View className="count-book">
      <AtForm>
        <AtInput
          name="amount"
          title="金额"
          type="digit"
          value={amount}
          onChange={(value) => setAmount(value)}
        />
        <AtInput
          name="category"
          title="分类"
          type="text"
          value={category}
          onChange={(value) => setCategory(value)}
        />
        <AtButton type="primary" onClick={handleSubmit} className="submit-btn">
          添加记录
        </AtButton>
      </AtForm>

      <AtList>
        {records.map((record) => (
          <AtListItem
            key={record.id}
            title={`¥${record.amount.toFixed(2)}`}
            note={`${record.category} · ${record.date}`}
            extraText="删除"
            onClick={() => {
              const filtered = records.filter((r) => r.id !== record.id);
              Taro.setStorageSync("expenses", filtered);
              setRecords(filtered);
            }}
          />
        ))}
      </AtList>
    </View>
  );
}
