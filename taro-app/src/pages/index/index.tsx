import { View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { getCategories } from '@/service/category'
import { AtList, AtListItem, AtTag } from 'taro-ui'
import NotebookGrid from '@/components/NotebookGrid'
const Index: React.FC = () => {
  const [categoryList, setCategoryList] = useState<CategoryVO[]>([])
  const getCategoriesData = async () => {
    const res = await getCategories()
    if (res.code === 0) {
      setCategoryList(res.data)
    }
  }
  useEffect(() => {
    getCategoriesData()
  }, [])
  return (
    <>
      <View className="index">
        <NotebookGrid data={categoryList} />
      </View>
    </>
  )
}
export default Index
