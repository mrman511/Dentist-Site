"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28741],{28741:function(e,n,t){t.d(n,{nR:function(){return L},Oo:function(){return S},id:function(){return p},jz:function(){return v},SL:function(){return k},mF:function(){return D},SS:function(){return A},Nf:function(){return w},FG:function(){return T},AR:function(){return q},Lr:function(){return _},DN:function(){return h},Sw:function(){return Z},Vt:function(){return g},hQ:function(){return b},kS:function(){return z},Z:function(){return N}});var i=t(26042),r=t(69396),o=t(24899),c=t(70056),a=t(97215),u=t(62356),s=function(e,n){var t=0;return e&&n?e.quality>n.quality?t=1:e.quality<n.quality&&(t=-1):!e&&n?t=1:e&&!n&&(t=-1),t},l=t(29824),m=t(92771),f=t(72957),d=t(27725),_=function(e){return(null==e?void 0:e.image)?e.image:(null==e?void 0:e.mediaItem)?e.mediaItem:e},p=function(e){var n=e.asset,t=_(n),i=t.aspect,r=t.aspectRatioCommon;if(i)return i;if(r)return(0,u.Hz)({aspectRatioCommon:r});if((0,f.w5)(t))return 1;if((0,f.vh)(n.type)){var o=n.width,c=n.height;return(0,u.n3)({width:o,height:c})||a.So}return a.So},v=function(e){return 1/p({asset:e})},y=function(e){var n=(0,f.EK)(e);return(0,r.Z)((0,i.Z)({},e),{src:e.previewImageUrl,alt:e.description,aspect:a.zf,link:n?"/editorial/detail-".concat(e.id):"/video/".concat(e.description,"-").concat(e.id)})},g=function(e){var n,t=e.height,i=e.width,r=(0,u.n3)({height:t,width:i}),o="".concat(e.src||e.previewUrls[0]).concat((n=r,"?width=".concat(n>=.75&&n<3?500:n>=3&&n<6||n<.75&&n>.45?900:1200)),"&format=webp");return{id:e.id,title:e.title,description:e.description||e.title,alt:e.alt||e.title,src:o,height:t,width:i}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(null==e?void 0:e.type){case"collection-items":return Z((0,r.Z)((0,i.Z)({},e),{type:e.itemType}));case c.pX:case c.FM:return y(e);case c.jr:case c.pV:case c.k4:case c.Y_:return e;case c.hv:return g(e);default:return{}}},h=function(e,n){return e&&n&&s(o.c3[e],o.c3[n])>=0},b=function(e){return Array.isArray(e)?e.filter(function(e){return d.nd[e.name&&(0,l.z)(e.name)]}).map(function(e){var n=e.name&&(0,l.z)(e.name),t=d.nd[n].quality||0;return(0,r.Z)((0,i.Z)({},e),{quality:t})}).sort(function(e,n){return n.quality-e.quality}):{}},w=function(e){return Array.isArray(e)?b(e)[0]:{}},q=function(e){var n=e.sizes,t=e.compSizeImage;return Array.isArray(n)&&t?n.find(function(e){return(0,l.z)(e.name)===d.Bg[t]}):{}},T=function(e){return Array.isArray(e)?e.map(function(e){var n,t=null===(n=e.name)||void 0===n?void 0:n.split("_")[0];return(0,r.Z)((0,i.Z)({},e),{quality:o.c3[t]&&o.c3[t].quality})}).sort(function(e,n){return n.quality-e.quality})[0]:{}};d.nd,o.c3;var S=function(e){var n=e.length&&e.sort(function(e,n){var t,i;return(null===(t=o.c3[n])||void 0===t?void 0:t.quality)-(null===(i=o.c3[e])||void 0===i?void 0:i.quality)})[0];return o.c3[n]&&n},A=function(e){var n=e.asset;return[c.k4,c.Y_,c.ox].includes(n.type)?c.pV:n.type===c.FM?c.pX:n.type===c.jr?c.j0:n.type},N=function(e){var n=e.sizes;return n&&Object.keys(n).map(function(e){var t=e.split("_")[0],r=o.c3[t];return r?(0,i.Z)({},n[e],r):{}}).sort(function(e,n){return n.quality-e.quality})},z=function(e){return Array.isArray(e)?e.map(function(e){var n,t=null===(n=e.name)||void 0===n?void 0:n.split("_")[0];return(0,r.Z)((0,i.Z)({},e),{cartOrder:o.c3[t]&&o.c3[t].cartOrder})}).sort(function(e,n){return e.cartOrder-n.cartOrder}):[]},D=function(e){var n,t=N({sizes:e});return null==t?void 0:null===(n=t[0])||void 0===n?void 0:n.name},k=function(e){var n,t=e.sizes,i=e.subscriptions,r=e.licenseTypeToUse,o=e.assetType,c=N({sizes:t});return null==c||c.every(function(e){var t,c=e.name,a=null===(t=d.Mq[c])||void 0===t?void 0:t[r],u=(0,m.I)({assetType:o,subscriptions:i,selectedLicenseId:a});return u&&(n=c),!u}),n},L=function(e){return![o.Zh,o.qY,o.rf,o.SD,o.dn,o.HD].some(function(n){var t;return(null===(t=e[1])||void 0===t?void 0:t.name)===n})}},27725:function(e,n,t){t.d(n,{Bg:function(){return f},Mq:function(){return Z},Oy:function(){return d},Q1:function(){return v},kR:function(){return p},nd:function(){return m},wb:function(){return g}});var i,r,o,c=t(14924),a=t(26042),u=t(69396),s=t(24899),l=t(19576),m=(i={},(0,c.Z)(i,s._0,{quality:1,name:"small",downloadName:"small",label:"common:image_size_small"}),(0,c.Z)(i,s.Ke,{quality:1,name:"small",downloadName:"small",label:"common:image_size_small"}),(0,c.Z)(i,s.m4,{quality:2,name:"medium",downloadName:"medium",label:"common:image_size_medium"}),(0,c.Z)(i,s.Fq,{quality:2,name:"medium",downloadName:"medium",label:"common:image_size_medium"}),(0,c.Z)(i,s.v2,{quality:3,displayName:"large",name:"large",downloadName:"huge",label:"common:image_size_large"}),(0,c.Z)(i,s.R7,{quality:3,name:"large",downloadName:"huge",label:"common:image_size_large"}),(0,c.Z)(i,s.x0,{quality:4,name:"vector",downloadName:"vector",label:"common:image_size_vector"}),(0,c.Z)(i,s.Vw,{quality:4,name:"vector",downloadName:"vector",label:"common:image_size_vector"}),(0,c.Z)(i,s.JF,{quality:3,name:"large",downloadName:"large",label:"common:image_size_large"}),i),f=(r={},(0,c.Z)(r,s.Xk,s.v2),(0,c.Z)(r,s.Fm,s.m4),(0,c.Z)(r,s._I,s._0),(0,c.Z)(r,s.Nu,s._0),r),d={LEGACY_TO_SSTK:{ultrahd4k:"4k",web:"low",lowres:"low"},SSTK_TO_LEGACY:{low:"web","4k":"ultrahd4k"},SSTK_TO_LEGACY_ELIGIBILTY:(0,u.Z)((0,a.Z)({},{low:"lowres"}),{"4k":"ultrahd4k"})},_=function(e){var n,t=e.licenseType,i=e.isOnlySDVideoAvailable;return n={},(0,c.Z)(n,"footage_".concat(t,"_4k"),s.yF),(0,c.Z)(n,"footage_".concat(t,"_hd"),i?s.SD:s.HD),(0,c.Z)(n,"footage_".concat(t,"_sd"),s.SD),(0,c.Z)(n,"footage_".concat(t,"_lowres"),s.T0),n},p=l.oPg.reduce(function(e,n){return(0,a.Z)({},e,_({licenseType:n}))},{}),v=l.oPg.reduce(function(e,n){return(0,a.Z)({},e,_({licenseType:n,isOnlySDVideoAvailable:!0}))},{}),y=function(e){var n,t=e.resolutionAbbr;return n={},(0,c.Z)(n,l.azy,"footage_premier_".concat(t)),(0,c.Z)(n,l.luK,"footage_platform_".concat(t)),(0,c.Z)(n,l.dWR,"footage_media_".concat(t)),(0,c.Z)(n,l.IuI,"footage_sm_premier_".concat(t)),(0,c.Z)(n,l.CSe,"footage_sm_media_".concat(t)),(0,c.Z)(n,l.s5m,"footage_select_premier_".concat(t)),(0,c.Z)(n,l.Hv9,"footage_select_media_".concat(t)),(0,c.Z)(n,l.TP0,"footage_comp_".concat(t)),n},g=(o={},(0,c.Z)(o,s.yF,s.yF),(0,c.Z)(o,s.HD,s.HD),(0,c.Z)(o,s.SD,s.SD),(0,c.Z)(o,s.qY,s.qY),(0,c.Z)(o,s.qG,s.yF),(0,c.Z)(o,s.dn,s.HD),(0,c.Z)(o,s.rf,s.SD),(0,c.Z)(o,s.Zh,s.qY),(0,c.Z)(o,s.L0,s.HD),(0,c.Z)(o,s.Ae,s.SD),(0,c.Z)(o,s.vD,s.HD),(0,c.Z)(o,s.yE,s.qY),o),Z=[s.yF,s.HD,s.SD,s.yE,s.qY,s.qG,s.dn,s.rf,s.Zh,s.L0,s.Ae,s.vD].reduce(function(e,n){return(0,u.Z)((0,a.Z)({},e),(0,c.Z)({},n,y({resolutionAbbr:g[n]})))},{})},92771:function(e,n,t){t.d(n,{I:function(){return c}});var i=t(70056),r=t(55050),o=t(35772),c=function(e){var n=e.assetType,t=e.contentTier,c=e.subscriptions,a=e.selectedLicenseId;switch(n){case i.pX:return(0,o.I)({licenseName:a,subscriptions:c});case i.j0:case i.xF:case i.tn:case i.k4:default:return(0,r.$)({subscriptions:c,licenseName:a,contentTier:t,assetType:n})}}},35772:function(e,n,t){t.d(n,{I:function(){return u}});var i=t(70056),r=t(19576),o=t(55050),c=function(e){var n,t=e.licenses,r=e.subscriptions;return t.some(function(e){return n=(0,o.$)({subscriptions:r,licenseName:e,assetType:i.pX})}),n},a=function(e){var n=e.existingAssetLicenses,t=e.licenseType,i=e.licenseName,r=e.subscriptions;return i==="footage_".concat(t,"_sd")?c({licenses:(null==n?void 0:n.includes("footage_".concat(t,"_hd")))?["footage_".concat(t,"_hd")]:["footage_".concat(t,"_sd"),"footage_".concat(t,"_hd")],subscriptions:r}):i==="footage_".concat(t,"_lowres")?(null==n?void 0:n.includes("footage_".concat(t,"_hd")))?c({licenses:["footage_".concat(t,"_hd")],subscriptions:r}):(null==n?void 0:n.includes("footage_".concat(t,"_sd")))?c({licenses:["footage_".concat(t,"_sd")],subscriptions:r}):c({licenses:["footage_".concat(t,"_lowres")],subscriptions:r}):void 0},u=function(e){var n=e.existingAssetLicenses,t=e.subscriptions,c=e.licenseName,u=i.pX;if([r.Mbf,r.Gap,r.mfl,r.vbi,r.Dh9,r.SPT,r.a9m,r.y21,r.v1l,r.KK0,r.mJ5,r.Wdi].some(function(e){return e===c})||r.Lj9.some(function(e){return e===c}))return(0,o.$)({subscriptions:t,licenseName:c,assetType:u});if([r.f12,r.OyJ,r.JCJ,r.TLc].some(function(e){return e===c}))return(0,o.$)({subscriptions:t,licenseName:r.f12,assetType:u});var s=a({existingAssetLicenses:n,licenseType:r.bin,licenseName:c,subscriptions:t}),l=a({existingAssetLicenses:n,licenseType:r.Eek,licenseName:c,subscriptions:t}),m=a({existingAssetLicenses:n,licenseType:r.pHc,licenseName:c,subscriptions:t}),f=a({existingAssetLicenses:n,licenseType:r.wOM,licenseName:c,subscriptions:t});return s||l||m||f||void 0}},62356:function(e,n,t){t.d(n,{Hz:function(){return c},ms:function(){return a},n3:function(){return o}});var i=t(10253),r=t(97215),o=function(e){return e.width/e.height},c=function(e){var n=e.aspectRatioCommon,t=(0,i.Z)((null==n?void 0:n.split(":"))||[],2);return o({width:t[0],height:t[1]})||r.So},a=function(e){var n=e.width,t=e.height,i=function(e,n){return e%n?i(n,e%n):n},r=i(n,t);return"".concat(n/r).concat(":").concat(t/r)}}}]);
//# sourceMappingURL=28741-d83fc2651596b546.js.map