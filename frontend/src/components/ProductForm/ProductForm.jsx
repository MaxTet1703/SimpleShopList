import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import './ProductForm.css'

function ProductForm(){
    const [selectData, setSelectData] = useState({
        cats: [],
        mans: []
    })

    useEffect(() => {
        axios.get("http://localhost:8000/c_list/").then(resp => {
            setSelectData(prev => {return{...prev, cats: resp.data}})
        })
        axios.get("http://localhost:8000/m_list/").then(resp => {
            setSelectData(prev => {return{...prev, mans: resp.data}})
        })
    }, [])

    return(
        <>
            <form action="" id="create" className="d-flex flex-column">
                <h2>Добавить новую категорию</h2>
                <input type="text" placeholder="Введите название товара"/>
                <textarea name="" id="" cols="45" rows="10" placeholder="Введите описание товара"></textarea>
                <input type="image" alt="Выберите изображение"/>
                <select name="" id="cat">
                    <option>Выберите категорию</option>
                    {selectData.cats.map(item => {
                        return (
                                <option key={item.name} value={item.name}>{item.name}</option> 
                            )
                        })  
                    }
                </select>
                <select name="" id="mans">
                    <option>Выберите производителя</option>
                    {selectData.mans.map(item => {
                        return (
                                <option key={item.name} value={item.name}>{item.name}</option> 
                            )
                        })  
                    }
                </select>
                <button className="align-self-center" type="submit">Создать</button>
            </form>
        </>
    )
}
export default ProductForm