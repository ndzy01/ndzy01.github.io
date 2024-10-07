import "./App.css"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Article from "./pages/article"
import ArticleRoot from "./pages/article-root"
import ErrorPage from "./pages/error"
import Home from "./pages/home"
import Login from "./pages/login"
import Root, { loginLoader } from "./pages/root"
import StoreApp from "./store/index"

const router = createBrowserRouter([
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
            path: "/article/edit",
            element: <Login />,
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
  return (
    <StoreApp>
      <RouterProvider router={router} />
    </StoreApp>
  )
}

export default App
