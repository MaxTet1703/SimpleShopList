import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRef } from "react"

import './ProductForm.css'

function ProductForm(){
    const [selectData, setSelectData] = useState({
        cats: [],
        mans: [],
        image: ''
    })

    const inputRef = useRef(null)

    useEffect(() => {
        axios.get("http://localhost:8000/c_list/").then(resp => {
            setSelectData(prev => {return{...prev, cats: resp.data}})
        })
        axios.get("http://localhost:8000/m_list/").then(resp => {
            setSelectData(prev => {return{...prev, mans: resp.data}})
        })
    }, [])

    function handleImageClick(){
        inputRef.current.click()
    }
    function handleChangeImage(event){
        const file = event.target.files[0];
        setSelectData(prev => {
            return {
                ...prev,
            image: file
            }
        })
    }

    function handleSubmit(formData){
        event.preventDefault()
        const data = new FormData();
        data.append("name", formData.target.name.value)
        data.append("description", formData.target.description.value)
        data.append("image", selectData.image, selectData.image.name)
        data.append("category", formData.target.category.value)
        data.append("manufacturer", formData.target.manufacturer.value)
        console.log(formData.target.name.value);
        axios.post("http://localhost:8000/createitem/", data)
        .then(response => {console.log(response.data)})

    }

    return(
        <>
            <form method="POST" encType="multipart/form-data" id="create" className="d-flex flex-column"  onSubmit={handleSubmit}>
                <h2>Добавить новую категорию</h2>
                <input name="name" type="text" placeholder="Введите название товара"/>
                <textarea name="description" id="" cols="45" rows="10" placeholder="Введите описание товара"></textarea>

                { selectData.image ? <img src={URL.createObjectURL(selectData.image)} alt="" className="item-image" onClick={handleImageClick} />:
                    <img src="default.png" alt="" className="item-image" onClick={handleImageClick} />
                }

                <input ref={inputRef} onChange={handleChangeImage} name="image" type="file" style={{display: "none"}} accept=".jpg, .jpeg, .png"/>

                <select name="category" id="cat">
                    <option>Выберите категорию</option>
                    {selectData.cats.map(item => {
                        return (
                                <option key={item.name} value={item.name}>{item.name}</option> 
                            )
                        })  
                    }
                </select>

                <select name="manufacturer" id="mans">
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