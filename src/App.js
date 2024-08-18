import Sidebar from "./components/Sidebar";
import Route from "./components/Route";

import HomePage from "./pages/HomePage";
import TestingPage from "./pages/TestingPage";
import TablePage from './pages/TablePage';

function App() {  
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
      <Route path="home">
        <HomePage />
      </Route>
      
      <Route path="testing">
        <TestingPage />
      </Route>

      <Route path="table">
        <TablePage />
      </Route>
      </div>
    </div>
  );
}

export default App;