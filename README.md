---

import Demo from "./src/components/Demo"

export default ({ children }) => <div className="container">{children}</div>

---

# `React.lazy` Example

After [@acdlite](https://github.com/acdlite) merged https://github.com/facebook/react/pull/13398,
I was curiuos if it would be possible to render an **async component** like:

```jsx
async function Repos({ user }) {
  const res = await fetch(...)
  const repos = await res.json()

  return <ul>{repos.map(...)}</ul>
}
```

## Demo

> <Demo />

### Local Development

1. Clone this repo.
1. Next, we need a custom build of React with Suspense enabled:

    1. `git submodule update` to install https://github.com/facebook/react/.
    1. `yarn patch` to set `enableSuspense = true`
    1. `yarn build` to build React with Suspense.

1. `yarn install`
1. `yarn dev`
