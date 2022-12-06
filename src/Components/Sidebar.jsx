import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HistoryIcon from '@mui/icons-material/History';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';

export const Sidebar = () => {
    return (
        <div className="sideBar">
            <div className="top">
                <span className="logo">Banking App</span>
            </div>
            <div className="center">
                <ul>
                    <li>
                        <DashboardIcon />
                        <span>dashboard</span>
                    </li>
                    <li>
                        <AttachMoneyIcon />
                        <span>Balance</span>
                    </li>
                    <li>
                        <ReceiptLongIcon />
                        <span>Invoice</span>
                    </li>
                    <li>
                        <CreditCardIcon />
                        <span>Card</span>
                    </li>
                    <li>
                        <HistoryIcon />
                        <span>History</span>
                    </li>
                    <li>
                        <InfoIcon />
                        <span>Details</span>
                    </li>
                    <li>
                        <LogoutIcon />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

