(this["webpackJsonpgenerate-recipe-doc"]=this["webpackJsonpgenerate-recipe-doc"]||[]).push([[0],{107:function(e,t){},109:function(e,t){},126:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),c=n.n(r),s=(n(96),n(31)),o=n(32),l=n(34),u=n(33),h=(n(97),n(162)),d=n(56),j=n(18),b=n.n(j),p=n(41),g=n(47),f=n(12),m=n(159),O=n(161),v=n(5),x=n(76),w=n(77),y=n.n(w),C=n(167),k=n(168),D=n(160),F=n(164),R=n(165),W=n(85),I=n(86),S=n(166),P=n(6),T=["ref"];var B=Object(v.a)((function(e){return{root:{width:"calc(100%-20px)",padding:20,borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},imgPreview:{maxWidth:"100%"}}}),{withTheme:!0})((function(e){var t=Object(a.useState)([]),n=Object(W.a)(t,2),i=n[0],r=n[1],c=Object(a.useCallback)((function(t){r(Object.assign(t[0],{previewUrl:URL.createObjectURL(t[0])})),e.resolve(t)}),[]),s=Object(I.a)({onDrop:c,accept:"image/png,image/gif,image/jpg,image/jpeg,image/svg",maxFiles:1}),o=s.getRootProps,l=s.getInputProps,u=s.isDragActive,h=(s.isDragAccept,s.isDragReject),j=s.acceptedFiles,b=o(),p=b.ref,g=(Object(d.a)(b,T),e.classes);return Object(P.jsx)(S.a,{rootRef:p,children:Object(P.jsxs)("div",Object(f.a)(Object(f.a)({},o()),{},{className:g.root,children:[Object(P.jsx)("input",Object(f.a)({},l())),j.length?Object(P.jsx)("img",{src:i.previewUrl,alt:"Recipe",className:g.imgPreview}):h?Object(P.jsx)("p",{children:"File cannot be used"}):u?Object(P.jsx)("p",{children:"Drop the files here ..."}):Object(P.jsxs)("div",{children:[Object(P.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"}),Object(P.jsx)("em",{children:"(Only *.jpeg and *.png images will be accepted)"})]})]}))})})),U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.handleChange,a=e.handleImg,i=e.handleSubmit,r=e.values;return Object(P.jsxs)("form",{className:t.root,onSubmit:i,children:[Object(P.jsxs)(m.a,{container:!0,justify:"center",spacing:5,children:[Object(P.jsxs)(m.a,{item:!0,xs:12,lg:4,children:[Object(P.jsx)(B,{resolve:a}),Object(P.jsx)("p",{children:"Can't generate doc without image"})]}),Object(P.jsxs)(m.a,{container:!0,item:!0,direction:"column",justify:"center",spacing:3,lg:8,xs:12,children:[Object(P.jsx)(m.a,{item:!0,children:Object(P.jsxs)(C.a,{fullWidth:!0,children:[Object(P.jsx)(k.a,{htmlFor:"title",children:"Recipe Title"}),Object(P.jsx)(D.a,{id:"title",onChange:n,value:r.title,fullWidth:!0})]})}),Object(P.jsx)(m.a,{item:!0,children:Object(P.jsxs)(C.a,{fullWidth:!0,children:[Object(P.jsx)(k.a,{htmlFor:"type",children:"Recipe Type"}),Object(P.jsx)(D.a,{id:"type",onChange:n,value:r.type,fullWidth:!0})]})}),Object(P.jsx)(m.a,{item:!0,children:Object(P.jsx)(F.a,{id:"desc",label:"Recipe Description",rows:4,multiline:!0,onChange:n,variant:"outlined",value:r.desc,fullWidth:!0})}),Object(P.jsx)(m.a,{item:!0,children:Object(P.jsx)(F.a,{id:"ing",label:"Recipe Ingrediants",rows:4,multiline:!0,onChange:n,variant:"outlined",value:r.ing,fullWidth:!0})}),Object(P.jsx)(m.a,{item:!0,children:Object(P.jsx)(F.a,{id:"instructions",label:"Recipe instructions",rows:4,multiline:!0,onChange:n,variant:"outlined",value:r.instructions,helperText:"Put each step on a new line.",fullWidth:!0})})]})]}),Object(P.jsx)(R.a,{type:"submit",value:"Submit",color:"primary",variant:"contained",children:"Generate recipe doc"})]})}}]),n}(i.a.Component),A=Object(v.a)((function(e){return{root:{padding:"4rem"}}}),{withTheme:!0})(U),L={getHeightAndWidthFromDataUrl:function(e){return new Promise((function(t){var n=new Image;n.onload=function(){t({height:n.height,width:n.width})},n.src=e}))}},N=["classes"],E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={values:{title:"",type:"",ing:"",instructions:"",desc:""}},a.setDefaultImg(),a}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState({values:Object(f.a)(Object(f.a)({},this.state.values),{},Object(g.a)({},e.target.id,e.target.value))})}},{key:"setDefaultImg",value:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/generateRecipeDoc/default.png");case 2:t=e.sent,this.handleImg([t]);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleImg",value:function(){var e=Object(p.a)(b.a.mark((function e(t){var n,a,i,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t[0].arrayBuffer();case 2:return n=e.sent,e.next=5,L.getHeightAndWidthFromDataUrl(t[0].previewUrl);case 5:a=e.sent,i=a.width,r=a.height,this.setState({values:Object(f.a)(Object(f.a)({},this.state.values),{},{img:{data:n,extension:"."+t[0].name.split(".").pop(),width:.026458*i,height:.026458*r}})});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){e.preventDefault(),function(e){J.apply(this,arguments)}(this.state.values)}},{key:"render",value:function(){var e=this.props,t=e.classes;Object(d.a)(e,N);return Object(P.jsx)(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(P.jsx)(O.a,{className:t.card,children:Object(P.jsx)(A,{values:this.state.values,handleChange:this.handleChange.bind(this),handleImg:this.handleImg.bind(this),handleSubmit:this.handleSubmit.bind(this)})})})}}]),n}(i.a.Component);function J(){return(J=Object(p.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/generateRecipeDoc/temp.docx");case 2:return n=e.sent,e.next=5,n.arrayBuffer();case 5:a=e.sent,H(a,t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=function(){var e=Object(p.a)(b.a.mark((function e(t,n){var a,i,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t,e.next=3,y()({template:a,data:Object(f.a)({},G(n)),additionalJsContext:{img:function(e){var t=e.maxWidth,a=n.img;return t&&a&&a.width>t&&(a=Object(f.a)(Object(f.a)({},n.img),M(Object(f.a)(Object(f.a)({},n.img),{},{maxWidth:t})))),a}},cmdDelimiter:["{{","}}"]});case 3:i=e.sent,r=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),Object(x.saveAs)(r,"report.docx");case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(e){var t=Object.assign({},e);return t.instructions?t.instructions=t.instructions.split(/\r?\n/).map((function(e){return{text:e}})):t.instructions=[""],t},M=function(e){var t=e.width,n=e.height,a=e.maxWidth/t;return{width:t*a,height:n*a}},q=Object(v.a)((function(e){return{card:{width:"100%"}}}),{withTheme:!0})(E),z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(P.jsx)(h.a,{children:Object(P.jsx)(q,{})})}}]),n}(a.Component),K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,169)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))},Q=n(163),V=n(84),X=Object(V.a)({background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"});c.a.render(Object(P.jsx)(i.a.StrictMode,{children:Object(P.jsx)(Q.a,{theme:X,children:Object(P.jsx)(z,{})})}),document.getElementById("root")),K()},96:function(e,t,n){},97:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.2d2a5da7.chunk.js.map