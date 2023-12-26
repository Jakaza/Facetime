import { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import Person2Icon from '@mui/icons-material/Person2';
import MessageIcon from '@mui/icons-material/Message';
import './App.css'

function App() {

  return (
    <div className='Navbar'>
      <span>
        <FacebookIcon style={{
          color: '#669bbc',
          fontSize: '36px'
        }} />
      </span>
      <div className='searchBar'>
        <SearchIcon style={{
          fontSize: '24px',
          color: '#adb5bd'
        }} />
        <input type='text' placeholder='Search Facetime' />
      </div>
      <div className='links'>
        <ul>
          <li><HomeIcon style={iconLinkStyle}/></li>
          <li><OndemandVideoIcon  style={iconLinkStyle}/></li>
          <li><GroupIcon style={iconLinkStyle}/></li>
        </ul>
      </div>
      <div className='profileContainer'>
      
      <ul>
          <li><MessageIcon  style={iconLinkStyle}/></li>
          <li className='profile'><GroupIcon style={iconLinkStyle}/></li>
        </ul>
      </div>
    </div>
  )
}



const iconLinkStyle = {
  fontSize: '36px',
  color: '#6c757d'
}

export default App
