import{S as g,i as v,s as w,f as h,t as V,g as B,b,c as S,d as m,l as j,h as I,k as r,m as y,o as q,e as D,j as E,p as C,q as N,u as x,v as z}from"./index-cddcd070.js";import{I as A}from"./Icon-165f8ecf.js";function p(s){let e,n;return e=new A({props:{icon:s[2]}}),{c(){C(e.$$.fragment)},m(i,d){N(e,i,d),n=!0},p(i,d){const a={};d&4&&(a.icon=i[2]),e.$set(a)},i(i){n||(r(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){x(e,i)}}}function F(s){let e,n,i,d,a,f,u,t=s[2]&&p(s);return{c(){e=h("button"),n=V(s[0]),i=B(),t&&t.c(),b(e,"type","button"),b(e,"class",d=s[3].join(" ")),e.disabled=s[1]},m(l,c){S(l,e,c),m(e,n),m(e,i),t&&t.m(e,null),a=!0,f||(u=j(e,"click",s[4]),f=!0)},p(l,[c]){(!a||c&1)&&I(n,l[0]),l[2]?t?(t.p(l,c),c&4&&r(t,1)):(t=p(l),t.c(),r(t,1),t.m(e,null)):t&&(z(),y(t,1,1,()=>{t=null}),q()),(!a||c&8&&d!==(d=l[3].join(" ")))&&b(e,"class",d),(!a||c&2)&&(e.disabled=l[1])},i(l){a||(r(t),a=!0)},o(l){y(t),a=!1},d(l){l&&D(e),t&&t.d(),f=!1,u()}}}function G(s,e,n){let i;const d=E();let{label:a=""}=e,{disabled:f=!1}=e,{elevated:u=!1}=e,{selectable:t=!1}=e,{selected:l=!1}=e,{icon:c=""}=e;function _(){n(5,l=!l),d("toggle",{selected:l})}return s.$$set=o=>{"label"in o&&n(0,a=o.label),"disabled"in o&&n(1,f=o.disabled),"elevated"in o&&n(6,u=o.elevated),"selectable"in o&&n(7,t=o.selectable),"selected"in o&&n(5,l=o.selected),"icon"in o&&n(2,c=o.icon)},s.$$.update=()=>{s.$$.dirty&229&&n(3,i=["doxy-button",u?"elevated":"",t?"selectable":"",l?"selected":"",c&&!a?"icon":""])},[a,f,c,i,_,l,u,t]}class k extends g{constructor(e){super(),v(this,e,G,F,w,{label:0,disabled:1,elevated:6,selectable:7,selected:5,icon:2})}}const K=k;k.__docgen={version:3,name:"Button.svelte",data:[{keywords:[{name:"type",description:"{string} Button contents"}],visibility:"public",description:"",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{keywords:[{name:"type",description:"{boolean} Disabled"}],visibility:"public",description:"",name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean} Elevated"}],visibility:"public",description:"",name:"elevated",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean} Selectable"}],visibility:"public",description:"",name:"selectable",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{boolean} Selected"}],visibility:"public",description:"",name:"selected",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string} Icon"}],visibility:"public",description:"",name:"icon",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"toggle"}],slots:[],refs:[]};export{K as B};
//# sourceMappingURL=Button-88931fc3.js.map
