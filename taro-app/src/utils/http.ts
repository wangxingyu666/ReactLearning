import Taro from '@tarojs/taro'

const baseURL = process.env.TARO_APP_API_BASE_URL

type Data<T> = {
  code: number
  msg: string
  data: T
}

export const http = <T>(options: {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: any
  header?: any
}) => {
  return new Promise<Data<T>>((resolve, reject) => {
    Taro.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          if (res.data.code === 401) {
            // 获取当前页面路径
            const pages = Taro.getCurrentPages()
            const currentPage = pages[pages.length - 1]
            const currentPath = currentPage?.route

            // 如果不是首页，则跳转到登录页面并拒绝请求
            if (currentPath && !currentPath.includes('pages/index/index')) {
              Taro.showToast({
                icon: 'error',
                title: res.data.msg || '请求错误',
              })
              Taro.navigateTo({ url: '/pages/login/index' })
              reject(res)
            } else {
              // 首页请求，即使未登录也返回数据
              resolve(res.data as Data<T>)
            }
          } else if (res.data.code === 0) {
            resolve(res.data as Data<T>)
          } else {
            Taro.showToast({
              icon: 'error',
              title: res.data.msg || '请求错误',
            })
          }
        } else {
          Taro.showToast({
            icon: 'error',
            title: res.data.msg || '请求错误',
          })
          reject(res)
        }
      },
      fail(err) {
        Taro.showToast({
          icon: 'none',
          title: '网络错误',
        })
        reject(err)
      },
    })
  })
}

const httpInterceptor = function (chain) {
  const requestParams = chain.requestParams
  const { url } = requestParams

  if (!url.startsWith('http')) {
    requestParams.url = baseURL + url
  }

  requestParams.header = {
    ...requestParams.header,
  }

  const token = Taro.getStorageSync('token') || 'no-token'
  if (token) {
    requestParams.header.Authorization = token
  }
  return chain.proceed(requestParams).then(res => {
    return res
  })
}

Taro.addInterceptor(httpInterceptor)
