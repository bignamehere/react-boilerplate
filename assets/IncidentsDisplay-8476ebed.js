import{u as h,a as t,g as x,b as j,c as u,e as I,f as g,j as s,h as b,k as v}from"./index-8d9b88f3.js";const N=n=>{const e=h(),m=t(x),c=t(j),l=t(u),i=t(I),r=t(g),d=m.map(a=>s.jsx("li",{children:a.title},a.id)),o=()=>{e(b())},f=async()=>{e(v())};return s.jsxs(s.Fragment,{children:[s.jsx("h1",{children:n.title||"Page Header"}),s.jsxs("div",{className:"fam-box fam-m-t--m fam-m-b--m",children:[s.jsxs("div",{className:"fam-level",children:[s.jsxs("div",{className:"fam-m--s",children:["Stuff: ",s.jsx("strong",{children:c.total})]}),s.jsxs("div",{className:"fam-m--s",children:["Status: ",s.jsx("strong",{children:l})]}),s.jsxs("div",{className:"fam-m--s",children:["Total Items in Store: ",s.jsx("strong",{children:r})]}),s.jsxs("div",{className:"fam-m--s",children:["Errors: ",s.jsx("strong",{children:i})]})]}),s.jsxs("div",{className:"fam-level fam-level--auto-grow",children:[s.jsx("button",{onClick:()=>o(),className:"fam-btn fam-btn--secondary fam-m-t--l",children:"Update Total"}),s.jsx("button",{onClick:()=>f(),className:"fam-btn fam-btn--secondary fam-m-t--l",children:"Get Items from API"})]})]}),s.jsxs("div",{className:"fam-box fam-m-t--m fam-m-b--m",children:[s.jsx("h3",{children:"Data From Store"}),s.jsx("ul",{children:d})]})]})};export{N as I};