import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); // para no refrescar la pagina web
        const newValue = inputValue.trim();
        if(newValue.length <= 1) return;
        //onAddCategories(categories => [inputValue, ...categories]);
        onNewCategory(newValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ /*(event) => onSubmit(event)*/
                            onSubmit
                       }>
            <input 
                type="text" 
                placeholder="Buscar Gifs ....."
                value={inputValue}
                onChange={/*(event)=> onInputChange(event)*/
                            onInputChange
                         }
            />
        </form>
    )
}
