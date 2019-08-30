import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../ionic.core.js";import{h as assert}from"./chunk-6d7d2f8c.js";import{a as attachComponent}from"./chunk-99929188.js";import{e as LIFECYCLE_WILL_UNLOAD,a as LIFECYCLE_WILL_LEAVE,d as LIFECYCLE_DID_LEAVE}from"./chunk-90d954cd.js";import{b as lifecycle,c as transition,d as setPageHidden}from"./chunk-da1efb5f.js";var VIEW_STATE_NEW=1,VIEW_STATE_ATTACHED=2,VIEW_STATE_DESTROYED=3,ViewController=function(){function e(e,t){this.component=e,this.params=t,this.state=VIEW_STATE_NEW}return e.prototype.init=function(e){return tslib_1.__awaiter(this,void 0,void 0,function(){var t;return tslib_1.__generator(this,function(n){switch(n.label){case 0:return this.state=VIEW_STATE_ATTACHED,this.element?[3,2]:(t=this,[4,attachComponent(this.delegate,e,this.component,["ion-page","ion-page-invisible"],this.params)]);case 1:t.element=n.sent(),n.label=2;case 2:return[2]}})})},e.prototype._destroy=function(){var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=VIEW_STATE_DESTROYED},e}();function matches(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;var r=Object.keys(i),o=Object.keys(n);if(r.length!==o.length)return!1;for(var s=0,a=r;s<a.length;s++){var u=a[s];if(i[u]!==n[u])return!1}return!0}function convertToView(e,t){return e?e instanceof ViewController?e:new ViewController(e,t):null}function convertToViews(e){return e.map(function(e){return e instanceof ViewController?e:"page"in e?convertToView(e.page,e.params):convertToView(e,void 0)}).filter(function(e){return null!==e})}var Nav=function(){function e(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}return e.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)},e.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture&&(this.swipeGesture=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(t){switch(t.label){case 0:return this.rootChanged(),e=this,[4,import("./chunk-ca529fbc.js")];case 1:return e.gesture=t.sent().createSwipeBackGesture(this.el,this.queue,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}})})},e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];lifecycle(n.element,LIFECYCLE_WILL_UNLOAD),n._destroy()}this.gesture&&this.gesture.destroy(),this.transInstr.length=this.views.length=0,this.destroyed=!0},e.prototype.push=function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},i)},e.prototype.insert=function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:i},r)},e.prototype.insertPages=function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,i){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},i)},e.prototype.setRoot=function(e,t,n,i){return this.setPages([{page:e,params:t}],n,i)},e.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n){var i,r=this,o=this.getActiveSync();if(matches(o,e,t))return Promise.resolve({changed:!1,element:o.element});var s,a=new Promise(function(e){return i=e}),u={updateURL:!1,viewIsReady:function(e){var t,n=new Promise(function(e){return t=e});return i({changed:!0,element:e,markVisible:function(){return tslib_1.__awaiter(r,void 0,void 0,function(){return tslib_1.__generator(this,function(e){switch(e.label){case 0:return t(),[4,s];case 1:return e.sent(),[2]}})})}}),n}};if("root"===n)s=this.setRoot(e,t,u);else{var c=this.views.find(function(n){return matches(n,e,t)});c?s=this.popTo(c,Object.assign({},u,{direction:"back"})):"forward"===n?s=this.push(e,t,u):"back"===n&&(s=this.setRoot(e,t,Object.assign({},u,{direction:"back",animated:!0})))}return a},e.prototype.getRouteId=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]})})},e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},e.prototype.getLength=function(){return this.views.length},e.prototype.getActiveSync=function(){return this.views[this.views.length-1]},e.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},e.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.queueTrns=function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise(function(t,n){e.resolve=t,e.reject=n});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},e.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=this.win.document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}},e.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return tslib_1.__awaiter(this,void 0,void 0,function(){var t,n,i,r;return tslib_1.__generator(this,function(o){switch(o.label){case 0:if(o.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&n.state===VIEW_STATE_NEW?[4,n.init(this.el)]:[3,2];case 1:o.sent(),o.label=2;case 2:return this.postViewInit(n,t,e),(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t?[4,this.transition(n,t,e)]:[3,4];case 3:return i=o.sent(),[3,5];case 4:i={hasCompleted:!0,requiresTransition:!1},o.label=5;case 5:return this.success(i,e),this.ionNavDidChange.emit(),[3,7];case 6:return r=o.sent(),this.failed(r,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}})})},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){var r=convertToViews(i);if(0===r.length)throw new Error("invalid views to insert");for(var o=0,s=r;o<s.length;o++){var a=s[o];a.delegate=e.opts.delegate;var u=a.nav;if(u&&u!==this)throw new Error("inserted view was already inserted");if(a.state===VIEW_STATE_DESTROYED)throw new Error("inserted view was already destroyed")}e.insertViews=r}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var i=e.removeStart;if(void 0!==i)for(var r=this.views,o=i+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){var i,r=n.opts,o=n.insertViews,s=n.removeStart,a=n.removeCount;if(void 0!==s&&void 0!==a){i=[];for(var u=0;u<a;u++)(m=this.views[u+s])&&m!==e&&m!==t&&i.push(m);r.direction=r.direction||"back"}if(0===this.views.length+(void 0!==o?o.length:0)-(void 0!==a?a:0))throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){for(var c=n.insertStart,p=0,h=o;p<h.length;p++)this.insertViewAt(m=h[p],c),c++;n.enteringRequiresTransition&&(r.direction=r.direction||"forward")}if(i&&i.length>0){for(var l=0,d=i;l<d.length;l++)lifecycle((m=d[l]).element,LIFECYCLE_WILL_LEAVE),lifecycle(m.element,LIFECYCLE_DID_LEAVE),lifecycle(m.element,LIFECYCLE_WILL_UNLOAD);for(var v=0,f=i;v<f.length;v++){var m;this.destroyView(m=f[v])}}},e.prototype.transition=function(e,t,n){return tslib_1.__awaiter(this,void 0,void 0,function(){var i,r,o,s,a,u,c=this;return tslib_1.__generator(this,function(p){switch(p.label){case 0:return r=(i=n.opts).progressAnimation?function(e){return c.sbAni=e}:void 0,o=e.element,s=t&&t.element,a=Object.assign({mode:this.mode,showGoBack:this.canGoBackSync(e),queue:this.queue,window:this.win,baseEl:this.el,animationBuilder:this.animation||i.animationBuilder||this.config.get("navAnimation"),progressCallback:r,animated:this.animated&&this.config.getBoolean("animated",!0),enteringEl:o,leavingEl:s},i),[4,transition(a)];case 1:return u=p.sent().hasCompleted,[2,this.transitionFinish(u,e,t,i)]}})})},e.prototype.transitionFinish=function(e,t,n,i){var r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,i=n.indexOf(e);i>-1?n.splice(t,0,n.splice(i,1)[0]):(e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){var t=this.views,n=t.indexOf(e);n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i],o=r.element;i>n?(lifecycle(o,LIFECYCLE_WILL_UNLOAD),this.destroyView(r)):i<n&&setPageHidden(o,!0)}},e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()},e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.onMove=function(e){this.sbAni&&this.sbAni.progressStep(e)},e.prototype.onEnd=function(e,t,n){this.sbAni&&this.sbAni.progressEnd(e,t,n)},e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-nav"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animation:{type:"Any",attr:"animation"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeGesture:{type:Boolean,attr:"swipe-gesture",mutable:!0,watchCallbacks:["swipeGestureChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-nav-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),e}(),NavPop=function(){function e(){}return e.prototype.pop=function(){var e=this.el.closest("ion-nav");e&&e.pop({skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-pop"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"pop"}]},enumerable:!0,configurable:!0}),e}(),NavPush=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.push(t,this.componentProps,{skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-push"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}(),NavSetRoot=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.setRoot(t,this.componentProps,{skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-set-root"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}();export{Nav as IonNav,NavPop as IonNavPop,NavPush as IonNavPush,NavSetRoot as IonNavSetRoot};