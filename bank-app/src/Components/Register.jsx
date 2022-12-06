import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




export const Register = () => {
    
    const [name, setName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //localStorage.setItem("accounts", JSON.stringify(userInfo));
        //console.log(userInfo);
        setName('')
        setUserEmail('')
        setUserPass('')
        setConfirmPass('')
        setBirthday('')
        setGender()
        setAge('')
    }

    const handleRegisterButton = () => {
        const userInfo = JSON.parse(localStorage.getItem('accounts')) || []
        userInfo.push({
            name: name,
            userEmail: userEmail,
            userPass: userPass,
            confirmUserPass: confirmPass,
            birthday: birthday,
            gender: gender,
            age: age
        })
        localStorage.setItem("accounts", JSON.stringify(userInfo))
        console.log(userInfo)
        if(!name || !userEmail || !userPass || !confirmPass) {
            alert('Please Complete the Form')
        } else if(userPass !== confirmPass) {
            alert('Password do not match')
        } else {
            alert('Registered')
            //navigate('/')
        }
    }

    return (
        <div className="max-h-full bg-gradient-to-r from-cyan-500 to-fuchsia-700 pt-20 pb-20">
             <form onSubmit={handleSubmit} className=" m-auto w-96 h-auto bg-white rounded-md border-none text-center pb-8 font-Georgia">
                <h1 className="text-center text-3xl font-Ubuntu pt-8">Borcelle.</h1>

                <label className="block ml-12 mt-8 text-left text-xs" from="email" form="name">Name</label>
                <input className="border-b border-black w-9/12 text-xs p-2 focus:outline-none focus:placeholder:text-white" autoComplete="off" onChange={(e) => setName(e.target.value)}
                value={name} type="name" 
                placeholder="Type your Name" id="name" name="name" />

                <label className="block ml-12 mt-6 text-left text-xs" form="email">Email</label>
                <input className="border-b border-black w-9/12 text-xs p-2 focus:outline-none focus:placeholder:text-white" autoComplete="off" onChange={(e) => setUserEmail(e.target.value)} 
                value={userEmail} type="email" 
                placeholder="Type your Email" id="email" name="email" />

                <label className="block ml-12 mt-6 text-left text-xs" form="password">Password</label>
                <input className="border-b border-black w-9/12 text-xs p-2 focus:outline-none focus:placeholder:text-white" autoComplete="off" onChange={(e) => setUserPass(e.target.value)} 
                value={userPass} type="password" 
                placeholder="Type your Password" id="password" name="password" />

                <label className="block ml-12 mt-6 text-left text-xs" form="confirmPassword">Confirm Password</label>
                <input className="border-b border-black w-9/12 text-xs p-2 focus:outline-none focus:placeholder:text-white" autoComplete="off" onChange={(e) => setConfirmPass(e.target.value)} 
                value={confirmPass} type="password" 
                placeholder="Confirm your Password" id="confirmPassword" name="password" />

                <label className="block ml-12 mt-6 text-left text-xs" form="birthday">Birthday</label>
                <input onChange={(e) => setBirthday(e.target.value)}
                value={birthday} type="date"
                min="1990-01-01" max="2050-12-31" />

                {/* <h3 className="block ml-12 mt-6 text-left">Gender:</h3> */}
                {/* <label className="block ml-12 mt-6 text-left" htmlFor="gender"> */}
                    <input className="block ml-12 mt-6 text-left" onChange={(e) => setGender(e.target.value)}
                    value={'male'} type="radio" id="male" name="radio" />Male
                {/* </label> */}
                
                {/* <label className="block ml-12 mt-6 text-left" htmlFor="gender"> */}
                    <input className="block ml-12 mt-6 text-left" onChange={(e) => setGender(e.target.value)}
                    value={'female'} type="radio" id="female" name="radio" />Female
                {/* </label> */}

                <label className="block ml-12 mt-6 text-left text-xs" htmlFor="age">Enter your age
                    <input className="border-b border-black ml-7 text-xs p-2 focus:outline-none focus:placeholder:text-white" autoComplete="off" onChange={(e) => setAge(e.target.value)}
                    value={age} type="number" id="age" name="age" min="1" max="150" />
                </label>

                <button className="bg-gradient-to-r from-cyan-500 to-fuchsia-700 rounded-2xl w-7/12  mt-8 hover:text-white cursor-pointer p-1" type="submit" onClick={handleRegisterButton}>Register</button>

                    <div className="text-center mt-10">
                        <span className="text-xs">OR</span>
                    </div>
                    
                    <div className="text-center"><button className="text-center mb-7        hover:border-b border-black" onClick={ () => navigate('/')
                        }>LOGIN</button>
                    </div>
            </form> 
        </div>
    )
}
