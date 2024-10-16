import "./App.css"

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
  navigator.mediaDevices.enumerateDevices().then((devices) => {
    alert(JSON.stringify(devices))
  })
  return (
    <StoreApp>
      <RouterProvider router={router} />
    </StoreApp>
  )
}

export default App
