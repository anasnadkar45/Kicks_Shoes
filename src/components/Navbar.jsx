import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react';
import Signup from '../pages/Signup';
import Button1 from './Button1';
function Navbar({ isLoggedIn, setIsLoggedIn, isSignUp, setIsSignUp, formData }) {

    return (
        <div className='flex justify-between items-center 
        bg-white p-4 rounded-2xl'>
            {/* navbar */}
            <nav>
                <ul className='flex space-x-4'>
                    <li className='text-white'>
                        <NavLink to="/newdrop" className='text-black font-bold'>
                            NewDrop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/men" className='text-black font-bold'>
                            Men
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/women" className='text-black font-bold'>
                            Women
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* logo */}
            <div className="flex  ml-40">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>

            <div className='flex justify-center items-center space-x-4'>
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="md"
                    endContent={<img src={search} />}
                    type="search"
                />

                {
                    (!isLoggedIn && !isSignUp) &&
                    <Link to="/login">
                        <Button1 text="Login" />
                    </Link>
                }

                {
                    (!isLoggedIn && !isSignUp) &&
                    <Link to="/signup">
                        <Button1 text="Signup" />
                    </Link>
                }

                {
                    (isLoggedIn || isSignUp) &&
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform p-0"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src={formData.profile}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <Link to="/userdetails">
                                    <p className="font-semibold text-black">Signed in as</p>
                                    <p className="font-semibold">{formData.email}</p>
                                </Link>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger" onClick={() => {
                                setIsSignUp(false);
                                setIsLoggedIn(false)
                            }}>
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                }

                {
                    (isLoggedIn || isSignUp) &&
                    <Link to="/cart">
                        <FaShoppingBag />
                    </Link>
                }

            </div>
            
        </div>
    )
}

export default Navbar