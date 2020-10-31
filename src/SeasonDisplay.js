import React from 'react'

const getSeason = (lat, month) => {
  if (month >= 3 && month <= 8) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const text = season === 'winter' ? 'Burr, it is chilly!' : 'Lets hit the beach!'
  const icon = season === 'winter' ? 'snowflake' : 'sun'

  return (
    <div>
      <i className={`${icon} icon`}></i>
      <h1>{text}</h1>
      <i className={`${icon} icon`}></i>
    </div>
  )
}

export default SeasonDisplay
