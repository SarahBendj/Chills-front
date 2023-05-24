// == Import
import { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
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
       < Header />
       < Services services={services} />
       < Footer />

    </div>
  );
}

// == Export
export default App;
