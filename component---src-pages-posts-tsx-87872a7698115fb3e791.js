(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{PJ8K:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("BMxC"),l=n("qWyU"),c=n("sK1y"),o=n("Yn+B"),s=n("+Cyc"),u=n("7cJT"),d=function(e){var t=e.title,n=e.path,r=e.excerpt,o=e.date;return a.a.createElement(i.a,null,a.a.createElement(u.b,{to:n},a.a.createElement(l.a,{size:"md",marginBottom:1},t)),a.a.createElement(c.a,{fontSize:"xs",fontWeight:"light"},o),a.a.createElement(c.a,{fontSize:"sm",fontWeight:"light"},r))};t.default=function(e){var t=e.data.allMdx.edges.map((function(e){return e.node.frontmatter}));return a.a.createElement(u.c,null,a.a.createElement(u.e,{title:"Posts"}),a.a.createElement(o.a,{spacing:3},t.map((function(e,t){return a.a.createElement(s.a,{marginBottom:4},a.a.createElement(d,Object.assign({key:t},e)))}))))}},"Yn+B":function(e,t,n){"use strict";var r=n("j8BX"),a=n.n(r),i=n("uDP2"),l=n.n(i),c=n("qKvR"),o=n("q1tI"),s=n("Weur"),u=n("BMxC");t.a=function(e){var t,n=e.direction,r=e.isInline,i=void 0!==r&&r,d=e.isReversed,m=void 0!==d&&d,f=e.children,p=e.align,h=e.justify,v=e.spacing,g=void 0===v?2:v,E=e.shouldWrapChildren,b=l()(e,["direction","isInline","isReversed","children","align","justify","spacing","shouldWrapChildren"]),w=m||n&&n.endsWith("reverse"),y=i||n&&n.startsWith("row");y&&(t="row"),w&&(t=i?"row-reverse":"column-reverse"),n&&(t=n),y||w||n||(t="column");var j=o.Children.toArray(f).filter(o.isValidElement);return Object(c.d)(s.a,a()({align:p,justify:h,direction:t},b),j.map((function(e,t){var n,r,i=j.length===t+1,l=y?((n={})[w?"ml":"mr"]=i?null:g,n):((r={})[w?"mt":"mb"]=i?null:g,r);return E?Object(c.d)(u.a,a()({d:"inline-block"},l,{key:"stack-box-wrapper-"+t}),e):Object(o.cloneElement)(e,l)})))}}}]);
//# sourceMappingURL=component---src-pages-posts-tsx-87872a7698115fb3e791.js.map