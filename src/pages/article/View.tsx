import { BarsOutlined, MenuOutlined } from "@ant-design/icons"
import { Drawer, FloatButton, Spin } from "antd"
import { MdCatalog, MdPreview } from "md-editor-rt"
import "md-editor-rt/lib/style.css"
import { v4 as uuidv4 } from "uuid"

import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import ITree from "../../components/ITree"
import { useStore } from "../../store"

export const ViewArticle = () => {
  const scrollRef = useRef<any>(null)
  const { id: aId } = useParams()
  const navigate = useNavigate()
  const id = "id_md_" + uuidv4()
  const store = useStore()
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  const showDrawer1 = () => {
    setOpen1(true)
  }
  const onClose1 = () => {
    setOpen1(false)
  }

  useEffect(() => {
    if (!aId) {
      navigate("/article")
    }
    store.api.article.find(aId || "").then()
  }, [navigate, aId])

  useEffect(() => {
    scrollRef.current = document.getElementById("ndzy-content")
  }, [])

  return store.loading ? (
    <Spin size="large" />
  ) : (
    <div>
      <MdPreview editorId={id} modelValue={store.article?.content} />
      <MdCatalog editorId={id} scrollElement={scrollRef.current!} />
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24, top: 24 }}>
        <FloatButton icon={<BarsOutlined />} onClick={showDrawer} />
        <FloatButton icon={<MenuOutlined />} onClick={showDrawer1} />
      </FloatButton.Group>
      <Drawer title="目录" onClose={onClose1} open={open1} zIndex={999999999}>
        <ITree />
      </Drawer>
      <Drawer title="文章目录" onClose={onClose} open={open} zIndex={999999999}>
        <MdCatalog editorId={id} scrollElement={scrollRef.current!} />
        <div style={{ display: "none" }}>
          <MdPreview editorId={id} modelValue={store.article?.content} />
        </div>
      </Drawer>
    </div>
  )
}
