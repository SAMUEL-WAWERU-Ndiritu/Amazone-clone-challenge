import React from 'react'
import './Home.css'
import Product from './Product'
import amaz from './img/amaz.jpg'
import image_004 from './img/image_004.webp'
import image_002 from './img/image_002.webp'
import image_003 from './img/image_003.webp'
import image_005 from './img/image_005.webp'
import image_008 from './img/image_008.webp'
import image_5 from './img/image_5.png'
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img src={amaz} className='home__image' alt='home'/>
                {/* products */}

            <div className='home__row'>
               <Product id={1} title='The lean startup'  price={29.90} image={image_004}/> 
               <Product id={2} title='Beer'  price={22.90} image={image_002}/>    
               <Product id={3} title='The lean startup'  price={29.90} image={image_004}/> 
               <Product id={4} title='Beer'  price={22.90} image={image_002}/>   
            </div>

            
            <div className='home__row'>
                <Product id={5} title='Jameson'  price={23.90} image={image_003}/> 
                <Product id={6} title='Jameson'  price={24.90} image={image_005}/> 
                <Product id={7} title='Jameson'  price={28.90} image={image_008}/> 
            </div>
            
            <div className='home__row'>
               <Product id={8} title='Jameson'  price={28.90} image={image_5}/> 
            </div>
        </div>
    </div>
  )
}

export default Home  