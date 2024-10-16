import React, { useEffect, useRef, useState } from "react"

const CameraToggle = () => {
  const [facingMode, setFacingMode] = useState("user") // 默认前置摄像头
  const videoRef = useRef<any>(null) // 用于引用 <video> 元素

  // 启动摄像头
  const startCamera = async () => {
    const constraints = { video: { facingMode } }
    console.log(await navigator.mediaDevices.getUserMedia(constraints))
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (error) {
      console.error("摄像头启动失败:", error)
    }
  }

  // 当 facingMode 变化时重新启动摄像头
  useEffect(() => {
    startCamera()
    // 清理上一次的摄像头流
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks()
        tracks.forEach((track: any) => track.stop())
        navigator.mediaDevices.enumerateDevices().then((devices) => {
          alert(JSON.stringify(devices))
        })
      }
    }
  }, [facingMode])

  // 切换摄像头
  const toggleCamera = () => {
    setFacingMode((prevMode) => (prevMode === "user" ? "environment" : "user"))
  }

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline style={{ width: "100%" }} />
      <button onClick={toggleCamera}>切换摄像头</button>
    </div>
  )
}

export default CameraToggle
