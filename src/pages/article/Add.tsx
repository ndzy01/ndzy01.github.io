import { Button, Form, Input, Spin, TreeSelect } from "antd"

import { useNavigate, useParams } from "react-router-dom"

import { EditorMd } from "../../components/Md"
import { useStore } from "../../store"

const AddArticle = () => {
  const navigate = useNavigate()
  const store = useStore()
  const { id: pId } = useParams()

  return store.loading ? (
    <Spin size="large" />
  ) : (
    <Form
      initialValues={{
        title: "",
        content: "",
        parentId: pId === "0" ? undefined : pId,
      }}
      onFinish={(v) => {
        store.api.article
          .create({
            ...v,
          })
          .then(() => {
            navigate("/article")
          })
      }}
    >
      <Form.Item name="parentId">
        <TreeSelect
          showSearch
          style={{ width: "100%" }}
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          placeholder="请选择父级目录"
          allowClear
          treeDefaultExpandAll
          treeData={store.articles}
        />
      </Form.Item>

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

export default AddArticle
