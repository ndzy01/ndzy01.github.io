import { Button, ConfigProvider, Drawer, Form, Image, Input, Space } from "antd"
import zhCN from "antd/locale/zh_CN"

import { useEffect, useState } from "react"
import ReactPlayer from "react-player"

import { useStore } from "../store"

const Music = () => {
  const [open, setOpen] = useState(false)
  const store = useStore()

  useEffect(() => {
    store.api.music.cloud()
  }, [])

  return (
    <>
      <Space>
        <Button
          style={{ marginBottom: 16 }}
          onClick={() => {
            store.api.music.cloud()
          }}
        >
          云盘
        </Button>

        <Button
          style={{ marginBottom: 16 }}
          onClick={() => {
            store.api.music.query()
          }}
        >
          喜欢
        </Button>

        <Button
          style={{ marginBottom: 16 }}
          onClick={() => {
            setOpen(true)
          }}
        >
          登录
        </Button>
      </Space>

      <div style={{ paddingBottom: 100 }}>
        <Space wrap size={32}>
          {store.songs.map((item) => (
            <div style={{ width: 200 }}>
              <Image src={item.img} style={{ width: 120, height: 160 }} />
              <Button
                type="link"
                onClick={() => {
                  store.api.music.url(item.id)
                }}
              >
                {item.name}
              </Button>
            </div>
          ))}
        </Space>

        {store.songUrl && (
          <ReactPlayer
            style={{
              position: "fixed",
              bottom: 32,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            playing
            height={60}
            url={store.songUrl}
            controls
            onEnded={() => {
              const randomIndex = Math.floor(Math.random() * store.songs.length)
              store.api.music.url(store.songs[randomIndex].id)
            }}
          />
        )}
      </div>

      <Drawer
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      >
        <ConfigProvider locale={zhCN}>
          <Form
            name="login"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={(values) => {
              store.api.music.login(values).then(() => {
                setOpen(false)
              })
            }}
            autoComplete="off"
          >
            <Form.Item<any>
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              label="手机号"
              name="phone"
              rules={[{ required: true, message: "手机号不能为空" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<any>
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
      </Drawer>
    </>
  )
}

export default Music
