// == Import
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';
import Login from '../Login';
import Footer from '../Footer';
import Services from '../Services';

import axios from 'axios';
import './styles.scss';
import DetailService from '../Services/DetailService';
// == API END POINT
const base_API = 'http://localhost:3000/'
// == Composant
function App() {
  const [menu, setMenu ]= useState([]);
  const [services, setServices] = useState([]);
  const [extra, setExtra ] = useState([]);
  const [technic , setTechnic] = useState([]);
  const [discount, setDiscount] = useState([]);
  

  useEffect(()=> {
    axios.get(`${base_API}services/images`,{
      headers: {
        'Content-Type': 'application/infos'
      }})
      .then(response => { setServices(response.data)
      })
      .catch(error => { console.log(error, 'erreur')
    });
   }) 
  useEffect(()=> {
    axios.get(`${base_API}extras`, {
      headers: {
        'Content-Type': 'application/infos'
      }})
      .then(response => { setExtra(response.data)
      })
      .catch(error => { console.log(error, 'erreur')
    });
    })
  useEffect(()=> {
      axios.get(`${base_API}technics`, {
        headers: {
          'Content-Type': 'application/infos'
        }})
        .then(response => { setTechnic(response.data)
        })
        .catch(error => { console.log(error, 'erreur')
      });
    })
  useEffect(()=> {
        axios.get(`${base_API}headers`, {
          headers: {
            'Content-Type': 'application/infos'
          }})
          .then(response => { setMenu(response.data)
          })
          .catch(error => { console.log(error, 'erreur')
        });
    })
  
 
  return (
    <div className="app"> 
       < Header menu={menu} />
      
       < Routes >
           <Route path='/login' element={ <Login /> }/> 
           <Route path='/tr' element={ <Main /> }/> 
           <Route path='/'  element={  < Services services={ services } />}/>
           <Route path='/other'  element={ < DetailService  extra={ extra } discount={discount} technic={technic} />}/>
       </Routes>
       < Footer />

    </div>
  );
}

// == Export
export default App;
