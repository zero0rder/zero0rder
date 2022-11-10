import { useState } from "react"
import{ init, send } from '@emailjs/browser'
import { emailVARS } from '../utils/email/emailData'
init(emailVARS.UserID)

const useEmailService = () => {
    const [status, setStatus] = useState(null)
    const handleSubmit = (data) => {
        send(emailVARS.ServiceID, emailVARS.TemplateID, {
            from_name: data.subject,
            to_name: emailVARS.ToName,
            message: data.message,
            reply_to: data.sender,
        }, emailVARS.UserID).then((result) => {
            setStatus(() => result.status)
        }, (error) => {
            console.log('oops, something went wrong', error.text)
        })
    }

    return { handleSubmit, status }
}

export default useEmailService