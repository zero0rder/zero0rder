import React from 'react'
import { Result404 } from './styled'
import { Button } from 'antd'

const Blog = () => {
    return (
        <Result404
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
        />
    )
}

export default Blog