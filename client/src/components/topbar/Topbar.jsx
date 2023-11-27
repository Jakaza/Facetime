import React from 'react'

export const TopBar = () => {
    return (
     <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">Facetime</span>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <Search/>
                <input placeholder='Search for a post ' className='searchInput' />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className="topbarIcon">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">
                        1
                    </span>
                </div>
            </div>
        </div>
     </div>
    )
  }
  