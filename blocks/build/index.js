!function(e){var t={};function a(l){if(t[l])return t[l].exports;var c=t[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=t,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(l,c,function(t){return e[t]}.bind(null,c));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=5)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.data},function(e,t,a){"use strict";a.r(t);var l=a(3),c=a(0),n=a(2),r=a(1),s=e=>{var t;const{link:a,setLink:l,removeLink:s}=e;return Object(c.createElement)("div",null,Object(c.createElement)(r.MediaUploadCheck,null,Object(c.createElement)(r.MediaUpload,{className:"js-book-details-image wp-admin-book-details-image",allowedTypes:["image"],multiple:!1,value:(null===(t=a.image)||void 0===t?void 0:t.id)||"",addToGallery:!0,onSelect:e=>{l({...a,image:e})},render:({open:e})=>a.image?Object(c.createElement)("div",null,Object(c.createElement)("p",null,Object(c.createElement)("img",{src:a.image.url,width:a.image.width/2})),Object(c.createElement)("p",null,Object(c.createElement)(n.Button,{onClick:()=>{l({...a,image:null})},className:"button is-small"},Object(c.createElement)("span",{className:"material-icons"},"delete")))):Object(c.createElement)(n.Button,{onClick:e,className:"button"},"Subir imagen")})),Object(c.createElement)(n.TextControl,{value:a.url,name:"url",placeholder:"Url",onChange:e=>{l({...a,url:e})}}),Object(c.createElement)(n.TextControl,{value:a.label,name:"label",placeholder:"Texto del enlace",onChange:e=>{l({...a,label:e})}}),Object(c.createElement)(n.Button,{onClick:()=>{s(a)},className:"button is-small"},"Eliminar"))},o=e=>{var t;const{link:a,setLink:l,removeLink:s}=e;return Object(c.createElement)("div",null,Object(c.createElement)(r.MediaUploadCheck,null,Object(c.createElement)(r.MediaUpload,{className:"js-book-details-image wp-admin-book-details-image",allowedTypes:["image"],multiple:!1,value:(null===(t=a.image)||void 0===t?void 0:t.id)||"",addToGallery:!0,onSelect:e=>{l({...a,image:e})},render:({open:e})=>a.image?Object(c.createElement)("div",null,Object(c.createElement)("p",null,Object(c.createElement)("img",{src:a.image.url,width:a.image.width/2})),Object(c.createElement)(n.Button,{onClick:()=>{l({...a,image:null})},className:"button is-small"},Object(c.createElement)("span",{className:"material-icons"},"delete"))):Object(c.createElement)(n.Button,{onClick:e,className:"button"},"Subir imagen")})),Object(c.createElement)(n.TextControl,{value:a.url,name:"url",placeholder:"Url",onChange:e=>{l({...a,url:e})}}),Object(c.createElement)(n.TextControl,{value:a.label,name:"label",placeholder:"Texto del enlace",onChange:e=>{l({...a,label:e})}}),Object(c.createElement)(n.Button,{onClick:()=>{s(a)},className:"button is-small"},"Eliminar"))},i=e=>{var t;const{link:a,setLink:l,removeLink:s}=e;return Object(c.createElement)("div",null,Object(c.createElement)(r.InnerBlocks,null),Object(c.createElement)(r.MediaUploadCheck,null,Object(c.createElement)(r.MediaUpload,{className:"js-book-details-image wp-admin-book-details-image",allowedTypes:["image"],multiple:!1,value:(null===(t=a.image)||void 0===t?void 0:t.id)||"",addToGallery:!0,onSelect:e=>{l({...a,image:e})},render:({open:e})=>a.image?Object(c.createElement)("div",null,Object(c.createElement)("p",null,Object(c.createElement)("img",{src:a.image.url,width:a.image.width/2})),Object(c.createElement)("p",null,Object(c.createElement)(n.Button,{onClick:()=>{l({...a,image:null})},className:"button is-small"},Object(c.createElement)("span",{className:"material-icons"},"delete")))):Object(c.createElement)(n.Button,{onClick:e,className:"button"},"Subir imagen")})),Object(c.createElement)(n.TextControl,{value:a.url,name:"url",placeholder:"Url",onChange:e=>{l({...a,url:e})}}),Object(c.createElement)(n.TextControl,{value:a.label,name:"label",placeholder:"Texto del enlace",onChange:e=>{l({...a,label:e})}}),Object(c.createElement)(n.Button,{onClick:()=>{s(a)},className:"button is-small"},"Eliminar"))},m=a(4);Object(l.registerBlockType)("mtpe/info-links",{title:"Links de información",description:"Links a las secciones informativas",icon:"info",category:"layout",attributes:{links:{type:"array",default:[{id:(new Date).getTime().toString(),image:null,url:"",label:""}]}},edit:e=>{const{attributes:{links:t},setAttributes:a}=e,l=e=>{const l=t.filter(t=>t.id!==e.id);a({links:l})},n=e=>{const l=t.map(t=>t.id===e.id?e:t);a({links:l})};return Object(c.createElement)("div",{className:"container"},Object(c.createElement)("div",{className:"row"},Object(c.createElement)("h2",null,"¡Todo lo que debes saber para trabajar dentro y fuera del Perú!"),Object(c.createElement)("p",null,"Entérate de los beneficios, requisitos y pasos para acceder a ellos, y otra información de tu interés")),Object(c.createElement)("div",{className:"row"},t.map(e=>Object(c.createElement)("div",{className:"col-3"},Object(c.createElement)(o,{link:e,setLink:n,removeLink:l})))),Object(c.createElement)("button",{className:"button add-new-button",onClick:()=>{a({links:[...t,{id:(new Date).getTime().toString(),image:null,url:"",label:""}]})}},"Añadir nuevo link"))},save:e=>{const{attributes:{links:t}}=e;return Object(c.createElement)("section",{className:"container-fluid container--gray  py-5"},Object(c.createElement)("div",{className:"container"},Object(c.createElement)("div",{className:"py-4"},Object(c.createElement)("h2",null,"¡Todo lo que debes saber para trabajar dentro y fuera del Perú!"),Object(c.createElement)("p",{className:"h5"},"Entérate de los beneficios, requisitos y pasos para acceder a ellos, y otra información de tu interés."),Object(c.createElement)("div",{className:"py-5"},Object(c.createElement)("div",{className:"row"},t.map(e=>{var t,a,l,n,r,s;return Object(c.createElement)("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3"},Object(c.createElement)("div",{className:"card--no-bar"},Object(c.createElement)("div",{className:"icon-container py-4"},Object(c.createElement)("img",{className:"icon card__super-icon",src:null===(t=e.image)||void 0===t||null===(a=t.url)||void 0===a?void 0:a.trim(),alt:null===(l=e.image)||void 0===l||null===(n=l.alt)||void 0===n?void 0:n.trim()})),Object(c.createElement)("a",{href:null===(r=e.url)||void 0===r?void 0:r.trim(),className:"button--center button--primary"},Object(c.createElement)("span",{className:"text-center text--bold"},null===(s=e.label)||void 0===s?void 0:s.trim()))))}))))))}}),Object(l.registerBlockType)("mtpe/info-cards",{title:"Cartillas informativas",description:"Links a las secciones informativas",icon:"info",category:"layout",attributes:{links:{type:"array",default:[{id:(new Date).getTime().toString(),image:null,url:"",label:""}]},title:{type:"string",default:""}},edit:e=>{const{attributes:{links:t},setAttributes:a}=e,l=e=>{const l=t.filter(t=>t.id!==e.id);a({links:l})},n=e=>{const l=t.map(t=>t.id===e.id?e:t);a({links:l})};return Object(c.createElement)("div",{className:"container"},Object(c.createElement)("div",{className:"row"},t.map(e=>Object(c.createElement)("div",{className:"col-3"},Object(c.createElement)(s,{link:e,setLink:n,removeLink:l})))),Object(c.createElement)("button",{className:"button add-new-button",onClick:()=>{a({links:[...t,{id:(new Date).getTime().toString(),image:null,url:"",label:""}]})}},"Añadir nueva cartilla informativa"))},save:e=>{const{attributes:{links:t}}=e;return Object(c.createElement)("div",{className:"row g-0 row-cols-4 info-cards"},t.map(e=>{var t,a,l;return Object(c.createElement)("div",{className:"card col-12 col-md-auto m-1 info-card p-1"},Object(c.createElement)("div",{className:"row g-0"},Object(c.createElement)("div",{className:"col p-0 m-0 info-card__flag"},Object(c.createElement)("a",{target:"_blank",rel:"noopener noreferrer",href:e.url.trim()},Object(c.createElement)("img",{className:"img-fluid",src:null===(t=e.image)||void 0===t?void 0:t.url.trim(),alt:null===(a=e.image)||void 0===a?void 0:a.alt.trim()}))),Object(c.createElement)("div",{className:"col p-1 m-0 d-flex align-items-center"},Object(c.createElement)("div",{className:"card-body p-0 info-card__body"},Object(c.createElement)("a",{target:"_blank",rel:"noopener noreferrer",className:"info-card__link",href:e.url.trim()},null===(l=e.label)||void 0===l?void 0:l.toUpperCase().trim())))))}))}}),Object(l.registerBlockType)("mtpe/info-assets",{title:"Materiales informativos",description:"Lista de materiales informativos para el migrante",icon:"info",category:"layout",attributes:{links:{type:"array",default:[{id:(new Date).getTime().toString(),image:null,url:"",label:""}]}},edit:e=>{const{attributes:{links:t},setAttributes:a}=e,l=e=>{const l=t.filter(t=>t.id!==e.id);a({links:l})},n=e=>{const l=t.map(t=>t.id===e.id?e:t);a({links:l})};return Object(c.createElement)("div",{className:"container"},Object(c.createElement)("div",{className:"row"},t.map(e=>Object(c.createElement)("div",{className:"col-3"},Object(c.createElement)(i,{link:e,setLink:n,removeLink:l})))),Object(c.createElement)("button",{className:"button",onClick:()=>{a({links:[...t,{id:(new Date).getTime().toString(),image:null,url:"",label:""}]})}},"Añadir nueva cartilla informativa"))},save:e=>{const{attributes:{links:t}}=e;return Object(c.createElement)("div",{className:"row row-cols-4 info-cards"},Object(c.createElement)(r.InnerBlocks.Content,null),t.map(e=>{var t,a,l;return Object(c.createElement)("div",{className:"card col-12 col-md-auto m-1 info-card p-1"},Object(c.createElement)("div",{className:"row g-0"},Object(c.createElement)("div",{className:"col p-0 m-0 info-card__flag"},Object(c.createElement)("img",{className:"img-fluid",src:null===(t=e.image)||void 0===t?void 0:t.url,alt:null===(a=e.image)||void 0===a?void 0:a.alt})),Object(c.createElement)("div",{className:"col p-1 m-0 d-flex align-items-center"},Object(c.createElement)("div",{className:"card-body p-0 info-card__body"},Object(c.createElement)("a",{className:"info-card__link",href:e.url},null===(l=e.label)||void 0===l?void 0:l.toUpperCase())))))}))}}),Object(l.registerBlockType)("mtpe/link",{title:"MTPE Link",description:"Link con estilos de la web del MTPE",icon:"external",category:"layout",attributes:{links:{type:"array",default:[{id:(new Date).getTime().toString(),style:"default",url:"",label:""}]},style:{type:"string",default:"default"}},edit:e=>{const{attributes:{links:t,style:a="default"},setAttributes:l}=e,s=e=>{const c=t.map(t=>t.id===e.id?e:t);l({links:c,style:a})};return Object(c.createElement)("div",Object(r.useBlockProps)(),Object(c.createElement)("div",{className:"container with-border"},Object(c.createElement)("div",{className:"row"},t.map(e=>Object(c.createElement)("div",null,Object(c.createElement)("div",{className:"container m-0 p-0 g-0"},Object(c.createElement)("div",{className:"row d-flex align-items-center"},Object(c.createElement)("div",{className:"col-4"},Object(c.createElement)(n.TextControl,{label:"URL",value:e.url,placeholder:"URL",onChange:t=>{s({...e,url:t})}})),Object(c.createElement)("div",{className:"col-4"},Object(c.createElement)(n.TextControl,{label:"Texto de enlace",placeholder:"Texto",value:e.label,onChange:t=>{s({...e,label:t})}})),Object(c.createElement)("button",{className:"col-3 col-sm-2 d-flex align-items-center justify-content-center offset-sm-1 button button--remove",type:"button",onClick:()=>(e=>{const c=t.filter(t=>t.id!==e.id);l({links:c,style:a})})(e)},Object(c.createElement)("span",{className:"material-icons"},"delete"))))))),Object(c.createElement)("div",{className:"row d-flex align-items-center"},Object(c.createElement)("div",{className:"col-4"},Object(c.createElement)(n.SelectControl,{label:"Tipo de grupo",value:a||"default",options:[{label:"Con viñeta y bordes",value:"border-style"},{label:"Con bordes",value:"border"},{label:"Con viñeta",value:"style"},{label:"Simple",value:"default"}],onChange:e=>{l({links:t,style:e})}})),Object(c.createElement)("button",{className:"col-3 col-sm-2 offset-4 offset-sm-5 d-flex align-items-center justify-content-center button button--small",onClick:()=>{l({links:[...t,{id:(new Date).getTime().toString(),url:"",label:""}],style:a})}},Object(c.createElement)("span",{className:"material-icons"},"add")))))},save:e=>{const{attributes:{links:t,style:a}}=e,l="border-style"===a||"border"===a?"link-group link-group--border":"link-group",n="border-style"===a?"list__element-item":"border"===a?"list__element-item list__element-item--no-style":"style"===a?"list__element-item":"list__element-item list__element-item--no-style";return Object(c.createElement)("div",{className:l},Object(c.createElement)("ul",null,t.map(e=>{var t,a;return Object(c.createElement)("li",{className:n},Object(c.createElement)("a",{target:"_blank",rel:"noopener noreferrer",className:"link text-center",href:null===(t=e.url)||void 0===t?void 0:t.trim()},Object(c.createElement)("span",{className:"link__text"},null===(a=e.label)||void 0===a?void 0:a.trim()," "),Object(c.createElement)("span",{className:"material-icons link__icon"},"open_in_new")))})))}}),Object(l.registerBlockType)("mtpe/social-rights-widget",{apiVersion:2,title:"Derechos socio laborales - Enlaces",description:"Lista de los distintos derechos socio-laborales y sus enlaces",icon:"megaphone",category:"widgets",edit:Object(m.withSelect)(e=>({socialRights:e("core").getEntityRecords("postType","derecho",{per_page:6,order:"asc"})}))(({socialRights:e})=>{const t=Object(r.useBlockProps)();return Object(c.createElement)("div",t,Object(c.createElement)("section",{id:"derechos-socio-laborales",className:"container py-5 p-4"},Object(c.createElement)("div",{className:"py-4"},Object(c.createElement)("h2",null,"Conoce los Derechos Socio Laborales de los Trabajadores Migrantes"),Object(c.createElement)("p",{className:"h5"},"Los trabajadores migrantes del Régimen Laboral de la Actividad Privada tienen entre sus principales derechos socio laborales los siguientes:"),Object(c.createElement)("div",{className:"container container--gray"},Object(c.createElement)("ul",{className:"row px-0 py-4"},!e&&"Cargando...",e&&0===e.length&&"No se han registrado derechos socio laborales",e&&e.length>0&&e.map(e=>{var t;return Object(c.createElement)("div",{className:"col-4 d-flex"},Object(c.createElement)("li",{className:"list__element-item"},Object(c.createElement)("a",{className:"link text-center",href:e.link},Object(c.createElement)("span",{className:"link__text"},null===(t=e.title)||void 0===t?void 0:t.rendered)," ",Object(c.createElement)("span",{className:"material-icons link__icon"},"open_in_new"))))}))),Object(c.createElement)("div",{className:"row"},Object(c.createElement)("div",{className:"col d-flex flex-row-reverse"},Object(c.createElement)("span",{className:"button button--secondary",style:{justifyContent:"space-between"}},"Ver más derechos",Object(c.createElement)("svg",{className:"ml-4 button__icon",xmlns:"http://www.w3.org/2000/svg",width:"25",height:"26",viewBox:"0 0 25 26"},Object(c.createElement)("path",{fill:"currentColor",d:"M12.5.5l-2.203 2.203 8.719 8.735H0v3.125h19.016l-8.72 8.734L12.5 25.5 25 13z"}))))))))})}),Object(l.registerBlockType)("mtpe/collapse-element-1",{apiVersion:2,title:"Elementos colapsables estilo 1",description:"Elementos colapsables con título y descripción",icon:"arrow-down-alt2",category:"layout",attributes:{title:{type:"string",default:""},description:{type:"string",default:""},id:{type:"string",default:""}},edit:e=>{const{attributes:{title:t,description:a,id:l},setAttributes:n}=e;return Object(c.createElement)("div",Object(r.useBlockProps)(),Object(c.createElement)("div",{className:"wp-block container-fluid with-border"},Object(c.createElement)("div",{className:"row"},Object(c.createElement)("div",{className:"col-9"},Object(c.createElement)("h3",{className:"subtitle"},Object(c.createElement)(r.PlainText,{value:t,onChange:e=>{n({title:e,description:a,id:e.trim().split(" ").join("").toLowerCase()})},placeholder:"Título del grupo"})),Object(c.createElement)("p",null,Object(c.createElement)(r.PlainText,{value:a,onChange:e=>{n({title:t,id:l,description:e})},placeholder:"Breve descripción o introducción",label:"Breve descripción o introducción"}))),Object(c.createElement)("div",{className:"col-3 d-flex align-items-center"},Object(c.createElement)("button",{className:"button button--tertiary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsable","aria-expanded":"true","aria-controls":"collapsable"},Object(c.createElement)("span",{className:"button__text"},"Ver todos")," ",Object(c.createElement)("span",{className:"material-icons button__icon button__icon--transform"},"arrow_back_ios_new")))),Object(c.createElement)("div",{className:"row",id:"collapsable"},Object(c.createElement)(r.InnerBlocks,null))))},save:e=>{const{attributes:{title:t,description:a,id:l}}=e;return Object(c.createElement)("div",{class:"container px-0 collapsable2 accordion",id:"accordion3"+l},Object(c.createElement)("div",{class:"accordion-item border-0"},Object(c.createElement)("div",{class:"accordion-header row g-0",id:"collapsable3head"+l},Object(c.createElement)("div",{class:"col-9"},Object(c.createElement)("h3",{class:"subtitle"},t),Object(c.createElement)("p",null,a)),Object(c.createElement)("div",{class:"col-3 d-flex align-items-center justify-content-center justify-content-lg-end"},Object(c.createElement)("button",{class:"button button--tertiary accordion-button button--dflex justify-content-center w-75 collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsable3"+l,"aria-expanded":"false","aria-controls":"collapsable3"+l},Object(c.createElement)("span",{class:"d-none d-lg-inline button__text"},"Ver todos")))),Object(c.createElement)("div",{class:"row collapse",id:"collapsable3"+l,"aria-labelledby":"collapsable3head"+l},Object(c.createElement)("div",{className:"accordion-body"},Object(c.createElement)(r.InnerBlocks.Content,null)))))}}),Object(l.registerBlockType)("mtpe/collapse-element-2",{apiVersion:2,title:"Elementos colapsables estilo 2",description:"Elementos colapsables con título e ícono",icon:"arrow-down-alt2",category:"layout",attributes:{title:{type:"string",default:""},icon:{type:"object",default:null},id:{type:"string",default:((new Date).getTime()*Math.floor(1e3*Math.random())).toString(16)}},edit:e=>{const{attributes:{title:t,icon:a,id:l},setAttributes:s}=e;return Object(c.createElement)("div",Object(r.useBlockProps)(),Object(c.createElement)("div",{className:"container-fluid wp-block py-2 collapsable with-border"},Object(c.createElement)("div",{className:"row d-flex justify-content-between"},Object(c.createElement)(r.MediaUploadCheck,null,Object(c.createElement)(r.MediaUpload,{className:"js-book-details-image wp-admin-book-details-image",allowedTypes:["image"],multiple:!1,value:(null==a?void 0:a.id)||"",addToGallery:!0,onSelect:e=>{s({title:t,icon:e,id:l})},render:({open:e})=>a?Object(c.createElement)("div",{class:"col-3 px-0 d-flex align-items-center"},Object(c.createElement)("span",{class:"d-inline-block collapsable__icon"},Object(c.createElement)("img",{src:a.url})),Object(c.createElement)(n.Button,{onClick:()=>{s({title:t,id:l,icon:null})},className:"button button--remove"},Object(c.createElement)("span",{className:"material-icons"},"delete"))):Object(c.createElement)("div",{class:"col-2 d-flex align-items-center"},Object(c.createElement)(n.Button,{onClick:e,className:"button is-small"},Object(c.createElement)("span",{className:"material-icons"},"add")))})),Object(c.createElement)("div",{className:"col-7"},Object(c.createElement)("h4",{className:"collapsable__title"},Object(c.createElement)(r.PlainText,{className:"p-2",value:t,placeholder:"Título del elemento",onChange:e=>{s({title:e,icon:a,id:e.trim().split(" ").join("")})}}))),Object(c.createElement)("div",{className:"col-2 d-flex align-items-center justify-content-end"},Object(c.createElement)("button",{className:"button collapsable__toggle",type:"button"},Object(c.createElement)("span",{className:"material-icons button__icon button__icon--transform"},"arrow_back_ios_new")))),Object(c.createElement)("div",{className:"row collapsable__content"},Object(c.createElement)(r.InnerBlocks,null))))},save:e=>{const{attributes:{title:t,icon:a,id:l}}=e;return Object(c.createElement)("div",{className:"container px-0 collapsable"},Object(c.createElement)("div",{className:"row g-0 px-2 my-2 d-flex justify-content-between",id:"collapsable2head"+l},Object(c.createElement)("div",{className:"col-10 p-0 d-flex align-items-center"},a&&Object(c.createElement)("span",{className:"d-inline-block collapsable__icon"},Object(c.createElement)("img",{src:a.url,alt:a.alt})),Object(c.createElement)("h4",{className:"collapsable__title"},t)),Object(c.createElement)("div",{className:"col-1 d-flex align-items-center justify-content-end"},Object(c.createElement)("button",{class:"button button--tertiary button--collapse2 accordion-button button--dflex justify-content-center w-75 collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsable2"+l,"aria-expanded":"false","aria-controls":"collapsable2"+l}))),Object(c.createElement)("div",{className:"row collapse g-0",id:"collapsable2"+l,"aria-labelledby":"collapsable2head"+l},Object(c.createElement)("div",{className:"collapsable__content"},Object(c.createElement)(r.InnerBlocks.Content,null))))}}),Object(l.registerBlockType)("mtpe/contact-info",{apiVersion:2,title:"Información de contacto",description:"Bloque de información de contacto predeterminada para el mtpe",icon:"phone",category:"layout",supports:{anchor:!0},attributes:{address:{type:"string",default:""},mapUrl:{type:"string",default:""},phone:{type:"string",default:""},schedule:{type:"string",default:""},background:{type:"object",default:null},anchor:{type:"string",source:"attribute",attribute:"id",selector:"*"}},edit:e=>{var t,a;const{attributes:l,setAttributes:s}=e,o=e=>t=>{s({...l,[e]:t})};return Object(c.createElement)("div",Object(r.useBlockProps)(),Object(c.createElement)("div",{className:"container-fluid m-0 p-0"},Object(c.createElement)("div",{id:"contactInfo",className:"carousel slide contactInfo","data-bs-ride":"carousel"},Object(c.createElement)("div",{className:"d-none d-lg-block carousel-inner contactInfo__carousel"},Object(c.createElement)("div",{className:"carousel-item active"},Object(c.createElement)("div",{className:"black-gradient"}),null!=l&&l.background?Object(c.createElement)("img",{src:null===(t=l.background)||void 0===t?void 0:t.url,className:"d-md-block w-100",alt:l.background.alt}):Object(c.createElement)("img",{className:"d-md-block w-100 contactInfo__image",src:"",alt:"",srcset:""}),Object(c.createElement)("div",{className:"row px-0 carousel-caption contactInfo__caption d-flex px-2"},Object(c.createElement)("h2",{className:"text-start"},"Contacto"),Object(c.createElement)("div",{className:"container py-4 px-5 contactInfo__caption-content"},Object(c.createElement)(r.MediaUploadCheck,null,Object(c.createElement)(r.MediaUpload,{className:"js-book-details-image wp-admin-book-details-image",allowedTypes:["image"],multiple:!1,value:(null===(a=l.background)||void 0===a?void 0:a.id)||"",addToGallery:!0,onSelect:e=>s({...l,background:e}),render:({open:e})=>{var t;return l.background?Object(c.createElement)("div",{className:"col-6 px-0 d-flex align-items-center"},Object(c.createElement)("span",{className:"me-3"},"Imagen de fondo:"),Object(c.createElement)("span",{className:"d-inline-block w-25"},Object(c.createElement)("img",{src:null===(t=l.background)||void 0===t?void 0:t.url})),Object(c.createElement)(n.Button,{onClick:()=>{s({...l,background:null})},className:"button button--remove"},Object(c.createElement)("span",{className:"material-icons"},"delete"))):Object(c.createElement)("div",{className:"col-6 d-flex align-items-center"},Object(c.createElement)("span",null,"Imagen de fondo:"),Object(c.createElement)(n.Button,{onClick:e,className:"button is-small"},Object(c.createElement)("span",{className:"material-icons"},"add")))}})),Object(c.createElement)("div",{className:"contactInfo__block"},Object(c.createElement)("h4",{className:"h4 text-start"},"Sede central"),Object(c.createElement)("div",{className:"text-start"},Object(c.createElement)(r.RichText,{placeholder:"Texto de la sede central",value:l.address,onChange:o("address")})),Object(c.createElement)("div",{className:"link py-3 contactInfo__link"},Object(c.createElement)("span",null,"Ver Mapa ",Object(c.createElement)("span",{className:"contactInfo__link-icon"},">"))),Object(c.createElement)(r.PlainText,{value:l.mapUrl,placeholder:"Ingrese la URL del mapa a la ubicación",onChange:o("mapUrl")})),Object(c.createElement)("div",{className:"contactInfo__block"},Object(c.createElement)("h4",{className:"h4 text-start"},"Central telefónica"),Object(c.createElement)("div",{className:"text-start"},Object(c.createElement)(r.RichText,{placeholder:"Número(s) telefónicos",value:l.phone,onChange:o("phone")}))),Object(c.createElement)("div",{className:"contactInfo__block"},Object(c.createElement)("h4",{className:"h4 text-start"},"Horario"),Object(c.createElement)("div",{className:"text-start"},Object(c.createElement)(r.RichText,{placeholder:"Número(s) telefónicos",value:l.schedule,onChange:o("schedule")}))))))))))},save:e=>{const{attributes:{mapUrl:t,background:a,address:l,phone:n,schedule:s,anchor:o}}=e;return Object(c.createElement)("div",{id:o,className:"position-relative container-fluid m-0 p-0"},Object(c.createElement)("div",{id:"contactInfo",className:"carousel slide contactInfo","data-bs-ride":"carousel"},Object(c.createElement)("div",{className:"d-none d-lg-block carousel-inner contactInfo__carousel"},Object(c.createElement)("div",{className:"carousel-item active"},Object(c.createElement)("img",{src:a.url,className:"d-md-block w-100",alt:a.alt}),Object(c.createElement)("div",{className:"row px-0 carousel-caption contactInfo__caption d-flex px-2"},Object(c.createElement)("h2",{className:"text-start"},"Contacto"),Object(c.createElement)("div",{className:"container py-4 px-5 contactInfo__caption-content"},Object(c.createElement)("div",{className:"contactInfo__block"},Object(c.createElement)("h4",{className:"h4 text-start"},"Sede central"),Object(c.createElement)("p",{className:"text-start"},Object(c.createElement)(r.RichText.Content,{value:l})),Object(c.createElement)("div",{className:"link py-2 contactInfo__link text-start"},Object(c.createElement)("a",{href:t,target:"_blank",rel:"noreferrer noopener"},"Ver Mapa ",Object(c.createElement)("span",{className:"contactInfo__link-icon"},">")))),Object(c.createElement)("div",{className:"contactInfo__block"},Object(c.createElement)("h4",{className:"h4 text-start"},"Central telefónica"),Object(c.createElement)("p",{className:"text-start"},Object(c.createElement)(r.RichText.Content,{value:n}))),Object(c.createElement)("div",{className:"contactInfo__block"},Object(c.createElement)("h4",{className:"h4 text-start"},"Horario"),Object(c.createElement)("p",{className:"text-start"},Object(c.createElement)(r.RichText.Content,{value:s}))))))),Object(c.createElement)("div",{className:"d-lg-none d-block row px-4 py-3 g-0"},Object(c.createElement)("div",{className:"row px-0 d-flex px-2"},Object(c.createElement)("h2",{className:"text-center text-lg-start"},"Contacto"),Object(c.createElement)("div",{className:"container py-4"},Object(c.createElement)("div",{className:"contactInfo__block"},Object(c.createElement)("h4",{className:"h4 text-start"},"Sede central"),Object(c.createElement)(r.RichText.Content,{value:l}),Object(c.createElement)("div",{className:"link py-3 contactInfo__link"},Object(c.createElement)("a",{href:"#"},"Ver Mapa ",Object(c.createElement)("span",{className:"contactInfo__link-icon"},">")))),Object(c.createElement)("div",{className:"contactInfo__block"},Object(c.createElement)("h4",{className:"h4 text-start"},"Central telefónica"),Object(c.createElement)(r.RichText.Content,{value:n})),Object(c.createElement)("div",{className:"contactInfo__block"},Object(c.createElement)("h4",{className:"h4 text-start"},"Horario"),Object(c.createElement)(r.RichText.Content,{value:s})))))))}}),Object(l.registerBlockType)("mtpe/container",{apiVersion:2,title:"Contenedor",description:"Contenedor simple para un bloque o bloques de la página",icon:"align-wide",category:"layout",supports:{anchor:!0},attributes:{anchor:{type:"string",source:"attribute",attribute:"id",selector:"*"}},edit:()=>Object(c.createElement)("div",Object(r.useBlockProps)(),Object(c.createElement)("div",{className:"container with-border wp-block"},Object(c.createElement)(r.InnerBlocks,null))),save:e=>{const{attributes:{anchor:t}}=e;return Object(c.createElement)("div",{id:t,className:"container py-4 position-relative"},Object(c.createElement)(r.InnerBlocks.Content,null))}}),Object(l.registerBlockType)("mtpe/container-gray",{apiVersion:2,title:"Contenedor gris",description:"Uso para crear contenedores con fondo gris claro",icon:"align-wide",category:"layout",supports:{anchor:!0},attributes:{anchor:{type:"string",source:"attribute",attribute:"id",selector:"*"}},edit:()=>Object(c.createElement)("div",Object(r.useBlockProps)(),Object(c.createElement)("div",{className:"bg-gray container wp-block"},Object(c.createElement)(r.InnerBlocks,null))),save:e=>{const{attributes:{anchor:t}}=e;return Object(c.createElement)("div",{id:t,className:"bg-gray py-4 container-fluid p-0"},Object(c.createElement)("div",{className:"container"},Object(c.createElement)(r.InnerBlocks.Content,null)))}}),Object(l.registerBlockType)("mtpe/process-guide",{apiVersion:2,title:"Guía de proceso",description:"Item para describir un elemento de manera organizada",icon:"align-pull-left",category:"layout",supports:{anchor:!0},attributes:{title:{type:"string",default:""},icon:{type:"object",default:null},anchor:{type:"string",source:"attribute",attribute:"id",selector:"*"}},edit:e=>{const{attributes:{title:t,icon:a},setAttributes:l}=e;return Object(c.createElement)("div",Object(r.useBlockProps)(),Object(c.createElement)("div",{className:"container"},Object(c.createElement)("div",{className:"process-bar"},Object(c.createElement)("div",{className:"row process-bar__header"},Object(c.createElement)("div",{className:"col-2 p-0 process-bar__icon"},Object(c.createElement)(r.MediaUploadCheck,null,Object(c.createElement)(r.MediaUpload,{className:"js-book-details-image wp-admin-book-details-image",allowedTypes:["image"],multiple:!1,value:(null==a?void 0:a.id)||"",addToGallery:!0,onSelect:e=>{l({title:t,icon:e})},render:({open:e})=>a?Object(c.createElement)(c.Fragment,null,Object(c.createElement)("span",{className:"d-inline-block collapsable__icon"},Object(c.createElement)("img",{src:a.url})),Object(c.createElement)(n.Button,{onClick:()=>{l({title:t,icon:null})},className:"button button--remove"},Object(c.createElement)("span",{className:"material-icons"},"delete"))):Object(c.createElement)("div",{className:"col-2 d-flex align-items-center"},Object(c.createElement)(n.Button,{onClick:e,className:"button is-small"},Object(c.createElement)("span",{className:"material-icons"},"add")))}))),Object(c.createElement)("div",{className:"col p-0 process-bar__title"},Object(c.createElement)(r.PlainText,{placeholder:"Título del elemento",onChange:e=>{l({title:e,icon:a})},value:t}))),Object(c.createElement)("div",{className:"row g-0 process-bar__content"},Object(c.createElement)(r.InnerBlocks,null)))))},save:e=>{const{attributes:{title:t,icon:a,anchor:l}}=e;return Object(c.createElement)("div",{className:"container position-relative",id:l},Object(c.createElement)("div",{className:"process-bar"},Object(c.createElement)("div",{className:"row process-bar__header"},Object(c.createElement)("div",{className:"col-2 p-0 process-bar__icon"},Object(c.createElement)("img",{src:a.url,alt:a.alt})),Object(c.createElement)("div",{className:"col p-0 process-bar__title"},t.trim())),Object(c.createElement)("div",{className:"row g-0 process-bar__content"},Object(c.createElement)(r.InnerBlocks.Content,null))))}}),Object(l.registerBlockType)("mtpe/blue-link",{apiVersion:2,title:"Link (Azul)",description:"Link con estilo azul para recursos externos",icon:"external",category:"layout",attributes:{label:{type:"string",default:""},url:{type:"string",default:""}},edit:e=>{const{attributes:{url:t,label:a},setAttributes:l}=e;return Object(c.createElement)("div",Object(r.useBlockProps)(),Object(c.createElement)("div",{className:"container with-border"},Object(c.createElement)("div",{className:"container m-0 p-0 g-0"},Object(c.createElement)("div",{className:"row g-0 d-flex align-items-center"},Object(c.createElement)("div",{className:"col-4 p-1"},Object(c.createElement)("span",null,"Url: "),Object(c.createElement)(r.PlainText,{label:"URL",value:t,placeholder:"URL",onChange:e=>{l({label:a,url:e})}})),Object(c.createElement)("div",{className:"col-7 offset-1 link link--secondary link--list p-1"},Object(c.createElement)("span",null,"Texto: "),Object(c.createElement)(r.PlainText,{label:"Texto de enlace",placeholder:"Texto de enlace",value:a,onChange:e=>{l({label:e,url:t})}}))))))},save:e=>{const{attributes:{url:t,label:a}}=e;return Object(c.createElement)("li",null,t?Object(c.createElement)("a",{target:"_blank",rel:"noopener noreferrer",className:"link link--secondary link--list",href:null==t?void 0:t.trim()},Object(c.createElement)("span",{className:"link__text"},null==a?void 0:a.trim()," "),Object(c.createElement)("span",{className:"material-icons link__icon"},"open_in_new")):Object(c.createElement)("h5",{className:"link link--secondary link--list",style:{textDecoration:"none"}},Object(c.createElement)("span",{className:"link__text"},null==a?void 0:a.trim()," ")))}}),Object(l.registerBlockType)("mtpe/bordered-link",{apiVersion:2,title:"Link en bloque (Azul)",description:"Link en caja ancha",icon:"external",category:"layout",attributes:{label:{type:"string",default:""},url:{type:"string",default:""}},edit:e=>{const{attributes:{url:t,label:a},setAttributes:l}=e;return Object(c.createElement)("div",Object(r.useBlockProps)(),Object(c.createElement)("div",{className:"container with-border"},Object(c.createElement)("div",{className:"row g-0"},Object(c.createElement)("div",{className:"p-0"},Object(c.createElement)("span",null,"Url: "),Object(c.createElement)(r.PlainText,{label:"URL",value:t,placeholder:"URL",onChange:e=>{l({label:a,url:e})}}))),Object(c.createElement)("div",{className:"row g-0"},Object(c.createElement)("span",null,"Texto: "),Object(c.createElement)(r.PlainText,{label:"Texto de enlace",placeholder:"Texto de enlace",value:a,onChange:e=>{l({label:e,url:t})}}))))},save:e=>{const{attributes:{url:t,label:a}}=e;return Object(c.createElement)("li",null,t?Object(c.createElement)("a",{target:"_blank",rel:"noopener noreferrer",className:"link link--bordered",href:null==t?void 0:t.trim()},Object(c.createElement)("span",{className:"link__text"},a.trim()," "),Object(c.createElement)("span",{className:"material-icons link__icon"},"arrow_forward_ios")):Object(c.createElement)("h5",{className:"link link--bordered",style:{textDecoration:"none"}},Object(c.createElement)("span",{className:"link__text"},a.trim()," ")))}})}]);