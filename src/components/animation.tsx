import { gsap } from "gsap"

import React, { useEffect, useRef } from "react"

const Animation = ({
  imgList = [],
  style = {},
}: {
  imgList?: any[]
  style?: React.CSSProperties
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const images: HTMLImageElement[] = []
  const frameCount = imgList.length

  useEffect(() => {
    const canvas = canvasRef.current
    const offscreenCanvas = offscreenCanvasRef.current

    if (!canvas || !offscreenCanvas) return

    const context = canvas.getContext("2d") as CanvasRenderingContext2D
    const offscreenContext = offscreenCanvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D

    // 设置离屏Canvas尺寸与主Canvas相同
    offscreenCanvas.width = canvas.width
    offscreenCanvas.height = canvas.height

    // 预加载所有帧图片
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image()
      img.src = imgList[i - 1] as any // 替换为你的序列帧路径
      images[i - 1] = img
    }

    // 确保所有图片加载完成后启动动画
    let loadedImages = 0
    const onImagesLoaded = () => {
      loadedImages++
      if (loadedImages === frameCount) {
        startAnimation()
      }
    }

    images.forEach((image) => {
      image.onload = onImagesLoaded
    })

    // 动画启动函数
    const startAnimation = () => {
      const tl = gsap.timeline({ repeat: -1 }) // 无限循环

      images.forEach((_image, index) => {
        tl.to({}, { duration: 0.05, onUpdate: () => drawFrame(index) })
      })
    }

    // 使用双缓冲技术绘制帧
    const drawFrame = (frameIndex: number) => {
      // 清除离屏Canvas
      offscreenContext.clearRect(
        0,
        0,
        offscreenCanvas.width,
        offscreenCanvas.height
      )
      // 在离屏Canvas上绘制当前帧
      offscreenContext.drawImage(
        images[frameIndex],
        0,
        0,
        offscreenCanvas.width,
        offscreenCanvas.height
      )
      // 将离屏Canvas的内容绘制到主Canvas
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(offscreenCanvas, 0, 0, canvas.width, canvas.height)
    }
  }, [frameCount])

  return (
    <>
      <canvas ref={canvasRef} style={{ width: 400, height: 300, ...style }} />

      {/* 创建离屏Canvas，隐藏它 */}
      <canvas ref={offscreenCanvasRef} style={{ display: "none" }} />
    </>
  )
}

export default Animation
