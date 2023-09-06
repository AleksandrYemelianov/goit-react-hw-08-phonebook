"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{8817:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var a=t(2791),r=t(9439),c=t(8670),i=t(9434),s=t(5568),o=t(3634),l=t(2497),d=(t(5462),t(1614)),u=t(4554),m=t(890),x=t(4351),h=t(8551),p=t(184);function f(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],f=n[1],v=(0,a.useState)(""),b=(0,r.Z)(v,2),j=b[0],_=b[1],g=(0,i.I0)(),C=(0,i.v9)(c.Af).items,w={name:t,number:j},Z=t.toLowerCase(),y=C.find((function(e){return Z===e.name.toLocaleLowerCase()})),k=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":f(a);break;case"number":_(a)}};return(0,p.jsx)(d.Z,{maxWidth:"xs",sx:{minHeight:"300px",p:"20px",mt:"10vh",borderRadius:"10px",boxShadow:"0px 0px 12px 5px rgba(232, 150, 17,0.8)",background:"#E89611",opacity:"0.9"},children:(0,p.jsxs)(u.Z,{sx:{textAlign:"center"},children:[(0,p.jsx)(m.Z,{variant:"h4",component:"h2",sx:{fontSize:"24px",fontWeight:"500",letterSpacing:"0.01em",color:"black",fontFamily:"cursive"},children:"Create new contact"}),(0,p.jsxs)(u.Z,{component:"form",onSubmit:function(e){e.preventDefault(),y?s.Am.warn("".concat(t," is already in contacts."),l.Z):(g((0,o.rE)(w)),s.Am.success("Contact ".concat(t," has been add."),l.Z),f(""),_(""))},sx:{display:"flex",flexDirection:"column"},children:[(0,p.jsx)(x.Z,{margin:"normal",required:!0,fullWidth:!0,id:"text",type:"text",label:"Name",name:"name",autoComplete:"name",autoFocus:!0,value:t,onChange:k}),(0,p.jsx)(x.Z,{margin:"normal",required:!0,fullWidth:!0,id:"tel",type:"tel",label:"Number",name:"number",autoComplete:"number",value:j,onChange:k,inputProps:{inputMode:"numeric",pattern:"\\+?(\\d{1,4}?)[ .\\-]?\\(?\\d{1,3}?\\)?[ .\\-]?\\d{1,4}[ .\\-]?\\d{1,4}[ .\\-]?\\d{1,9}",title:"Please entry correct number"},helperText:"Example: 11-111-111-111 or +111(111)111-11-11"}),(0,p.jsx)(h.Z,{type:"submit",variant:"contained",size:"medium",sx:{width:"50%",mx:"auto",mt:"10px",fontFamily:"cursive",fontWeight:"500",letterSpacing:"0.05em",backgroundColor:"transparent",border:"1px solid #000000",borderRadius:"10px",color:"#000000","&:hover":{color:"#E89611",border:"1px solid transparent"}},children:"ADD CONTACT"})]})]})})}var v=t(9505),b=t(645),j="ContactItem_item__gxreB",_="ContactItem_info__fyb5q",g="ContactItem_point__n+q6E",C="ContactItem_btn__1h5dG",w="ContactItem_wrapElement__ejYAx",Z=t(7689);var y=function(e){var n=e.contact,t=n.id,a=n.name,r=n.number,d=(0,i.I0)(),u=(0,Z.s0)(),m=(0,i.v9)(c.Af).items;return(0,p.jsxs)("li",{id:t,className:j,children:[(0,p.jsxs)("div",{className:w,children:[(0,p.jsxs)("p",{className:"".concat(_," ").concat(g),children:[a,":"]}),(0,p.jsx)("p",{className:_,children:r})]}),(0,p.jsxs)("div",{className:w,children:[(0,p.jsx)("button",{onClick:function(){return u("/contacts/edit/".concat(t))},className:C,children:(0,p.jsx)(b.Z,{sx:{fontSize:20}})}),(0,p.jsx)("button",{onClick:function(){return function(e){d((0,o.GK)(e));var n=m.find((function(n){return n.id===e}));n&&s.Am.success("Contact ".concat(n.name," was successfully deleted."),l.Z)}(t)},className:C,children:(0,p.jsx)(v.Z,{sx:{fontSize:20}})})]})]})},k=t(6307),N="Loader_loader__+lRPl",S=function(){return(0,p.jsx)("div",{className:N,children:(0,p.jsx)(k.g4,{height:"80",width:"80",radius:"9",color:"#8ca702",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})},A="ContactList_list__csErn",E=function(){var e=(0,i.v9)(c.Af),n=e.isLoading,t=e.error,r=(0,i.v9)(c.hF),d=(0,i.I0)();return(0,a.useEffect)((function(){d((0,o.K2)())}),[d]),(0,p.jsxs)(p.Fragment,{children:[n&&(0,p.jsx)(S,{}),t&&s.Am.warn("The request could not be completed. Please try again later.",l.Z),(0,p.jsx)("ul",{className:A,children:r.map((function(e){return(0,p.jsx)(y,{contact:e},e.id)}))})]})},I="Container_container__VVOCq";var L=function(e){var n=e.children;return(0,p.jsx)("div",{className:I,children:n})},W=t(2548),F=function(){var e=(0,i.v9)(c.Gd),n=(0,i.I0)();return(0,p.jsx)(u.Z,{component:"form",sx:{display:"flex",flexDirection:"column"},children:(0,p.jsx)(x.Z,{margin:"normal",fullWidth:!0,id:"text",type:"text",label:"Find contacts by name",name:"name",value:e,onChange:function(e){return n((0,W.Tv)(e.target.value))}})})},q=t.p+"static/media/contactsBackground1.4713eadc325531d03250.webp",D="\u0421ontacts_background__EtDiL",T="\u0421ontacts_section__mwegT",z="\u0421ontacts_wrapper__3Jg6k";var P=function(e){var n=e.children;return(0,p.jsx)("div",{children:(0,p.jsx)(d.Z,{maxWidth:"xs",sx:{minHeight:"300px",p:"20px",mt:"10vh",borderRadius:"10px",boxShadow:"0px 0px 12px 5px rgba(232, 150, 17,0.8)",background:"#E89611",opacity:"0.9"},children:(0,p.jsxs)(u.Z,{sx:{textAlign:"center"},children:[(0,p.jsx)(m.Z,{variant:"h4",component:"h2",sx:{fontSize:"24px",fontWeight:"500",letterSpacing:"0.01em",color:"black",fontFamily:"cursive"},children:"Contacts"}),n]})})})};var R=function(){return(0,p.jsx)("main",{className:D,style:{backgroundImage:"url(".concat(q,")")},children:(0,p.jsx)(L,{children:(0,p.jsxs)("div",{className:T,children:[(0,p.jsx)("div",{className:z,children:(0,p.jsx)(f,{})}),(0,p.jsx)("div",{className:z,children:(0,p.jsxs)(P,{children:[(0,p.jsx)(F,{}),(0,p.jsx)(E,{})]})}),(0,p.jsx)(Z.j3,{})]})})})}}}]);
//# sourceMappingURL=304.3445d440.chunk.js.map