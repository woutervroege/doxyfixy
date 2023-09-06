import{S as $,i as ee,s as te,y as se,f as k,t as F,g as B,b as L,c as ae,d as p,h as N,k as z,o as ne,z as ie,A as le,B as re,m as x,e as oe,C as ce,p as me,q as ue,u as de,v as ge}from"./index-cddcd070.js";import{T as pe}from"./Tag-a03ed35a.js";function O(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function V(s,t,l){const i=s.slice();return i[7]=t[l],i}function j(s){let t,l;return t=new pe({props:{label:s[7]}}),{c(){me(t.$$.fragment)},m(i,d){ue(t,i,d),l=!0},p(i,d){const m={};d&4&&(m.label=i[7]),t.$set(m)},i(i){l||(z(t.$$.fragment,i),l=!0)},o(i){x(t.$$.fragment,i),l=!1},d(i){de(t,i)}}}function fe(s){let t,l,i,d,m,h,b,g,_,o,u,y=O(s[2]),a=[];for(let e=0;e<y.length;e+=1)a[e]=j(V(s,y,e));const Z=e=>x(a[e],1,1,()=>{a[e]=null}),T=s[6].default,c=se(T,s,s[5],null);return{c(){t=k("section"),l=k("h3"),i=F(s[0]),d=B(),m=k("h4"),h=F(s[1]),b=B(),g=k("div");for(let e=0;e<a.length;e+=1)a[e].c();_=B(),c&&c.c(),L(t,"class",o=s[3].join(" "))},m(e,r){ae(e,t,r),p(t,l),p(l,i),p(t,d),p(t,m),p(m,h),p(t,b),p(t,g);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(g,null);p(t,_),c&&c.m(t,null),u=!0},p(e,[r]){if((!u||r&1)&&N(i,e[0]),(!u||r&2)&&N(h,e[1]),r&4){y=O(e[2]);let n;for(n=0;n<y.length;n+=1){const E=V(e,y,n);a[n]?(a[n].p(E,r),z(a[n],1)):(a[n]=j(E),a[n].c(),z(a[n],1),a[n].m(g,null))}for(ge(),n=y.length;n<a.length;n+=1)Z(n);ne()}c&&c.p&&(!u||r&32)&&ie(c,T,e,e[5],u?re(T,e[5],r,null):le(e[5]),null),(!u||r&8&&o!==(o=e[3].join(" ")))&&L(t,"class",o)},i(e){if(!u){for(let r=0;r<y.length;r+=1)z(a[r]);z(c,e),u=!0}},o(e){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)x(a[r]);x(c,e),u=!1},d(e){e&&oe(t),ce(a,e),c&&c.d(e)}}}function ye(s,t,l){let i,{$$slots:d={},$$scope:m}=t,{title:h=""}=t,{subtitle:b=""}=t,{size:g="small"}=t,{tags:_=[]}=t;return s.$$set=o=>{"title"in o&&l(0,h=o.title),"subtitle"in o&&l(1,b=o.subtitle),"size"in o&&l(4,g=o.size),"tags"in o&&l(2,_=o.tags),"$$scope"in o&&l(5,m=o.$$scope)},s.$$.update=()=>{s.$$.dirty&16&&l(3,i=["doxy-card",g])},[h,b,_,i,g,m,d]}class Y extends ${constructor(t){super(),ee(this,t,ye,fe,te,{title:0,subtitle:1,size:4,tags:2})}}const he=Y;Y.__docgen={version:3,name:"Card.svelte",data:[{keywords:[{name:"type",description:"{string} title"}],visibility:"public",description:"",name:"title",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{string} subtitle"}],visibility:"public",description:"",name:"subtitle",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{('small' | 'medium' | 'large' | 'hero' | 'portrait')} size"}],visibility:"public",description:"",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"'small' | 'medium' | 'large' | 'hero' | 'portrait'",type:[{kind:"const",text:"'small'",type:"string",value:"small"},{kind:"const",text:"'medium'",type:"string",value:"medium"},{kind:"const",text:"'large'",type:"string",value:"large"},{kind:"const",text:"'hero'",type:"string",value:"hero"},{kind:"const",text:"'portrait'",type:"string",value:"portrait"}]},defaultValue:"small"},{keywords:[{name:"type",description:"{array} tags"}],visibility:"public",description:"",name:"tags",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};const ze={title:"Example/Card",component:he,tags:["autodocs"],argTypes:{title:{control:{type:"text"}},subtitle:{control:{type:"text"}},tags:{control:{type:"array"}},size:{control:{type:"select"},options:["small","medium","large","hero","portrait"]}}},f={args:{title:"Film titel",subtitle:"Een zomerse feelgoodfilm met Laure Calamy, Olivia Côte en Kristin Scott Thomas. De onlangs gescheiden Blandine (Côte) zit middenin een midlifecrisis.",tags:["apples","pears","bananas"],size:"small"}},v={args:{...f.args,size:"medium"}},C={args:{...f.args,size:"large"}},S={args:{...f.args,size:"hero"}},w={args:{...f.args,size:"portrait",subtitle:"Christopher Nolan"}};var q,A,D;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Film titel',
    subtitle: 'Een zomerse feelgoodfilm met Laure Calamy, Olivia Côte en Kristin Scott Thomas. De onlangs gescheiden Blandine (Côte) zit middenin een midlifecrisis.',
    tags: ['apples', 'pears', 'bananas'],
    size: 'small'
  }
}`,...(D=(A=f.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,K,M;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Small.args,
    ...{
      size: 'medium'
    }
  }
}`,...(M=(K=v.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var P,G,I;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Small.args,
    ...{
      size: 'large'
    }
  }
}`,...(I=(G=C.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var J,Q,R;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Small.args,
    ...{
      size: 'hero'
    }
  }
}`,...(R=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,W,X;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Small.args,
    ...{
      size: 'portrait',
      subtitle: 'Christopher Nolan'
    }
  }
}`,...(X=(W=w.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ke=["Small","Medium","Large","Hero","Portrait"];export{S as Hero,C as Large,v as Medium,w as Portrait,f as Small,ke as __namedExportsOrder,ze as default};
//# sourceMappingURL=Card.stories-f1e2e4da.js.map
