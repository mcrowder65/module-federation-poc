import React from "react"
import { Link } from "react-router-dom"
import { css } from "@emotion/react"

const Root = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <p>i am the root of page one</p>
      <Link to="/two">Two</Link>
      <Link to="/first-three">First three</Link>
      <Link to="/second-three">Second three</Link>
    </div>
  )
}

export default Root
