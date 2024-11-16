import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ListingDetails from './components/ListingDetails';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
