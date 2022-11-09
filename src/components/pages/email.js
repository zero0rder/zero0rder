import React from 'react'
import { EmailContainer } from './styled'
import { Button, Form, Input, Card } from 'antd'
const { TextArea } = Input

const Email = () => {
    const onFinish = (e) => { console.log(e) }
    const onFinishFailed = (e) => { console.log(e) }

    return (
        <EmailContainer span={24}>
            <Card>
                <Form
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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
        </EmailContainer>
    )
}

export default Email