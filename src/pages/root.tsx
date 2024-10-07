import type { MenuProps } from "antd"
import { Menu } from "antd"

import { Outlet, useLoaderData, useNavigate } from "react-router-dom"

export async function loginLoader() {
  return { name: sessionStorage.getItem("name") }
}

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  { key: "/", label: "首页" },
  {
    type: "divider",
  },
  {
    key: "01",
    label: "文章",
    children: [{ key: "/article", label: "首页" }],
  },
]

const Root = () => {
  const data: any = useLoaderData()
  const navigate = useNavigate()

  return (
    <div className="container">
      <aside className="sidebar">
        <header className="header">
          <h1>欢迎 {data?.name}</h1>
          <div className="user-info">
            <a
              href="/login"
              onClick={() => {
                sessionStorage.setItem("token", "")
                sessionStorage.setItem("name", "")
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
      <main className="main-content">
        <section className="content">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default Root
