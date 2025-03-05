import React from 'react'

import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = () => {
  return (
    <>
    <div className="w-4/5 mx-auto my-8">
        <h1 className="text-2xl">Explore Menu</h1>
        <p className="my-2 w-3/5">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your carvings and elevate your dining experience, our delicios us meal at a time.</p>
        <div className="flex gap-x-8 overflow-x-auto flex-nowrap mx-8">
            {menu_list.map((item,index)=>{
                return (
                    <div key={index} className='flex-shrink-0'>
                        <img src={item.menu_image} alt="" />
                        <p className='text-center'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
    
    </>
  )
}

export default ExploreMenu