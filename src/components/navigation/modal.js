import { useState } from "react";
import{ init, send } from '@emailjs/browser';
import apiData from '../../utils/email/emailData';
init(apiData.UserID);

const Modal = ({ setEmailShow }) => {
    const [emailData, setEmailData] = useState({name: '', email: '', message: ''});

    const sendEmail = (e) => {
        e.preventDefault();

        send(apiData.ServiceID, apiData.TemplateID, {
            from_name: emailData.name,
            to_name: "Eli Smith",
            message: emailData.message,
            reply_to: emailData.email,
        }, apiData.UserID).then((result) => {
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
            <div className='modal-overlay' onClick={() => setEmailShow(false)}></div>
            <div className='modal-content'>
                <section>
                    <div className='email-modal-header'>
                        <span>New Message</span>
                        <div>
                            <span className='minimize-email'>
                                <span className="iconify" data-icon="icon-park:minus"></span>
                            </span>
                            <span className='close-email' onClick={() => setEmailShow(false)}>
                                <span className="iconify" data-icon="icon-park:close-small"></span>
                            </span>
                        </div>
                    </div>
                    <form onSubmit={ sendEmail }>
                        <label>
                            <input placeholder='Your Email' value={ emailData.email } onChange={ handleChange } type='email' name='email' />
                        </label>
                        <label>
                            <input placeholder='Subject' value={ emailData.name } onChange={ handleChange } type='text' name='name' />
                        </label>
                        <label>
                            <textarea value={ emailData.message } onChange={ handleChange } type='message' name='message' />
                        </label>
                        <div className='submit-container'>
                            <input type='submit' value='Send' />
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}

export default Modal;