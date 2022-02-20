import React from "react"
import { Route, Switch } from "react-router-dom"
import App from "three/src/app"
const RemoteApp = React.lazy(() => import("app2/app"))

const Root = React.lazy(() => import("src/pages/root/root"))
const Routes = () => {
  return (
    <Switch>
      <Route
        path="/"
        component={() => (
          <React.Suspense fallback={null}>
            <Root />
          </React.Suspense>
        )}
        exact
      />
      <Route
        path="/two"
        component={() => (
          <React.Suspense fallback={null}>
            <RemoteApp />
          </React.Suspense>
        )}
      />
      <App />
    </Switch>
  )
}

export default Routes
