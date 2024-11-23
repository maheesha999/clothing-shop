import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/Navbar/ExploreMenu/ExploreMenu'
import ItemDisplay from '../../components/Navbar/ItemDisplay/ItemDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
    const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <ItemDisplay category={category}/>
        <AppDownload/>

    </div>
  )
}

export default Home