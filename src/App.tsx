import { BrowserRouter } from 'react-router-dom'
import { RouteList } from './routes/RouteList'
import './App.css'

const App = () => {
  return (
    <div>
      <h1 className="my-4">
          Galeria de fotos
      </h1>
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    </div>
  )
}

export default App
