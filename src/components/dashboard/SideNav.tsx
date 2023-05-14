/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import './SideNav.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-2.png'
import { useMediaQuery } from "@mui/material";
 


const SideNav = ({children}: any) => {
    // console.log("🚀 ~ file: SideNav.tsx:20 ~ SideNav ~ isGroup:", isGroup)
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const user = JSON.parse(localStorage.getItem('login-user') ?? '{}') 
    // const storedObject = JSON.parse(user);
    console.log("🚀 ~ file: SideNav.tsx:24 ~ SideNav ~ user:", user)
    // const isGroup  = false;
    const menuItem=[
        {
            path:"/individual-Profile",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/dashboard-members",
            name:"Member",
            icon:<FaRegChartBar/>
        },
        {
            path:"/individual-Setting",
            name:"Setting",
            icon:<FaCommentAlt/>
        },
        {
            path:"/dashboard-payment",
            name:"Payment",
            icon:<FaShoppingBag/>
        },
        {
            path:"/",
            name:"Logout",
            icon:<FaThList/>
        }
    ]

    if (user.isGroupAdmin) {
        // Modify the 0th index of the copied array
        menuItem[0] = {
          path: "/group-Profile",
          name:"Profile",
          icon:<FaUserAlt/>
        };
      }
    const screenWidth = window.innerWidth; 
    
    const renderSmallScreen = () =>{
        if (screenWidth < 485) {
            setIsOpen(false)
            console.log(screenWidth, "///......");
        }
        // console.log(screenWidth, "///......");
    }
    return (
        <>
        <div className='bg-white shadow-md h-16 flex items-center pl-5'>
        
        <FaBars className='laptop:hidden tabletOnly:hidden text-3xl' onClick={toggle}/>
        <img src={logo} alt="no image found" className="h-16 w-16 pt-3 mobile:hidden tablet:h-14 tablet:w-18" />

      </div>
        <div className="container">
           <div style={{width: isOpen ? "350px" : "0px"}} className="sidebar mobile:z-10" >
               <div className="top_section">
               <img src={logo} alt="no image found" className="h-16 w-16 laptop:hidden tablet:h-14 tablet:w-18" />
                   {/* <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars"> */}
                   {/* <FaBars onClick={toggle}/> */}
                   {/* </div> */}
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className={isOpen ? "link" : "w-0"} onClick={renderSmallScreen} >
                           <div className={isOpen ? "font-bold" : "hidden"}>{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main className='mobile:absolute'>{children}</main>
        </div>
        </>
    );
};

export default SideNav;























