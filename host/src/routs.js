import About from "sad-microfrontend-page-about";
import Home from 'sad-microfrontend-page-home'
import { CounterPage } from "./pages/Counter";

export const ROUTS = [
  {
    title: "About",
    path: "/about",
    component: <About />,
  },
  { title: "Counter", path: "/counter", component: <CounterPage /> },
  { title: "Home", path: "/", component: <Home /> },
];
