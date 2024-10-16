import "./App.css"

import { useEffect } from "react"
import { RouterProvider, createHashRouter } from "react-router-dom"

import Article from "./pages/article"
import ArticleRoot from "./pages/article-root"
import AddArticle from "./pages/article/Add"
import EditArticle from "./pages/article/Edit"
import SortArticle from "./pages/article/Sort"
import { ViewArticle } from "./pages/article/View"
import ErrorPage from "./pages/error"
import Home from "./pages/home"
import Login from "./pages/login"
import Music from "./pages/music"
import NdzyMusic from "./pages/ndzy-music"
import Root, { loginLoader } from "./pages/root"
import StoreApp from "./store/index"

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: loginLoader,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: loginLoader,
      },
      {
        path: "/article",
        element: <ArticleRoot />,
        errorElement: <ErrorPage />,
        // loader: loginLoader,
        children: [
          {
            index: true,
            element: <Article />,
            // loader: loginLoader,
          },
          {
            path: "/article/add/:id",
            element: <AddArticle />,
            // loader: loginLoader,
          },
          {
            path: "/article/edit/:id",
            element: <EditArticle />,
            // loader: loginLoader,
          },
          {
            path: "/article/view/:id",
            element: <ViewArticle />,
            // loader: loginLoader,
          },
          {
            path: "/article/sort/:id",
            element: <SortArticle />,
            // loader: loginLoader,
          },
        ],
      },
      {
        path: "/music",
        element: <Music />,
      },
      {
        path: "/ndzy-music",
        element: <NdzyMusic />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
])

const App = () => {
  useEffect(() => {
    async function checkCameraFacing() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" }, // 或 "environment"
        })

        // 获取视频轨道信息
        const videoTrack = stream.getVideoTracks()[0]
        const settings = videoTrack.getSettings()

        // 判断是否为前置还是后置摄像头
        if (settings.facingMode === "user") {
          alert("前置摄像头")
        } else if (settings.facingMode === "environment") {
          alert("后置摄像头")
        } else {
          alert("未知摄像头类型")
        }

        // 关闭摄像头流，防止占用资源
        videoTrack.stop()
      } catch (error) {
        console.error("无法访问摄像头:", error)
      }
    }

    checkCameraFacing()
  }, [])
  return (
    <StoreApp>
      <RouterProvider router={router} />
    </StoreApp>
  )
}

export default App
