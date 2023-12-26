import React from 'react'
import './topbar.css'


export const TopBar = () => {
    return (
     <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">Facetime</span>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <SearchIcon/>
                <input placeholder='Search for a post ' className='searchInput' />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className="topbarIcon">

            </div>
        </div>
     </div>
    )
  }
  