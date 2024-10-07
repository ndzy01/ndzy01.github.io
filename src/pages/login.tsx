import { Button, ConfigProvider, Form, type FormProps, Input } from "antd"
import zhCN from "antd/locale/zh_CN"

import * as React from "react"
import { useNavigate } from "react-router-dom"

import { useStore } from "../store"

const Login = () => {
  const navigate = useNavigate()
  const store = useStore()

  type FieldType = {
    mobile?: string
    password?: string
  }

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    store.api.login.login(values).then(() => {
      navigate("/")
      window.location.reload()
    })
  }

  return (
    <ConfigProvider locale={zhCN}>
      <Form
        name="login"
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="手机号"
          name="mobile"
          rules={[{ required: true, message: "手机号不能为空" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          label="密码"
          name="password"
          rules={[{ required: true, message: "密码不能为空" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={store.loading}>
            登陆
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  )
}

export default Login
