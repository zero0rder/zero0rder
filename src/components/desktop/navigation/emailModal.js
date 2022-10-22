import { useEffect } from 'react'
import { ModalOverlay, EmailModalContent, EmailContentSection, EmailModalHeader, EmailForm, EmailSubmitContainer, EmailSent } from './styled/index'
import useEmailService from '../../../hooks/useEmailService'

const EmailModal = ({ setEmailShow }) => {
    const { handleChange, handleSubmit, emailData, status } = useEmailService({ name: '', email: '', message: '' })
    
    useEffect(() => {
        if(status === 200){
            setTimeout(() => {
                setEmailShow(false)
            }, 2500)
        }
    }, [status, setEmailShow])

    return (
        <>
            <ModalOverlay onClick={() => setEmailShow(false)}></ModalOverlay>
            {
                status === 200
                    ? <EmailSent>
                        <h2>Email Sent!</h2>
                        <iconify-icon icon="bi:check-circle"></iconify-icon>
                      </EmailSent>
                    : <EmailModalContent>
                        <EmailContentSection>
                            <EmailModalHeader>
                                <span>{ emailData.name === '' ? 'New Message' : emailData.name }</span>
                                <div>
                                    {/* <span className='minimize-email'>
                                        <span className="iconify" data-icon="icon-park:minus"></span>
                                    </span> */}
                                    <span className='close-email' onClick={() => setEmailShow(false)}>
                                        <span className="iconify" data-icon="icon-park:close-small"></span>
                                    </span>
                                </div>
                            </EmailModalHeader>
                            <EmailForm onSubmit={ handleSubmit }>
                                <label>
                                    <input placeholder='Your Email' value={ emailData.email } onChange={ handleChange } type='email' name='email' />
                                </label>
                                <label>
                                    <input placeholder='Subject' value={ emailData.name } onChange={ handleChange } type='text' name='name' />
                                </label>
                                <label>
                                    <textarea value={ emailData.message } onChange={ handleChange } type='message' name='message' />
                                </label>
                                <EmailSubmitContainer>
                                    <input type='submit' value='Send' />
                                </EmailSubmitContainer>
                            </EmailForm>
                        </EmailContentSection>
                    </EmailModalContent>
            }
        </>
    )
}

export default EmailModal