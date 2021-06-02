import React from 'react';
import { useState } from 'react'
import './Login.css'
import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'
import Layout from "../../components/Layout/Layout"

const Login = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button  type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button className="login-button" type='submit'>Sign In</button>
    }
  }

  const { email, password } = form

  return (
    
    <Layout className="layout-div">
    <div className='login-container'>
      <h3>Sign In</h3>
      <form className='login-form' onSubmit={onSignIn}>
        <label>Email</label>
        <input
          required
          type='text'
          name='email'
          value={email}
          placeholder='Enter Email'
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
        {renderError()}
      </form>
      </div>
      </Layout>
      
  )

};

export default Login;