import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import {globalContext} from "./context/globalContext";
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const initialState = {
    list: []
  }
  const [state, dispatch] = useLocalStorage('tasks', initialState);
  return (
    <>
    <Header/>
     <globalContext.Provider value={{state, dispatch}}>        
        <Main />        
      </globalContext.Provider>
      <Footer/>
    </>
  );
}

export default App;
