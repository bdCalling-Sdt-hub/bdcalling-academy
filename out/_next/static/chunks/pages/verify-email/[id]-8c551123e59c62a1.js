(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[580],{7111:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verify-email/[id]",function(){return s(1588)}])},1588:function(e,n,s){"use strict";s.r(n);var t=s(5893),i=s(7563),c=s(1664),l=s.n(c),r=s(1163),o=s(7294);n.default=()=>{let e=(0,r.useRouter)(),n=e.query.id;return(0,o.useEffect)(()=>{i.baseUrl.post("/verified-email",{verified_code:n}).then(e=>console.log(e.data)).catch(e=>console.log(e))},[n]),(0,t.jsxs)("div",{className:"flex justify-center items-center  flex-col h-screen container",children:[(0,t.jsx)("img",{src:"/images/verify1.jpg",alt:"",className:""}),(0,t.jsx)("h2",{className:"text-black text-6xl font-bold",children:"Thank you"}),(0,t.jsxs)("p",{className:"tracking-wider mt-1",children:["Your email verify successfully, Now you can"," ",(0,t.jsx)(l(),{href:"/login",className:"text-primary text-lg mx-1 font-bold",children:"Login"})]})]})}},1163:function(e,n,s){e.exports=s(9974)}},function(e){e.O(0,[63,774,888,179],function(){return e(e.s=7111)}),_N_E=e.O()}]);