import React from 'react'
import { Link } from 'react-router-dom'

function Logo({width='100px'}) {
  return (
    <div>
      <Link to="/">
          <img width="40" height="40" src="https://img.icons8.com/?size=100&id=18900&format=png&color=000000" alt="blog"/>
      </Link>
    </div>
  )
}

export default Logo