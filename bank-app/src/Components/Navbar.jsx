import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                    <LanguageOutlinedIcon />
                    English
                    </div>
                    <div className="item">
                    <EmailOutlinedIcon />
                    Mail
                    </div>
                    <div className="item">
                    <NotificationsNoneOutlinedIcon />
                    Notification
                    </div>
                </div>
            </div>
        </div>
    )
}
