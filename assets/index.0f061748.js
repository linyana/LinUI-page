import{H as c}from"./index.32646e9a.js";import{u as i,j as n,a as o,O as m,r as s,b as u,F as d}from"./index.62c06c07.js";let r=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,a)=>(a&=63,a<36?e+=a.toString(36):a<62?e+=(a-26).toString(36).toUpperCase():a>62?e+="-":e+="_",e),"");const p=[{name:"\u5E03\u5C40",smallName:"Layout",to:"layout"},{name:"\u6392\u7248",smallName:"Typography",to:"typography"},{name:"\u5185\u5BB9",smallName:"Content",to:"Content"},{name:"\u6309\u94AE",smallName:"Button",to:"button"},{name:"\u8F93\u5165\u6846",smallName:"Input",to:"input"},{name:"\u5361\u7247",smallName:"Card",to:"card"}];const f=()=>{const t=i();return n("div",{className:"left_menu",children:p.map(e=>o("div",{className:"left_menu_line left_padding",onClick:()=>{t(e.to,{replace:!1})},children:[e.name,n("span",{children:e.smallName})]},r()))})};const h=()=>n("div",{className:"middle_content middle_padding",children:n(m,{})});const g=t=>{if(t){let e=document.getElementById(t);e&&e.scrollIntoView()}},_=()=>{const[t,e]=s.exports.useState([]),a=u();return s.exports.useEffect(()=>{e([...document.querySelectorAll(".compontent_title")])},[a]),n("div",{className:"right_content right_padding",children:t.map(l=>n("div",{className:"right_menu_line",onClick:()=>g(l.id),children:l.innerHTML},r()))})};const v=()=>o(d,{children:[n(c,{}),o("div",{className:"main_content flex_between",children:[n(f,{}),n(h,{}),n(_,{})]})]});export{v as default};
