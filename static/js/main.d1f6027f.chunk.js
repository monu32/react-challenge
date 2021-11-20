(this.webpackJsonpimpactAnalyticsReactChallenge=this.webpackJsonpimpactAnalyticsReactChallenge||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(29),c=a.n(s),o=(a(37),a(10)),l=a(11),u=a(13),i=a(12),m=a(1),d=a(7),h=(a(38),function(){return n.a.createElement("header",{className:"header"},n.a.createElement(d.b,{className:"header-item Link",to:"/Home"},"Home"),n.a.createElement(d.b,{className:"header-item Link",to:"/Shortlisted"},"Shortlisted"),n.a.createElement(d.b,{className:"header-item Link",to:"/Rejected"},"Rejected"))}),p=a(31),f=a(15),v=a.n(f),g=(a(61),function(e){var t=e.users;console.log(t);var a=t.map((function(e){return n.a.createElement("div",{key:e.id,className:"user-outer"},n.a.createElement(d.b,{className:"Link",to:{pathname:"/"+e.id}},n.a.createElement("div",{key:e.id,className:"user-inner"},n.a.createElement("img",{className:"image",src:e.Image,alt:"Not found"}),n.a.createElement("p",{className:"name"},e.name))))}));return n.a.createElement("div",{className:"users"},a)}),E=(a(62),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={users:[],permanentUsers:[]},e.getUserData=function(){v()({method:"get",url:"https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"}).then((function(t){var a=t.data;e.setState({users:a}),e.setState({permanentUsers:a})})).catch((function(e){console.log("error")}))},e.searchUser=function(t){var a=t.target.value;a=a.toLowerCase();var r=Object(p.a)(e.state.permanentUsers);if(""!=a){for(var n=[],s=0;s<r.length;s++)r[s].name.toLowerCase().includes(a)&&n.push(r[s]);e.setState({users:n})}else e.setState({users:r})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("input",{type:"search",id:"searchInput",placeholder:"Search user...",onChange:this.searchUser}),n.a.createElement(g,{users:this.state.users}))}}]),a}(r.Component)),b=a(8),j=(a(63),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={user:""},e.getUser=function(){v()({method:"get",url:"https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"}).then((function(t){for(var a=t.data,r=e.props.match.params.id,n=0;n<a.length;n++)if(a[n].id===r)return console.log(a[n]),void e.setState({user:a[n]});alert("User not found !"),e.props.history.push("/Home")})).catch((function(t){console.log("error"),alert("User not found !"),e.props.history.push("/Home")}))},e.verifyDuplicate=function(e,t){for(var a=0;a<t.length;a++)if(t[a].id===e)return{duplicate:!0,status:t[a].status};return{duplicate:!1}},e.shortlistedHandler=function(t){var a=localStorage.getItem("userStatus");if(null!==a&&void 0!==a){a=JSON.parse(a);var r=e.verifyDuplicate(t.id,a);r.duplicate?alert("User is already "+r.status+"!"):a.push(Object(b.a)(Object(b.a)({},t),{},{status:"shortlisted"}))}else a=[Object(b.a)(Object(b.a)({},t),{},{status:"shortlisted"})];localStorage.setItem("userStatus",JSON.stringify(a)),e.props.history.push("/Home")},e.rejectedHandler=function(t){var a=localStorage.getItem("userStatus");if(null!==a&&void 0!==a){a=JSON.parse(a);var r=e.verifyDuplicate(t.id,a);r.duplicate?alert("User is already "+r.status+"!"):a.push(Object(b.a)(Object(b.a)({},t),{},{status:"rejected"}))}else a=[Object(b.a)(Object(b.a)({},t),{},{status:"rejected"})];localStorage.setItem("userStatus",JSON.stringify(a)),e.props.history.push("/Home")},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"user"},n.a.createElement("img",{id:"image",src:this.state.user.Image}),n.a.createElement("p",{id:"name"},this.state.user.name),n.a.createElement("div",{id:"btn-section"},n.a.createElement("button",{id:"shortlisted",onClick:function(t){return e.shortlistedHandler(e.state.user)}},"Shortlisted"),n.a.createElement("button",{id:"rejected",onClick:function(t){return e.rejectedHandler(e.state.user)}},"Rejected")))}}]),a}(r.Component)),S=(a(64),function(){var e=[],t=localStorage.getItem("userStatus");if(null!==t&&void 0!==t){t=JSON.parse(t);for(var a=0;a<t.length;a++)"shortlisted"===t[a].status&&e.push(t[a])}return n.a.createElement("div",null,n.a.createElement("p",{className:"heading"},"Shortlisted Users"),n.a.createElement(g,{users:e}))}),y=(a(65),function(){var e=[],t=localStorage.getItem("userStatus");if(null!==t&&void 0!==t){t=JSON.parse(t);for(var a=0;a<t.length;a++)"rejected"===t[a].status&&e.push(t[a])}return n.a.createElement("div",null,n.a.createElement("p",{className:"heading"},"Rejected Users"),n.a.createElement(g,{users:e}))}),O=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e,t=this;return e=n.a.createElement(m.d,null,n.a.createElement(m.b,{path:"/Home",exact:!0,component:function(){return n.a.createElement(E,{posts:t.props.users})}}),n.a.createElement(m.b,{path:"/Shortlisted",exact:!0,component:S}),n.a.createElement(m.b,{path:"/Rejected",exact:!0,component:y}),n.a.createElement(m.b,{path:"/:id",exact:!0,component:j}),n.a.createElement(m.a,{to:"/Home"})),n.a.createElement("div",null,n.a.createElement(h,null),e)}}]),a}(r.Component),N=function(){return n.a.createElement("div",null,n.a.createElement(O,null))},k=n.a.createElement(d.a,null,n.a.createElement(N,null));c.a.render(k,document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d1f6027f.chunk.js.map