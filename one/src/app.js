import React from "react"
const RemoteApp = React.lazy(() => import("app2/app"))

function App() {
  return (
    <div>
      I am app one
      <React.Suspense fallback={"loading..."}>
        <RemoteApp />
      </React.Suspense>
    </div>
  )
}

export default App
