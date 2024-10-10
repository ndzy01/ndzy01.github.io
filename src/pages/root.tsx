import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Button, Image, MenuProps, Space } from "antd"
import { Menu } from "antd"

import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { Outlet, useLoaderData, useNavigate } from "react-router-dom"

import { useStore } from "../store"

export async function loginLoader() {
  return { name: sessionStorage.getItem("name") }
}

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  { key: "/", label: "首页" },
  // {
  //   type: "divider",
  // },
  // {
  //   key: "01",
  //   label: "文章",
  //   children: [
  //     { key: "/article", label: "首页" },
  //     { key: "/article/add", label: "新增文章" },
  //   ],
  // },
  { key: "/article", label: "文章" },
]

const Root = () => {
  const data: any = useLoaderData()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const store = useStore()

  useEffect(() => {
    store.api.music.query()
  }, [])

  return (
    <div className="container">
      {!collapsed ? (
        <aside
          className="sidebar"
          style={{ display: collapsed ? "none" : "block" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Button
              icon={<MenuFoldOutlined />}
              onClick={() => setCollapsed(true)}
            />
          </div>

          <header className="header">
            <h1>欢迎 {data?.name || ""}</h1>
            <div className="user-info">
              <a
                onClick={() => {
                  sessionStorage.setItem("token", "")
                  sessionStorage.setItem("name", "")
                  navigate("/login")
                  window.location.reload()
                }}
              >
                注销
              </a>
            </div>
          </header>
          <Menu
            style={{ borderRadius: 5 }}
            onClick={(e) => {
              navigate(e.key)
            }}
            defaultSelectedKeys={["/"]}
            mode="inline"
            items={items}
          />
        </aside>
      ) : (
        <Button
          style={{ position: "fixed", left: 16, top: 16 }}
          icon={<MenuUnfoldOutlined />}
          onClick={() => setCollapsed(false)}
        />
      )}

      <main className="main-content" style={{ overflow: "auto" }}>
        <section className="content" id="ndzy-content">
          <Space direction="vertical">
            {store.songs.map((item) => (
              <>
                <Image src={item.img} style={{ width: 200 }} />
                <Button
                  type="link"
                  onClick={() => {
                    store.api.music.url(item.id)
                  }}
                >
                  {item.name}
                </Button>
              </>
            ))}
          </Space>

          {store.songUrl && (
            <ReactPlayer
              style={{
                position: "fixed",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
              }}
              playing
              height={60}
              url={store.songUrl}
              controls
            />
          )}
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default Root
