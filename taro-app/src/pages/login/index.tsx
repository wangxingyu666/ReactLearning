import { useState, useEffect } from 'react'
import { View, Text, Input, Button } from '@tarojs/components'
import { sendCode, mobileLogin, getUserInfo } from '@/service/user'
import { isPhoneAvailable, isCodeAvailable } from '@/utils/validate'
import Taro from '@tarojs/taro'
import { setUserInfo } from '@/store/user'
import './index.scss'
import { useAppDispatch } from '@/store'

const Login = () => {
  const [count, setCount] = useState(60)
  const [timer, setTimer] = useState(false)
  const [form, setForm] = useState<MobileLoginDTO>({
    mobile: '18115116156',
    code: '',
  })

  useEffect(() => {
    let interval
    if (timer) {
      interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount === 1) {
            clearInterval(interval)
            setTimer(false)
            return 60
          }
          return prevCount - 1
        })
      }, 1000)
    }
  }, [timer])

  const sendMobileCode = async () => {
    if (form.mobile && isPhoneAvailable(form.mobile)) {
      setTimer(true)
      const res = await sendCode(form.mobile)
      if (res.code === 0) {
        Taro.showToast({
          title: '验证码发送成功',
          icon: 'success',
        })
      } else {
        Taro.showToast({
          title: '验证码发送失败',
          icon: 'error',
        })
      }
    } else {
      Taro.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
      })
    }
  }

  const dispatch = useAppDispatch()

  const getLoginUserInfo = async () => {
    const res = await getUserInfo()
    if (res.code === 0) {
      dispatch(setUserInfo(res.data))
      console.log(res.data)
      Taro.setStorageSync('user', res.data)
    } else {
      Taro.showToast({
        title: res.msg,
        icon: 'none',
      })
    }
  }

  const handleLoginClick = async () => {
    if (!form.mobile || !isPhoneAvailable(form.mobile)) {
      Taro.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
      })
      return
    }
    if (!form.code || !isCodeAvailable(form.code)) {
      Taro.showToast({
        title: '请输入正确的验证码',
        icon: 'none',
      })
      return
    }
    const res = await mobileLogin(form)
    if (res.code === 0) {
      Taro.setStorageSync('token', res.data.accessToken)
      getLoginUserInfo()
      Taro.showModal({
        title: '登录成功',
        success: () => {
          Taro.switchTab({
            url: '/pages/index/index',
          })
        },
      })
    } else {
      Taro.showToast({
        title: res.msg,
        icon: 'none',
      })
      return
    }
  }

  const handleInputCode = e => {
    setForm({ ...form, code: e.detail.value })
  }

  const handleInputPhone = e => {
    setForm({ ...form, mobile: e.detail.value })
  }

  return (
    <View className="loginPage">
      <View className="top">
        <View className="title">验证码登录</View>
        <View className="info">未注册的手机号验证后自动完成注册</View>
      </View>
      <View className="form">
        <Input
          className="input"
          type="text"
          placeholder="请输入手机号"
          value={form.mobile}
          onInput={e => handleInputPhone(e)}
        />
        <View className="code">
          <Input
            className="password"
            type="text"
            password
            placeholder="请输入验证码"
            value={form.code}
            onInput={e => handleInputCode(e)}
          />
          {!timer ? (
            <Text className="btn" onClick={sendMobileCode} hidden={timer}>
              获取验证码
            </Text>
          ) : (
            <Text className="btn" hidden={!timer}>
              {count}秒后重发
            </Text>
          )}
        </View>
        <Button className="button" onClick={handleLoginClick}>
          登录
        </Button>
        <View className="extra">
          <View className="caption">
            <Text>其他登录方式</Text>
          </View>
          <View className="options">
            <Text className="icon icon-weixin">微信一键登录</Text>
          </View>
        </View>
        <View className="tips">登录/注册即视为同意《服务条款》和《隐私协议》</View>
      </View>
    </View>
  )
}

export default Login
