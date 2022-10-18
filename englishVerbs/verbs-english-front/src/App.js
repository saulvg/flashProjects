import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ListVerbs from './pages/ListVerbs/ListVerbs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<ListVerbs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
