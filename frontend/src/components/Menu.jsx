import axios from 'axios'
import {useState, useEffect} from 'react'




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
    }, []);


    return(
        <>
            {localSettings.itemsData.map(el => {
                return (
                    <>
                    <h4 key={el.name}>{el.name}</h4>
                    {el.items.map(child => {
                        return (
                            <p key={child}>{child}</p>
                        );
                     })}
                    </>
                );       
            })}
        </>)

}

export default Menu