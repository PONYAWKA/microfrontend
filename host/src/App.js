import { BrowserRouter } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import { ROUTS } from "./routs";
function App() {
  
  return (
    <BrowserRouter>
      <nav>
        {ROUTS.map(({ path, title }) => (
          <Link to={path} style={{ marginRight: 10 }}>
            {title}
          </Link>
        ))}
      </nav>
      <Routes>
        {ROUTS.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
