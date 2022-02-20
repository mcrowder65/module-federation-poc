import React from "react"
import { Link, useHistory } from "react-router-dom"
import styled from "@emotion/styled"
const Div = styled.div``
const Root = () => {
  return (
    <Div>
      I am the root of page two
      <a href="/">Root</a>
    </Div>
  )
}

export default Root
