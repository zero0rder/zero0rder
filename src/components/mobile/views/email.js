import { MobileEmailContainer } from '../styled'
import useEmailService from '../../../hooks/useEmailService'

export const MobileEmail = () => {
    const { handleChange, handleSubmit, emailData } = useEmailService({ name: '', email: '', message: '' })

    return (
        <MobileEmailContainer>
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
    )
}