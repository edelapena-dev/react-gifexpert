import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
//import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch']);

  
  const onAddCategories = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
        {/*Titulo */}
        <h1>GifExpertApp</h1>
        
        {/*Input */}
        <AddCategory 
          //onAddCategories={ setCategories } 
          onNewCategory={ onAddCategories }
        />
        {/*<button onClick={onAddCategories}>Agregar</button>*/}
        {/*Listado de Gif */
          categories.map((category) => (
            <GifGrid 
              key={ category } 
              category={ category }
            />
          ))
        }
    </>
  )
}
