import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Button, MenuProps } from "antd"
import { Menu } from "antd"

import { useState } from "react"
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
  { key: "/music", label: "网易云音乐" },
  { key: "/ndzy-music", label: "音乐" },
]

const Root = () => {
  const data: any = useLoaderData()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const { ndzyMusic, setNdzyMusic } = useStore()

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
          <Outlet />
        </section>
        {ndzyMusic?.song && ndzyMusic?.song?.url && (
          <ReactPlayer
            playing
            height={100}
            width={220}
            style={{
              zIndex: 9999,
              position: "fixed",
              top: 16,
              right: 16,
            }}
            url={ndzyMusic.song.url}
            playsinline
            controls
            onEnded={() => {
              if (ndzyMusic.type === "1") {
                setNdzyMusic({
                  currentIndex: Math.floor(
                    Math.random() * ndzyMusic.songs.length
                  ),
                })
              }

              if (ndzyMusic.type === "0") {
                if (ndzyMusic.currentIndex === ndzyMusic.songs.length - 1) {
                  setNdzyMusic({ currentIndex: 0 })
                } else {
                  setNdzyMusic({ currentIndex: ndzyMusic.currentIndex + 1 })
                }
              }
            }}
          />
        )}
      </main>
    </div>
  )
}

export default Root
