import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import {GlobalContext} from "./contexts/globalContext";

function App() {
  return (
    <>
     <GlobalContext.Provider value={{state, dispatch}}>
        <Header/>
        <Main />
        <Footer/>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
