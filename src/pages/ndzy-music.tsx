import { Button, Space } from "antd"

import { useEffect, useState } from "react"
import ReactPlayer from "react-player"

const NdzyMusic = () => {
  const [ndzySongs, setNdzySongs] = useState<any[]>([])
  const [song, setSong] = useState<any>()

  useEffect(() => {
    fetch("https://www.ndzy01.com/music/data.json")
      .then((res) => res.json())
      .then((res) => {
        setNdzySongs(res)
      })
  }, [])

  return (
    <>
      <div style={{ paddingBottom: 100 }}>
        <Space wrap size={32}>
          {ndzySongs.map((item) => (
            <div style={{ width: 200 }} key={item.id}>
              {/* <Image src={item.img} style={{ width: 120, height: 160 }} /> */}
              <Button
                type="link"
                onClick={() => {
                  setSong(item)
                }}
              >
                {item.name}
              </Button>
            </div>
          ))}
        </Space>

        {song && song.url && (
          <ReactPlayer
            style={{
              position: "fixed",
              bottom: 32,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            playing
            height={60}
            url={song.url}
            controls
            onEnded={() => {
              const randomIndex = Math.floor(Math.random() * ndzySongs.length)
              setSong(ndzySongs[randomIndex])
            }}
          />
        )}
      </div>
    </>
  )
}

export default NdzyMusic