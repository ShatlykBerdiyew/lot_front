import React from 'react'
import './home_sections.css';

import Logo from '../../assets/home_section/lot_logo.png'
import discord_icon from '../../assets/home_section/discord_icon.png';
import twitetr_icon from '../../assets/home_section/twitter_icon.png';
import home_main_title from '../../assets/home_section/home_sec_title.png'


const Home = () => {
  return (
    <div className='home_section'>
        <div className='home_header'>
            <img src={Logo} alt="logo1" width={70} height={40} />
            <div className='home_header_nav'>
                <span>Battle</span>
                <span>Roadmap</span>
                <img src={discord_icon} alt="discord" width={28} height={24}/>
                <img src={twitetr_icon} alt="twitter" width={26} height={20}/>
            </div>

        </div>
        <div className="home_main">
            <img src={home_main_title} alt="main section title"  width={1113} height={505}/>
        </div>
    </div>
  )
}

export default Home