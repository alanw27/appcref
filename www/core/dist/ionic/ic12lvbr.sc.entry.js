const e=window.Ionic.h;import{b as t}from"./chunk-7c632336.js";class n{constructor(){this.disabled=!1,this.scrollable=!1}valueChanged(e){this.updateButtons(),this.ionChange.emit({value:e})}segmentClick(e){this.value=e.target.value}componentWillLoad(){this.emitStyle()}componentDidLoad(){if(null==this.value){const e=this.getButtons().find(e=>e.checked);e&&(this.value=e.value)}this.updateButtons()}emitStyle(){this.ionStyle.emit({segment:!0})}updateButtons(){const e=this.value;for(const t of this.getButtons())t.checked=t.value===e}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}hostData(){return{class:Object.assign({},t(this.color),{"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})}}static get is(){return"ion-segment"}static get encapsulation(){return"scoped"}static get properties(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},mode:{type:String,attr:"mode"},scrollable:{type:Boolean,attr:"scrollable"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionSelect",method:"segmentClick"}]}static get style(){return".sc-ion-segment-md-h{--indicator-color-checked:initial;--ripple-color:initial;--color-activated:initial;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center}.sc-ion-segment-md-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-md-h{pointer-events:none}.segment-scrollable.sc-ion-segment-md-h{-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}.segment-scrollable.sc-ion-segment-md-h::-webkit-scrollbar{display:none}.sc-ion-segment-md-h{--background:none;--background-checked:none;--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.04);--background-activated:rgba(var(--ion-color-primary-rgb,56,128,255),0.16);--color:rgba(var(--ion-text-color-rgb,0,0,0),0.6);--color-checked:var(--ion-color-primary,#3880ff);--color-checked-disabled:var(--color-checked);--indicator-color:transparent}.segment-disabled.sc-ion-segment-md-h{opacity:.3}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button{--background-hover:rgba(var(--ion-color-base-rgb),0.04);--background-activated:rgba(var(--ion-color-base-rgb),0.16);--ripple-color:var(--ion-color-base);background:transparent;color:rgba(var(--ion-text-color-rgb,0,0,0),.6)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked{--indicator-color-checked:var(--ion-color-base);color:var(--ion-color-base)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked.activated{color:var(--ion-color-base)}.sc-ion-segment-md-hion-toolbar:not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button{color:var(--ion-toolbar-color-unchecked,var(--color))}.sc-ion-segment-md-hion-toolbar:not(.ion-color).sc-ion-segment-md-s > .segment-button-checked, ion-toolbar .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > .segment-button-checked{--indicator-color-checked:var(--ion-toolbar-color-checked,var(--color-checked));color:var(--ion-toolbar-color-checked,var(--color-checked))}.sc-ion-segment-md-hion-toolbar.ion-color:not(.ion-color).sc-ion-segment-md-s > ion-segment-button, ion-toolbar.ion-color .sc-ion-segment-md-h:not(.ion-color).sc-ion-segment-md-s > ion-segment-button{--background-hover:rgba(var(--ion-color-contrast-rgb),0.04);--background-activated:var(--ion-color-base);--color:rgba(var(--ion-color-contrast-rgb),0.6);--color-checked:var(--ion-color-contrast);--indicator-color-checked:var(--ion-color-contrast)}"}static get styleMode(){return"md"}}let s=0;class l{constructor(){this.checked=!1,this.disabled=!1,this.layout="icon-top",this.value="ion-sb-"+s++,this.onClick=(()=>{this.checked=!0})}checkedChanged(e,t){e&&!t&&this.ionSelect.emit()}get hasLabel(){return!!this.el.querySelector("ion-label")}get hasIcon(){return!!this.el.querySelector("ion-icon")}hostData(){const{checked:e,disabled:t,hasIcon:n,hasLabel:s,layout:l}=this;return{"aria-disabled":t?"true":null,class:{"segment-button-has-label":s,"segment-button-has-icon":n,"segment-button-has-label-only":s&&!n,"segment-button-has-icon-only":n&&!s,"segment-button-disabled":t,"segment-button-checked":e,[`segment-button-layout-${l}`]:!0,"ion-activatable":!0,"ion-activatable-instant":!0}}}render(){return[e("button",{type:"button","aria-pressed":this.checked?"true":null,class:"button-native",disabled:this.disabled,onClick:this.onClick},e("slot",null),"md"===this.mode&&e("ion-ripple-effect",null)),e("div",{class:"segment-button-indicator"})]}static get is(){return"ion-segment-button"}static get encapsulation(){return"shadow"}static get properties(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},layout:{type:String,attr:"layout"},mode:{type:String,attr:"mode"},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-segment-button-md-h{--padding-start:0;--padding-end:0;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-direction:column;flex-direction:column;height:auto;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-font-kerning:none;font-kerning:none}.sc-ion-segment-button-md-h:first-of-type{border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}.sc-ion-segment-button-md-h:not(:first-of-type){border-left-width:0}.sc-ion-segment-button-md-h:last-of-type{border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}.button-native.sc-ion-segment-button-md{border-radius:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;cursor:pointer}.segment-button-indicator.sc-ion-segment-button-md{-ms-flex-item-align:end;align-self:flex-end;width:100%;height:2px;background-color:var(--indicator-color);opacity:1}.segment-button-checked.sc-ion-segment-button-md-h{background:var(--background-checked);color:var(--color-checked)}.segment-button-checked.sc-ion-segment-button-md-h   .segment-button-indicator.sc-ion-segment-button-md{background-color:var(--indicator-color-checked,var(--color-checked))}.activated.sc-ion-segment-button-md-h{color:var(--color-activated,var(--color))}.segment-button-disabled.sc-ion-segment-button-md-h{color:var(--color-disabled)}.segment-button-disabled.segment-button-checked.sc-ion-segment-button-md-h{color:var(--color-checked-disabled)}.sc-ion-segment-button-md-s > ion-icon{-ms-flex-order:-1;order:-1}.sc-ion-segment-button-md-s > ion-label{display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box}.segment-button-layout-icon-start.sc-ion-segment-button-md-h{-ms-flex-direction:row;flex-direction:row}.segment-button-layout-icon-end.sc-ion-segment-button-md-h{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.segment-button-layout-icon-bottom.sc-ion-segment-button-md-h{-ms-flex-direction:column-reverse;flex-direction:column-reverse}.sc-ion-segment-button-md-h.segment-button-layout-icon-hide .sc-ion-segment-button-md-s > ion-icon, .sc-ion-segment-button-md-h.segment-button-layout-label-hide .sc-ion-segment-button-md-s > ion-label{display:none}ion-ripple-effect.sc-ion-segment-button-md{color:var(--ripple-color,var(--color-checked))}.sc-ion-segment-button-md-h{--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s,opacity 0.15s linear 0s;min-width:90px;max-width:360px;min-height:48px;font-size:14px;font-weight:500;letter-spacing:.06em;line-height:40px;text-transform:uppercase}.activated.sc-ion-segment-button-md-h, .segment-button-checked.sc-ion-segment-button-md-h{--border-color:var(--ion-color-primary,#3880ff);opacity:1}.segment-button-disabled.sc-ion-segment-button-md-h{opacity:.3}.sc-ion-segment-button-md-s > ion-icon{font-size:24px}.sc-ion-segment-button-md-s > ion-icon, .sc-ion-segment-button-md-s > ion-label{margin-top:12px;margin-bottom:12px}.sc-ion-segment-button-md-h.segment-button-layout-icon-bottom .sc-ion-segment-button-md-s > ion-icon, .sc-ion-segment-button-md-h.segment-button-layout-icon-top .sc-ion-segment-button-md-s > ion-label{margin-top:0}.sc-ion-segment-button-md-h.segment-button-layout-icon-bottom .sc-ion-segment-button-md-s > ion-label, .sc-ion-segment-button-md-h.segment-button-layout-icon-top .sc-ion-segment-button-md-s > ion-icon{margin-bottom:0}.sc-ion-segment-button-md-h.segment-button-layout-icon-start .sc-ion-segment-button-md-s > ion-label{margin-left:8px;margin-right:0}.sc-ion-segment-button-md-h.segment-button-layout-icon-end .sc-ion-segment-button-md-s > ion-label{margin-left:0;margin-right:8px}.sc-ion-segment-button-md-h.segment-button-has-icon-only .sc-ion-segment-button-md-s > ion-icon, .sc-ion-segment-button-md-h.segment-button-has-label-only .sc-ion-segment-button-md-s > ion-label{margin-top:12px;margin-bottom:12px}.segment-button-checked.activated.sc-ion-segment-button-md-h{color:var(--color-checked)}\@media (any-hover:hover){.sc-ion-segment-button-md-h:hover{background:var(--background-hover)}}"}static get styleMode(){return"md"}}export{n as IonSegment,l as IonSegmentButton};