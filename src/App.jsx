import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Headerp from './Headerp'
import Midp from './Midp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="headers">
        <Headerp/>
      </div>
      <div className="mid py-5 bg-light">
        <Midp/>
      </div>
      <div className="footer"></div>
    </>
  )
}

export default App
