import { SaveOutlined } from "@ant-design/icons"
import type { DragEndEvent } from "@dnd-kit/core"
import { DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import type { TableColumnsType } from "antd"
import { FloatButton, Spin, Table } from "antd"

import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useStore } from "../../store"

interface DataType {
  id: string
  title: string
  order: number
}

const columns: TableColumnsType<DataType> = [
  {
    title: "唯一标识",
    dataIndex: "id",
  },
  {
    title: "标题",
    dataIndex: "title",
  },
  {
    title: "order",
    dataIndex: "order",
  },
]

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  "data-row-key": string
}

const Row = (props: RowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props["data-row-key"],
  })

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: "move",
    ...(isDragging ? { position: "relative", zIndex: 9999 } : {}),
  }

  return (
    <tr
      {...props}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    />
  )
}

const SortArticle = () => {
  const navigate = useNavigate()
  const store = useStore()
  const { id } = useParams()
  const [dataSource, setDataSource] = useState<any[]>([])
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 1,
      },
    })
  )

  useEffect(() => {
    if (!id) return

    store.api.article.initOrderData(id).then((res: any) => {
      setDataSource(res || [])
    })
  }, [id])

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((prev) => {
        const activeIndex = prev.findIndex((i) => i.id === active.id)
        const overIndex = prev.findIndex((i) => i.id === over?.id)
        const activeOrder = prev[activeIndex].order
        prev[activeIndex].order = prev[overIndex].order
        prev[activeIndex].isSort = true
        prev[overIndex].order = activeOrder
        prev[overIndex].isSort = true

        return arrayMove(prev, activeIndex, overIndex)
      })
    }
  }

  return store.loading ? (
    <Spin size="large" />
  ) : (
    <DndContext
      sensors={sensors}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={onDragEnd}
    >
      <SortableContext
        items={dataSource.map((i) => i.id)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          pagination={false}
          components={{
            body: {
              row: Row,
            },
          }}
          rowKey="id"
          columns={columns}
          dataSource={dataSource}
        />

        <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
          <FloatButton
            icon={<SaveOutlined />}
            onClick={() => {
              if (
                dataSource
                  .filter((item) => item.isSort)
                  .map((item) => ({ id: item.id, order: item.order }))
                  .length === 0
              ) {
                return
              }

              store.api.article
                .updateOrder(
                  dataSource
                    .filter((item) => item.isSort)
                    .map((item) => ({ id: item.id, order: item.order }))
                )
                .then(() => {
                  navigate("/article")
                })
            }}
          />
        </FloatButton.Group>
      </SortableContext>
    </DndContext>
  )
}

export default SortArticle
