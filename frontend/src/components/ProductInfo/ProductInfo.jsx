import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import './ProductInfo.css'


function ProductInfo({productInfo, setProductInfo}){
    return (
        <>
            <i className="fa fa-times close-cross" aria-hidden="true" onClick={() => {setProductInfo([])}}></i>
            <img className="product-img" src={productInfo.image_url} alt="" />
            <div className="text-content d-flex flex-column">
                <h2 className="justify-self-start">Наименование: {productInfo.name}</h2>
                <h4>Описание:</h4>
                <p>{productInfo.description}</p>
            </div>
        </>
    )
}
export default ProductInfo