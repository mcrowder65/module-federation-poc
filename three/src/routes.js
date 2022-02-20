import React from "react"
import { Route, useHistory } from "react-router-dom"

const Routes = () => {
  return (
    <>
      <Route
        component={function Component() {
          const history = useHistory()

          return (
            <div>
              <p>first three</p>
              <button onClick={() => history.push("/")}>Back to root</button>
            </div>
          )
        }}
        path="/first-three"
      />
      <Route
        component={function Component() {
          const history = useHistory()

          return (
            <div>
              <p>second three</p>
              <button onClick={() => history.push("/")}>Back to root</button>
            </div>
          )
        }}
        path="/second-three"
      />
    </>
  )
}

export default Routes
