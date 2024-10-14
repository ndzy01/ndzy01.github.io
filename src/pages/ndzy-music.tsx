import { Button, Select, Space } from "antd"

import { useStore } from "../store"

const NdzyMusic = () => {
  const { ndzyMusic, setNdzyMusic } = useStore()

  return (
    <>
      {ndzyMusic.song && (
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          正在播放：<span style={{ color: "pink" }}>{ndzyMusic.song.name}</span>
        </div>
      )}
      <Select
        style={{ width: 120 }}
        value={ndzyMusic.type}
        onChange={(v) => setNdzyMusic({ type: v })}
        options={[
          { label: "顺序", value: "0" },
          { label: "随机", value: "1" },
        ]}
      />

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
