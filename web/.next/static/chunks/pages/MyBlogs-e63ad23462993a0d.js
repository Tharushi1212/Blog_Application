(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{1733:function(e,t,o){"use strict";var r=o(4836);t.Z=void 0;var i=r(o(4938)),n=o(5893),l=(0,i.default)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=l},7957:function(e,t,o){"use strict";var r=o(4836);t.Z=void 0;var i=r(o(4938)),n=o(5893),l=(0,i.default)((0,n.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=l},4527:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/MyBlogs",function(){return o(2469)}])},2469:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return A}});var r=o(5893),i=o(7294),n=o(2293),l=o(155),a=o(5861),s=o(9661),c=o(5819),d=o(3321),h=o(6886),u=o(7357),p=o(2761),g=o(948),x=o(1796),m=o(1733),y=o(7957),f=o(3366),b=o(7462),v=o(6010),Z=o(4780),j=o(1657),w=o(7739),k=o(8216),C=o(1588),S=o(4867);function z(e){return(0,S.Z)("MuiIconButton",e)}let R=(0,C.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),B=["edge","children","className","color","disabled","disableFocusRipple","size"],D=e=>{let{classes:t,disabled:o,color:r,edge:i,size:n}=e,l={root:["root",o&&"disabled","default"!==r&&`color${(0,k.Z)(r)}`,i&&`edge${(0,k.Z)(i)}`,`size${(0,k.Z)(n)}`]};return(0,Z.Z)(l,z,t)},E=(0,g.ZP)(w.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,"default"!==o.color&&t[`color${(0,k.Z)(o.color)}`],o.edge&&t[`edge${(0,k.Z)(o.edge)}`],t[`size${(0,k.Z)(o.size)}`]]}})(({theme:e,ownerState:t})=>(0,b.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,x.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12}),({theme:e,ownerState:t})=>{var o;let r=null==(o=(e.vars||e).palette)?void 0:o[t.color];return(0,b.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,b.Z)({color:null==r?void 0:r.main},!t.disableRipple&&{"&:hover":(0,b.Z)({},r&&{backgroundColor:e.vars?`rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,x.Fq)(r.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${R.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),L=i.forwardRef(function(e,t){let o=(0,j.Z)({props:e,name:"MuiIconButton"}),{edge:i=!1,children:n,className:l,color:a="default",disabled:s=!1,disableFocusRipple:c=!1,size:d="medium"}=o,h=(0,f.Z)(o,B),u=(0,b.Z)({},o,{edge:i,color:a,disabled:s,disableFocusRipple:c,size:d}),p=D(u);return(0,r.jsx)(E,(0,b.Z)({className:(0,v.Z)(p.root,l),centerRipple:!0,focusRipple:!c,disabled:s,ref:t,ownerState:u},h,{children:n}))});var M=o(8494),I=o(1163),_=o(3637),$=o(5305),q=o(9886),F=o(6599),N=o(9816),P=o(7911),W=o(4610),O=o(3104);let T=()=>{let[e,t]=i.useState(""),[o,f]=i.useState(),[b,v]=i.useState([]),[Z,j]=i.useState(""),[w,k]=i.useState(""),[C,S]=i.useState(!1),z=()=>S(!0),R=()=>S(!1),B=(0,I.useRouter)(),{myProp:D}=B.query,E=(0,g.ZP)("div")(e=>{let{theme:t}=e;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:(0,x.Fq)(t.palette.common.white,.15),"&:hover":{backgroundColor:(0,x.Fq)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%",[t.breakpoints.up("sm")]:{marginLeft:t.spacing(3),width:"auto"}}}),T=(0,g.ZP)("div")(e=>{let{theme:t}=e;return{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}});i.useEffect(()=>{t(D),G()},[D]);let A=()=>{try{B.push({pathname:"/MyBlogs",query:{myProp:D}})}catch(e){console.error(e.message)}},H=()=>{try{B.push({pathname:"/WriteBlogs",query:{myProp:D}})}catch(e){console.error(e.message)}},V=()=>{try{B.push({pathname:"/Home",query:{myProp:D}})}catch(e){console.error(e.message)}},G=async()=>{try{let e=await fetch("http://localhost:5000/blogs/getBlogByUser/".concat(D)),t=await e.json();if(t){let e=[];for(let o=0;o<t.length;o++){let r=t[o].createdAt,i=new Date(r).toDateString(),n={blogId:t[o]._id,image:t[o].url,title:t[o].title,subDescription:t[o].subDescription,description:t[o].description,author:t[o].email,dates:i};e.push(n)}v(e)}}catch(e){console.error(e.message)}},X=async(t,o)=>{try{B.push({pathname:"/OneBlog",query:{id:o,myProp:e}})}catch(e){console.error(e.message)}},U=e=>{k(e.target.value),f(e.target.value)},Y=async(e,t)=>{j(t),z()},J=async()=>{R();try{let e=await fetch("http://localhost:5000/blogs/removeBlogById/".concat(Z),{method:"DELETE"});await e.json(),200===e.status&&B.reload(window.location.MyBlogs)}catch(e){console.error(e.message)}},K=async(t,o)=>{try{B.push({pathname:"/EditBlog",query:{id:o,myProp:e}})}catch(e){console.error(e.message)}};return(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100vh",padding:10},children:[(0,r.jsx)("div",{children:(0,r.jsx)(M.Z,{open:C,onClose:R,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(u.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:[(0,r.jsx)(a.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Are you sure, you want to delete this blog?"}),(0,r.jsx)(d.Z,{onClick:J,children:"Yes"}),(0,r.jsx)(d.Z,{onClick:R,children:"No"})]})})}),(0,r.jsx)("div",{style:{height:"10%"},children:(0,r.jsx)(n.Z,{position:"fixed",style:{background:"#00cc66"},children:(0,r.jsx)(_.Z,{maxWidth:"xl",children:(0,r.jsxs)(l.Z,{disableGutters:!0,children:[(0,r.jsx)(a.Z,{variant:"h6",noWrap:!0,component:"a",onClick:V,sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Home"}),(0,r.jsxs)(E,{children:[(0,r.jsx)(T,{style:{right:2},children:(0,r.jsx)(p.Z,{style:{color:"black"}})}),(0,r.jsx)("input",{placeholder:"Search here",type:"text",value:o,onChange:U})]}),(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row",position:"fixed",right:5},children:[(0,r.jsx)(c.Z,{children:(0,r.jsx)(a.Z,{noWrap:!0,component:"a",onClick:A,sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"Roboto",color:"inherit",textDecoration:"none"},children:"My Blogs"})}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(a.Z,{noWrap:!0,component:"a",onClick:H,sx:{mr:2,display:{xs:"none",md:"flex"},fontFamily:"Roboto",color:"inherit",textDecoration:"none"},children:"Create Blogs"})}),(0,r.jsx)(s.Z,{alt:"user"})]})]})})})}),(0,r.jsx)("div",{style:{height:"10%"},children:(0,r.jsx)(a.Z,{style:{textAlign:"center",fontFamily:"Georgia, Serif",fontWeight:"bold",fontSize:53,color:"#001a66"},children:"My Blogs"})}),(0,r.jsx)("div",{style:{height:"80%"},children:(0,r.jsx)(u.Z,{sx:{flexGrow:0},children:(0,r.jsx)(h.ZP,{container:!0,columnSpacing:{xs:3},rowSpacing:1,columns:{xs:4,sm:8,md:12},children:b.filter(e=>""===w?e:e.title.toLowerCase().includes(w.toLocaleLowerCase())?e:void 0).map((e,t)=>(0,r.jsx)($.Z,{style:{padding:"10px",height:460},children:(0,r.jsxs)(q.Z,{style:{width:335,height:470,borderRadius:3,border:"3px solid black"},children:[(0,r.jsxs)(F.Z,{children:[(0,r.jsxs)(N.Z,{children:[(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginLeft:"auto"},children:[(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",fontSize:"10px"},children:[(0,r.jsx)(a.Z,{children:e.author}),(0,r.jsx)(a.Z,{children:e.dates})]}),(0,r.jsxs)("div",{style:{marginLeft:"auto"},children:[(0,r.jsx)(L,{style:{marginLeft:"auto"},onClick:t=>{K(t,e.blogId)},children:(0,r.jsx)(y.Z,{style:{marginLeft:"auto"}})}),(0,r.jsx)(L,{onClick:t=>{Y(t,e.blogId)},children:(0,r.jsx)(m.Z,{})})]})]}),(0,r.jsx)("center",{children:(0,r.jsx)(a.Z,{style:{color:"black",fontSize:"30px",fontWeight:"bold"},children:e.title})})]}),(0,r.jsx)("center",{children:(0,r.jsx)(P.Z,{src:e.image,alt:"computing Img",style:{width:300,height:190}})})]}),(0,r.jsxs)(W.Z,{children:[(0,r.jsx)(O.Z,{children:e.subDescription}),(0,r.jsx)(d.Z,{style:{marginRight:"20px",width:"100%"},className:"btn btn-success",onClick:t=>{X(t,e.blogId)},children:"View"})]})]})}))})})})]})};var A=T}},function(e){e.O(0,[774,616,681,410,886,755,888,179],function(){return e(e.s=4527)}),_N_E=e.O()}]);