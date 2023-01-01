import { Link } from "gatsby"
import * as React from "react"

function PostTile({ img, title, excerpt, slug, published }) {

  if(published) {
    return (
      <>
    <Link to={`/blog/`+slug}>
      <div className="flex flex-row mb-8">
        <img
          src={img}
          className="w-[20rem] h-[15rem] object-cover ml-2 rounded-2xl"
        />
        <div className="flex flex-col mt-4 ml-4">
          <h4 className="font-semibold text-2xl">{title}</h4>
          <p className="text-base mt-2">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
    </>
    )
  } else {
    <></>
  }
}

export default PostTile
