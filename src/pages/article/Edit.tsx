import { useMount, useUpdateEffect } from "ahooks"
import { Button, Form, Input, Spin } from "antd"

import { useNavigate, useParams } from "react-router-dom"

import { EditorMd } from "../../components/Md.tsx"
import { useStore } from "../../store"

const EditArticle = () => {
  const store = useStore()
  const { id: aId } = useParams()
  const navigate = useNavigate()

  const init = () => {
    if (!aId) {
      navigate("/article")
    }

    store.api.article.find(aId || "").then()
  }

  useUpdateEffect(() => {
    init()
  }, [aId])

  useMount(() => {
    init()
  })

  return store.loading ? (
    <Spin size="large" />
  ) : (
    <Form
      initialValues={{
        title: store.article?.title,
        content: store.article?.content,
      }}
      onFinish={(v) => {
        if (!store.article?.id) return

        store.api.article.save(store.article?.id, { ...v }).then(() => {
          navigate("/article")
        })
      }}
    >
      <Form.Item
        name="title"
        rules={[{ required: true, message: "标题不能为空" }]}
      >
        <Input placeholder="请输入标题" />
      </Form.Item>

      <Form.Item
        name="content"
        rules={[{ required: true, message: "内容不能为空" }]}
      >
        <EditorMd />
      </Form.Item>

      <Button disabled={store.loading} htmlType="submit" type={"primary"} block>
        提交
      </Button>
    </Form>
  )
}

export default EditArticle
