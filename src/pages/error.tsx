import React from "react"
import { useRouteError } from "react-router-dom"

const ErrorPage: React.FC = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div>
      <h1>出错了！</h1>
      <p>抱歉，页面不存在或您没有访问权限。</p>
      <a href={"/"}>返回首页</a>
    </div>
  )
}

export default ErrorPage
