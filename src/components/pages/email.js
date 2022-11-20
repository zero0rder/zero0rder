import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { EmailContainer } from './styled'
import useEmailService from '../../hooks/useEmailService'
import { Button, Form, Input, Card, Result } from 'antd'
const { TextArea } = Input

const Email = () => {
    const { handleSubmit, status } = useEmailService()
    const screens = useOutletContext()
    return (
        <EmailContainer vpmd={`${screens.md}`} span={24}>
            {  status === 200 
                    ? <Result
                        status='success'
                        title='Success!'
                        subTitle='Email has been sent'
                        /> 
                    : <Card>
                        <Form
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            initialValues={{ remember: true }}
                            onFinish={handleSubmit}
                            autoComplete='off'>
                            <Form.Item
                            label="Your Email"
                            name="sender"
                            rules={[{ required: true, message: 'Please input your email address!' }]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item
                            label="Subject"
                            name="subject"
                            rules={[{ required: true, message: 'Please input the message subject!' }]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item
                            label="Message"
                            name="message"
                            rules={[{ required: true, message: 'Please input your message!' }]}>
                                <TextArea rows={8}/>
                            </Form.Item>
                            <Form.Item wrapperCol={{ span: 24 }}>
                                <Button type="primary" htmlType="submit">Send</Button>
                            </Form.Item>
                        </Form>
                    </Card>
            }
        </EmailContainer>
    )
}

export default Email