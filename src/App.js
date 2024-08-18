import Sidebar from "./components/Sidebar";
import Route from "./components/Route";

import HomePage from "./pages/HomePage";
import TestingPage from "./pages/TestingPage";
import TablePage from './pages/TablePage';

function App() {  
  return (
    <div className="container mx-auto flex flex-col mt-2">
      <Sidebar />
      <div className="">
      <Route path="/">
        <HomePage />
      </Route>
      
      <Route path="/testing">
        <TestingPage />
      </Route>

      <Route path="/table">
        <TablePage />
      </Route>
      </div>
    </div>
  );
}

export default App;