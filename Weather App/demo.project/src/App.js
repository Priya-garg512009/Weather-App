import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Form from './components/form/form'
import Information from './components/information/information';
import axios from 'axios'

function App() {
        const [state,setState] = useState({})
    const getDataFromServer = (city)=>{
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52c6410e2412e9d201d4578c0fbbd0e6`).then((res)=>{
         console.log(res.data)
         setState(res.data)
    },()=>{
      alert('data is not available')

       })
    }
  return (
    <div className="App">
     <h2 className="text-white">Weather App</h2>
     <Form getDataFromServer={getDataFromServer} />
     {Object.keys(state).length===0? <div><h2 className="text-primary">OOPS! no data available </h2></div> : <Information info={state} />}
    </div>
  );
}

export default App;