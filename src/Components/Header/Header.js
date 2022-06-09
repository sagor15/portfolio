import React from 'react';
import { Outlet } from 'react-router-dom';
import profile from "../../asset/profile.jpg";
import About from '../Home/About';
import Contact from '../Home/Contact';
import { Link, animateScroll as scroll } from "react-scroll";
import Home from '../Home/Home';
import Project from '../Home/Project';

const Header = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col ">

                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
                <Home></Home>
                <About></About>
                <Project></Project>
                <Contact></Contact>

               
                
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>

                <ul class="menu p-4 overflow-y-auto w-80 bg-slate-900 text-white text-base-content">
                
                    <div class="avatar mt-4">
                        <div class="w-40 m-auto rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                            <img src={profile} />
                        </div>
                    </div>
                    
                    
                   
                    
                    
                    <h1 className='text-center mt-3 text-4xl font-sans mb-3'>Sagor Ahammed</h1>
                    <li><Link 
                    
                    to="/home"
                    
                   
                    >Home
                    </Link></li>
                    <li><Link
                    activeClass="active"
                 
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} to="/#about"
                    >about
                    </Link></li>
                    <li><Link 
                    activeClass="active"
                    
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="/#project"
                    >Project
                    </Link></li>
                    <li><Link
                     to="/#contact"
                     >contact</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Header;