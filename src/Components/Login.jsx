import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setAdminEmail('')
        setAdminPassword('')
    }

    const adminAccount = {
        email: 'admin@email.com',
        password: 'admin123'
    }

    const handleLoginButton = () => {
        if(adminEmail === adminAccount.email && adminPassword === adminAccount.password) {
            alert('Logged in')
            navigate('/userdashboard')
        } else if(!adminEmail || !adminPassword) {
            alert('Please fill up the form')
        } else if(adminEmail !== adminAccount.email || adminPassword !== adminAccount.password) {
            alert('Details do not match')
        }

        const account = JSON.parse(localStorage.getItem('accounts'))
        console.log(account)
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-fuchsia-700 pt-20">
            <form className=" m-auto w-96 h-auto bg-white rounded-md border-none text-center font-Georgia" onSubmit={handleSubmit}>
                    
                    <h1 className="text-center text-3xl font-Ubuntu pt-8">Borcelle.</h1>
                    
                    <label className="block ml-12 mt-8 text-left text-xs" form="email">Email</label>
                    <input className="border-b border-black w-9/12 text-xs p-2 focus:outline-none focus:placeholder:text-white" autoComplete="off" onChange={(e) => setAdminEmail(e.target.value)} value={adminEmail} type="email" placeholder="Type your email" id="email" name="email" />
                    
                    <label className="block ml-12 mt-6 text-left text-xs" form="password">Password</label>
                    <input className="border-b border-black w-9/12 text-xs p-2 focus:outline-none focus:placeholder:text-white" autoComplete="off" onChange={(e) => setAdminPassword(e.target.value)} value={adminPassword} type="password" placeholder="Type your password" id="password" name="password" />
                    {/* <button type="submit">Log in</button> */}
                    
                    <button className="ml-48 text-xs hover:border-b border-black">Forgot Password?</button>
                    
                    <div className="text-center"><button className="bg-gradient-to-r from-cyan-500 to-fuchsia-700 rounded-2xl w-7/12  mt-8 hover:text-white cursor-pointer p-1" onClick={handleLoginButton}>LOGIN</button></div>
                    
                    <div className="text-center mt-5"><span className="text-xs">Or Login Using</span></div>
                
                    <div className="text-center text-2xl">
                        <i className="fa-brands fa-facebook cursor-pointer"></i>
                        <i className="fa-brands fa-twitter px-3 cursor-pointer"></i>
                        <i className="fa-brands fa-google cursor-pointer"></i>
                    </div>
                    
                    <div className="text-center mt-10">
                        <span className="text-xs">OR</span>
                    </div>
                    
                    <div className="text-center"><button className="text-center mb-7 hover:border-b border-black" onClick={ () => navigate('/register')
            }>SIGN UP</button></div>

                
            </form>
            
        </div>
    )
}