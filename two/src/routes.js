import React from "react"
import { Route } from "react-router-dom"

const Root = React.lazy(() => import("src/pages/root/root"))
const Routes = () => {
  return (
    <>
      <Route
        path="/two"
        component={() => (
          <React.Suspense fallback={null}>
            <Root />
          </React.Suspense>
        )}
        exact
      />
    </>
  )
}

export default Routes
