import { Route, Routes } from 'react-router-dom';
import Home from './page/search';

function App() {
  return (
    <div className="Searcher">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
