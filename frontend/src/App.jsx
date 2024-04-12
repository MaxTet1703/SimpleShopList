import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/Menu.jsx'
import './App.css'

function App() {

  return (
    <>
    <div className="container-fluid">
        <div className="row g-0">
          <div className="col-2 d-flex flex-column menu">
                <Menu />
          </div>
        </div>
    </div>
    </>
  )
}

export default App
