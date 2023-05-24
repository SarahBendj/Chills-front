// == Import
import { useEffect, useState } from 'react';
import Services from '../Services';
import axios from 'axios';
import './styles.css';

// == Composant
function App() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/services/images',{
      headers: {
        'Content-Type': 'application/infos'
      }})
      .then(response => { setServices(response.data)
      })
      .catch(error => { console.log(error, 'erreur')
    });
  })
  
 
  return (
    <div className="app"> 

       < Services services={services} />

    </div>
  );
}

// == Export
export default App;
