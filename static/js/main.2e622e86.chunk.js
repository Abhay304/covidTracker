(this.webpackJsonpcovidvaccination=this.webpackJsonpcovidvaccination||[]).push([[0],{32:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(23),s=c.n(i),r=(c(32),c(33),c(8)),j=c.p+"static/media/vacc_img5.6fce10ee.jpg",l=c(1);var d=function(){return Object(l.jsx)("div",{className:"fullUI",children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("div",{className:"circle"}),Object(l.jsx)("div",{className:"circle"}),Object(l.jsx)("div",{className:"circle"}),Object(l.jsx)("div",{className:"shadow"}),Object(l.jsx)("div",{className:"shadow"}),Object(l.jsx)("div",{className:"shadow"}),Object(l.jsx)("span",{children:"Loading"})]})})},o=c(57),b=c(60),u=c(58),h=c(59),O=c(26),x=c(9),p=c.n(x),v=c(13),m=c.n(v),g=c(24),f=function(){var e=Object(g.a)(m.a.mark((function e(){var t,c,n,a,i,s,r,j,l,d,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,c=""+(t.getMonth()+1),n=""+t.getDate(),a=t.getFullYear(),c.length<2&&(c="0"+c),n.length<2&&(n="0"+n),i=[n,c,a].join("-"),s="https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=291&date=".concat(i),r="https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=277&date=".concat(i),j="https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=265&date=".concat(i),l="https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=276&date=".concat(i),d="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=294&date=".concat(i),o=[s,r,j,l,d].map((function(e){return p.a.get(e).catch((function(e){return[]}))})),e.next=13,p.a.all(o);case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=c(25);var S=function(){return Object(l.jsx)("div",{style:{textAlign:"center"},children:Object(l.jsx)(y.a,{animation:"border",role:"status",variant:"primary"})})},N=a.a.lazy((function(){return c.e(3).then(c.bind(null,62))}));function k(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),s=Object(r.a)(i,2),x=s[0],v=s[1],m=Object(n.useState)([]),g=Object(r.a)(m,2),y=g[0],k=g[1],C=Object(n.useState)([]),w=Object(r.a)(C,2),I=w[0],B=w[1],D=Object(n.useState)([]),A=Object(r.a)(D,2),E=A[0],L=A[1],M=Object(n.useState)("COVISHIELD"),T=Object(r.a)(M,2),V=T[0],_=T[1],F=Object(n.useState)(45),P=Object(r.a)(F,2),q=P[0],z=P[1],H=Object(n.useState)(!0),J=Object(r.a)(H,2),R=J[0],U=J[1];Object(n.useEffect)((function(){return X(),f().then(p.a.spread((function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];a(t[0].data.centers),v(t[1].data.centers),k(t[2].data.centers),B(t[3].data.centers),L(t[4].data.centers),X()}))).then((function(){X(),R&&setTimeout((function(){U(!1),X()}),1e4)})).catch((function(e){X(),R&&setTimeout((function(){U(!1),X()}),1e4),console.log("Network Error Occured")})),function(){a([]),v([]),k([]),B([]),L([]),X()}}),[V,q]);var X=function(){for(var e=0;e<document.querySelectorAll(".card-inner-body").length;e++)""===document.querySelectorAll(".card-inner-body")[e].innerText&&(document.querySelectorAll(".card-inner-body")[e].parentElement.parentElement.style.display="none")};return R?Object(l.jsx)(d,{}):Object(l.jsx)(o.a,{children:Object(l.jsx)(b.a,{children:Object(l.jsxs)(u.a,{children:[Object(l.jsx)(b.a.Img,{variant:"top",style:{height:"280px",backgroundPosition:"center",backgroundRepeat:"no - repeat",backgroundSize:"cover",position:"relative"},src:j}),Object(l.jsxs)(b.a.Body,{children:[Object(l.jsx)(b.a.Title,{children:Object(l.jsx)("h1",{className:"center-align",children:"Covid Vaccination Data"})}),Object(l.jsx)(b.a.Text,{style:{textAlign:"center"},children:"Please select Vaccine dose and age to know whether vaccine is available in your zone!!"}),Object(l.jsxs)("div",{className:"filters",children:[Object(l.jsxs)("div",{onChange:function(e){_(e.target.value)},children:[Object(l.jsx)("input",{type:"radio",value:"COVISHIELD",name:"vaccine",defaultChecked:!0}),"COVISHIELD",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"radio",value:"COVAXIN",name:"vaccine"}),"COVAXIN"]}),Object(l.jsxs)("div",{onChange:function(e){z(parseInt(e.target.value))},children:[Object(l.jsx)("input",{type:"radio",value:"45",name:"ageLimit",defaultChecked:!0}),"45+",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"radio",value:"18",name:"ageLimit"}),"18+"]})]})]}),Object(l.jsxs)(h.a,{className:"list-group-flush",children:[Object(l.jsx)(n.Suspense,{fallback:Object(l.jsx)(S,{}),children:Object(l.jsxs)("section",{children:[Object(l.jsx)(O.a,{children:Object(l.jsx)("h3",{className:"center-align",children:"Bangalore Rural"})}),Object(l.jsx)(N,{maxage:q,vaccine:V,district:I,hideMethod:X})]})}),Object(l.jsx)(n.Suspense,{fallback:Object(l.jsx)(S,{}),children:Object(l.jsxs)("section",{children:[Object(l.jsx)(O.a,{children:Object(l.jsx)("h3",{className:"center-align",children:"Bangalore Urban"})}),Object(l.jsx)(N,{maxage:q,vaccine:V,district:y,hideMethod:X})]})}),Object(l.jsx)(n.Suspense,{fallback:Object(l.jsx)(S,{}),children:Object(l.jsxs)("section",{children:[Object(l.jsx)(O.a,{children:Object(l.jsx)("h3",{className:"center-align",children:"BBMP"})}),Object(l.jsx)(N,{maxage:q,vaccine:V,district:E,hideMethod:X})]})}),Object(l.jsx)(n.Suspense,{fallback:Object(l.jsx)(S,{}),children:Object(l.jsxs)("section",{children:[Object(l.jsx)(O.a,{children:Object(l.jsx)("h3",{className:"center-align",children:"kolar"})}),Object(l.jsx)(N,{maxage:q,vaccine:V,district:x,hideMethod:X})]})}),Object(l.jsx)(n.Suspense,{fallback:Object(l.jsx)(S,{}),children:Object(l.jsxs)("section",{children:[Object(l.jsx)(O.a,{children:Object(l.jsx)("h3",{className:"center-align",children:"Chikkaballapur"})}),Object(l.jsx)(N,{maxage:q,vaccine:V,district:c,hideMethod:X})]})})]})]})})})}var C=a.a.memo(k);c(54);var w=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(C,{})})},I=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),I()}},[[55,1,2]]]);
//# sourceMappingURL=main.2e622e86.chunk.js.map