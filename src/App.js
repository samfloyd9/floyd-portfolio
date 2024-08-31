import Sidebar from "./components/Sidebar";
import Route from "./components/Route";

import HomePage from "./pages/HomePage";
import TestingPage from "./pages/TestingPage";
import TablePage from './pages/TablePage';

function App() {  
  return (
    <div className="container mx-auto flex flex-col">
      <Sidebar />
      <div>
      <Route path="/">
        <HomePage />
      </Route>
      
      <Route path="/testing">
        <TestingPage />
      </Route>

      <Route path="/basketball">
        <TablePage />
      </Route>
      </div>
    </div>
  );
}

export default App;