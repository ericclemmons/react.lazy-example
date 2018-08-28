export default function ReposTable({ repos }) {
  return (
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
}
