import axios from 'axios'
import {useState, useEffect} from 'react'

import './Menu.css'





function Menu(){

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
            {localSettings.itemsData.map(el => {
                return (
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
                        <h4 key={el.name}>{el.name}</h4>
                        {el.items.map(child => {
                            return (
                                <p key={child} onClick={() => {console.log(child)}}>{child}</p>
                            );
                        })}
                    </div>
                    </>
                );       
            })}
        </>)

}

export default Menu