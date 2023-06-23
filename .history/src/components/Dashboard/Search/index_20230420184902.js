import React, { useState } from 'react'
import "./style.css"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
function Search({search,onSearchChange}) {
  const [search, setSearch] = useState("");
  return (
      <div className='search-flex'>
      <SearchRoundedIcon /> 
      <input placeholder='Search' type='text' value={search} onChange={(e)=>}/>
    </div>
  )
}

export default Search