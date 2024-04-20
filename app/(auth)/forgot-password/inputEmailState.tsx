import React from 'react'
import CreateAccountTermsText from '../../../components/common/createAccountTermsText'
import TextInput from '@ilhamirfan/components/input/textInput'
import PrimaryButton from '@ilhamirfan/components/input/button/primaryButton'
import Copyright from '@ilhamirfan/components/common/copyright'

export default function InputEmailState() {
    return (
        <div className='row h-100'>
            <div className='col-12 col-lg-6 form-container flex-column d-flex'>
                <div className='flex-grow-1'>

                    <h3 className='form-title'>Forgot your password ?</h3>
                    <p className='form-desc'>Confirm your username and we&apos;ll send you a link to reset your password.</p>

                    <form>
                        <TextInput label='Email Address' placeholder='Enter your email address' name='email' type='email' />

                        <PrimaryButton className="mt-4" title='Continue' />
                    </form>

                    <hr />

                    <CreateAccountTermsText />
                </div>

                <Copyright />
            </div>
            <div className='col-6 d-none d-lg-block mosque-background'>
            </div>
        </div>
    )
}
