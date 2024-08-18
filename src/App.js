import Sidebar from "./components/SideBar";
import Route from "./components/Route";

import HomePage from "./pages/HomePage";
import TestingPage from "./pages/TestingPage";

function App() {  
  return (
    <div>
      <TestingPage />
      <HomePage />
    </div>
  );
}

export default App;