import React from 'react'
import { BiSearchAlt, BiSearchAlt2 } from 'react-icons/bi'
import { BsFilter } from 'react-icons/bs'

const SearchBar = () => {
  return (
    <div className='bg-search-input-container-background flex py-3 pl-5 items-center gap-3 h-14 '>
      <div className='bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow 
      '>
        <div>
          <BiSearchAlt2   className='text-panel-header-icon cursor-pointer text-l ' />
        </div>
        <div>
          <input  type='text' 
           placeholder='Search or start a new chat.....' 
           className='bg-transparent bg-input-background  text-sm focus:outline-none w-full text-white '/>
           
            
          </div>
        
      </div>
     
    </div>
  )
}

export default SearchBar