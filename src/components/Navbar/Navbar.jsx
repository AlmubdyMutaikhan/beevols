import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    /*const { isAuthenticated } = useAuth();
    const [isAuth, setAuth] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const status = await isAuthenticated();
            setAuth(status);
        }
        checkAuth();
    }, []);*/


    
    return(
        <div className="navbar-container">
            <div className="navbar-items-container">
                <ul>
                    <li>
                        <NavLink exact to="/">
                            Бас мәзір
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/news">
                            Жаңалықтар
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/groups">
                            Топтар
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">
                            Іс-шаралар
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">
                            Есеп
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">
                            Біз туралы
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;