import {
  LeftCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RightCircleOutlined,
} from "@ant-design/icons"
import { useSetState } from "ahooks"
import { Radio, Select, Slider, Space } from "antd"

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
        {state.show ? (
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
        )}

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
              {ndzyMusic.song && (
                <div>
                  正在播放：
                  <span style={{ color: "pink" }}>{ndzyMusic.song.name}</span>
                </div>
              )}

              <Radio.Group
                value={ndzyMusic.type}
                onChange={(e) => setNdzyMusic({ type: e.target.value })}
              >
                <Radio.Button value="0">
                  <svg
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    viewBox="0 0 29 32"
                    height={24}
                    width={24}
                  >
                    <use xlinkHref="#aplayer-circulation"></use>
                    <path
                      className="aplayer-fill"
                      d="M25.6 9.92q1.344 0 2.272 0.928t0.928 2.272v9.28q0 1.28-0.928 2.24t-2.272 0.96h-22.4q-1.28 0-2.24-0.96t-0.96-2.24v-9.28q0-1.344 0.96-2.272t2.24-0.928h8v-3.52l6.4 5.76-6.4 5.76v-3.52h-6.72v6.72h19.84v-6.72h-4.8v-4.48h6.080z"
                      id="aplayer-circulation"
                    ></path>
                  </svg>
                </Radio.Button>
                <Radio.Button value="1">
                  <svg
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    viewBox="0 0 33 31"
                    height={24}
                    width={24}
                  >
                    <use xlinkHref="#aplayer-random"></use>
                    <path
                      className="aplayer-fill"
                      d="M29.867 9.356l-5.003 5.003c-0.094 0.094-0.235 0.141-0.36 0.141-0.266 0-0.5-0.219-0.5-0.5v-3.002h-4.002c-2.079 0-3.064 1.423-3.94 3.111-0.453 0.875-0.844 1.782-1.219 2.673-1.735 4.033-3.768 8.223-8.849 8.223h-3.502c-0.281 0-0.5-0.219-0.5-0.5v-3.002c0-0.281 0.219-0.5 0.5-0.5h3.502c2.079 0 3.064-1.423 3.94-3.111 0.453-0.875 0.844-1.782 1.219-2.673 1.735-4.033 3.768-8.223 8.849-8.223h4.002v-3.002c0-0.281 0.219-0.5 0.5-0.5 0.141 0 0.266 0.063 0.375 0.156l4.987 4.987c0.094 0.094 0.141 0.235 0.141 0.36s-0.047 0.266-0.141 0.36zM10.262 14.781c-0.907-1.892-1.907-3.783-4.268-3.783h-3.502c-0.281 0-0.5-0.219-0.5-0.5v-3.002c0-0.281 0.219-0.5 0.5-0.5h3.502c2.783 0 4.831 1.298 6.41 3.518-0.876 1.344-1.517 2.798-2.142 4.268zM29.867 23.363l-5.003 5.003c-0.094 0.094-0.235 0.141-0.36 0.141-0.266 0-0.5-0.235-0.5-0.5v-3.002c-4.643 0-7.504 0.547-10.396-3.518 0.86-1.344 1.501-2.798 2.126-4.268 0.907 1.892 1.907 3.783 4.268 3.783h4.002v-3.002c0-0.281 0.219-0.5 0.5-0.5 0.141 0 0.266 0.063 0.375 0.156l4.987 4.987c0.094 0.094 0.141 0.235 0.141 0.36s-0.047 0.266-0.141 0.36z"
                      id="aplayer-random"
                    ></path>
                  </svg>
                </Radio.Button>
              </Radio.Group>

              <Space>
                <LeftCircleOutlined
                  style={{ width: 32, height: 32 }}
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
                />

                {state.playing ? (
                  <svg
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    viewBox="0 0 17 32"
                    height={24}
                    width={24}
                    onClick={() => setState({ playing: !state.playing })}
                  >
                    <use xlinkHref="#aplayer-pause"></use>
                    <path
                      d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"
                      id="aplayer-pause"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    viewBox="0 0 16 31"
                    height={24}
                    width={24}
                    onClick={() => setState({ playing: !state.playing })}
                  >
                    <use xlinkHref="#aplayer-play"></use>
                    <path
                      d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"
                      id="aplayer-play"
                    ></path>
                  </svg>
                )}

                <RightCircleOutlined
                  style={{ width: 32, height: 32 }}
                  onClick={() => {
                    if (ndzyMusic.currentIndex < ndzyMusic.songs.length - 1) {
                      setNdzyMusic({
                        currentIndex: ndzyMusic.currentIndex + 1,
                      })
                    } else {
                      setNdzyMusic({ currentIndex: 0 })
                    }
                  }}
                />
              </Space>

              <Select
                showSearch
                optionFilterProp="label"
                style={{ width: 238 }}
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
              />

              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ color: "#999" }}>
                  {`${secondsToMinutesSecondsRounded(state.playedSeconds)}/${secondsToMinutesSecondsRounded(state.duration)}`}
                </span>

                <Slider
                  tooltip={{
                    formatter: (v) => secondsToMinutesSecondsRounded(v || 0),
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

              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 28 32"
                  height={24}
                  width={24}
                >
                  <use xlinkHref="#aplayer-volume-down"></use>
                  <path
                    className="aplayer-fill"
                    d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"
                    id="aplayer-volume-down"
                  ></path>
                </svg>
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
            </Space>
          </div>
        </div>
      </>
    )
  )
}

export default Music
