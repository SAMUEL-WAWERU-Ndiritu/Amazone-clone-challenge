import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import amazon2 from  './img/amazon2.jpeg'

function Checkout() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__image' src={amazon2} alt=''/>
            <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
                 {
                  basket.map((item)=>(
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                    />
                  ))
                 }
                
            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout 