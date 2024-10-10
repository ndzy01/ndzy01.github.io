import { Button, Image, Space } from "antd"

import { useEffect } from "react"
import ReactPlayer from "react-player"

import { useStore } from "../store"

const Music = () => {
  const store = useStore()

  useEffect(() => {
    store.api.music.query()
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          store.api.music.query()
        }}
      >
        刷新
      </Button>
      <Space direction="vertical">
        {store.songs.map((item) => (
          <>
            <Image src={item.img} style={{ width: 200 }} />
            <Button
              type="link"
              onClick={() => {
                store.api.music.url(item.id)
              }}
            >
              {item.name}
            </Button>
          </>
        ))}
      </Space>

      {store.songUrl && (
        <ReactPlayer
          style={{
            position: "fixed",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          playing
          height={60}
          url={store.songUrl}
          controls
        />
      )}
    </div>
  )
}

export default Music
