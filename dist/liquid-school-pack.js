/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,L=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),Q=new WeakMap;let X=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(L&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Q.set(e,t))}return t}toString(){return this.cssText}};const mt=r=>new X(typeof r=="string"?r:r+"",void 0,q),F=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new X(e,r,q)},_t=(r,t)=>{if(L)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=H.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},tt=L?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return mt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bt,defineProperty:yt,getOwnPropertyDescriptor:vt,getOwnPropertyNames:At,getOwnPropertySymbols:Et,getPrototypeOf:xt}=Object,B=globalThis,et=B.trustedTypes,wt=et?et.emptyScript:"",St=B.reactiveElementPolyfillSupport,S=(r,t)=>r,N={toAttribute(r,t){switch(t){case Boolean:r=r?wt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},I=(r,t)=>!bt(r,t),st={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:I};Symbol.metadata??=Symbol("metadata"),B.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&yt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=vt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const u=s?.call(this);o?.call(this,n),this.requestUpdate(t,u,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??st}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,i=[...At(e),...Et(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(tt(s))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _t(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:N).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:N;this._$Em=s;const u=n.fromAttribute(e,o.type);this[s]=u??this._$Ej?.get(s)??u,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(t!==void 0){const n=this.constructor;if(s===!1&&(o=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??I)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i){const{wrapped:n}=o,u=this[s];n!==!0||this._$AL.has(s)||u===void 0||this.C(s,void 0,o,u)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[S("elementProperties")]=new Map,A[S("finalized")]=new Map,St?.({ReactiveElement:A}),(B.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,it=r=>r,R=W.trustedTypes,rt=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,ot="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,nt="?"+$,Ct=`<${nt}>`,_=document,C=()=>_.createComment(""),k=r=>r===null||typeof r!="object"&&typeof r!="function",V=Array.isArray,kt=r=>V(r)||typeof r?.[Symbol.iterator]=="function",Z=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,ut=/>/g,b=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,ct=/"/g,ht=/^(?:script|style|textarea|title)$/i,Tt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),p=Tt(1),E=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),dt=new WeakMap,y=_.createTreeWalker(_,129);function pt(r,t){if(!V(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return rt!==void 0?rt.createHTML(t):t}const Pt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=T;for(let u=0;u<e;u++){const a=r[u];let c,d,l=-1,g=0;for(;g<a.length&&(n.lastIndex=g,d=n.exec(a),d!==null);)g=n.lastIndex,n===T?d[1]==="!--"?n=at:d[1]!==void 0?n=ut:d[2]!==void 0?(ht.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=b):d[3]!==void 0&&(n=b):n===b?d[0]===">"?(n=s??T,l=-1):d[1]===void 0?l=-2:(l=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?b:d[3]==='"'?ct:lt):n===ct||n===lt?n=b:n===at||n===ut?n=T:(n=b,s=void 0);const f=n===b&&r[u+1].startsWith("/>")?" ":"";o+=n===T?a+Ct:l>=0?(i.push(c),a.slice(0,l)+ot+a.slice(l)+$+f):a+$+(l===-2?u:f)}return[pt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class U{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const u=t.length-1,a=this.parts,[c,d]=Pt(t,e);if(this.el=U.createElement(c,i),y.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=y.nextNode())!==null&&a.length<u;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ot)){const g=d[n++],f=s.getAttribute(l).split($),M=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:M[2],strings:f,ctor:M[1]==="."?Ut:M[1]==="?"?Ot:M[1]==="@"?Mt:j}),s.removeAttribute(l)}else l.startsWith($)&&(a.push({type:6,index:o}),s.removeAttribute(l));if(ht.test(s.tagName)){const l=s.textContent.split($),g=l.length-1;if(g>0){s.textContent=R?R.emptyScript:"";for(let f=0;f<g;f++)s.append(l[f],C()),y.nextNode(),a.push({type:2,index:++o});s.append(l[g],C())}}}else if(s.nodeType===8)if(s.data===nt)a.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf($,l+1))!==-1;)a.push({type:7,index:o}),l+=$.length-1}o++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function x(r,t,e=r,i){if(t===E)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const o=k(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=x(r,s._$AS(r,t.values),s,i)),t}class Dt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??_).importNode(e,!0);y.currentNode=s;let o=y.nextNode(),n=0,u=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new O(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Ht(o,this,t)),this._$AV.push(c),a=i[++u]}n!==a?.index&&(o=y.nextNode(),n++)}return y.currentNode=_,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),k(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):kt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=U.createElement(pt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const o=new Dt(s,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=dt.get(t.strings);return e===void 0&&dt.set(t.strings,e=new U(t)),e}k(t){V(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new O(this.O(C()),this.O(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=it(t).nextSibling;it(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=x(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const u=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=x(this,u[i+a],e,a),c===E&&(c=this._$AH[a]),n||=!k(c)||c!==this._$AH[a],c===h?t=h:t!==h&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ut extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Ot extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Mt extends j{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??h)===E)return;const i=this._$AH,s=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const Bt=W.litHtmlPolyfillSupport;Bt?.(U,O),(W.litHtmlVersions??=[]).push("3.3.3");const Nt=(r,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const o=e?.renderBefore??null;i._$litPart$=s=new O(t.insertBefore(C(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis;class m extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}}m._$litElement$=!0,m.finalized=!0,G.litElementHydrateSupport?.({LitElement:m});const Rt=G.litElementPolyfillSupport;Rt?.({LitElement:m}),(G.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:I},zt=(r=jt,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(u){const a=t.get.call(this);t.set.call(this,u),this.requestUpdate(n,a,r,!0,u)},init(u){return u!==void 0&&this.C(n,void 0,r,u),u}}}if(i==="setter"){const{name:n}=e;return function(u){const a=this[n];t.call(this,u),this.requestUpdate(n,a,r,!0,u)}}throw Error("Unsupported decorator location: "+i)};function P(r){return(t,e)=>typeof e=="object"?zt(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(r){return P({...r,state:!0,attribute:!1})}const gt=F`
  :host {
    --glass-bg: rgba(255, 255, 255, 0.18);
    --glass-bg-hover: rgba(255, 255, 255, 0.28);
    --glass-border: rgba(255, 255, 255, 0.35);
    --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.12);
    --glass-blur: blur(14px);
    --text-primary: var(--primary-text-color, #1f2937);
    --text-secondary: var(--secondary-text-color, #6b7280);
    --accent-blue: #38bdf8;
    --accent-green: #34d399;
  }

  .glass-card {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    box-shadow: var(--glass-shadow);
    padding: 20px;
    color: var(--text-primary);
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
    transition: all 0.3s ease;
  }

  .glass-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .glass-title {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .glass-chip-nav {
    display: flex;
    gap: 8px;
    background: rgba(0, 0, 0, 0.05);
    padding: 4px;
    border-radius: 12px;
  }

  .glass-chip-btn {
    border: none;
    background: transparent;
    padding: 6px 14px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    transition: all 0.2s ease;
  }

  .glass-chip-btn.active {
    background: rgba(255, 255, 255, 0.6);
    color: var(--text-primary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .glass-item {
    background: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 14px;
    padding: 10px 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .glass-item:hover {
    transform: translateY(-2px);
    background: var(--glass-bg-hover);
  }
`;var Lt=Object.defineProperty,z=(r,t,e,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(t,e,s)||s);return s&&Lt(t,e,s),s};class w extends m{constructor(){super(...arguments),this._activeTab="today",this._lessons=[]}static async getConfigElement(){return document.createElement("liquid-school-schedule-card-editor")}setConfig(t){if(!t.entity)throw new Error("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F (sensor.* \u0438\u043B\u0438 calendar.*)");this._config=t}willUpdate(t){t.has("hass")&&this.hass&&this._config?.entity&&this._updateScheduleData()}async _updateScheduleData(){const t=this._config.entity;if(t.startsWith("sensor.")){const e=this.hass.states[t];if(!e)return;const i=this._activeTab==="today"?this._config.today_attribute||"lessons_today":this._config.tomorrow_attribute||"lessons_tomorrow",s=e.attributes[i]||[];this._lessons=s.map(o=>({start:o.start_time||o.start||"",end:o.end_time||o.end||"",subject:o.subject||o.name||"\u0423\u0440\u043E\u043A",room:o.room||o.classroom||"",homework:o.homework||""}));return}if(t.startsWith("calendar.")){const e=new Date;this._activeTab==="tomorrow"&&e.setDate(e.getDate()+1),e.setHours(0,0,0,0);const i=new Date(e);i.setHours(23,59,59,999);try{const s=`calendars/${t}?start=${e.toISOString()}&end=${i.toISOString()}`,o=await this.hass.callApi("GET",s);this._lessons=(o||[]).map(n=>({start:this._formatTime(n.start.dateTime||n.start.date),end:this._formatTime(n.end.dateTime||n.end.date),subject:n.summary,room:n.location||"",homework:n.description||""}))}catch(s){console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044F",s)}}}_formatTime(t){if(!t.includes("T"))return t;const e=new Date(t);return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}_calcBreak(t,e){const i=o=>{const[n,u]=o.split(":").map(Number);return n*60+u};if(!t.includes(":")||!e.includes(":"))return 0;const s=i(e)-i(t);return s>0?s:0}_setTab(t){this._activeTab=t,this._updateScheduleData()}render(){return!this._config||!this.hass?p``:p`
      <div class="glass-card">
        <div class="glass-header">
          <div class="glass-title">${this._config.title||"\u0428\u043A\u043E\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}</div>
          <div class="glass-chip-nav">
            <button
              class="glass-chip-btn ${this._activeTab==="today"?"active":""}"
              @click=${()=>this._setTab("today")}
            >
              Сегодня
            </button>
            <button
              class="glass-chip-btn ${this._activeTab==="tomorrow"?"active":""}"
              @click=${()=>this._setTab("tomorrow")}
            >
              Завтра
            </button>
          </div>
        </div>

        <div class="schedule-list">
          ${this._lessons.length===0?p`
            <div style="text-align: center; padding: 20px; opacity: 0.6;">Нет уроков на этот день</div>
          `:this._lessons.map((t,e)=>{const i=this._lessons[e+1],s=i?this._calcBreak(t.end,i.start):0;return p`
              <div class="glass-item">
                <div class="lesson-row">
                  <div class="lesson-top">
                    ${t.start?p`<span class="lesson-time">${t.start} -${t.end}</span>`:""}
                    <span class="lesson-name">${t.subject}</span>
                    ${t.room?p`<span class="badge-room">${t.room}</span>`:""}
                  </div>
                  ${t.homework?p`
                    <div class="homework-box">Д/З: ${t.homework}</div>
                  `:""}
                </div>
              </div>

              ${s>0&&this._config.show_breaks!==!1?p`
                <div class="break-item">
                  <span class="break-line"></span>
                  <span>Перемена ${s} мин</span>
                  <span class="break-line"></span>
                </div>
              `:""}
            `})}
        </div>
      </div>
    `}}w.styles=[gt,F`
      .lesson-row {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
      }
      .lesson-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      .lesson-time {
        font-size: 0.8rem;
        font-weight: 600;
        opacity: 0.75;
        margin-right: 10px;
      }
      .lesson-name {
        font-weight: 600;
        flex: 1;
      }
      .badge-room {
        background: rgba(255, 255, 255, 0.45);
        padding: 2px 8px;
        border-radius: 8px;
        font-size: 0.75rem;
        font-weight: 600;
      }
      .homework-box {
        font-size: 0.8rem;
        color: var(--text-secondary);
        background: rgba(0, 0, 0, 0.03);
        padding: 4px 8px;
        border-radius: 6px;
        margin-top: 4px;
      }
      .break-item {
        display: flex;
        align-items: center;
        padding: 4px 14px;
        margin-bottom: 8px;
        font-size: 0.8rem;
        color: var(--text-secondary);
      }
      .break-line {
        flex: 1;
        height: 1px;
        background: rgba(255, 255, 255, 0.4);
        margin: 0 10px;
      }
    `],z([P({attribute:!1})],w.prototype,"hass"),z([v()],w.prototype,"_config"),z([v()],w.prototype,"_activeTab"),z([v()],w.prototype,"_lessons");var qt=Object.defineProperty,ft=(r,t,e,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(t,e,s)||s);return s&&qt(t,e,s),s};class J extends m{constructor(){super(...arguments),this._schema=[{name:"title",label:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",selector:{text:{}}},{name:"entity",label:"\u0421\u0443\u0449\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F (\u0441\u0435\u043D\u0441\u043E\u0440 \u0413\u043E\u0441\u0443\u0441\u043B\u0443\u0433 \u0438\u043B\u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C)",selector:{entity:{domain:["sensor","calendar"]}}},{name:"today_attribute",label:"\u0410\u0442\u0440\u0438\u0431\u0443\u0442 \u0434\u043B\u044F \u0443\u0440\u043E\u043A\u043E\u0432 \u0441\u0435\u0433\u043E\u0434\u043D\u044F (\u043F\u043E \u0443\u043C\u043E\u043B\u0447. lessons_today)",selector:{text:{}}},{name:"tomorrow_attribute",label:"\u0410\u0442\u0440\u0438\u0431\u0443\u0442 \u0434\u043B\u044F \u0443\u0440\u043E\u043A\u043E\u0432 \u0437\u0430\u0432\u0442\u0440\u0430 (\u043F\u043E \u0443\u043C\u043E\u043B\u0447. lessons_tomorrow)",selector:{text:{}}},{name:"show_breaks",label:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u044B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438",selector:{boolean:{}}}]}setConfig(t){this._config=t}_valueChanged(t){const e=t.detail.value,i=new CustomEvent("config-changed",{detail:{config:{...this._config,...e}},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){return!this.hass||!this._config?p``:p`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${t=>t.label||t.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}ft([P({attribute:!1})],J.prototype,"hass"),ft([v()],J.prototype,"_config");var Ft=Object.defineProperty,K=(r,t,e,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(t,e,s)||s);return s&&Ft(t,e,s),s};class D extends m{constructor(){super(...arguments),this._items=[]}static async getConfigElement(){return document.createElement("liquid-daily-tasks-card-editor")}setConfig(t){if(!t.entity)throw new Error("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u044C \u0441\u043F\u0438\u0441\u043A\u0430 \u0437\u0430\u0434\u0430\u0447 (todo.*)");this._config=t}willUpdate(t){if(t.has("hass")&&this.hass&&this._config?.entity){const e=t.get("hass");(!e||e.states[this._config.entity]!==this.hass.states[this._config.entity])&&this._fetchTasks()}}async _fetchTasks(){if(!(!this.hass||!this._config?.entity))try{const t=await this.hass.callWS({type:"todo/item/list",entity_id:this._config.entity});this._items=t.items||[]}catch(t){console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0437\u0430\u0434\u0430\u0447",t)}}async _toggleTask(t){const e=t.status==="completed"?"needs_action":"completed";try{await this.hass.callService("todo","update_item",{entity_id:this._config.entity,item:t.id,status:e}),this._fetchTasks()}catch(i){console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438",i)}}render(){if(!this._config||!this.hass)return p``;const t=this._items.length,e=this._items.filter(s=>s.status==="completed").length,i=t>0?Math.round(e/t*100):0;return p`
      <div class="glass-card">
        <div class="glass-header">
          <div class="glass-title">${this._config.title||"\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}</div>
        </div>

        <div class="tasks-list">
          ${this._items.map(s=>p`
            <div class="glass-item">
              <input
                type="checkbox"
                class="task-checkbox"
                .checked=${s.status==="completed"}
                @change=${()=>this._toggleTask(s)}
              />
              <div class="task-details">
                <span class="task-title ${s.status==="completed"?"done":""}">${s.summary}</span>
                ${s.due?p`<span class="task-due">${s.due}</span>`:""}
              </div>
            </div>
          `)}
        </div>

        <div class="progress-container">
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem;">
            <span>Выполнено: ${e} из ${t}</span>
            <span>${i}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${i}%;"></div>
          </div>
        </div>
      </div>
    `}}D.styles=[gt,F`
      .task-checkbox {
        appearance: none;
        width: 22px;
        height: 22px;
        border: 2px solid rgba(255, 255, 255, 0.8);
        border-radius: 6px;
        outline: none;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.2);
        display: grid;
        place-content: center;
        margin-right: 12px;
        transition: all 0.2s ease;
      }
      .task-checkbox:checked {
        background: var(--accent-green);
        border-color: var(--accent-green);
      }
      .task-checkbox:checked::before {
        content: "✓";
        color: white;
        font-weight: 900;
        font-size: 14px;
      }
      .task-details {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .task-title {
        font-size: 0.95rem;
        font-weight: 500;
      }
      .task-title.done {
        text-decoration: line-through;
        opacity: 0.6;
      }
      .task-due {
        font-size: 0.75rem;
        color: var(--text-secondary);
      }
      .progress-container {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .progress-bar {
        height: 8px;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.08);
        overflow: hidden;
      }
      .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #38bdf8, #34d399);
        transition: width 0.4s ease;
      }
    `],K([P({attribute:!1})],D.prototype,"hass"),K([v()],D.prototype,"_config"),K([v()],D.prototype,"_items");var It=Object.defineProperty,$t=(r,t,e,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(t,e,s)||s);return s&&It(t,e,s),s};class Y extends m{constructor(){super(...arguments),this._schema=[{name:"title",label:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",selector:{text:{}}},{name:"entity",label:"\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u0447 (Todo)",selector:{entity:{domain:"todo"}}}]}setConfig(t){this._config=t}_valueChanged(t){const e=t.detail.value,i=new CustomEvent("config-changed",{detail:{config:{...this._config,...e}},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){return!this.hass||!this._config?p``:p`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${t=>t.label||t.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}}$t([P({attribute:!1})],Y.prototype,"hass"),$t([v()],Y.prototype,"_config"),customElements.define("liquid-school-schedule-card",w),customElements.define("liquid-school-schedule-card-editor",J),customElements.define("liquid-daily-tasks-card",D),customElements.define("liquid-daily-tasks-card-editor",Y),window.customCards=window.customCards||[],window.customCards.push({type:"liquid-school-schedule-card",name:"Liquid School Schedule",description:"\u0428\u043A\u043E\u043B\u044C\u043D\u043E\u0435 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (\u0441\u0435\u043D\u0441\u043E\u0440\u044B \u0434\u043D\u0435\u0432\u043D\u0438\u043A\u0430 / \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u0438)",preview:!0}),window.customCards.push({type:"liquid-daily-tasks-card",name:"Liquid Daily Tasks",description:"\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 (\u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F Todo \u0441 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u043C)",preview:!0});
//# sourceMappingURL=liquid-school-pack.js.map
