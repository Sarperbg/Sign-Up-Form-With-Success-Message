import React from 'react'
import LeftComponent from '../components/LeftComponent'
import RightComponent from '../components/RightComponent'

const SignUpForm = () => {
  return (
    <div className='flex justify-center w-1/2 mx-auto rounded-3xl bg-white mt-32'>
      <LeftComponent />
      <RightComponent />
    </div>
  )
}

export default SignUpForm