import React from 'react'

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    )

    return <div>Hi There</div>
  }
}

export default App
