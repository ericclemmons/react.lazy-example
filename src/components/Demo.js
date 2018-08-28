import React, { Placeholder } from "react"
import Repos from "./Repos"
import Lazy from "./Lazy"

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user: null
    }
  }

  render() {
    const { user } = this.state

    return (
      <main>
        <form
          onSubmit={event => {
            event.preventDefault()
            this.setState({ user: window.user.value })
          }}
        >
          <fieldset>
            <label>GitHub User</label>

            <div className="row">
              <div className="column">
                <input id="user" defaultValue="ericclemmons" />
              </div>
              <div className="column">
                <button type="submit">Load</button>
              </div>
            </div>
          </fieldset>
        </form>

        {user && (
          <Placeholder delayMs={50} fallback={"Loading repos..."}>
            <Repos user={user} />
          </Placeholder>
        )}
      </main>
    )
  }
}
