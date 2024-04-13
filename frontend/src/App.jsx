import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

import Menu from './components/Menu/Menu.jsx'
import ProductInfo from './components/ProductInfo/ProductInfo.jsx'
import ProductForm from './components/ProductForm/ProductForm.jsx'
import './App.css'

function App() {

  const [productInfo, setProsuctInfo] = useState([])

  return (
    <>
    <div className="container-fluid">
        <div className="row g-0">
          <div className="col-3 d-flex flex-column menu">
                <Menu setProductInfo={setProsuctInfo}/>
          </div>
          <div className="col-7 d-flex justify-content-center align-items-center">
            {productInfo.length != 0 ? <ProductInfo productInfo={productInfo} setProductInfo={setProsuctInfo}/> : <ProductForm />}
          </div>
        </div>
    </div>
    </>
  )
}

export default App
