import React from 'react'

import "./Graph.css"

import LeftData from "./LeftData/LeftData"
import RightGraph from "./RightGraph/RightGraph"

function Graph() {
  return (
    <div className='graph'>
      <LeftData />
      <RightGraph />
    </div>
  )
}

export default Graph