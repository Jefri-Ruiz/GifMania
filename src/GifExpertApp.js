import React, { useState } from 'react'

import {AddCategory} from './components/AddCategory';
import GifGrid from './components/GifGrid'


export const GifExpertApp = () => {

    /* const categories = ['One punch', 'Samurai X', 'Dragon Ball']; */
const [categories, setCategories] = useState(['funny']);

 /*    const handleApp = () =>{
        setCategories([...categories , 'snk'])
        // tambien se puede optar por
        // setCategories{cats => [...cats, 'HunterXHunter]}
    } */

    return (
        <>
            <h2>Ingresa el tema para buscar gifs</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>


            <ol>
                { categories.map( category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
                }
            </ol>
        </>
    )
}
