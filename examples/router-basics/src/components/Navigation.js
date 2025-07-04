import {Link, NavLink} from 'react-router-dom'

function Navigation(){
    return(
        <div>
            <ul className='navbar'>
               <li><NavLink className='navlink' to = '/contact'>Contact</NavLink></li> 
                <li><NavLink className='navlink' to = '/about'>About</NavLink></li>
                <li><NavLink className='navlink' to = '/filter'>Filter</NavLink></li>

            </ul>
        </div>
    );
}

export default Navigation ;