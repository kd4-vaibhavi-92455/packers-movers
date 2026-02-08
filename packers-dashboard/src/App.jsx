import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Dashboard />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default App;
