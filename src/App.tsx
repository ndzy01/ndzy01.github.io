import "./App.css"

import { RouterProvider, createHashRouter } from "react-router-dom"

import Article from "./pages/article"
import ArticleRoot from "./pages/article-root"
import AddArticle from "./pages/article/Add.tsx"
import EditArticle from "./pages/article/Edit.tsx"
import SortArticle from "./pages/article/Sort.tsx"
import { ViewArticle } from "./pages/article/View.tsx"
import ErrorPage from "./pages/error"
import Home from "./pages/home"
import Login from "./pages/login"
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
            path: "/article/add",
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
        path: "/login",
        element: <Login />,
      },
    ],
  },
])

const App = () => {
  ;(function (history: any) {
    var pushState = history.pushState
    var replaceState = history.replaceState

    history.pushState = function (state: any) {
      if (typeof history.onpushstate == "function") {
        history.onpushstate({ state: state })
      }
      // 触发一个事件
      window.dispatchEvent(new Event("routerchange"))
      return pushState.apply(history, arguments)
    }

    history.replaceState = function (state: any) {
      if (typeof history.onreplacestate == "function") {
        history.onreplacestate({ state: state })
      }
      // 触发一个事件
      window.dispatchEvent(new Event("routerchange"))
      return replaceState.apply(history, arguments)
    }
  })(window.history)

  return (
    <StoreApp>
      <RouterProvider router={router} />
    </StoreApp>
  )
}

export default App
