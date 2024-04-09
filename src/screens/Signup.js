import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:4000/api/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      })

      const json = await response.json()
      console.log(json)

      if (!json.success) {
        alert('Enter valid details')
        return
      }

      alert('User created successfully')
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred while creating the user')
    }
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div className="container">
        <htmlForm onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="htmlForm-label">
              User Name
            </label>
            <input
              type="text"
              className="htmlForm-control"
              name="name"
              value={credentials.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="htmlForm-label">
              Email address
            </label>
            <input
              type="email"
              className="htmlForm-control"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="htmlForm-text"></div>
            We'll never share your email with anyone else.
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="htmlForm-label">
              Password
            </label>
            <input
              type="password"
              className="htmlForm-control"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="htmlForm-label">
              Address
            </label>
            <input
              type="text"
              className="htmlForm-control"
              name="geolocation"
              value={credentials.geolocation}
              onChange={handleChange}
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already registered User
          </Link>
        </htmlForm>
      </div>
    </>
  )
}
