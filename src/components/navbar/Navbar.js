import React from 'react'
import {MenuList} from './MenuList'
import '../../styles/Navbar.css'

export default function Navbar() {

  const menuList = MenuList.map(({url, title}, index)=>{
    return(
      <li key={index}>
        <a href={url}>{title}</a>
      </li>
    )
  })

  return (
      <nav>
        <div className='logo'>
          Go<font>Organic</font>
        </div>
        <ul className='menu-list'>{menuList}</ul>
      </nav>
  )
}
