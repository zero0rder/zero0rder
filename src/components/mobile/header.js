import { MobileHeaderContainer } from './styled'
import { useLocation } from 'react-router-dom'

export const MobileHeader  = () => {
    const location = useLocation()
    const setTitle = () => {
        let title = location?.pathname.replace('/', '')
        if(title === 'overview') return 'zero0rder'
        return title
    }

    return (
        <MobileHeaderContainer>
            <span>{ setTitle() }</span>
        </MobileHeaderContainer>
    )
}