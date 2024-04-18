import axios from 'axios'
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './Menu.css'





function Menu({setProductInfo}){

    const [localSettings, setLocalSettings] = useState({
        currentUrl: "http://localhost:8000/c_list/",
        itemsData: []
    });

    useEffect(() =>{
        axios.get(localSettings.currentUrl).then((response) => {
            setLocalSettings(prev => {
                return {
                    ...prev,
                    itemsData: response.data
                }
            })
        });
    }, [localSettings.currentUrl]);


    return(
        <>
                      
            <div className="btn-tb">
                <button onClick={() => {
                    setLocalSettings(prev => {
                        return {
                            ...prev,
                            currentUrl: "http://localhost:8000/c_list/"
                        }
                    })
                }}>По категориям</button>
                <button onClick={() => {
                    setLocalSettings(prev => {
                        return {
                            ...prev,
                            currentUrl: "http://localhost:8000/m_list/"
                        }
                    })
                }}>По производителям</button>
            </div>
            <div className="product-list">
                {localSettings.itemsData.map(el => {
                    return (
                        <>   
                            <h4 key={el.name}>{el.name}: <span>{el.count}</span></h4>
                            
                            {el.items.map(child => {
                                return (
                                    <p key={child} onClick={() => {
                                        axios.get(`http://localhost:8000/items/${child.slug}/`).then(resp => {
                                            setProductInfo(resp.data[0])
                                        })
                                    }}>
                                    {child.name}</p>
                                );
                            })}
                
                        </>
                    )})}
            </div>       
        </>
        )

}

export default Menu