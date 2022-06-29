import { useState } from "react";
import{ init, send } from '@emailjs/browser';
import { emailVARS } from '../../utils/email/emailData';
import { ModalOverlay, EmailModalContent, EmailContentSection, EmailModalHeader, EmailForm, EmailSubmitContainer } from './styled/index';

init(emailVARS.UserID);

const EmailModal = ({ setEmailShow }) => {
    const [emailData, setEmailData] = useState({name: '', email: '', message: ''});

    const sendEmail = (e) => {
        e.preventDefault();

        send(emailVARS.ServiceID, emailVARS.TemplateID, {
            from_name: emailData.name,
            to_name: emailData.ToName,
            message: emailData.message,
            reply_to: emailData.email,
        }, emailVARS.UserID).then((result) => {
            console.log('success', result.text);
        }, (error) => {
            console.log('oops, something went wrong', error.text);
        });

        clear();
    }

    const handleChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setEmailData({...emailData, [name]: value});
    }

    const clear = () => {
        setEmailData({name: '', email: '', message: ''});
    }
    
    return (
        <>
            <ModalOverlay onClick={() => setEmailShow(false)}></ModalOverlay>
            <EmailModalContent className='modal-content'>
                <EmailContentSection>
                    <EmailModalHeader>
                        <span>New Message</span>
                        <div>
                            <span className='minimize-email'>
                                <span className="iconify" data-icon="icon-park:minus"></span>
                            </span>
                            <span className='close-email' onClick={() => setEmailShow(false)}>
                                <span className="iconify" data-icon="icon-park:close-small"></span>
                            </span>
                        </div>
                    </EmailModalHeader>
                    <EmailForm onSubmit={ sendEmail }>
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
        </>
    )
}

export default EmailModal;