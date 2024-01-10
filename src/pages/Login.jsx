import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { Button } from '@nextui-org/react';
import { GiRoundStar } from "react-icons/gi";
import UserDetails from './UserDetails';
function Login({ isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [showPassword, setShowPasword] = useState(false)
    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault()
        setIsLoggedIn(true)
        toast.success("Logged in")
        navigate("/home", { state:  formData  });
        console.log(formData)
    }
    return (
        <div className='max-width: 1280px h-[80vh] flex justify-center items-center'  >
            <div className='w-[400px] flex flex-col justify-center 
         bg-white rounded-md p-5 gap-5'>
                <div className='flex flex-col '>
                    <h1 className='font-bold text-3xl text-slate-700'>Welcome back!</h1>
                    <p className='text-[12px]'>Enter your email to receive your login link</p>
                </div>

                <form onSubmit={submitHandler} className='flex flex-col gap-3'>
                    <label className=''>
                        <p className='text-left text-[13px]'>Emial</p>
                        <input type="text"
                            placeholder='Email'
                            name='email'
                            value={formData.email}
                            onChange={changeHandler}
                            className='w-full bg-transparent border-2 rounded-md p-2 border-gray-200 focus:outline-none focus:border-2
                            focus:border-[#6366f1]'
                        />
                    </label>
                    <label className='relative'>
                        <p className='text-left text-[13px]'>Password</p>
                        <div className='flex items-center'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Password'
                                name='password'
                                value={formData.password}
                                onChange={changeHandler}
                                className='w-full bg-transparent border-2 rounded-md p-2 border-gray-200 focus:outline-none focus:border-2 focus:border-[#6366f1]'
                            />
                            <span
                                className='absolute right-2 cursor-pointer'
                                onClick={() => setShowPasword((prev) => !prev)}
                            >
                                {showPassword ? <AiOutlineEyeInvisible className='text-gray-400' /> : <AiOutlineEye className='text-gray-400' />}
                            </span>
                        </div>
                    </label>


                    <button className='w-full  text-[#e0e7ff] bg-[#6366f1] 
                    shadow-sm focus:outline-none'>Login</button>
                    <div className='h-[2px] w-full bg-slate-200'></div>
                    <button className='w-full bg-[#e0e7ff] text-[#6366f1]
                    shadow-sm focus:outline-none flex justify-center items-center 
                    text-sm gap-2'>
                        <FcGoogle size="20" />
                        Continue with Google
                    </button>
                </form>

                <p className='text-slate-400 text-[11px] mt-[-10px]'>Not registerd?<span className='underline ml-1'>
                    <NavLink to="/signup">Do it here</NavLink>
                </span></p>

                <div className='flex justify-center items-center gap-2'>
                    <p className='text-slate-400 text-[13px]'>
                        Trusted by +3000 happy users
                    </p>
                    <div className='flex'>
                        <GiRoundStar className='text-yellow-400' />
                        <GiRoundStar className='text-yellow-400' />
                        <GiRoundStar className='text-yellow-400' />
                        <GiRoundStar className='text-yellow-300' />
                        <GiRoundStar className='text-yellow-200' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login