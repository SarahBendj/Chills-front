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


const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
