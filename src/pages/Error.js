import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section error-page">
      <di className="error-container">
        <h1>404 Page Not  Found</h1>
        <Link to='/' className='btn btn-primary'>
          Back Home
        </Link>
      </di>
    </section>
  )
}

export default Error
