import { useState } from 'react'
import './SignUp.css'
import { signUp } from '../../services/users'
import { useHistory } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

const SignUp = (props) => {
  const history = useHistory()
  
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) =>
  setForm({
    ...form,
    [event.target.name]: event.target.value,
  })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Sign Up</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form

  return (
    <Layout className='edit-screen'>
      <div className='sign-up-banner' style={{ backgroundImage: 'url(https://images.unsplash.com/reserve/2jEqzi01Ru2HBhGLTBgB_MG_5236.jpg?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZSUyMHJpZGluZ3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)' }}> </div>
    <div className='form-container'>
      <h3 className='edit-header'>Sign Up</h3>
      <form onSubmit={onSignUp} className='edit-form'>
    
        <input
          required
          type='text'
          name='username'
          value={username}
          placeholder='Username'
          onChange={handleChange}
        />
        
        <input
          required
          type='email'
          name='email'
          value={email}
          placeholder='Email'
          onChange={handleChange}
        />
       
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
       
        <input
          required
          name='passwordConfirmation'
          value={passwordConfirmation}
          type='password'
          placeholder='Confirm Password'
          onChange={handleChange}
          />
          <div>
        {renderError()} 
        </div>
          
      </form>
    </div>
    </Layout>
  );
};

export default SignUp;