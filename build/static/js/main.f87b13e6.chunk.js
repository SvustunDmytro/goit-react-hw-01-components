(window["webpackJsonpgoit-react-hw-01-components"]=window["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={SocialProfileWrapper:"SocialProfile_SocialProfileWrapper__1nopv",profile:"SocialProfile_profile__ZxrRy",description:"SocialProfile_description__1ElBA",avatar:"SocialProfile_avatar__1Yiim",name:"SocialProfile_name__HFaE_",tag:"SocialProfile_tag__13imF",stats:"SocialProfile_stats__39uNT"}},function(e,a,t){e.exports={StatsWrapper:"Stats_StatsWrapper__-qALx",stats_section:"Stats_stats_section__2Nuks",title:"Stats_title__39hwo",stat_list:"Stats_stat_list__VPKK9",item:"Stats_item__1mpxb",percentage:"Stats_percentage__9nZ7s"}},function(e,a,t){e.exports={item:"FriendListItem_item__3EDJT",status:"FriendListItem_status__1BYFY",red:"FriendListItem_red__3kJ4S",green:"FriendListItem_green__28GOm",avatar:"FriendListItem_avatar__2iF0g",name:"FriendListItem_name__1_NKv"}},function(e,a,t){e.exports={FriendListWrapper:"FriendList_FriendListWrapper__1cXvu"}},function(e,a,t){e.exports={TransactionHistoryWrapper:"TransactionHistory_TransactionHistoryWrapper__uMeQi",transaction_history:"TransactionHistory_transaction_history__1Q12_"}},,,function(e,a,t){e.exports={App:"App_App__3JQNM"}},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),i=t.n(c),s=(t(16),t(8)),l=t.n(s),m=t(1),o=t.n(m),p=function(e){var a=e.user,t=a.name,n=a.tag,c=a.location,i=a.avatar,s=a.stats,l=s.followers,m=s.views,p=s.likes;return r.a.createElement("div",{className:o.a.SocialProfileWrapper},r.a.createElement("div",{className:o.a.profile},r.a.createElement("div",{className:o.a.description},r.a.createElement("img",{src:i,alt:"user avatar",className:o.a.avatar}),r.a.createElement("p",{className:o.a.name},t),r.a.createElement("p",{className:o.a.tag},n),r.a.createElement("p",{className:o.a.location},c)),r.a.createElement("ul",{className:o.a.stats},r.a.createElement("li",null,r.a.createElement("span",{className:o.a.label},"Followers"),r.a.createElement("span",{className:o.a.quantity},l)),r.a.createElement("li",null,r.a.createElement("span",{className:o.a.label},"Views"),r.a.createElement("span",{className:o.a.quantity},m)),r.a.createElement("li",null,r.a.createElement("span",{className:o.a.label},"Likes"),r.a.createElement("span",{className:o.a.quantity},p)))))},d=t(2),u=t.n(d),f=function(e){var a=e.stats,t=e.title;return r.a.createElement("div",{className:u.a.StatsWrapper},r.a.createElement("section",{className:u.a.stats_section},r.a.createElement("h2",{className:u.a.title},t),r.a.createElement("ul",{className:u.a.stat_list},a.map((function(e){return r.a.createElement("li",{className:u.a.item,key:e.id},r.a.createElement("span",{className:u.a.label},e.label),r.a.createElement("span",{className:u.a.percentage},e.percentage,"%"))})))))};f.defaultProps={title:""};var _=f,b=t(4),y=t.n(b),E=t(3),v=t.n(E),w=function(e){var a=e.isOnline,t=e.avatar,n=e.name;return r.a.createElement("li",{className:v.a.item},r.a.createElement("span",{className:"".concat(v.a.status," ").concat(a?v.a.green:v.a.red)}),r.a.createElement("img",{className:v.a.avatar,src:t,alt:n,width:"48"}),r.a.createElement("p",{className:v.a.name},n))},N=function(e){var a=e.friends;return r.a.createElement("div",{className:y.a.FriendListWrapper},r.a.createElement("ul",{className:y.a.friend_list},a.map((function(e){return r.a.createElement(w,{key:e.id,isOnline:e.isOnline,avatar:e.avatar,name:e.name})}))))},g=t(5),h=t.n(g),S=function(e){var a=e.items;return r.a.createElement("div",{className:h.a.TransactionHistoryWrapper},r.a.createElement("table",{className:h.a.transaction_history},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Currency"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.amount),r.a.createElement("td",null,e.currency))})))))},L=t(9),P=t(10),F={name:"Jacques Gluke",tag:"@jgluke",location:"Ocho Rios, Jamaica",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",stats:{followers:5603,views:4827,likes:1308}},O=[{id:"id-1",label:".docx",percentage:22},{id:"id-2",label:".pdf",percentage:4},{id:"id-3",label:".mp3",percentage:17},{id:"id-4",label:".psd",percentage:47},{id:"id-5",label:".pdf",percentage:10}],W=function(){return r.a.createElement("div",{className:l.a.App},r.a.createElement(p,{user:F}),r.a.createElement(_,{stats:O,title:"Upload stats"}),r.a.createElement(N,{friends:L}),r.a.createElement(S,{items:P}))};i.a.render(r.a.createElement(W,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.f87b13e6.chunk.js.map