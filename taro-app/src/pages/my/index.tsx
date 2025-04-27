import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton, AtCard } from 'taro-ui'
import { useAppSelector } from '@/store'
import Nav from './components/Nav'
import './index.scss'
export default function My() {
  const userInfo = useAppSelector(state => state.user.userInfo)
  const handleClickLogin = () => {
    Taro.redirectTo({
      url: '/pages/login/index',
    })
  }
  return (
    <>
      <Nav />
      <View className="my">
        {userInfo.id > 0 ? (
          <View>
            <AtCard title={userInfo.nickname}>
              <Image src={userInfo.avatar} className="avatar" />
            </AtCard>
          </View>
        ) : null}
        {userInfo.id > 0 ? null : (
          <AtButton onClick={handleClickLogin} type="primary">
            前往登录
          </AtButton>
        )}
      </View>
    </>
  )
}
