(self.webpackChunkcovid19_helix=self.webpackChunkcovid19_helix||[]).push([[734],{706:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var o=s(643);class n extends o.Z{static getConfig(){return{className:"Neo.main.addon.Stylesheet",remote:{app:["createStyleSheet","insertCssRules","swapStyleSheet"]},singleton:!0}}constructor(e){super(e),Neo.config.useFontAwesome&&this.createStyleSheet(null,null,Neo.config.basePath+"node_modules/@fortawesome/fontawesome-free/css/all.min.css"),Neo.config.themes.length>0&&""!==Neo.config.themes[0]&&this.insertTheme()}createStyleSheet(e,t,s){if(!e&&!s)throw new Error("createStyleSheet: you need to either pass a name or a href");const o=document.createElement("link"),n=Neo.config.environment,l=n.startsWith("dist/")?n:"dist/"+n,c=s||(Neo.config.cssPath?Neo.config.cssPath+e:Neo.config.basePath+l+"/"+e);Object.assign(o,{href:c,rel:"stylesheet",type:"text/css"}),t&&(o.id=t),document.head.appendChild(o)}hasStyleSheet(e){let t,s=0,o=document.styleSheets.length;for(;s<o;s++)if(t=document.styleSheets[s],t.href&&t.href.includes(e))return!0;return!1}insertCssRules(e){let t,s=document.getElementById("neoDynamicStyleSheet"),o=0,n=e.rules.length;for(s||(s=document.createElement("style"),s.id="neoDynamicStyleSheet",document.head.appendChild(s)),t=s.sheet;o<n;o++)t.insertRule(e.rules[o],t.cssRules.length)}insertTheme(){let e=this,t=Neo.config.themes;Array.isArray(t)||(t=[t]),t[0]&&document.body.classList.add(t[0]),Neo.config.useCssVars?(e.removeStyleSheets({included:["neo-theme-","-no-css-vars.css"]}),t.length>0&&!e.hasStyleSheet("neo-structure.css")&&e.createStyleSheet("neo-structure.css"),t.forEach((t=>{e.hasStyleSheet(t+".css")||e.createStyleSheet(t+".css")}))):(e.removeStyleSheets({included:["neo-structure.css"]}),e.removeStyleSheets({included:["neo-theme-"],excluded:["-no-css-vars.css"]}),t.length>0&&!e.hasStyleSheet(t[0]+"-no-css-vars.css")&&e.createStyleSheet(t[0]+"-no-css-vars.css","neo-theme"))}removeStyleSheets(e){let t,s,o=0,n=document.styleSheets.length,l=e.included||[],c=e.included||[];for(;o<n;o++)t=document.styleSheets[o],s=!0,t.href&&(c.forEach((e=>{t.href.includes(e)&&(s=!1)})),s&&(l.forEach((e=>{t.href.includes(e)||(s=!1)})),s&&(console.log("removeSheet",t.href),t.ownerNode.parentNode.removeChild(t.ownerNode))))}swapStyleSheet(e){document.getElementById(e.id).setAttribute("href",e.href)}}Neo.applyClassConfig(n);let l=Neo.create(n);Neo.applyToGlobalNs(l);const c=l}}]);