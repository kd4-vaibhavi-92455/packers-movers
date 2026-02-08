import { Routes, Route } from "react-router";
import Dashboard from "./all-components/dashboard/Dashboard";

const App = () => {
  return (
    <>
      test
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
