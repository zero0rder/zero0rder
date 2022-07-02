import { MobileEmailContainer } from '../styled';

export const MobileEmail = () => {

    return (
        <MobileEmailContainer>
            <h2>Email Me!</h2>
            <form>
                <label>
                    <input placeholder='Your Email' type='email' name='email' />
                </label>
                <label>
                    <input placeholder='Subject' type='text' name='name' />
                </label>
                <label>
                    <textarea type='message' name='message' />
                </label>
                <div className='submit-container'>
                    <input type='submit' value='Send' />
                </div>
            </form>
        </MobileEmailContainer>
    )
}