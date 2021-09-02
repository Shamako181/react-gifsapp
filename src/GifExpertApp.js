import React, { Fragment, useState } from 'react';
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';


export const GifExpertApp = () => {
    //Crear categorias y mostrarlas en pantalla
    const [categories, setCategories] = useState(['Breaking Bad'])

    return(
        //Fragment puede ser reemplazado solo por la apertura y cierre de etiquetas en su orden correspondiente
        //"<> <h2></h2> </>"
        <Fragment>
            <h2>GifExpertApp</h2>
                <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {   
                    //Transforma cada uno de los elementos del arreglo
                    categories.map( (category) => 
                        <GifGrid 
                            key = {category}
                            category={category}
                        />)
                }
            </ol>
            <hr/>
        </Fragment>
    )
}