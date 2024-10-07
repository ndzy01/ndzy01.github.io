import { MdCatalog, MdEditor, MdPreview, UploadImgEvent } from "md-editor-rt"
import "md-editor-rt/lib/style.css"
import { v4 as uuidv4 } from "uuid"

import { useStore } from "../store"
import { service } from "../utils"

const scrollElement = document.documentElement
export const EditorMd = ({ value, onChange, type = "edit" }: any) => {
  const store = useStore()
  const id = "id_md_" + uuidv4()
  const onUploadImg: UploadImgEvent = async (files: any[], callback: any) => {
    const res = await Promise.all(
      files.map((file) => {
        return new Promise((rev, rej) => {
          const form = new FormData()
          const name = file.name
          form.append("file", file)
          form.append("name", name)

          service
            .post("/img", form, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => rev(res))
            .catch((error) => rej(error))
        })
      })
    )

    callback(res.map((item: any) => item.data.url))
  }

  return (
    <>
      {type === "edit" ? (
        <MdEditor
          editorId={id}
          modelValue={value}
          onChange={onChange}
          onUploadImg={onUploadImg}
          toolbars={[
            "preview",
            "-",
            "bold",
            "underline",
            "italic",
            "-",
            "strikeThrough",
            "title",
            "sub",
            "sup",
            "quote",
            "unorderedList",
            "orderedList",
            "task", // ^2.4.0
            "-",
            "codeRow",
            "code",
            "link",
            "image",
            "table",
            "mermaid",
            "katex",
            "-",
            "revoke",
            "next",
            "save",
            "=",
            "pageFullscreen",
            "fullscreen",
            "htmlPreview",
            "catalog",
          ]}
        />
      ) : (
        <>
          <MdCatalog
            style={{
              position: "fixed",
              right: 24,
              top: "11rem",
              zIndex: "9999",
            }}
            editorId={id}
            scrollElement={scrollElement}
          />
          <MdPreview editorId={id} modelValue={value} />
        </>
      )}
    </>
  )
}
