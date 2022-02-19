import React from "react"
import { useHistory } from "react-router-dom"
const Root = () => {
  const history = useHistory()

  return (
    <div>
      I am the root of page two
      <button onClick={() => history.push("/")}>Go to root</button>
    </div>
  )
}

export default Root
