import {
  CloseCircleOutlined,
  LeftCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlayCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons"
import { Button, MenuProps, Radio, Select, Space } from "antd"
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
  const [playing, setPlaying] = useState(false)
  const [show, setShow] = useState(false)

  const handleReady = () => {
    setPlaying(true)
  }

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

        {show ? (
          <CloseCircleOutlined
            style={{
              zIndex: 999,
              position: "fixed",
              top: 32,
              right: 32,
              padding: 16,
            }}
            onClick={() => setShow(false)}
          />
        ) : (
          <PlayCircleOutlined
            style={{
              zIndex: 999,
              position: "fixed",
              top: 32,
              right: 32,
              padding: 16,
            }}
            onClick={() => setShow(true)}
          />
        )}

        <div
          style={{
            position: "fixed",
            top: 32,
            right: 32,
          }}
        >
          <div
            style={{
              visibility: !show ? "hidden" : "visible",
              background: "#f7f7f7",
              boxShadow: "0 2px 5px 1px rgba(64, 60, 67, .16);",
              padding: 16,
            }}
          >
            {ndzyMusic?.song?.url && (
              <ReactPlayer
                playing={playing}
                height={100}
                width={300}
                url={ndzyMusic.song.url}
                playsinline
                controls
                onReady={handleReady}
                onEnded={() => {
                  setPlaying(false)

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
                      setNdzyMusic({
                        currentIndex: ndzyMusic.currentIndex + 1,
                      })
                    }
                  }
                }}
              />
            )}

            <Space direction={"vertical"} size={16} style={{ marginTop: 16 }}>
              {ndzyMusic.song && (
                <div>
                  正在播放：
                  <span style={{ color: "pink" }}>{ndzyMusic.song.name}</span>
                </div>
              )}

              <Space>
                <Radio.Group
                  value={ndzyMusic.type}
                  onChange={(e) => setNdzyMusic({ type: e.target.value })}
                >
                  <Radio.Button value="0">顺序</Radio.Button>
                  <Radio.Button value="1">随机</Radio.Button>
                </Radio.Group>

                <LeftCircleOutlined
                  style={{ width: 32, height: 32 }}
                  onClick={() => {
                    if (ndzyMusic.currentIndex > 1) {
                      setNdzyMusic({
                        currentIndex: ndzyMusic.currentIndex - 1,
                      })
                    } else {
                      setNdzyMusic({
                        currentIndex: ndzyMusic.songs.length - 1,
                      })
                    }
                  }}
                />

                <RightCircleOutlined
                  style={{ width: 32, height: 32 }}
                  onClick={() => {
                    if (ndzyMusic.currentIndex < ndzyMusic.songs.length - 1) {
                      setNdzyMusic({
                        currentIndex: ndzyMusic.currentIndex + 1,
                      })
                    } else {
                      setNdzyMusic({ currentIndex: 0 })
                    }
                  }}
                />
              </Space>

              {ndzyMusic.songs.length > 0 && (
                <Select
                  showSearch
                  optionFilterProp="label"
                  style={{ width: 180 }}
                  value={ndzyMusic.songs[ndzyMusic.currentIndex]?.id}
                  onChange={(v) =>
                    setNdzyMusic({
                      currentIndex: ndzyMusic.songs.findIndex(
                        (s) => s.id === v
                      ),
                    })
                  }
                  options={ndzyMusic.songs.map((item) => ({
                    value: item.id,
                    label: item.name,
                  }))}
                />
              )}
            </Space>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Root
