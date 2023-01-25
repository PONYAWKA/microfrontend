import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import { ROUTS } from "./routs";
function App() {
  const [state, setState] = useState(0);
  const countHandler = (e) => {
    setState(prev => prev + e.detail);
  };

  useEffect(() => {
    window.addEventListener("count", countHandler);
    return () => window.removeEventListener("count", countHandler);
  }, []);

  return (
    <BrowserRouter>
      <nav>
        {ROUTS.map(({ path, title }) => (
          <Link to={path} style={{ marginRight: 10 }}>
            {title}
          </Link>
        ))}
      </nav>
      {state}
      <Routes>
        {ROUTS.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
