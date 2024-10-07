import { Spin } from "antd"

import React, { useEffect } from "react"

import ITree from "../../components/ITree.tsx"
import { useStore } from "../../store"

const Article = () => {
  const store = useStore()

  useEffect(() => {
    store.api.article.query().then()
  }, [])

  return store.loading ? (
    <Spin size="large" />
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <ITree />
    </div>
  )
}

export default Article
