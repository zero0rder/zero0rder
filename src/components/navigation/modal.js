import { useState } from "react";

const Modal = ({setIsOpen}) => {
    const [emailData, setEmailData] = useState({name: '', email: '', message: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        //send email using provided emailData 
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
            <div className="modal-overlay" onClick={() => setIsOpen(false)}></div>
            <div className="modal-content">
                <section>
                    <div className='modal-title'>Contact Me!</div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Name:</span>
                            <input value={ emailData.name } onChange={ handleChange } type='text' name='name' />
                        </label>
                        <label>
                            <span>Email:</span>
                            <input value={ emailData.email } onChange={ handleChange } type='email' name='email' />
                        </label>
                        <label>
                            <span>Message:</span>
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