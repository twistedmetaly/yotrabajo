import{u as o,j as s,a as p,r as n}from"./index-KTGQawPu.js";import{P as d,g as h}from"./jobOffersServices-VCNnHbP6.js";const a=({job:e})=>{const r=o();return s.jsxs(s.Fragment,{children:[s.jsx("h1",{children:e.title}),s.jsx("p",{children:e.description}),s.jsx("p",{children:e.address}),s.jsx("p",{children:e.schedule}),s.jsx("p",{children:e.schedule_notes}),s.jsx("p",{children:`${e.salary} ${e.currency}`}),s.jsx("p",{children:e.salary_notes}),s.jsx("p",{children:e.cellphone}),s.jsx("p",{children:e.phone}),s.jsx("p",{children:e.email}),s.jsx("a",{onClick:()=>r(-1),children:"Atras"}),s.jsx("button",{children:"Aplicar por este trabajo"})]})};a.propTypes={job:d.object.isRequired};const x=()=>{const{pathname:e}=p(),r=e.split("/"),t=r[r.length-1],[c,i]=n.useState(null);return n.useEffect(()=>{h(t).then(l=>i(l))},[t]),c},j=()=>{const e=x();return e?s.jsx(a,{job:e}):s.jsx("p",{children:"Cargando"})};export{j as default};
