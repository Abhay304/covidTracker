(this.webpackJsonpcovidvaccination=this.webpackJsonpcovidvaccination||[]).push([[0],{26:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(19),s=c.n(i),r=(c(26),c(27),c(7)),j=c(50),l=c(51),d=c(8),o=c.n(d),b=c(10),h=c.n(b),O=c(20),u=function(){var e=Object(O.a)(h.a.mark((function e(){var t,c,n,a,i,s,r,j,l,d,b;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,c=""+(t.getMonth()+1),n=""+t.getDate(),a=t.getFullYear(),c.length<2&&(c="0"+c),n.length<2&&(n="0"+n),i=[n,c,a].join("-"),s="https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=291&date=".concat(i),r="https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=277&date=".concat(i),j="https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=265&date=".concat(i),l="https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=276&date=".concat(i),d="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=294&date=".concat(i),b=[s,r,j,l,d].map((function(e){return o.a.get(e).catch((function(e){return null}))})),e.next=13,o.a.all(b);case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=c(52),p=c(0);function m(e){return Object(p.jsx)(p.Fragment,{children:e.district.map((function(t){return Object(p.jsx)(x.a,{children:Object(p.jsxs)(x.a.Body,{children:[Object(p.jsx)("h6",{children:t.name}),Object(p.jsx)("div",{className:"card-inner-body",children:t.sessions.map((function(t){return t.vaccine===e.vaccine&&t.available_capacity>0&&Object(p.jsx)("div",{className:"card-data-body",children:t.min_age_limit===e.maxage?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("b",{children:"Vaccine Name :"})," ",t.vaccine]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("b",{children:"Dose Left :"}),t.available_capacity]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("b",{children:"Vaccine Date :"}),t.date]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("b",{children:"Age Limit :"}),t.min_age_limit]})]}):Object(p.jsx)("p",{children:"No Slots Available"})},t.session_id)}))})]})},t.center_id)}))})}var g=a.a.memo(m);function v(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),s=Object(r.a)(i,2),d=s[0],b=s[1],h=Object(n.useState)([]),O=Object(r.a)(h,2),x=O[0],m=O[1],v=Object(n.useState)([]),f=Object(r.a)(v,2),y=f[0],S=f[1],N=Object(n.useState)([]),C=Object(r.a)(N,2),D=C[0],_=C[1],B=Object(n.useState)("COVISHIELD"),F=Object(r.a)(B,2),I=F[0],k=F[1],A=Object(n.useState)(45),L=Object(r.a)(A,2),E=L[0],V=L[1];Object(n.useEffect)((function(){return u().then(o.a.spread((function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];console.log(t[0]),console.log(t[1]),console.log(t[2]),console.log(t[3]),console.log(t[4]),a(t[0].data.centers),b(t[1].data.centers),m(t[2].data.centers),S(t[3].data.centers),_(t[4].data.centers)}))).then((function(){w()})).catch((function(e){console.log("Network Error Occured")})),function(){a([]),b([]),m([]),S([]),_([])}}),[I]);var w=function(){for(var e=0;e<document.querySelectorAll(".card-inner-body").length;e++)""===document.querySelectorAll(".card-inner-body")[e].innerText&&(document.querySelectorAll(".card-inner-body")[e].parentElement.parentElement.style.display="none")};return Object(p.jsx)(j.a,{children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)("h1",{className:"center-align",children:"Covid Vaccination Data"}),Object(p.jsxs)("div",{className:"filters",children:[Object(p.jsxs)("div",{onChange:function(e){k(e.target.value)},children:[Object(p.jsx)("input",{type:"radio",value:"COVISHIELD",name:"vaccine",defaultChecked:!0}),"COVISHIELD",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"radio",value:"COVAXIN",name:"vaccine"})," COVAXIN"]}),Object(p.jsxs)("div",{onChange:function(e){V(parseInt(e.target.value))},children:[Object(p.jsx)("input",{type:"radio",value:"45",name:"ageLimit",defaultChecked:!0}),"45+",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"radio",value:"18",name:"ageLimit"})," 18+"]})]}),Object(p.jsx)("section",{children:y.length>0&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{className:"center-align",children:"Bangalore Rural"}),Object(p.jsx)(g,{maxage:E,vaccine:I,district:y})]})}),Object(p.jsx)("hr",{}),Object(p.jsx)("section",{children:x.length>0&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{className:"center-align",children:"Bangalore Urban"}),Object(p.jsx)(g,{maxage:E,vaccine:I,district:x})]})}),Object(p.jsx)("hr",{}),Object(p.jsx)("section",{children:D.length>0&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{className:"center-align",children:"BBMP"}),Object(p.jsx)(g,{maxage:E,vaccine:I,district:D})]})}),Object(p.jsx)("hr",{}),Object(p.jsx)("section",{children:d.length>0&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{className:"center-align",children:"kolar"}),Object(p.jsx)(g,{maxage:E,vaccine:I,district:d})]})}),Object(p.jsx)("hr",{}),Object(p.jsx)("section",{children:c.length>0&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{className:"center-align",children:"Chikkaballapur"}),Object(p.jsx)(g,{maxage:E,vaccine:I,district:c})]})})]})})}var f=a.a.memo(v);c(48);var y=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(f,{})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),S()}},[[49,1,2]]]);
//# sourceMappingURL=main.945503f5.chunk.js.map