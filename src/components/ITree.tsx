import {
  DeleteOutlined,
  DragOutlined,
  EditOutlined,
  EyeOutlined,
  FileAddOutlined,
} from "@ant-design/icons"
import { Popconfirm, Space, Tree, TreeProps } from "antd"

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useStore } from "../store"

const { DirectoryTree } = Tree

const ITree = () => {
  const navigate = useNavigate()
  const store = useStore()
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([])
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([])
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true)

  const onExpand: TreeProps["onExpand"] = (expandedKeysValue) => {
    setExpandedKeys(expandedKeysValue)
    setAutoExpandParent(false)
  }

  const onSelect: TreeProps["onSelect"] = (selectedKeysValue) => {
    setSelectedKeys(selectedKeysValue)
  }

  return (
    <DirectoryTree
      treeData={store.articles as any}
      // height={600}
      // virtual
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      titleRender={(d) => {
        return (
          <Space size={24}>
            <span style={{ display: "inline-block", width: 120 }}>
              {d.title as string}
            </span>

            <EyeOutlined
              onClick={() => {
                navigate(`/article/view/${d.key}`)
              }}
            />

            <EditOutlined
              onClick={() => {
                navigate(`/article/edit/${d.key}`)
              }}
            />

            <FileAddOutlined
              onClick={() => {
                navigate(`/article/add/${d.key}`)
              }}
            />

            <DragOutlined
              onClick={() => {
                navigate(`/article/sort/${d.key}`)
              }}
            />

            {d.isLeaf && (
              <Popconfirm
                title="删除后不可恢复"
                description="确认删除？"
                onConfirm={() => {
                  store.api.article.del(d.key as string).then()
                }}
                onCancel={() => {}}
                okText="确认"
                cancelText="取消"
              >
                <DeleteOutlined />
              </Popconfirm>
            )}
          </Space>
        )
      }}
    />
  )
}

export default ITree
