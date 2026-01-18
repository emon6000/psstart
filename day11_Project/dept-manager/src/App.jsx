import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FacultyList from './pages/FacultyList'; // New Page
import FacultyDetails from './pages/FacultyDetails';
import BatchList from './pages/BatchList'; // Restored Page
import BatchDetails from './pages/BatchDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Dedicated Routes for Lists */}
          <Route path="/faculty" element={<FacultyList />} />
          <Route path="/batches" element={<BatchList />} />

          {/* Details Routes */}
          <Route path="/faculty/:facultyId" element={<FacultyDetails />} />
          <Route path="/batches/:batchId" element={<BatchDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;