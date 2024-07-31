import { Menu, MenuItem, Divider } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import './styles.css';

const Navigation = () => {

    const navigate = useNavigate();

    const handleMenuItemClick = (route) => {
        navigate(route);
    };

    return (
        <div className="navigationWrapper">
            <Menu className="navigationMenu" triggerClassName="navigationTrigger">
                <MenuItem onClick={() => handleMenuItemClick('/dashboard')}>Dashboard</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('/about')}>About</MenuItem>
                <Divider/>
                <MenuItem onClick={() => handleMenuItemClick('/login')}>Login</MenuItem>
                <Divider/>
                <MenuItem onClick={() => handleMenuItemClick('/settings')}>Settings</MenuItem>
            </Menu>
        </div>
    )
}
export default Navigation;