import{S as h,i as w,s as _,f as b,t as p,g as v,b as y,c as S,d as r,l as m,h as g,n as L,e as N,r as j,j as E}from"./index-cddcd070.js";function V(i){let e,s,l,c,n,o,a,f,u;return{c(){e=b("div"),s=b("button"),l=p(i[0]),c=v(),n=b("button"),o=p(i[1]),y(e,"class",a=i[2].join(" "))},m(t,d){S(t,e,d),r(e,s),r(s,l),r(e,c),r(e,n),r(n,o),f||(u=[m(s,"click",i[3]),m(n,"click",i[4])],f=!0)},p(t,[d]){d&1&&g(l,t[0]),d&2&&g(o,t[1]),d&4&&a!==(a=t[2].join(" "))&&y(e,"class",a)},i:L,o:L,d(t){t&&N(e),f=!1,j(u)}}}function q(i,e,s){let l;const c=E();let{on:n=!1}=e,{offLabel:o="EN"}=e,{onLabel:a="NL"}=e;function f(){s(5,n=!1),c("toggle",{on:n})}function u(){s(5,n=!0),c("toggle",{on:n})}return i.$$set=t=>{"on"in t&&s(5,n=t.on),"offLabel"in t&&s(0,o=t.offLabel),"onLabel"in t&&s(1,a=t.onLabel)},i.$$.update=()=>{i.$$.dirty&32&&s(2,l=["doxy-switch",n?"on":"off"])},[o,a,l,f,u,n]}class k extends h{constructor(e){super(),w(this,e,q,V,_,{on:5,offLabel:0,onLabel:1})}}const C=k;k.__docgen={version:3,name:"Switch.svelte",data:[{keywords:[{name:"type",description:"{boolean} on"}],visibility:"public",description:"",name:"on",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[{name:"type",description:"{string} offLabel"}],visibility:"public",description:"",name:"offLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"EN"},{keywords:[{name:"type",description:"{string} onLabel"}],visibility:"public",description:"",name:"onLabel",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"NL"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"toggle"}],slots:[],refs:[]};export{C as S};
//# sourceMappingURL=Switch-a10a0163.js.map
