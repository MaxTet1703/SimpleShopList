import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/Menu/Menu.jsx'
import './App.css'

function App() {

  return (
    <>
    <div className="container-fluid">
        <div className="row g-0">
          <div className="col-3 d-flex flex-column menu">
                <Menu />
          </div>
        </div>
    </div>
    </>
  )
}

export default App
