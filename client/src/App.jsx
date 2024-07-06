
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <header />
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
