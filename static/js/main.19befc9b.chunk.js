(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(4),o=n.n(a),s=(n(9),n(2)),m=n(0),d="a34d972c17727b62a1bb4661ad42515a",i="https://api.openweathermap.org/data/2.5/";var l=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)({}),o=Object(s.a)(a,2),l=o[0],u=o[1],p=Object(r.useState)(!1),g=Object(s.a)(p,2),h=g[0],j=g[1];function b(e){switch(e){case"01d":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/01d@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#40a3ff")];case"01n":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/01n@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#002c52")];case"02d":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/02d@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#58a3e9")];case"02n":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/02n@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#071d30")];case"03d":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/03d@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#74a2ce")];case"03n":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/03n@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#0c1824")];case"04d":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/04d@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#7d9cb9")];case"04n":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/04n@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#0c1824")];case"09d":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/09d@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#8395a5")];case"09n":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/09n@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#0c1824")];case"10d":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/10d@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#858688")];case"10n":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/10n@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#0c1824")];case"11d":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/11d@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#797979")];case"11n":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/11n@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#0c1824")];case"13d":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/13d@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#8a9299")];case"13n":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/13n@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#0c1824")];case"50d":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/50d@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#8fb1cf")];case"50n":return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/50n@2x.png",alt:l.weather[0].main}),document.documentElement.style.setProperty("--color-background","#051c33")];default:return[Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/02d@2x.png",alt:"Welcome"}),document.documentElement.style.setProperty("--color-background","#40a3ff")]}}return Object(r.useEffect)((function(){h&&window.location.assign("https://openweathermap.org/city/".concat(l.id))})),Object(m.jsx)("div",{className:"app",children:Object(m.jsxs)("main",{children:[Object(m.jsx)("div",{className:"search-box",children:Object(m.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search",onChange:function(e){return c(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(i,"weather?q=").concat(n,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){u(e),c(""),console.log(e)}))}})}),"undefined"!=typeof l.name?Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"location-box",children:[Object(m.jsxs)("div",{className:"location",children:[l.name,", ",l.sys.country]}),Object(m.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],n=e.getDate(),r=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(n," ").concat(r," ").concat(c)}(new Date)})]}),Object(m.jsxs)("div",{className:"weather-box",children:[Object(m.jsx)("div",{className:"icon",children:b(l.weather[0].icon)}),Object(m.jsxs)("div",{className:"temp",children:[Math.round(l.main.temp),"\xb0C"]}),Object(m.jsx)("div",{className:"weather",children:l.weather[0].main}),Object(m.jsx)("div",{className:"more-info",children:Object(m.jsx)("button",{onClick:function(){return j(!0)},children:"+ More info"})})]})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"weather-box",children:Object(m.jsx)("div",{className:"icon",children:b("")})}),Object(m.jsx)("div",{className:"weather-box",children:Object(m.jsx)("div",{className:"weather",children:"Welcome"})})]})]})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(l,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.19befc9b.chunk.js.map