import e,{useState as t,useEffect as n}from"react";const r=()=>{const[r,l]=t(0),o=({detail:e})=>{l((t=>t+e))};return n((()=>(window.addEventListener("count",o),()=>window.removeEventListener("count",o))),[]),e.createElement("div",null,e.createElement("h1",null,"Counter"),e.createElement("h2",null,r))};export{r as default};
