import './App.css'
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <AnimatedRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
