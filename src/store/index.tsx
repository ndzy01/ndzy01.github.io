import { useInterval } from "ahooks"

import React, { useEffect, useState } from "react"

import { createContext } from "./createContext"

import { Tree, loop, service } from "../utils"

const NDZY_NAME = "NDZY"

interface NdzyContextType {
  loading: boolean
  setLoading: (v: boolean) => void
  articles: Tree[]
  article?: Tree
  api: {
    login: {
      auth: () => Promise<any>
      login: (values: any) => Promise<any>
    }
    article: {
      query: () => Promise<void>
      del: (id: string) => Promise<void>
      find: (id: string) => Promise<void>
      save: (id: string, params: any) => Promise<void>
      create: (params: any) => Promise<void>
      initOrderData: (id: string) => Promise<Tree[]>
      updateOrder: (data: { id: string; order: number }[]) => Promise<void>
    }
  }
}

const [NdzyProvider, useNdzyContext] = createContext<NdzyContextType>(NDZY_NAME)

export const useStore = () => useNdzyContext(NDZY_NAME)

const App = (props: { children: React.ReactNode }) => {
  const { children } = props

  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState<Tree[]>([])
  const [article, setArticle] = useState()

  const auth = async () => {
    setLoading(true)
    const data: any = await service({ url: "/", method: "GET" })

    if (data) {
      sessionStorage.setItem("name", data.data.name)
    }

    setLoading(false)
    return data
  }

  const login = async (values: any) => {
    setLoading(true)
    const data = await service({
      url: "/user/login",
      method: "POST",
      data: values,
    })

    if (data?.data?.token) {
      sessionStorage.setItem("token", data?.data?.token)
      sessionStorage.setItem("name", data?.data?.name)
      window.location.reload()
    }

    setLoading(false)
  }

  const query = async () => {
    setLoading(true)
    const data: any = await service({ url: "/article", method: "GET" })
    setLoading(false)
    setArticles(loop(data?.data || []))
  }

  const del = async (id: string) => {
    setLoading(true)
    await service({ url: `/article/${id}`, method: "DELETE" })
    setLoading(false)
    setArticle(undefined)
    query().then()
  }

  const save = async (id: string, params: any) => {
    setLoading(true)
    await service({ url: `/article/${id}`, method: "PATCH", data: params })
    const data: any = await service({ url: `/article/${id}`, method: "GET" })
    setLoading(false)
    setArticle(data?.data)
    query().then()
  }

  const create = async (params: any) => {
    setLoading(true)
    await service({ url: "/article", method: "POST", data: params })
    setLoading(false)
    query().then()
  }

  const find = async (id: string) => {
    setLoading(true)
    const data: any = await service({ url: `/article/${id}`, method: "GET" })
    setLoading(false)
    setArticle(data?.data)

    query().then()
  }

  const initOrderData = async (id: string) => {
    setLoading(true)
    const article = await service(`/article/${id}`)
    let data: Tree[]
    if (article.data.root) {
      const d = await service("/article/pid/0")
      data = d.data
    } else {
      const d = await service(`/article/pid/${article.data.parent.id}`)
      data = d.data
    }
    setLoading(false)
    return data
  }

  const updateOrder = async (data: { id: string; order: number }[]) => {
    setLoading(true)
    await service(`/article/updateOrder`, {
      data,
      method: "POST",
    })
    setLoading(false)
  }

  useEffect(() => {
    if (
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/"
    ) {
      auth().then()
    }
  }, [])

  useInterval(() => {
    if (
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/"
    ) {
      auth().then()
    }
  }, 60 * 1000)

  return (
    <NdzyProvider
      loading={loading}
      setLoading={setLoading}
      articles={articles}
      article={article}
      api={{
        login: { auth, login },
        article: {
          query,
          del,
          find,
          save,
          create,
          initOrderData,
          updateOrder,
        },
      }}
    >
      {children}
    </NdzyProvider>
  )
}

export default App
