import React from "react"
import Providers from "src/providers"
import Routes from "src/routes"

function App() {
  return (
    <div>
      <Providers>
        <Routes />
      </Providers>
    </div>
  )
}

export default App
