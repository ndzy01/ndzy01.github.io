import { FileAddOutlined } from "@ant-design/icons"
import { Spin } from "antd"

import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import ITree from "../../components/ITree"
import { useStore } from "../../store"

const Article = () => {
  const navigate = useNavigate()
  const store = useStore()

  useEffect(() => {
    store.api.article.query().then()
  }, [])

  return store.loading ? (
    <Spin size="large" />
  ) : (
    <div>
      <FileAddOutlined
        style={{ margin: 16 }}
        onClick={() => {
          navigate("/article/add/0")
        }}
      />
      <ITree />
    </div>
  )
}

export default Article
