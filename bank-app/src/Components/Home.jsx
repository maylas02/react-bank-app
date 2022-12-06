import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Widget } from './Widget'


export const Admin = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="earnings" />
                    <Widget type="balance" />
                </div>
            </div>
        </div>
    )
}


