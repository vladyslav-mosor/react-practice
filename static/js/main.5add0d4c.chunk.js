(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(8),n=a.n(s),r=(a(14),a(15),a(9)),i=a(5),l=a(7),d=(a(16),a(3)),o=a.n(d),j=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],h=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],b=a(0),u=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t=h.find((function(t){var a=t.id;return e.categoryId===a})),a=j.find((function(e){var a=e.id;return t.ownerId===a}));return Object(l.a)(Object(l.a)({},e),{},{category:t,user:a})})),x=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(r.a)(u);a&&(n=n.filter((function(e){return e.user.id===a})));var l=Object(c.useState)(""),d=Object(i.a)(l,2),x=d[0],m=d[1];if(x){var O=x.toLocaleLowerCase();n=n.filter((function(e){return e.name.toLocaleLowerCase().includes(O)}))}var f=Object(c.useState)(0),p=Object(i.a)(f,2),y=p[0],N=p[1];y&&(n=n.filter((function(e){return e.category.id===y})));return Object(b.jsx)("div",{className:"section",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"Product Categories"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsxs)("nav",{className:"panel",children:[Object(b.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(b.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(b.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",onClick:function(){return s(0)},children:"All"}),j.map((function(e){var t=e.name,c=e.id;return Object(b.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:o()({"is-active":c===a}),onClick:function(){return s(c)},children:t},c)}))]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:x,onChange:function(e){return m(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(b.jsx)("span",{className:"icon is-right",children:x&&Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return m("")}})})]})}),Object(b.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(b.jsx)("a",{href:"#/","data-cy":"AllCategories",className:o()("button is-success mr-6",{"is-outlined":0!==y}),onClick:function(){return N(0)},children:"All"}),h.map((function(e){var t=e.title,a=e.id;return Object(b.jsx)("a",{"data-cy":"Category",className:o()("button mr-2 my-1",{"is-info":a===y}),href:"#/",onClick:function(){return N(a)},children:t},a)}))]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){m(""),N(0),s(0)},children:"Reset all filters"})})]})}),Object(b.jsx)("div",{className:"box table-container",children:n.length>0?Object(b.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(b.jsx)("tbody",{children:n.map((function(e){var t=e.id,a=e.name,c=e.category,s=e.user;return Object(b.jsxs)("tr",{"data-cy":"Product",children:[Object(b.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:t}),Object(b.jsx)("td",{"data-cy":"ProductName",children:a}),Object(b.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(c.icon," - ").concat(c.title)}),Object(b.jsx)("td",{"data-cy":"ProductUser",className:o()("has-text-link",{"has-text-danger":"f"===s.sex}),children:s.name})]},t)}))})]}):Object(b.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})})]})})};n.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5add0d4c.chunk.js.map