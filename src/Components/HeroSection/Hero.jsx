import React from 'react'
import './Hero.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import {heroImage} from '../../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='hero'>
            <ul className='--space-between'>
                <li >
                    <AiOutlineSearch size={27}/>
                </li>
                <li>Home</li>
                <li>Shop</li>
                <li>Categories</li>
                <li>About</li>
                <li >
                    <MdOutlineAddShoppingCart size={27}/>
                </li>
            </ul>

            <div>
                <div></div>
                <div>
                    <img src={heroImage} />
                </div>
            </div>
    </div>
  )
}

export default Hero