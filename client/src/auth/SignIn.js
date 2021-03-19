import React, { useRef } from 'react'

//components
import useApi from '../hooks/useApi'
import { NavLink } from 'react-router-dom'
import TextHero from '../shared/hero/TextHero'
// styles
import { Wrapper, Form, InputGroup, Input, Button, Parag } from './Form.element'

const SignIn = () => {
  const pass = useRef()
  const email = useRef()

  let handleLogin = async () => {
    await useApi.get('/sanctum/csrf-cookie')
    await useApi
      .post('/login', {
        email: email.current.value,
        password: pass.current.value,
      })
      .then((response) => {
        console.log(response.data)
      })
    useApi.get('/api/user').then((res) => console.log(res.data))
  }

  return (
    <>
      <Wrapper>
        <NavLink to='/'>
          <TextHero text='medespoir shop' />
        </NavLink>
        <Form>
          <InputGroup>
            <Input
              type='email'
              autoComplete='no'
              placeholder='email'
              ref={email}
            />
          </InputGroup>
          <InputGroup>
            <Input type='password' placeholder='password' ref={pass} />
          </InputGroup>
          <InputGroup>
            <Button onClick={handleLogin}>sign in</Button>
          </InputGroup>
          <InputGroup>
            <Parag level={5}>
              forgot your password ? <NavLink to='/'>reset here</NavLink>
            </Parag>
            <Parag level={5}>
              you don't have account ?{' '}
              <NavLink to='/register'>create here</NavLink>
            </Parag>
          </InputGroup>
        </Form>
      </Wrapper>
    </>
  )
}

export default SignIn
