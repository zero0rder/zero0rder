import { useState } from "react";
import{ init, send } from '@emailjs/browser';
import { emailVARS } from '../utils/email/emailData';
init(emailVARS.UserID);

const useEmailService = (initialState) => {
    const [emailData, setEmailData] = useState(initialState);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setEmailData({...emailData, [name]: value});
    }

    const handleSubmit = (e) => {
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

    const clear = () => {
        setEmailData(initialState);
    }

    return { handleChange, handleSubmit, emailData }

}

export default useEmailService;