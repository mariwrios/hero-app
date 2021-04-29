(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{46:function(e,r,a){"use strict";a.r(r);var c=a(1),t=a(20),s=a.n(t),n=a(4),i=a(2),l=a(0),o=function(e){var r=e.history;return Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{children:"Login Screen"}),Object(l.jsx)("hr",{}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){r.replace("/")},children:"Login"})]})},h=function(){return Object(l.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(l.jsx)(n.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(l.jsx)("div",{className:"navbar-collapse",children:Object(l.jsxs)("div",{className:"navbar-nav",children:[Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(l.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(l.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login",children:"Logout"})})})]})},d=a(8),j=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],b=function(e){var r=e.id,a=e.superhero,c=(e.alter_ego,e.first_appearance);e.characters;return Object(l.jsx)("div",{className:"  card",style:{margin:20,maxWidth:300},children:Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{style:{maxWidth:300},src:"./assets/heroes/".concat(r,".jpg"),alt:a}),Object(l.jsxs)("div",{style:{maxWidth:300,padding:25,boxSizing:"border-box"},children:[Object(l.jsx)("h5",{children:a}),Object(l.jsx)("p",{children:Object(l.jsx)("small",{className:"text-muted",children:c})}),Object(l.jsx)(n.b,{to:"./hero/".concat(r),children:"More. . ."})]})]})})})},p=function(e){var r=e.publisher,a=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return j.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(l.jsx)("div",{className:"animate__animated animate__fadeIn",style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",width:"100%"},children:a.map((function(e){return Object(l.jsx)(b,Object(d.a)({},e),e.id)}))})},u=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Marvel Comic"}),Object(l.jsx)("hr",{}),Object(l.jsx)(p,{publisher:"Marvel Comics"})]})},m={width:360,display:"flex",margin:"0px 30px",justifyContent:"space-between",flexDirection:"column"},x=function(e){var r=e.history,a=Object(i.h)().heroeId,t=Object(c.useMemo)((function(){return function(e){return j.find((function(r){return r.id===e}))}(a)}),[a]);if(!t)return Object(l.jsx)(i.a,{to:"/"});var s=t.superhero,n=t.publisher,o=t.alter_ego,h=t.first_appearance,d=t.characters,b=t.id;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"HeroScreen"}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"animate__animated animate__fadeIn ",style:{marginTop:100,display:"flex",flexDirection:"column",width:"100%",alignItems:"center"},children:Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("img",{style:{width:250},src:"../assets/heroes/".concat(b,".jpg")}),Object(l.jsxs)("div",{style:m,children:[Object(l.jsx)("h2",{children:s}),Object(l.jsx)("h5",{children:"Datos destacables"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Publisher: "}),n]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"First appearance: "}),h]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Alter ego: "}),o]}),d!==o&&Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Other names: "}),d]}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){r.length<=2?r.push("/"):r.goBack()},children:"Back"})]})]})})]})},v=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Dc Comic"}),Object(l.jsx)("hr",{}),Object(l.jsx)(p,{publisher:"DC Comics"})]})},O=a(12),f=a(11),C=a(22),g=a.n(C),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),j.filter((function(r){return r.superhero.toLocaleLowerCase().includes(e)})))},y=function(e){var r=e.history,a=Object(i.g)(),t=g.a.parse(a.search).q,s=void 0===t?"":t,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(c.useState)(e),a=Object(O.a)(r,2),t=a[0],s=a[1];return[t,function(e){var r=e.target;s(Object(d.a)(Object(d.a)({},t),{},Object(f.a)({},r.name,r.value)))},function(){s(e)}]}({name:s}),o=Object(O.a)(n,3),h=o[0],j=o[1],p=(o[2],h.name),u=Object(c.useMemo)((function(){return _(s)}),[s]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Search Screen"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-5",children:[Object(l.jsx)("h4",{children:" Search form"}),Object(l.jsxs)("form",{style:{display:"flex",flexDirection:"column"},onSubmit:function(e){e.preventDefault(),r.push("?q=".concat(p))},children:[Object(l.jsx)("input",{style:{height:50,marginBottom:15},onChange:j,type:"text",autoComplete:"off",placeholder:"Find your hero",className:"form-control",value:p,name:"name"}),Object(l.jsx)("button",{className:"btn m-1 btn-block btn-outline-primary",children:"Search. . ."})]})]}),Object(l.jsxs)("div",{className:"col-7 ",children:[Object(l.jsx)("h4",{children:"Results"}),Object(l.jsx)("hr",{}),""===s&&Object(l.jsx)("div",{className:"alert alert-info",children:" Search a Hero"}),""!==s&&0===u.length&&Object(l.jsxs)("div",{className:"alert alert-danger",children:[" There is no a hero with ",s," "]}),Object(l.jsx)("div",{className:"animate__animated animate__fadeIn ",style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:u.map((function(e){return Object(l.jsx)(b,Object(d.a)({},e),e.id)}))})]})]})]})},D=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsx)("div",{className:"container mt-2",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/marvel",component:u}),Object(l.jsx)(i.b,{exact:!0,path:"/hero/:heroeId",component:x}),Object(l.jsx)(i.b,{exact:!0,path:"/dc",component:v}),Object(l.jsx)(i.b,{exact:!0,path:"/search",component:y}),Object(l.jsx)(i.a,{to:"/marvel"})]})})]})},M=function(){return Object(l.jsx)(n.a,{children:Object(l.jsx)("div",{children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/login",component:o}),Object(l.jsx)(i.b,{path:"/",component:D})]})})})},k=function(){return Object(l.jsx)(M,{})};s.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.9cdbb6ea.chunk.js.map