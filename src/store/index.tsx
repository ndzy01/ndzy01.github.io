import React, { useEffect, useState } from "react"

import { createContext } from "./createContext"

import { Tree, loop, musicService, service } from "../utils"

const NDZY_NAME = "NDZY"

interface NdzyContextType {
  loading: boolean
  setLoading: (v: boolean) => void
  articles: Tree[]
  article?: Tree
  songGroup: any[]
  songs: any[]
  songUrl?: string
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
    music: {
      login: (v: any) => Promise<void>
      query: (id: string) => Promise<void>
      cloud: () => Promise<void>
      url: (id: string) => Promise<void>
      group: () => Promise<void>
    }
  }
}

const [NdzyProvider, useNdzyContext] = createContext<NdzyContextType>(NDZY_NAME)

export const useStore = () => useNdzyContext(NDZY_NAME)

const App = (props: { children: React.ReactNode }) => {
  const { children } = props

  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState<Tree[]>([])
  const [songs, setSongs] = useState<any[]>([])
  const [songGroup, setSongGroup] = useState<any[]>([])
  const [songUrl, setSongUrl] = useState("")
  const [article, setArticle] = useState()

  const auth = async () => {
    setLoading(true)
    const data: any = await service({ url: "/auth", method: "GET" })

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

  // 登录网易云音乐
  const musicLogin = async (values: any) => {
    setLoading(true)
    try {
      await musicService("/login/cellphone", {
        method: "GET",
        params: { ...values },
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  // 网易云歌曲列表
  const musicGroup = async () => {
    setLoading(true)
    try {
      const data1 = await musicService("/user/account")
      const data = await musicService("/user/playlist", {
        method: "GET",
        params: { uid: data1.data.account.id },
      })
      setLoading(false)
      setSongGroup(
        data.data.playlist.map((item: any) => ({
          id: item.id,
          name: item.name,
        }))
      )
    } catch (error) {
      setLoading(false)
    }
  }

  const musicQuery = async (id: string) => {
    setLoading(true)
    try {
      const data = await musicService("/playlist/detail", {
        method: "GET",
        params: { id },
      })

      const ids: any[] = data.data.playlist.trackIds.map((item: any) => item.id)

      const data1 = await musicService("/song/detail", {
        method: "GET",
        params: { ids: ids.toString() },
      })

      const list = data1.data.songs.map(
        ({ id, name, al, ar, mv, dt }: any) => ({
          id,
          name,
          artists: ar,
          duration: dt,
          mvId: mv,
          albumName: al.name,
          img: al.picUrl,
        })
      )
      setLoading(false)
      setSongs(list)
    } catch (error) {
      setLoading(false)
    }
  }

  const musicCloud = async () => {
    setLoading(true)
    try {
      const data = await musicService("/user/cloud", {
        method: "GET",
        params: { limit: 10000 },
      })

      const list = data.data.data.map(
        ({ songId, songName, simpleSong }: any) => ({
          id: songId,
          name: songName,
          img: simpleSong.al.picUrl,
        })
      )
      setLoading(false)
      setSongs(list)
    } catch (error) {
      setLoading(false)
    }
  }

  const musicSongUrl = async (id: string) => {
    setLoading(true)
    try {
      const data2 = await musicService("/song/url/v1", {
        method: "GET",
        params: { id, level: "lossless" },
      })

      const song = data2.data.data[0]
      setLoading(false)
      setSongUrl(song.url)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    auth().then()

    window.addEventListener("popstate", function () {
      //
    })

    window.addEventListener("routerchange", function () {
      auth().then()
    })

    document.addEventListener("DOMContentLoaded", () => {
      //
    })
  }, [])

  return (
    <NdzyProvider
      loading={loading}
      setLoading={setLoading}
      articles={articles}
      article={article}
      songs={songs}
      songGroup={songGroup}
      songUrl={songUrl}
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
        music: {
          login: musicLogin,
          query: musicQuery,
          url: musicSongUrl,
          cloud: musicCloud,
          group: musicGroup,
        },
      }}
    >
      {children}
    </NdzyProvider>
  )
}

export default App
