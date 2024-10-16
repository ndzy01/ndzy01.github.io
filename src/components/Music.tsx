import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { useSetState } from "ahooks"
import { Button, Radio, Select, Slider, Space } from "antd"

import { useRef } from "react"
import ReactPlayer from "react-player"

import { useStore } from "../store"

function secondsToMinutesSecondsRounded(seconds: number) {
  const totalSeconds = Math.round(seconds) // 将秒数四舍五入到最近的整数
  const minutes = Math.floor(totalSeconds / 60) // 计算分钟数
  const remainingSeconds = totalSeconds % 60 // 计算剩余秒数

  // 将分钟数和秒数转换为字符串，并确保它们至少有两位数字
  const minutesStr = minutes.toString().padStart(2, "0")
  const secondsStr = remainingSeconds.toString().padStart(2, "0")

  return `${minutesStr}:${secondsStr}`
}

const Menu = ({ state, setState }: any) => {
  return state.show ? (
    <MenuUnfoldOutlined
      style={{
        zIndex: 999,
        position: "fixed",
        top: 32,
        right: 32,
        padding: 16,
      }}
      onClick={() => setState({ show: false })}
    />
  ) : (
    <MenuFoldOutlined
      style={{
        zIndex: 999,
        position: "fixed",
        top: 32,
        right: 32,
        padding: 16,
      }}
      onClick={() => setState({ show: true })}
    />
  )
}

const Music = () => {
  const { ndzyMusic, setNdzyMusic } = useStore()
  const [state, setState] = useSetState({
    playing: false,
    show: false,
    volume: 0.1,
    duration: 0,
    playedSeconds: 0,
  })
  const playerRef = useRef<any>(null)

  const handleReady = () => {
    setState({ playing: true })
  }

  // 当视频加载时获取视频总时长
  const handleDuration = (duration: number) => {
    setState({ duration })
  }

  // 视频播放进度更新时的处理函数
  const handleProgress = (state: any) => {
    setState({ playedSeconds: state.playedSeconds })
  }

  return (
    ndzyMusic.songs.length > 0 && (
      <>
        <Menu state={state} setState={setState} />

        <div
          style={{
            position: "fixed",
            top: 32,
            right: 32,
          }}
        >
          <div
            style={{
              visibility: !state.show ? "hidden" : "visible",
              background: "#f7f7f7",
              boxShadow: "0 2px 5px 1px rgba(64, 60, 67, .16);",
              padding: 16,
              borderRadius: 16,
            }}
          >
            {ndzyMusic?.song?.url && (
              <ReactPlayer
                ref={playerRef}
                onDuration={handleDuration}
                onProgress={handleProgress}
                playing={state.playing}
                height={0}
                width={0}
                url={ndzyMusic.song.url}
                volume={state.volume}
                onReady={handleReady}
                onEnded={() => {
                  setState({ playing: false })

                  if (ndzyMusic.type === "1") {
                    setNdzyMusic({
                      currentIndex: Math.floor(
                        Math.random() * ndzyMusic.songs.length
                      ),
                    })
                  }

                  if (ndzyMusic.type === "0") {
                    if (ndzyMusic.currentIndex === ndzyMusic.songs.length - 1) {
                      setNdzyMusic({ currentIndex: 0 })
                    } else {
                      setNdzyMusic({
                        currentIndex: ndzyMusic.currentIndex + 1,
                      })
                    }
                  }
                }}
              />
            )}

            <Space
              direction={"vertical"}
              size={16}
              style={{ marginTop: 16, width: "100%" }}
            >
              {/* 选择要播放的音乐 */}
              <Select
                showSearch
                optionFilterProp="label"
                style={{ width: "100%" }}
                value={ndzyMusic.songs[ndzyMusic.currentIndex]?.id}
                onChange={(v) =>
                  setNdzyMusic({
                    currentIndex: ndzyMusic.songs.findIndex((s) => s.id === v),
                  })
                }
                options={ndzyMusic.songs.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
                placeholder="请选择需要播放的歌曲"
              />

              <Space>
                {/* 品质 */}
                <Radio.Group
                  value={ndzyMusic.type}
                  onChange={(e) => setNdzyMusic({ type: e.target.value })}
                >
                  <Radio.Button value="0">顺序</Radio.Button>
                  <Radio.Button value="1">随机</Radio.Button>
                </Radio.Group>

                {/* 播放规则 */}
                <Radio.Group
                  value={ndzyMusic.fileType}
                  onChange={(e) => {
                    setNdzyMusic({
                      fileType: e.target.value,
                      songs: ndzyMusic.data.filter(
                        (item) => item.fileType === e.target.value
                      ),
                    })
                  }}
                >
                  <Radio.Button value="flac">无损</Radio.Button>
                  <Radio.Button value="mp3">普通</Radio.Button>
                </Radio.Group>
              </Space>

              {ndzyMusic.song && (
                <>
                  <div>
                    正在播放：
                    <span style={{ color: "pink" }}>{ndzyMusic.song.name}</span>
                  </div>
                  <Space>
                    <Button
                      type={"link"}
                      onClick={() => {
                        if (ndzyMusic.currentIndex > 1) {
                          setNdzyMusic({
                            currentIndex: ndzyMusic.currentIndex - 1,
                          })
                        } else {
                          setNdzyMusic({
                            currentIndex: ndzyMusic.songs.length - 1,
                          })
                        }
                      }}
                    >
                      上一首
                    </Button>

                    <Button
                      type={"link"}
                      onClick={() => setState({ playing: !state.playing })}
                    >
                      {state.playing ? "暂停" : "播放"}
                    </Button>

                    <Button
                      type={"link"}
                      onClick={() => {
                        if (
                          ndzyMusic.currentIndex <
                          ndzyMusic.songs.length - 1
                        ) {
                          setNdzyMusic({
                            currentIndex: ndzyMusic.currentIndex + 1,
                          })
                        } else {
                          setNdzyMusic({ currentIndex: 0 })
                        }
                      }}
                    >
                      下一首
                    </Button>
                  </Space>

                  <div
                    style={{ display: "flex", gap: 8, alignItems: "center" }}
                  >
                    <span style={{ color: "#999" }}>
                      {`${secondsToMinutesSecondsRounded(state.playedSeconds)}/${secondsToMinutesSecondsRounded(state.duration)}`}
                    </span>

                    <Slider
                      tooltip={{
                        formatter: (v) =>
                          secondsToMinutesSecondsRounded(v || 0),
                      }}
                      style={{ width: "100%" }}
                      min={0}
                      max={state.duration}
                      step={1}
                      value={state.playedSeconds}
                      onChange={(v) => {
                        setState({ playedSeconds: v })
                        playerRef.current.seekTo(v)
                      }}
                    />
                  </div>

                  <div
                    style={{ display: "flex", gap: 8, alignItems: "center" }}
                  >
                    <Button type={"link"}>音量</Button>
                    <Slider
                      tooltip={{
                        formatter: (v) => (v || 0) * 10,
                      }}
                      style={{ width: "100%" }}
                      min={0}
                      max={1}
                      step={0.1}
                      value={state.volume}
                      onChange={(v) => setState({ volume: v })}
                    />
                  </div>
                </>
              )}
            </Space>
          </div>
        </div>
      </>
    )
  )
}

export default Music
