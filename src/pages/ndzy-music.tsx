import { Button, Space } from "antd"

import { useStore } from "../store"

const NdzyMusic = () => {
  const { ndzyMusic, setNdzyMusic } = useStore()

  return (
    <>
      <div style={{ paddingBottom: 140, position: "relative" }}>
        <Space wrap size={32}>
          {ndzyMusic.songs.map((item, index) => (
            <div style={{ width: 200 }} key={item.id}>
              <Button
                style={
                  ndzyMusic?.song?.id === item.id ? { color: "green" } : {}
                }
                type="link"
                onClick={() => {
                  setNdzyMusic({ currentIndex: index })
                }}
              >
                {item.name}
              </Button>
            </div>
          ))}
        </Space>
      </div>
    </>
  )
}

export default NdzyMusic
