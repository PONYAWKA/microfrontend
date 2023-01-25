import About from "sad-microfrontend-page-about";
import Home from 'sad-microfrontend-page-home'
import { Counter } from "sad-microfrontend-page-counter";

export const ROUTS = [
  {
    title: "About",
    path: "/about",
    component: <About />,
  },
  { title: "Counter", path: "/counter", component: <Counter /> },
  { title: "Home", path: "/", component: <Home /> },
];
