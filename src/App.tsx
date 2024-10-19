import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DirectorCardList from './Components/DirectorCardList/DirectorCardList';
import Header from './Components/Header/Header';
import { Home } from '@mui/icons-material';
import Directors from './Pages/Directors';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout >

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/directors' element={<Directors/>}/>
        </Routes>
        </Layout>

      </BrowserRouter>
    </div>
  );
}

export default App;
