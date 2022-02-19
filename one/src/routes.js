import React from "react"
import { Route, Switch } from "react-router-dom"
const RemoteApp = React.lazy(() => import("app2/app"))

const Root = React.lazy(() => import("src/pages/root/root"))
const Routes = () => {
  return (
    <Switch>
      <Route
        path="/two"
        component={() => (
          <React.Suspense fallback={null}>
            <RemoteApp />
          </React.Suspense>
        )}
        exact
      />
      <Route
        path="/"
        component={() => (
          <React.Suspense fallback={null}>
            <Root />
          </React.Suspense>
        )}
        exact
      />
    </Switch>
  )
}

export default Routes
