import React from "react"
import { useHistory } from "react-router-dom"
import styled from "@emotion/styled"
const Div = styled.div``
const Root = () => {
  const history = useHistory()

  return (
    <Div>
      I am the root of page two
      <button onClick={() => history.push("/")}>Go to root</button>
    </Div>
  )
}

export default Root
