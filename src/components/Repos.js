import { memoize } from "lodash"
import React, { lazy } from "react"

export default memoize(function Repos({ user }) {
  const LazyList = lazy(async () => {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?sort=updated`
    )
    const repos = await res.json()

    if (!res.ok) {
      throw new Error(repos.message)
    }

    return () => (
      <table>
        <thead>
          <tr>
            <th>Repo</th>
            <td>Description</td>
            <td style={{ textAlign: "right" }}>🌟</td>
          </tr>
        </thead>
        <tbody>
          {repos.map(repo => (
            <tr key={repo.full_name}>
              <th>
                <a href={repo.html_url}>{repo.full_name}</a>
              </th>
              <td>{repo.description}</td>
              <td style={{ textAlign: "right" }}>
                {repo.stargazers_count.toLocaleString()}&nbsp;🌟
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  })

  return <LazyList />
})
