import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </AppLayout>
    </div>
  );
}

export default App;
