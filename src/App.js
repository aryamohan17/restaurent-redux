import { Routes, Router, Route } from 'react-router-dom';
import './App.css';
import AllRestuarant from './Components/AllRestuarabt';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewRestuarant from './Components/ViewRestuarant';

function App() {
  return (
    <div>
        <header>
          <Header/>
        </header>
        <section>
          <Routes>
            <Route path='/' element={<AllRestuarant/>}/>
            <Route path='/view-restuarant/:id' element={<ViewRestuarant/>}/>
          </Routes>
        </section>
        <footer>
          <Footer/>
        </footer>
    </div>
  );
}

export default App;
