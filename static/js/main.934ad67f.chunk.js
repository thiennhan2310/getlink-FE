(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(42),i=n.n(c),o=(n(74),n(16)),s=n(17),l=n(19),u=n(18),m=n(20),p=(n(76),n(21)),h=n(57),d=n.n(h),f=function(e){var t=e.width,n=void 0===t?"200px":t;return r.a.createElement("div",{className:"row"},r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo",style:{margin:"auto"},width:n}))},b=n(116),v=n(117),E=n(58),O=n(118),g=function(e){var t=e.title,n=e.size,a="h".concat(void 0===n?"3":n);return r.a.createElement(a,null," ",t," ")},y=n(44),j=n(45),k=n.n(j);function w(){return localStorage.getItem("token")}var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return k.a.get("".concat(y.API_URL).concat(e),{headers:Object.assign({},{Authorization:"Bearer ".concat(w())},t)})},I=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return k.a.post("".concat(y.API_URL).concat(e),t,{headers:Object.assign({},{"Content-Type":"application/json",Authorization:"Bearer ".concat(w())},n)})},A=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).fetchArticleDetail=n.fetchArticleDetail.bind(Object(p.a)(Object(p.a)(n))),n.state={id:n.props.match.params.id,title:"",content:"",thumbnail:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchArticleDetail(this.state.id)}},{key:"fetchArticleDetail",value:function(e){var t=this;x("/article/".concat(this.state.id)).then(function(e){var n=e.data;t.setState({title:n.title,content:n.content,thumbnail:n.thumbnail})})}},{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(f,null),r.a.createElement(v.a,null,r.a.createElement(E.a,{md:"12"},r.a.createElement(O.a,{src:this.state.thumbnail,fluid:!0})),r.a.createElement(E.a,{md:"12"},r.a.createElement(g,{title:this.state.title,size:"4"})),r.a.createElement(E.a,{md:"12"},this.state.content)))}}]),t}(r.a.Component),L=n(12),C=n.n(L),T=n(61),P=n(22),S=n(121),_=n(122),N=n(119),D="SET_TOKEN",B=function(e){return{type:D,token:e}},R=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={email:"",password:"",error:""},n.inputEmail=n.inputEmail.bind(Object(p.a)(Object(p.a)(n))),n.inputPassword=n.inputPassword.bind(Object(p.a)(Object(p.a)(n))),n.submit=n.submit.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"inputEmail",value:function(e){this.setState({email:e})}},{key:"inputPassword",value:function(e){this.setState({password:e})}},{key:"submit",value:function(){var e=Object(T.a)(C.a.mark(function e(){var t,n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I("/auth/login",{email:this.state.email,password:this.state.password});case 3:return t=e.sent,n=t.data,this.props.setToken(n.token),localStorage.setItem("token",n.token),e.abrupt("return");case 10:e.prev=10,e.t0=e.catch(0),this.setState({error:"Invalid credential"});case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,null,r.a.createElement(E.a,{md:{span:3,offset:4}},r.a.createElement(S.a,null,r.a.createElement(S.a.Group,{controlId:"formBasicEmail"},r.a.createElement(S.a.Label,null,"Email address"),r.a.createElement(S.a.Control,{type:"email",placeholder:"Enter email",onChange:function(t){return e.inputEmail(t.target.value)}})),r.a.createElement(S.a.Group,{controlId:"formBasicPassword"},r.a.createElement(S.a.Label,null,"Password"),r.a.createElement(S.a.Control,{type:"password",placeholder:"Password",onChange:function(t){return e.inputPassword(t.target.value)}})),r.a.createElement(_.a,{variant:"danger",hidden:!this.state.error},this.state.error),r.a.createElement(N.a,{variant:"primary",type:"button",onClick:this.submit},"Submit"))))}}]),t}(r.a.Component);var M=Object(P.b)(null,function(e){return{setToken:function(t){e(B(t))}}})(R),z=n(123),U=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.token?r.a.createElement(z.a,{to:"/"}):r.a.createElement(b.a,null,r.a.createElement(f,null),r.a.createElement(M,null))}}]),t}(r.a.Component),F=Object(P.b)(function(e){return{token:e.auth.token}})(U),H=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,"HomePage"),r.a.createElement("div",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))},G=n(125),J=n(120),X=function(e){var t=e.id,n=e.title,a=e.content,c=e.thumbnail;return r.a.createElement(E.a,{md:3},r.a.createElement(G.a,{style:{marginTop:"20px"}},r.a.createElement(G.a.Img,{variant:"top",src:c}),r.a.createElement(G.a.Body,{style:{maxHeight:"130px",overflow:"hidden"}},r.a.createElement(G.a.Title,null,r.a.createElement(J.a,{to:"/article/".concat(t)},n)),r.a.createElement(G.a.Text,null,a))))},K="[Articles] FETCH_ARTICLES",V="[Articles] SET_ARTICLE",q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:V,articles:e}},Q=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchArticles()}},{key:"render",value:function(){return r.a.createElement(v.a,{style:{marginTop:"35px",marginBottom:"35px"}},this.props.articles.map(function(e){var t=e._id,n=e.title,a=e.content,c=e.thumbnail;return r.a.createElement(X,{key:t,id:t,title:n,content:a,thumbnail:c})}))}}]),t}(r.a.Component),W=Object(P.b)(function(e){return{articles:e.articles.articles}},function(e){return{fetchArticles:function(){e({type:K})}}})(Q),Y=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,"Footer"),r.a.createElement("div",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))},Z=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(f,null),r.a.createElement(H,null),r.a.createElement(W,null),r.a.createElement(Y,null))}}]),t}(r.a.Component),$=n(68),ee=n(127);var te=Object(P.b)(function(e){return{isAuth:!!e.auth.token}},null)(function(e){var t=e.component,n=e.isAuth,a=Object($.a)(e,["component","isAuth"]);return r.a.createElement(ee.a,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(z.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),ne=n(124),ae=n(126),re=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(ne.a,{basename:"/getlink-FE"},r.a.createElement(ae.a,null,r.a.createElement(te,{exact:!0,path:"/",component:Z}),r.a.createElement(ee.a,{exact:!0,path:"/login",component:F}),r.a.createElement(te,{path:"/article/:id",component:A})))}}]),t}(a.Component),ce=n(26),ie=n(37),oe={token:localStorage.getItem("token")};var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(ie.a)({},e,{token:t.token});default:return e}},le={articles:[]};var ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(ie.a)({},e,{articles:t.articles});default:return e}},me=Object(ce.c)({auth:se,articles:ue}),pe=n(67),he=n(23),de=C.a.mark(fe);function fe(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},de,this)}var be=C.a.mark(Ee),ve=C.a.mark(Oe);function Ee(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.e)(K,Oe);case 2:case"end":return e.stop()}},be,this)}function Oe(e){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(he.b)(x,"/article");case 3:return t=e.sent,e.next=6,Object(he.d)(q(t.data));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},ve,this,[[0,8]])}var ge=C.a.mark(ye);function ye(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.a)([Object(he.c)(fe),Object(he.c)(Ee)]);case 2:case"end":return e.stop()}},ge,this)}var je=Object(pe.a)(),ke=[je],we=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,xe=Object(ce.e)(me,we(ce.a.apply(void 0,ke)));je.run(ye),i.a.render(r.a.createElement(P.a,{store:xe},r.a.createElement(re,null)),document.getElementById("root"))},44:function(e,t,n){e.exports=n(78)},57:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},69:function(e,t,n){e.exports=n(115)},74:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t),n.d(t,"API_URL",function(){return a});var a="https://infinite-anchorage-91213.herokuapp.com/api"}},[[69,2,1]]]);
//# sourceMappingURL=main.934ad67f.chunk.js.map