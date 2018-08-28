import React from "react"
import { unstable_createRoot as createRoot } from "react-dom"

// import App from "./components/App"

import README from "../README"

// React + Parcel HMR appends to the DOM instead of replacing
if (process.env.NODE_ENV === "development") {
  window.root.innerHTML = ""
}

createRoot(window.root).render(<README />)

// createRoot(window.root).render(<App />)
