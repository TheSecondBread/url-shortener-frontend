import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContextProvider from './Store/ContextProvider';

import { Analytics } from "@vercel/analytics/react"

function App() {
  return(
    <ContextProvider>
    <Header></Header>
    <Analytics />
    </ContextProvider>
  );
}

export default App
