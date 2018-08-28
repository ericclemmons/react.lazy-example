import React, { lazy, PureComponent } from "react"

export default function Lazy({ load, render, ...rest }) {
  const LazyRender = lazy(async () => {
    const state = await load(rest)

    return () => render(...rest, ...state)
  })

  return <LazyRender />
}
