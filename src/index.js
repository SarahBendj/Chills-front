//NPM
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
//LOCAL
import App from 'src/components/App';
import { AuthProvider } from './context/AuthProvider';

const rootReactElement = (
  <BrowserRouter >
      <AuthProvider>
        <App /> 
      </AuthProvider> 
  </BrowserRouter>
)


// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const root = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootReactElement);
