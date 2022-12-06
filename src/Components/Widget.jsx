import React from 'react'
//import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

export const Widget = ({ type }) => {

    let data;

    //temporary
    const amount = 100;
    const diff =  20;

    switch (type) {
      case "user":
        data={
          title: "Users",
          isMoney: false,
          link: "See all users",
          icon: <PersonOutlineOutlinedIcon className="icon" />,
        };
        break;
        case "earnings":
        data={
          title: "earnings",
          isMoney: true,
          link: "View all earnings",
          icon: <MonetizationOnOutlinedIcon className="icon" />,
        };
        break;
        case "balance":
        data={
          title: "Balance",
          isMoney: true,
          link: "See all users",
          icon: <AccountBalanceWalletOutlinedIcon className="icon" />,
        };
        break;
        default:
        break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} { amount }</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage">
            {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

