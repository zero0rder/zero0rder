import { MobileEmailContainer, MobileEmailSent } from '../styled'
import useEmailService from '../../../hooks/useEmailService'

export const MobileEmail = () => {
    const { handleChange, handleSubmit, emailData, status } = useEmailService({ name: '', email: '', message: '' })

    return (
        <>
            {
                status === 200
                    ? <MobileEmailSent>
                        <h2>Email Sent!</h2>
                        <iconify-icon icon="bi:check-circle"></iconify-icon>
                     </MobileEmailSent> 
                    : <MobileEmailContainer>
                        <form onSubmit={ handleSubmit }>
                            <div className='label-container'>
                                <label>
                                    <input placeholder='Your Email' type='email' name='email' value={ emailData.email } onChange={ handleChange } />
                                </label>
                                <label>
                                    <input placeholder='Subject' type='text' name='name' value={ emailData.name } onChange={ handleChange } />
                                </label>
                                <label>
                                    <textarea type='message' name='message' value={ emailData.message } onChange={ handleChange } />
                                </label>
                            </div>
                            <div className='submit-container'>
                                <input type='submit' value='Send' />
                            </div>
                        </form>
                    </MobileEmailContainer>
            }
        </>
    )
}