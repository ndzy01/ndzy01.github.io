import React from "react"
import { useLoaderData } from "react-router-dom"

const Article = () => {
  const user: any = useLoaderData()
  return <div>Article</div>
}

export default Article
