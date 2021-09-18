(this["webpackJsonpdrink-machine"]=this["webpackJsonpdrink-machine"]||[]).push([[0],{104:function(e,t,a){e.exports={flow:"DrinkFlowChart__flow___A2SIh"}},105:function(e,t,a){e.exports={cancelPayment:"OrderStatus__cancelPayment___3fzQ3"}},106:function(e,t,a){e.exports={coins:"Payment__coins___1r3tr",error:"Payment__error___3UMjb"}},107:function(e,t,a){e.exports={notification:"NotificationStatus__notification___3EdiX"}},108:function(e,t,a){e.exports={item:"CardWrapper__item___iGa93"}},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),o=a(13),s=a(206),l=function(e){return Object(n.useReducer)(function(e){return function(t,a){if(a.generalAction){var n=e.generalActions[a.generalAction];if(!n)throw new Error("No such general action ".concat(a.generalAction));var r=n(t.context,a.payload);return{state:t.state,context:r}}var c=e.states[t.state];if(!c)throw new Error("No such state ".concat(t.state));var i=c[a.state];if(!i)throw new Error("No such action ".concat(a," for ").concat(t));var o=i.action?i.action(t.context,a.payload):t.context;return{state:i.next,context:o}}}(e),e.initialState)},d=a(6),u=r.a.createContext();u.Provider;u.displayName="Drink Machine FSM store";var j,p,b,g=function(){return r.a.useContext(u)},m=function(e){var t=e.children,a=e.machineSpec,n=l(a),r=Object(o.a)(n,2),c=r[0],i=r[1];return Object(d.jsx)(u.Provider,{value:[c,i],children:t})},f=a(14),O=function(e,t){return Object(f.a)(Object(f.a)({},e),{},{currentBudget:e.currentBudget-t,paid:e.paid+t})},y=function(e){return e.context},_=function(e){return y(e).currentBudget},h=function(e){return y(e).paid},x=function(e){return e.state},v="addBudget",k="addMessage",w="idle",C="ordering",P="delivery",N="payment",S="cancel",B="purchase",A="done",D=[{key:"one",label:"1 \u20aa",value:1},{key:"two",label:"2 \u20aa",value:2},{key:"five",label:"5 \u20aa",value:5},{key:"ten",label:"10 \u20aa",value:10}],M=[{key:"Coke",label:"Coke",price:8,icon:Object(d.jsx)("img",{alt:"",src:"/assets/images/coca-cola.jpeg"})},{key:"Sparkling_Water",label:"Sparkling Water",price:6,icon:Object(d.jsx)("img",{alt:"",src:"/assets/images/sparkling-water.jpeg"})},{key:"Water",label:"Water",price:5,icon:Object(d.jsx)("img",{alt:"",src:"/assets/images/water.jpeg"})},{key:"Ice_Tea",label:"Ice Tea",price:7,icon:Object(d.jsx)("img",{alt:"",src:"/assets/images/ice-tea.jpeg"})}],T=[{id:w,data:{label:"Idle"},position:{x:10,y:100},targetPosition:"right",sourcePosition:"bottom"},{id:"payment_needed",data:{label:"Payment Is Needed"},position:{x:300,y:10},targetPosition:"left",sourcePosition:"left"},{id:C,data:{label:"Ordering"},position:{x:420,y:240},sourcePosition:"left"},{id:P,data:{label:"delivery"},position:{x:550,y:100},sourcePosition:"left",targetPosition:"bottom"},{id:S,data:{label:"Cancel Order"},position:{x:100,y:200},targetPosition:"right",sourcePosition:"top"},{id:"idle-payment_needed",source:w,target:"payment_needed",labelStyle:{fill:"red",fontWeight:700},label:"Clicked item without payment"},{id:"idle-ordering",source:w,target:C,animated:!0,label:"Payment Succeed",arrowHeadType:"arrowclosed"},{id:"ordering-delivery",source:C,target:P,animated:!0,label:"Item Selected",arrowHeadType:"arrowclosed"},{id:"ordering-cancel",source:C,target:S,label:"Canceled",labelStyle:{fill:"red",fontWeight:700},arrowHeadType:"arrowclosed"},{id:"cancel-idle",source:S,target:w,arrowHeadType:"arrowclosed"},{id:"delivery-idle",source:P,target:w,arrowHeadType:"arrowclosed",animated:!0,labelBgPadding:[8,4],labelBgBorderRadius:4,labelBgStyle:{fill:"#FFCC00",fillOpacity:1},label:"Finished"}],E=a(95),I=a.n(E),W=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,a=Object(n.useState)(e),r=Object(o.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){i(c-1===0?e:c-1)}),t);return function(){return clearTimeout(a)}}),[c]),[c]}(10),t=Object(o.a)(e,1)[0],a=g(),r=Object(o.a)(a,2),c=r[0],i=r[1],l=_(c);return Object(n.useEffect)((function(){t-1===0&&i({generalAction:v,payload:10})}),[t]),Object(d.jsxs)(s.a,{className:I.a.card,title:"Wallet",children:[Object(d.jsx)("div",{children:"Current Budget: ".concat(l," \u20aa")}),Object(d.jsx)("div",{children:"Next Deposit: ".concat(t)})]})},z=a(209),F=a(103),H=a.n(F),Y=a(70),X=a.n(Y),J=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],n=t[1],r=h(a),c=x(a);return Object(d.jsx)(s.a,{title:"Choose Your Drink",children:Object(d.jsx)("div",{className:X.a.wrapper,children:Object(d.jsx)("div",{className:X.a.drinks,children:M.map((function(e){return Object(d.jsx)(z.a,{onClick:(t=e.price,function(){c===P?n({generalAction:k,payload:{message:"Please wait until delivery is finished",type:"error"}}):r-t>=0?(n({state:B,payload:t}),H.a.post("https://fsmmock.free.beeceptor.com",{price:t}).then((function(e){n({generalAction:k,payload:{message:e.data,type:"success"}}),n(r-t===0?{state:A}:{state:N,payload:0})})).catch((function(){n({generalAction:k,payload:{message:"Machine is out of service, your money is gone",type:"error"}})}))):n({generalAction:k,payload:{message:"Insufficient funds",type:"error"}})}),shape:"round",size:"large",icon:e.icon,children:"".concat(e.label," - ").concat(e.price," \u20aa")},e.key);var t}))})})})},L=a(109),R=a(104),Z=a.n(R),q=function(){var e=Object(n.useState)(T),t=Object(o.a)(e,2),a=t[0],r=t[1],c=g(),i=Object(o.a)(c,1)[0],s=x(i);return Object(n.useEffect)((function(){var e=a.map((function(e){return e.id===s?Object(f.a)(Object(f.a)({},e),{},{style:{background:"#D6D5E6"}}):Object(f.a)(Object(f.a)({},e),{},{style:Object(f.a)(Object(f.a)({},e.style),{},{background:null})})}));r(e)}),[i]),Object(d.jsx)("div",{className:Z.a.flow,children:Object(d.jsx)(L.a,{elements:a,zoomOnScroll:!1,nodesDraggable:!1,elementsSelectable:!1,zoomOnDoubleClick:!1,paneMoveable:!1,nodesConnectable:!1})})},G=a(105),Q=a.n(G),U=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],n=t[1],r=h(a),c=x(a),i="You have paid ".concat(r," \u20aa");return Object(d.jsxs)(s.a,{title:"Order Status",children:[i,Object(d.jsx)(z.a,{className:Q.a.cancelPayment,onClick:function(){n(c===C?{state:S}:{generalAction:k,payload:{message:"Cancel can be made only on ordering status",type:"error"}})},shape:"round",size:"small",children:"Cancel Payment"})]})},V=a(207),K=a(106),$=a.n(K),ee=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],n=t[1],r=_(a),c=x(a);return Object(d.jsxs)(s.a,{title:"Payment",children:[Object(d.jsx)(V.a,{message:"We accepts coins only",type:"warning"}),Object(d.jsx)("div",{className:$.a.coins,children:D.map((function(e){return Object(d.jsx)(z.a,{onClick:(t=e.value,function(){n(c===P?{generalAction:k,payload:{message:"Please wait until the machine finish delivery",type:"error"}}:r-t>=0?{state:N,payload:t}:{generalAction:k,payload:{message:"Margin is Disallowed",type:"error"}})}),shape:"round",size:"medium",children:e.label},e.key);var t}))})]})},te=a(18),ae={initialState:{state:w,context:{currentBudget:10,paid:0,message:""}},generalActions:{addBudget:function(e,t){return Object(f.a)(Object(f.a)({},e),{},{currentBudget:e.currentBudget+t})},addMessage:function(e,t){var a=t.message,n=t.type;return Object(f.a)(Object(f.a)({},e),{},{message:a,messageType:n})}},states:(b={},Object(te.a)(b,w,Object(te.a)({},N,{next:C,action:O})),Object(te.a)(b,C,(j={},Object(te.a)(j,S,{next:w,action:function(e){return Object(f.a)(Object(f.a)({},e),{},{currentBudget:e.currentBudget+e.paid,paid:0})}}),Object(te.a)(j,B,{next:P,action:function(e,t){return Object(f.a)(Object(f.a)({},e),{},{paid:e.paid-t})}}),Object(te.a)(j,N,{next:C,action:O}),j)),Object(te.a)(b,P,(p={},Object(te.a)(p,A,{next:w}),Object(te.a)(p,N,{next:C,action:O}),p)),b)},ne=a(107),re=a.n(ne),ce=function(){var e=g(),t=Object(o.a)(e,2),a=t[0],r=t[1],c=function(e){return y(e).message}(a),i=function(e){return y(e).messageType}(a),s=function(){r({generalAction:k,payload:{message:"",type:null}})};return Object(n.useEffect)((function(){var e=setTimeout((function(){s()}),5e3);return function(){return clearTimeout(e)}}),[c]),Object(d.jsx)("div",{className:re.a.notification,children:c&&Object(d.jsx)(V.a,{message:c,type:i,closable:!0,onClose:s})})},ie=a(108),oe=a.n(ie),se=function(e){var t=e.children;return Object(d.jsx)("div",{className:oe.a.item,children:t})},le=a(62),de=a.n(le),ue=function(){var e=[ee,W,J,U];return Object(d.jsxs)(m,{machineSpec:ae,children:[Object(d.jsx)(ce,{}),Object(d.jsxs)("div",{className:de.a.wrapper,children:[Object(d.jsx)("img",{className:de.a.img,alt:"drink",src:"/assets/images/drink.jpg"}),Object(d.jsx)("div",{className:de.a.cards,children:e.map((function(e){return Object(d.jsx)(se,{children:Object(d.jsx)(e,{})},e.name)}))})]}),Object(d.jsx)(q,{})]})},je=a(72),pe=a.n(je),be=function(e){var t=e.children;return Object(d.jsx)("div",{className:pe.a.wrapper,children:Object(d.jsx)("div",{className:pe.a.content,children:t})})};a(203);i.a.render(Object(d.jsx)(be,{children:Object(d.jsx)(ue,{})}),document.getElementById("root"))},62:function(e,t,a){e.exports={wrapper:"DrinkMachine__wrapper___sVaza",img:"DrinkMachine__img___ZndjD",cards:"DrinkMachine__cards___32klk"}},70:function(e,t,a){e.exports={drinks:"DrinkChooser__drinks___3ANmY",error:"DrinkChooser__error___3XeTs",wrapper:"DrinkChooser__wrapper___1tzMF"}},72:function(e,t,a){e.exports={wrapper:"MainLayout__wrapper____tZYI",content:"MainLayout__content___1jSXM"}},95:function(e,t,a){e.exports={card:"Budget__card___2jiq1"}}},[[204,1,2]]]);
//# sourceMappingURL=main.d015ecce.chunk.js.map