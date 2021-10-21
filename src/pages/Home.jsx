import React from 'react'
import Annoucment from '../componant/Announcement'
import Categories from '../componant/Categories'
import Footer from '../componant/Footer'
import NavBar from '../componant/NavBar'
import NewsLetter from '../componant/NewsLetter'
import Products from '../componant/Products'
import Slider from '../componant/Slider'

const Home = () => {
    return (
        <div>
            <Annoucment/>
            <NavBar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default Home
