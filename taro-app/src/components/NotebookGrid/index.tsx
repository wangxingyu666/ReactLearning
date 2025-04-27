import React from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'
import tip from '@/static/images/tip.png'
interface NotebookGridProps {
  data: Array<{
    name: string
    cover: string
  }>
}
const NotebookGrid: React.FC<NotebookGridProps> = ({ data }) => {
  return (
    <View className="notebook-grid">
      {data.map((item, index) => (
        <View
          key={index}
          className="notebook-item"
          style={{ backgroundImage: `url(${item.cover})`, backgroundSize: 'cover' }}
        >
          <Image src={tip} className="tip" />
          <Text className="notebook-title">{item.name}</Text>
        </View>
      ))}
    </View>
  )
}
export default NotebookGrid
