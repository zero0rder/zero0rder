const Modal = ({setIsOpen}) => {
    return (
        <>
            <div className="modal-overlay" onClick={() => setIsOpen(false)}></div>
            <div className="modal-content">
                <section>
                    <div className='modal-title'>Contact Me!</div>
                    <form>
                        <label>
                            <span>Name:</span>
                            <input type='text' name='sender_name' />
                        </label>
                        <label>
                            <span>Email:</span>
                            <input type='email' name='sender_email' />
                        </label>
                        <label>
                            <span>Message:</span>
                            <textarea type='message' name='sender_message' />
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