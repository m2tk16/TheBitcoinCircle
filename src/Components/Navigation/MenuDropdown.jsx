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
        <>
            <div className="navigationWrapper">

                <Menu className="navigationMenu" triggerClassName="navigationTrigger">
                    <MenuItem className="MenuItem" isFullWidth="false" size="small" onClick={() => handleMenuItemClick('/dashboard')}>Dashboard</MenuItem>
                    <MenuItem className="MenuItem" isFullWidth="false" size="small" onClick={() => handleMenuItemClick('/')}>About</MenuItem>
                    <Divider/>
                    <MenuItem className="MenuItem" isFullWidth="false" size="small" onClick={() => handleMenuItemClick('/login')}>Login</MenuItem>
                    <Divider/>
                    <MenuItem className="MenuItem" isFullWidth="false" size="small" onClick={() => handleMenuItemClick('/settings')}>Settings</MenuItem>
                </Menu>
            </div>
        </>
    )
}
export default Navigation;