import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import UserPage from '../pages/UserPage/UserPage';

const App: React.FunctionComponent = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<UserPage />} />
      </Routes>

    </Router>
  );
};

export default App;