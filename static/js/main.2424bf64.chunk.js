(this["webpackJsonpfelipe-portfolio"]=this["webpackJsonpfelipe-portfolio"]||[]).push([[0],{432:function(e,t,s){},433:function(e,t,s){},440:function(e,t,s){},441:function(e,t,s){"use strict";s.r(t);var a=s(7),n=s.n(a),c=s(86),i=s.n(c),r=s(12),l=s(2),o=function(e){var t=e.menu,s=e.toggle;return Object(l.jsx)("div",{className:"navbar-brand",children:Object(l.jsxs)("div",{className:"navbar-burger burger".concat(t?" is-active":""),onClick:s,children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]})})},u={name:"Felipe Alves",about:"\n        <p>\n            Ol\xe1! \n            <br/>\n            Tenho 19 anos e estudo programa\xe7\xe3o desde os 17, adoro tanto design quanto backend \n            <br/>\n            Estou cursando An\xe1lise e Desenvolvimento de Sistemas na Uninter, sou bil\xedngue (Portugu\xeas e Ingl\xeas), \n            mas tenho bom dom\xednio na l\xedngua escrita de Franc\xeas e Espanhol. \n            <br/>\n            Almejando ser p\xf3s-graduado em Seguran\xe7a da Informa\xe7\xe3o e Redes, tenho qualifica\xe7\xf5es principalmente na \xe1rea\n            de Programa\xe7\xe3o Web, com cursos e estudo autodidata e na freeCodeCamp em React, NodeJs, MySQL, HTML, CSS e Javascript. \n            <br/>\n            Tenho um bom conhecimentos em algumas outras linguagens como: PHP (OOP) e Java.\n            <br/>\n            Antes de embarcar na programa\xe7\xe3o, meus principais afazeres eram estudar idiomas e astronomia :)\n            <br/>\n            Tais assuntos que ainda permanecem em meu cora\xe7\xe3o.\n            <br/>\n            Procurando uma oportunidade para trabalhar e de me melhorar.\n        </p>\n    ",photo:s.p+"static/media/photo.2b364524.jpg",links:[{label:"linkedIn",icon:"fab fa-linkedin",href:"https://www.linkedin.com/in/felipe-j-alves/"},{label:"github",icon:"fab fa-github-alt",href:"https://github.com/felipe1234-dev/"}]},d={title:"\ud83d\udcd9 Sobre mim",subtitle:"Estudante de An\xe1lise e Desenvolvimento de Sistemas"},b={title:"\ud83d\udcbb Projetos",subtitle:"Meus \xfaltimos trabalhos",list:{row1:[{image:s.p+"static/media/demo.875b7b93.gif",title:"Sistema de Monitoramento da COVID",description:"Um aplicativo de mapeamento que usa uma API contendo estat\xedsticas recentes do Coronavirus e mapeia os locais e o impacto que cada pa\xeds est\xe1 enfrentando.",preview:"https://coronavirus-map-dashboard.herokuapp.com/",source:"https://github.com/felipe1234-dev/coronavirus-map",techs:["React","CSS","HTML","JavaScript"]},{image:s.p+"static/media/demo_landing.a1bb3907.jpg",title:"Site Tradutores da Web",description:"Uma plataforma colaborativa onde traduzimos p\xe1ginas da internet do idioma que estamos aprendendo para o idioma que j\xe1 falamos.",preview:"https://web-translators.herokuapp.com/",source:"https://github.com/felipe1234-dev/tradutores-web",techs:["React","SASS","HTML","JavaScript","NodeJS","SQLite"]}]}},j=[{label:"In\xedcio",value:"home",icon:"fas fa-home"},{label:"Sobre mim",value:"about",icon:"fas fa-info"},{label:"Skills",value:"skills",icon:"fas fa-bars"},{label:"Curr\xedculo",value:"resume",icon:"fas fa-file-alt"},{label:"Projetos",value:"projects",icon:"fas fa-th-list"}],m={title:"\ud83d\udcaa Skills",subtitle:"",list:{"Front end":{row1:[{name:"HTML",percent:100},{name:"CSS",percent:90}],row2:[{name:"JavaScript",percent:90},{name:"React",percent:95}],row3:[{name:"SASS",percent:100}]},"Back end":{row1:[{name:"NodeJS",percent:80},{name:"Express",percent:80}],row2:[{name:"PHP",percent:60},{name:"Java",percent:30}]},"Banco de dados":{row1:[{name:"SQL",percent:89}]}}},p={title:"\ud83d\udcdd Curr\xedculo",subtitle:"Mais sobre o meu passado",file:s.p+"static/media/resume.9ac72c40.pdf"},h=s(55),O=function(e){var t=e.menu,s=e.activeItem;return Object(l.jsx)("div",{className:"navbar-menu".concat(t?" is-active":""),children:Object(l.jsx)("div",{className:"navbar-end",children:j.map((function(e){var t=e.label,a=e.value,n=e.icon;return Object(l.jsxs)("a",{className:"navbar-item",href:"#".concat(a),active:s===a?"true":void 0,onClick:function(e){e.preventDefault(),Object(h.scroll)("#".concat(a),{duration:1e3,effect:h.easeOutBounce})},children:[Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("i",{className:n})}),Object(l.jsx)("span",{children:t})]})}))})})};s(95);var x=function(e){var t=e.activeItem,s=Object(a.useState)(!1),n=Object(r.a)(s,2),c=n[0],i=n[1];return Object(l.jsxs)("nav",{className:"navbar is-link is-fixed-top",children:[Object(l.jsx)(o,{menu:c,toggle:function(){return i(!c)}}),Object(l.jsx)(O,{menu:c,activeItem:t})]})},f=s(18),v=s(87),g=s.n(v),N=function(e){var t=e.amount,s=e.size,a=e.color,n=e.connected;return Object(l.jsx)(g.a,{className:"particle-background",canvasClassName:"particle-background",params:{particles:{number:{value:t},size:{value:s},color:{value:a},line_linked:{enable:n}}}})},y=(s(432),s(89)),k=s(88),S=s(39),T=s(40),C=s(20),w=s(42),R=s(41),P=function(e){Object(w.a)(s,e);var t=Object(R.a)(s);function s(e){var a;return Object(S.a)(this,s),(a=t.call(this,e)).state={display:!0},a.animateCursor=a.animateCursor.bind(Object(C.a)(a)),a}return Object(T.a)(s,[{key:"componentDidMount",value:function(){this.animateCursor()}},{key:"componentWillUnmount",value:function(){this._interval&&clearInterval(this._interval)}},{key:"animateCursor",value:function(){var e=this;this._interval=setInterval((function(){e.setState({display:!e.state.display})}),500)}},{key:"render",value:function(){var e=this.props,t=e.className,s=e.cursor,a=e.cursorRenderer,n=this.state.display,c=s||"|";return Object(l.jsx)("span",{className:t,style:I(n),children:a?a(c):c})}}]),s}(a.Component),I=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{display:"inline-block",MsTransition:"opacity 0.5s",WebkitTransition:"opacity 0.5s",MozTransition:"opacity 0.5s",transition:"opacity 0.5s",opacity:e?1:0}},M=["speed","typingDelay","staticText","text","cursor","displayTextRenderer","cursorClassName","cursorRenderer"],D=function(e){Object(w.a)(s,e);var t=Object(R.a)(s);function s(e){var a;return Object(S.a)(this,s),(a=t.call(this,e)).state={index:0,displayText:""},a.getRawText=a.getRawText.bind(Object(C.a)(a)),a.type=a.type.bind(Object(C.a)(a)),a.startTyping=a.startTyping.bind(Object(C.a)(a)),a}return Object(T.a)(s,[{key:"componentDidMount",value:function(){this.startTyping()}},{key:"componentWillUnmount",value:function(){this._timeout&&clearTimeout(this._timeout)}},{key:"startTyping",value:function(){var e=this;this._timeout=setTimeout((function(){e.type()}),this.props.typingDelay)}},{key:"getRawText",value:function(){var e=this.props.text;return"string"===typeof e?[e]:Object(k.a)(e)}},{key:"type",value:function(){var e=this,t=this.props.onEndCallback,s=this.state,a=s.index,n=s.displayText,c=this.getRawText()[a];c.length>n.length?(n=c.substr(0,n.length+1),this.setState({displayText:n},(function(){e._timeout=setTimeout((function(){e.type()}),e.props.speed)}))):t()}},{key:"render",value:function(){var e=this.props,t=(e.speed,e.typingDelay,e.staticText),s=(e.text,e.cursor),a=e.displayTextRenderer,n=e.cursorClassName,c=e.cursorRenderer,i=Object(y.a)(e,M),r=this.state,o=r.displayText,u=r.index;return Object(l.jsxs)("span",Object(f.a)(Object(f.a)({},i),{},{children:[t?Object(l.jsxs)("span",{children:[t,"\xa0"]}):null,Object(l.jsx)("div",{style:{display:"inline-block"},children:a?a(o,u):o}),Object(l.jsx)(P,{cursor:s,cursorRenderer:c,className:n})]}))}}]),s}(a.Component);D.defaultProps={speed:200,typingDelay:2500,onEndCallback:function(){}};var E=Object(a.createContext)(null),_=u.name,J="#e31b6d";var V=function(e){var t=e.isVisible,s=Object(a.useState)(!0),n=Object(r.a)(s,2),c=n[0],i=n[1],o=Object(a.useState)(!1),d=Object(r.a)(o,2),b=d[0],j=d[1],m=Object(a.useState)(!1),p=Object(r.a)(m,2),h=p[0],O=p[1],x=Object(a.useContext)(E),v=Object(r.a)(x,1)[0],g=function(e){return document.querySelector(e)};Object(a.useEffect)((function(){return t?v("home"):(i(!0),j(!1),void O(!1))}),[t]);var y={text:{text:"Ol\xe1! Eu sou",speed:225,cursorRenderer:function(e){return Object(l.jsx)("span",{id:"text-cursor",children:e})},onEndCallback:function(){j(!0),g("#text-cursor").style.display="none"}},title:{text:_,speed:225,typingDelay:500,cursorRenderer:function(e){return Object(l.jsx)("h1",{id:"title-cursor",className:"title is-1",style:{color:J},children:e})},displayTextRenderer:function(e){return Object(l.jsx)("h1",{className:"title is-1",style:{color:J},children:e})},onEndCallback:function(){O(!0),g("#title-cursor").style.display="none"}},subtitle:{text:"Desenvolvedor Web Full Stack \ud83d\udc4b",speed:225,typingDelay:500,cursorRenderer:function(e){return Object(l.jsx)("h2",{id:"subtitle-cursor",className:"subtitle is-3",children:e})},displayTextRenderer:function(e){return Object(l.jsx)("h2",{className:"subtitle is-3",children:e.split(" ").map((function(e){return"\ud83d\udc4b"===e?Object(l.jsx)("span",{className:"waving-hand",children:"\ud83d\udc4b"}):"".concat(e," ")}))})}}};return Object(l.jsxs)("header",{id:"home",className:["hero","is-link","is-fullheight","is-fullheight-with-navbar"].join(" "),children:[Object(l.jsx)(N,{amount:15,size:15,color:"#4f4e4d",connected:!0}),t&&Object(l.jsx)("div",{className:"hero-body",children:Object(l.jsxs)("div",{className:"container",children:[c&&Object(l.jsx)(D,Object(f.a)({},y.text)),Object(l.jsx)("br",{}),b&&Object(l.jsx)(D,Object(f.a)({},y.title)),Object(l.jsx)("br",{}),h&&Object(l.jsx)(D,Object(f.a)({},y.subtitle))]})}),Object(l.jsx)("div",{className:"hero-foot",children:Object(l.jsx)("nav",{className:"tabs",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("ul",{children:u.links.map((function(e){var t=e.label,s=e.icon,a=e.href;return Object(l.jsx)("li",{website:t,children:Object(l.jsxs)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:[Object(l.jsx)("i",{className:s}),"\xa0\xa0",t]})})}))})})})})]})};var L=function(e){var t=e.isVisible,s=Object(a.useContext)(E),n=Object(r.a)(s,1)[0];return Object(a.useEffect)((function(){return t?n("about"):null}),[t]),Object(l.jsx)("section",{id:"about",className:"section",children:Object(l.jsxs)("div",{className:"section-heading",children:[Object(l.jsxs)("h3",{className:"title is-2",children:[d.title,Object(l.jsx)("b",{className:"dot",children:"."})]}),Object(l.jsx)("h4",{className:"subtitle is-5",children:d.subtitle}),Object(l.jsx)("div",{className:"container content",dangerouslySetInnerHTML:{__html:u.about}}),Object(l.jsx)("figure",{className:"image is-128x128",children:Object(l.jsx)("img",{className:"is-rounded",src:u.photo,alt:u.name})})]})})};var F=function(e){var t=e.isVisible;return Object(l.jsxs)("section",{id:"skills",className:"section",children:[Object(l.jsxs)("div",{className:"section-heading",children:[Object(l.jsxs)("h3",{className:"title is-2",children:[m.title,Object(l.jsx)("span",{className:"dot",children:"."})]}),Object(l.jsx)("h4",{className:"subtitle is-5",children:m.subtitle})]}),Object(l.jsx)("div",{className:"container",children:Object.keys(m.list).map((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"columns",children:Object(l.jsx)("div",{className:"column",children:Object(l.jsx)("h3",{className:"subtitle is-5",children:e})})}),Object.keys(m.list[e]).map((function(s){return Object(l.jsx)("div",{className:"columns",children:m.list[e][s].map((function(e){return Object(l.jsxs)("div",{className:"column",children:[e.name," - ",e.percent,"%",Object(l.jsx)("progress",{className:"progress is-small",tech:e.name,value:t?e.percent:0,max:"100"})]})}))})}))]})}))})]})};var q=function(e){var t=e.isVisible,s=Object(a.useContext)(E),n=Object(r.a)(s,1)[0];return Object(a.useEffect)((function(){return t?n("resume"):null}),[t]),Object(l.jsx)("section",{className:"section",id:"resume",children:Object(l.jsxs)("div",{className:"section-heading",children:[Object(l.jsxs)("h3",{className:"title is-2",children:[p.title,Object(l.jsx)("span",{className:"dot",children:"."})]}),Object(l.jsx)("h4",{className:"subtitle is-5",children:p.subtitle}),Object(l.jsxs)("a",{href:p.file,download:p.file,className:"button is-link is-medium",children:[Object(l.jsx)("span",{className:"icon",children:Object(l.jsx)("i",{className:"fas fa-file-alt"})}),Object(l.jsx)("span",{children:"Baixar Meu Curr\xedculo"})]})]})})};s(433);var A=function(e){var t,s,a=e.title,n=e.image,c=e.description,i=e.techs,r=e.preview,o=e.source;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("header",{className:"card-header",children:Object(l.jsxs)("div",{className:"browser-header",children:[Object(l.jsx)("span",{className:"fake-button","data-close":""}),Object(l.jsx)("span",{className:"fake-button","data-minify":""}),Object(l.jsx)("span",{className:"fake-button","data-expand":""})]})}),Object(l.jsxs)("div",{className:"card-image",children:[Object(l.jsx)("figure",{className:"image",children:Object(l.jsx)("img",{className:"has-ratio",src:n,alt:a})}),Object(l.jsx)("div",{className:"overlay",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("h3",{className:"title is-6",children:a}),Object(l.jsx)("p",{children:(t=c,s=200,t.length>s?t.substr(0,s-1)+"(...)":t)}),i.map((function(e){return Object(l.jsx)("span",{className:"tag",tech:e,children:e})}))]})})]}),Object(l.jsxs)("footer",{className:"card-footer",children:[Object(l.jsx)("a",{href:r,className:"card-footer-item button is-normal",target:"_blank",rel:"noopener noreferrer",children:"Preview"}),Object(l.jsx)("a",{href:o,className:"card-footer-item button is-normal",target:"_blank",rel:"noopener noreferrer",children:"Github"})]})]})};var H=function(e){var t=e.isVisible,s=Object(a.useContext)(E),n=Object(r.a)(s,1)[0];return Object(a.useEffect)((function(){return t?n("projects"):null}),[t]),Object(l.jsx)("section",{className:"section",id:"projects",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"section-heading",children:[Object(l.jsxs)("h3",{className:"title is-2",children:[b.title,Object(l.jsx)("b",{className:"dot",children:"."})]}),Object(l.jsx)("h4",{className:"subtitle is-5",children:b.subtitle})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"container projects-container",children:Object.keys(b.list).map((function(e){return Object(l.jsx)("div",{className:"columns",children:b.list[e].map((function(e){return Object(l.jsx)("div",{className:"column",children:Object(l.jsx)(A,Object(f.a)({},e))})}))})}))})]})})},z=s(25),B=s.n(z);var W=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(l.jsxs)(E.Provider,{value:[n],children:[Object(l.jsx)(x,{activeItem:s}),Object(l.jsx)(B.a,{offset:-52,partialVisibility:!0,children:Object(l.jsx)(V,{})}),Object(l.jsx)(B.a,{offset:-52,partialVisibility:!0,children:Object(l.jsx)(L,{})}),Object(l.jsx)(B.a,{offset:-52,partialVisibility:!0,children:Object(l.jsx)(F,{})}),Object(l.jsx)(B.a,{offset:-52,partialVisibility:!0,children:Object(l.jsx)(q,{})}),Object(l.jsx)(B.a,{offset:-52,partialVisibility:!0,children:Object(l.jsx)(H,{})})]})},U=(s(440),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,442)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))});i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(W,{})}),document.getElementById("root")),U(console.log)},95:function(e,t,s){}},[[441,1,2]]]);
//# sourceMappingURL=main.2424bf64.chunk.js.map