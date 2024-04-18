import Image from 'next/image'
import React from 'react'

import backgroundImage from '@ilhamirfan/public/image/background.png'
import TextInput from '@ilhamirfan/components/input/textInput'
import PasswordInput from '@ilhamirfan/components/input/passwordInput'

export default function LoginPage() {
  return (
    <div className='row h-100'>
      <div className='col-6 form-container'>
        <h3 className='form-title'>Sign in to manage your property</h3>
        <p className='form-desc'>Create an account to list and manage your property.</p>

        <form>
          <TextInput label='Email Address' placeholder='Enter your email address' name='email' type='email' />

          <PasswordInput label='Password' placeholder='Enter your password' name='password' />
        </form>
      </div>
      <div className='col-6 mosque-background'>
      </div>
    </div>
  )
}
