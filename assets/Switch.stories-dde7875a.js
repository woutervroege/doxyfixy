import{S as l}from"./Switch-a10a0163.js";import"./index-cddcd070.js";const g={title:"Example/Switch",component:l,tags:["autodocs"],argTypes:{on:{control:"boolean"},offLabel:{control:"text"},onLabel:{control:"text"},onToggle:{action:"toggle"}}},o={args:{on:!1,offLabel:"EN",onLabel:"NL"}},e={args:{...o.args,on:!0}};var r,a,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    on: false,
    offLabel: 'EN',
    onLabel: 'NL'
  }
}`,...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,t,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...Off.args,
    ...{
      on: true
    }
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const m=["Off","On"];export{o as Off,e as On,m as __namedExportsOrder,g as default};
//# sourceMappingURL=Switch.stories-dde7875a.js.map
