import React from "react"
import { useHistory } from "react-router-dom"
const Root = () => {
  const history = useHistory()
  return (
    <div>
      i am the root of page one
      <button onClick={() => history.push("/two")}>Go to two</button>
    </div>
  )
}

export default Root
