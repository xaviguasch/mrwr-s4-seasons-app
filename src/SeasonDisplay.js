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

  return <div>{season}</div>
}

export default SeasonDisplay
