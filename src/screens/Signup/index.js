import React from 'react'
import { Card as RCard } from 'reactstrap'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import Container from '../../components/Container'
import Navbar from '../../containers/Navbar'
import colors from '../../styles/colors'
import SignupForm from './SignupForm'

const Card = styled(RCard)`
  border-radius: 3px;
  max-width: 45vw;
`

const WrappedContainer = styled(Container)`
  min-height: calc(100vh - 130px);
`

const Text = styled.h3`
  font-weight: bold;
`

const Signup = ({ auth }) => {
  if (auth.isAuthenticated) {
    return (<Redirect to='/' />)
  }
  return ([
    <Navbar />,
    <WrappedContainer fluid color={colors.light} className='py-5'>
      <Text className='text-muted text-center mb-4'>Join Projectwise</Text>
      <Card body className='mx-5 my-3 mx-auto'>
        <SignupForm />
      </Card>
      <p className='mt-1 text-center'>Already have an account? <Link to='/login'>Login</Link></p>
    </WrappedContainer>
  ])
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Signup)
