import { NavLink } from 'react-router-dom';
const SignedOutLinks = () => {
    return ( 
        <ul className="right">
            <li><NavLink to='/'>Sign Up</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
        </ul>
     );
}
 
export default SignedOutLinks;