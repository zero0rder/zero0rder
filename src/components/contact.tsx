import React, { useState, forwardRef } from 'react'
import { useForm } from 'react-hook-form'
import{ init, send } from '@emailjs/browser'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import{ ContactWrap, 
SectionTitle, 
EmailSent, 
SentText, 
FormWrap, 
MainForm, 
FormInput, 
ValidationMsg, 
FormTextArea, 
FormButton } from './styled/contact'

const email_vars = {
    UserID: import.meta.env.VITE_USER_ID,
    TemplateID: import.meta.env.VITE_TEMPLATE_ID,
    ServiceID: import.meta.env.VITE_SERVICE_ID,
    ToName: import.meta.env.VITE_NAME
}

init(email_vars.UserID)

interface ContactProps {
    ref: React.Ref<HTMLDivElement | null>
}

//todo: fix type error
// @ts-ignore 
const Contact: React.FC<ContactProps> = forwardRef(({}, ref: React.Ref<HTMLDivElement>) => {
    return (
        <ContactWrap ref={ref}>
            <SectionTitle>Contact</SectionTitle>
            <ContactForm/>
        </ContactWrap>
    )
})

interface EmailInterface {
    email: string;
    message: string;
    subject: string;
}

const ContactForm: React.FC<{}> = ({}) => {
    const [status, setStatus] = useState<number | null>(null)
    const { 
        register, 
        handleSubmit, 
        formState: { errors } } = useForm({
        defaultValues: {
        email: '',
        subject: '',
        message: ''
    }})

    function sendEmail(data: EmailInterface){
        send(email_vars.ServiceID, email_vars.TemplateID, {
            reply_to: data.email,
            from_name: data.subject,
            message: data.message,
            to_name: email_vars.ToName,
        }, email_vars.UserID).then(res => setStatus(res.status),
        (error) => console.error('error sending email: ', error.text))
    }

    return (
        <>
            { status 
                ? <EmailSent>
                        <AiOutlineCheckCircle/>
                        <SentText>Email Sent!</SentText>
                  </EmailSent>
                : <FormWrap>
                    <MainForm onSubmit={handleSubmit(s => sendEmail(s), e => console.error('error sending email: ', e))}>
                        <FormInput autoComplete='off' {...register('email', { required: true })} placeholder='reply email'/>
                        {errors.email && <ValidationMsg>email is required.</ValidationMsg>}
                        <FormInput autoComplete='off' {...register('subject', { required: true })} placeholder='subject'/>
                        {errors.subject && <ValidationMsg>subject is required.</ValidationMsg>}
                        <FormTextArea autoComplete='off' {...register('message', { required: true })} placeholder='message...' />
                        {errors.message && <ValidationMsg>please enter message.</ValidationMsg>}
                        <FormButton type='submit' />
                    </MainForm>
                </FormWrap>
            }
        </>
    )
}

export default Contact