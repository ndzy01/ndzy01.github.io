import {useInterval, useLocalStorageState, useUpdateEffect} from "ahooks"
import {Button, Select, Space} from "antd"
import axios from "axios"

import {useEffect, useState} from "react"
import ReactPlayer from "react-player"

const NdzyMusic = () => {
  const [ndzySongs, setNdzySongs] = useState<any[]>([])
  const [song, setSong] = useState<any>()
  const [type, setType] = useState<"0" | "1">("0")
  const [currentIndex, setCurrentIndex] = useLocalStorageState<
    string | undefined
  >("currentIndex", {
    defaultValue: "0",
  })

  const init = async () => {
    const list = [
      "https://www.ndzy01.com/music01/data.json",
      "https://www.ndzy01.com/music02/data.json",
      "https://www.ndzy01.com/music03/data.json",
      "https://www.ndzy01.com/music04/data.json",
      "https://www.ndzy01.com/music05/data.json",
      "https://www.ndzy01.com/music06/data.json",
      "https://www.ndzy01.com/music07/data.json",
      "https://www.ndzy01.com/music08/data.json",
      "https://www.ndzy01.com/music09/data.json",
    ]
    const songs: any[] = []

    for await (const url of list) {
      try {
        const data = await axios(url)

        if (data) {
          songs.push(...data.data)
        }
      } catch (error) {
        //
      }
    }

    setNdzySongs(songs)
  }

  useEffect(() => {
    init().then(() => {
      setSong(ndzySongs[currentIndex as any])
    })
  }, [])

  useInterval(() => {
    init().then()
  }, 60 * 60 * 1000)

  useUpdateEffect(() => {
    setSong(ndzySongs[currentIndex as any])
  }, [currentIndex])

  return (
    <>
      {song && (
        <div style={{textAlign: "center", marginBottom: 16}}>
          正在播放：<span style={{color: "pink"}}>{song.name}</span>
        </div>
      )}
      <Select
        value={type}
        onChange={(v) => setType(v)}
        options={[
          {label: "顺序", value: "0"},
          {label: "随机", value: "1"},
        ]}
      />

      <div style={{paddingBottom: 140, position: "relative"}}>
        <Space wrap size={32}>
          {ndzySongs.map((item, index) => (
            <div style={{width: 200}} key={item.id}>
              <Button
                style={song?.id === item.id ? {color: "green"} : {}}
                type="link"
                onClick={() => {
                  setCurrentIndex(String(index))
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
              zIndex: 999,
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            playing
            height={100}
            width={300}
            url={song.url}
            title={song.name}
            playsinline
            controls
            onEnded={() => {
              if (type === "1") {
                setCurrentIndex(
                  Math.floor(Math.random() * ndzySongs.length) + ""
                )
              }

              if (type === "0") {
                if (Number(currentIndex) === ndzySongs.length - 1) {
                  setCurrentIndex("0")
                } else {
                  setCurrentIndex(String(Number(currentIndex) + 1))
                }
              }
            }}
          />
        )}
      </div>
    </>
  )
}

export default NdzyMusic
