(this.webpackJsonpapi_test=this.webpackJsonpapi_test||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},58:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(40),a(32)),i=a(11),u=a(66),m=a(67),s=a(68),d=a(70),b=Object(n.createContext)();function g(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)({name:"",age:"",ageCount:"",gender:"",genderProbability:"",genderCount:"",country:[]}),u=Object(i.a)(o,2),m=u[0],s=u[1];return r.a.createElement(b.Provider,{value:[m,s,l,c]},e.children)}var E=a(16),p=a.n(E),f=(a(58),function(){var e=Object(n.useContext)(b),t=Object(i.a)(e,4),a=t[1],l=t[3],c=Object(n.useRef)(),g=function(){return c.current.value};return r.a.createElement(u.a,{fluid:!0,className:"text-center",id:"form_wrapper"},r.a.createElement(m.a,null,r.a.createElement(s.a,{xs:12},r.a.createElement("h4",{className:"text-danger"},"Enter First Name:"),r.a.createElement("input",{ref:c,className:"p-1 mb-2"})),r.a.createElement(s.a,{xs:12},r.a.createElement(d.a,{onClick:function(){var e,t,n;""!==g()&&(l(!0),p.a.get("https://api.agify.io?name=".concat(g())).then((function(t){return e={name:t.data.name,age:t.data.age,ageCount:t.data.count},p.a.get("https://api.genderize.io?name=".concat(g()))})).then((function(e){return t={gender:e.data.gender,genderProbability:e.data.probability,genderCount:e.data.count},p.a.get("https://api.nationalize.io?name=".concat(g()))})).then((function(r){n={country:r.data.country},a(Object(o.a)({},e,{},t,{},n))})))}},"See Information"))))}),h=a(69),y=a(30),v=a.n(y);function w(){var e=Object(n.useContext)(b),t=Object(i.a)(e,4),a=t[0],l=t[2],c=t[3];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{"aria-labelledby":"contained-modal-title-vcenter",show:l,onHide:function(){c(!1)},size:"lg"},r.a.createElement(h.a.Header,{closeButton:!0},r.a.createElement(h.a.Title,{id:"contained-modal-title-vcenter",className:"text-capitalize"},"Results for ",r.a.createElement("span",{className:"text-success"},a.name))),r.a.createElement(h.a.Body,{className:"lead"},r.a.createElement("p",{className:"font-weight-bold"},"Age: ",a.age),r.a.createElement("p",null,"Count: ",a.ageCount),r.a.createElement("hr",null),r.a.createElement("p",{className:"font-weight-bold"},"Gender: ",a.gender),r.a.createElement("p",null,"Probability: ",100*a.genderProbability,"%"),r.a.createElement("p",null,"Count: ",a.genderCount),r.a.createElement("hr",null),r.a.createElement("p",{className:"font-weight-bold"},"Nationality"),r.a.createElement("div",null,a.country.map((function(e){return r.a.createElement("span",{key:v()()},r.a.createElement("p",null,"Country: ",e.country_id),r.a.createElement("p",null,"Probability: ",100*e.probability,"%"))})))),r.a.createElement(h.a.Footer,null)))}var C=function(){return r.a.createElement(g,null,r.a.createElement(f,null),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(63);c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.96ce2b8d.chunk.js.map