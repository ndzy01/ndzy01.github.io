import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Button, MenuProps } from "antd"
import { Menu } from "antd"

import React, { useState } from "react"
import { Outlet, useLoaderData, useNavigate } from "react-router-dom"

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

  return (
    <div className="container">
      {!collapsed ? (
        <aside
          className="sidebar"
          style={{ display: collapsed ? "none" : "block" }}
        >
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
          <Button
            style={{ marginTop: 16 }}
            icon={<MenuFoldOutlined />}
            onClick={() => setCollapsed(true)}
          />
        </aside>
      ) : (
        <Button
          style={{ margin: 8 }}
          icon={<MenuUnfoldOutlined />}
          onClick={() => setCollapsed(false)}
        />
      )}

      <main className="main-content">
        <section className="content" id="ndzy-content">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default Root
