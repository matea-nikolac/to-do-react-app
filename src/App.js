import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
