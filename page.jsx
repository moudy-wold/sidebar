'use client';
import React,{useRef} from 'react'
import "./style.css";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineProfile } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { AiFillContacts } from 'react-icons/ai';
import { GoSignOut } from 'react-icons/go';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
function SideBar() {

const items=[
  {
  title:"Home",
  url:"/",
  icon:<AiOutlineHome />,
},
  {
  title:"Profile",
  url:"/",
  icon:<AiOutlineProfile />,
},
{
  title:" Setting",
  url:"/",
  icon:<AiFillSetting />,
},
{
  title:"About",
  url:"/",
  icon:<FcAbout />,
},
{
  title:"Contact US",
  url:"/",
  icon:<AiFillContacts />,
},
{
  title:"Sign Out",
  url:"/",
  icon:<GoSignOut />,
},
]
const SocialIcons=[
  {
  title:"FaceBook",
  url:"/",
  icon:<AiFillFacebook />

},
{
  title:"Twitter",
  url:"/",
  icon:<AiFillTwitterCircle />
},
{
  title:"Insagram",
  url:"/",
  icon:<AiFillInstagram />
},
]
const sidbar = useRef();

// Handle Open Sidebar
const handleOpenClose=()=>{
  sidbar.current.classList.toggle("open");
}

  return (
    <div className="parent">    

      <div className="sidebar" ref={sidbar}>

            {/* Icon For Open/close Sidebar */}
            <span onClick={()=> handleOpenClose()}className="open-close"><AiFillSetting /> </span>

            {/* Title */}
            <h1>Moudy Wold</h1>

            {/* Linke */}
            <ul>
               {items.map(item=>(        
                  <li><a href={`${item.url}`}>{item.icon} <span>{item.title}</span></a></li>          
                ))} 
            </ul>

            {/* Social Icons */}
            <div className="social-icons">
                {SocialIcons.map(item=>(
                  <>
                      <a href="#">{item.icon}</a>
                  </>
                ))}
            </div>
      </div>
     </div>
  )
}

export default SideBar
