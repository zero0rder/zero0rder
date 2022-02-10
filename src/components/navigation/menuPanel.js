import { Link } from 'react-router-dom';
import {HiOutlineHome, HiOutlineCode, HiOutlineUser} from 'react-icons/hi';
import { BiMessageRoundedDetail } from 'react-icons/bi';
//const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const MenuPanel = () => {
    return (
        <aside className='menu-panel'>
            <section className="p-4">
                <ul>
                    <li className='p-1 menu-item'>
                        <Link to='/'>
                            <span>Home</span>
                            <span><HiOutlineHome/></span>
                        </Link>
                    </li>
                    <li className='p-1 menu-item'>
                        <Link to='projects'>
                            <span>Open Source</span>
                            <span><HiOutlineCode/></span>
                        </Link>
                    </li>
                    <li className='p-1 menu-item'>
                        <Link to='about'>
                            <span>About</span>
                            <span><HiOutlineUser/></span>
                        </Link>
                    </li>
                    <li className='p-1 menu-item'>
                        <Link to='contact'>
                            <span>Contact</span>
                            <span><BiMessageRoundedDetail/></span>
                        </Link>
                    </li>
                </ul>
            </section>
        </aside>
    )
}

export default MenuPanel;