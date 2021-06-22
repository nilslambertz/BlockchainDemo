(this.webpackJsonpblockchaindemo=this.webpackJsonpblockchaindemo||[]).push([[0],{14:function(t,n,e){},19:function(t,n,e){},27:function(t,n,e){},28:function(t,n,e){},29:function(t,n,e){},31:function(t,n,e){},39:function(t,n){},43:function(t,n,e){"use strict";e.r(n);var a=e(0),s=e.n(a),r=e(7),c=e.n(r),i=(e(27),e(10)),o=e(2),l=e(3),d=e(5),u=e(4),p=(e(28),e(6)),b=(e(14),e(29),e(1)),j=function(t){Object(d.a)(e,t);var n=Object(u.a)(e);function e(){return Object(o.a)(this,e),n.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"account listElement",children:Object(b.jsx)("table",{className:"accountTable listTable",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"id",children:this.props.account.id}),Object(b.jsx)("td",{className:"privateKey smallText",children:this.props.account.privateKey}),Object(b.jsx)("td",{className:"address smallText",children:this.props.account.address}),Object(b.jsx)("td",{className:"balance",children:this.props.account.balance})]}),Object(b.jsxs)("tr",{className:"description",children:[Object(b.jsx)("td",{children:"ID"}),Object(b.jsx)("td",{children:"Private Key"}),Object(b.jsx)("td",{children:"Address"}),Object(b.jsx)("td",{children:"Balance"})]})]})})})}}]),e}(s.a.Component),h=(e(31),e(8)),v=e(11),f={backgroundColor:"#FF5226"},m={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0,style:f};function O(t){v.b.error(t,m)}var g,x=function(t){Object(d.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(o.a)(this,e);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=n.call.apply(n,[this].concat(s))).state={from:0,to:0,amount:0},t.sign=function(){if(-1!==t.state.from&&-1!==t.state.to&&-1!==t.state.amount){var n=t.props.transaction;n.from=t.state.from,n.to=t.state.to,n.amount=t.state.amount,t.props.signFunction(n)}else O("All values must be set to sign a transaction!")},t}return Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.transaction;void 0!==t.from&&void 0!==t.to&&void 0!==t.amount&&this.setState({from:t.from,to:t.to,amount:t.amount})}},{key:"render",value:function(){var t=this;return Object(b.jsx)(h.b,{draggableId:"transaction"+this.props.transaction.id,index:this.props.index,children:function(n,e){return Object(b.jsx)("div",Object(p.a)(Object(p.a)(Object(p.a)({className:"transaction listElement"+(e.isDragging?" transactionDragging":""),ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(b.jsx)("table",{className:"transactionTable listTable",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"id",children:t.props.transaction.id}),Object(b.jsx)("td",{className:"from"+(t.props.transaction.editable?"":" biggerText"),children:t.props.transaction.editable?Object(b.jsx)("select",{className:"selectStyle",value:t.state.from,onChange:function(n){var e=parseInt(n.target.value);t.state.from!==e&&(t.props.removeSignatureFunction(t.props.transaction.id),t.setState({from:e}))},children:Array.from(Array(t.props.numberOfAccounts).keys()).map((function(t){return Object(b.jsx)("option",{value:t,children:t},t)}))}):t.props.transaction.from}),Object(b.jsx)("td",{className:"to"+(t.props.transaction.editable?"":" biggerText"),children:t.props.transaction.editable?Object(b.jsx)("select",{className:"selectStyle",value:t.state.to,onChange:function(n){var e=parseInt(n.target.value);t.state.to!==e&&(t.props.removeSignatureFunction(t.props.transaction.id),t.setState({to:e}))},children:Array.from(Array(t.props.numberOfAccounts).keys()).map((function(t){return Object(b.jsx)("option",{value:t,children:t},t)}))}):t.props.transaction.to}),Object(b.jsx)("td",{className:"amount",children:t.props.transaction.editable?Object(b.jsx)("input",{type:"number",className:"amountInput",min:"0",max:"1000",value:t.state.amount,onChange:function(n){var e=parseInt(n.target.value);isNaN(e)||(t.state.amount!==e&&t.props.removeSignatureFunction(t.props.transaction.id),t.setState({amount:e}))}}):t.props.transaction.amount}),Object(b.jsx)("td",{className:"signature"+(t.props.transaction.signed?" smallText":""),children:t.props.transaction.signed?t.props.transaction.signature:Object(b.jsx)("div",{className:"signButton",onClick:function(){return t.sign()},children:"Sign"})})]}),Object(b.jsxs)("tr",{className:"description",children:[Object(b.jsx)("td",{children:"ID"}),Object(b.jsx)("td",{children:"From"}),Object(b.jsx)("td",{children:"To"}),Object(b.jsx)("td",{children:"Amount"}),Object(b.jsx)("td",{children:"Signature"})]})]})})}))}})}}]),e}(s.a.Component),k=function(t){Object(d.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(o.a)(this,e);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=n.call.apply(n,[this].concat(s))).printTransactionList=function(n){var e,a=0;(null===(e=t.props)||void 0===e?void 0:e.numberOfAccounts)&&(a=t.props.numberOfAccounts);var s=t.props.transactionOrder;void 0===s&&(s=[]);var r=t.props.signFunction,c=t.props.removeSignatureFunction;return s.map((function(t,e,s){return Object(b.jsx)(x,{transaction:n[t],numberOfAccounts:a,signFunction:r,removeSignatureFunction:c,index:e},t)}))},t}return Object(l.a)(e,[{key:"render",value:function(){var t=function(t){return Object(b.jsx)("div",{className:"listError",children:t})},n="Error";this.props.accounts?(t=this.printAccountList,n=this.props.accounts):this.props.transactions&&(t=this.printTransactionList,n=this.props.transactions);var e=this.props.addFunction;return e||(e=function(){console.log("Error: function is not defined")}),Object(b.jsxs)("div",{className:"upperListContainer "+this.props.className,children:[this.props.blockList?"":Object(b.jsx)("div",{className:"upperListTitle",children:this.props.title}),Object(b.jsx)(h.c,{droppableId:this.props.droppableId,isDropDisabled:this.props.dropDisabled,children:function(e,a){return Object(b.jsxs)("div",Object(p.a)(Object(p.a)({ref:e.innerRef},e.droppableProps),{},{className:"upperList",style:{backgroundColor:a.isDraggingOver?"rgba(255,255,255,0.05)":""},children:[t(n),e.placeholder]}))}}),this.props.blockList?"":Object(b.jsx)("div",{className:"addButtonContainer",children:Object(b.jsx)("div",{className:"addButton",onClick:function(){return e()},children:"Add"})})]})}},{key:"printAccountList",value:function(t){return t.map((function(t,n,e){return Object(b.jsx)(j,{account:t},t.id)}))}}]),e}(s.a.Component),y="00",N=e(9),A=(e(19),function(t){Object(d.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(o.a)(this,e);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=n.call.apply(n,[this].concat(s))).printTransactionList=function(){return Object(b.jsx)(k,{droppableId:"block"+t.props.block.id,title:"transactions",transactions:t.props.transactions,transactionOrder:t.props.block.transactions,className:"transactionListContainer",blockList:!0})},t.confirmFunction=function(){t.props.confirmFunction(t.props.block.id)},t}return Object(l.a)(e,[{key:"render",value:function(){var t,n,e,a,s,r=this;return Object(b.jsx)("div",{className:"blockContainer",children:Object(b.jsxs)("div",{className:"block",children:[Object(b.jsxs)("div",{className:"prevHash blockSmallText",children:[null===(t=this.props.block)||void 0===t?void 0:t.prevHash,Object(b.jsx)("div",{className:"blockDescription",children:"Previous hash"})]}),Object(b.jsxs)("div",{className:"transactions",children:[Object(b.jsx)("div",{className:"transactionList",children:this.printTransactionList()}),Object(b.jsx)("div",{className:"blockDescription",children:"Transactions"})]}),Object(b.jsxs)("div",{className:"nonce",children:[null===(n=this.props.block)||void 0===n?void 0:n.nonce,Object(b.jsx)("div",{className:"blockDescription",children:"Nonce"})]}),Object(b.jsxs)("div",{className:"confirmContainer",children:[this.props.block.confirmed?Object(b.jsx)("span",{className:"confirmedString",children:"confirmed"}):Object(b.jsx)("div",{className:"confirmButton",onClick:function(){return r.confirmFunction()},children:"Confirm"}),Object(b.jsx)("div",{className:"blockDescription",children:"Confirmation"})]}),Object(b.jsxs)("div",{className:"hash blockSmallText",children:[this.props.block.confirmed?Object(b.jsxs)("span",{children:[Object(b.jsx)("span",{className:"confirmedString",children:y}),null===(e=this.props.block)||void 0===e||null===(a=e.hash)||void 0===a?void 0:a.substr(y.length)]}):null===(s=this.props.block)||void 0===s?void 0:s.hash,Object(b.jsx)("div",{className:"blockDescription",children:"Hash"})]})]})})}}]),e}(s.a.Component)),S=["title","titleId"];function I(){return(I=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t}).apply(this,arguments)}function C(t,n){if(null==t)return{};var e,a,s=function(t,n){if(null==t)return{};var e,a,s={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(s[e]=t[e]);return s}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(s[e]=t[e])}return s}function T(t,n){var e=t.title,s=t.titleId,r=C(t,S);return a.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",enableBackground:"new 0 0 150 50",xmlSpace:"preserve",viewBox:"0 0 150 50",y:"0px",x:"0px",ref:n,"aria-labelledby":s},r),e?a.createElement("title",{id:s},e):null,g||(g=a.createElement("g",null,a.createElement("line",{y2:24.704,x1:1.266,x2:125.3,stroke:"white",strokeMiterlimit:10,y1:24.704,strokeWidth:6}),a.createElement("polygon",{points:"124.4 6.284 124.4 44.606 148.35 23.69",stroke:"white",fill:"white"}))))}var w=a.forwardRef(T),F=(e.p,function(t){Object(d.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(o.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).printBlocks=function(){var n=t.props.transactions,e=t.props.confirmFunction;return t.props.blocks.map((function(t,a,r){return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)(A,{block:t,transactions:n,confirmFunction:e}),a!==r.length-1?Object(b.jsx)("div",{className:"arrows",children:Object(b.jsx)(w,{})}):""]},a)}))},t}return Object(l.a)(e,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"blockchain",children:this.printBlocks()})}}]),e}(s.a.Component)),L=(e(42),function(t){Object(d.a)(e,t);var n=Object(u.a)(e);function e(t){var a;return Object(o.a)(this,e),(a=n.call(this,t)).addAccount=function(){var t=Object(N.b)(),n=a.state.accountIdCount,e={id:n,privateKey:t.privateKey,privateKeyArray:t.privateKeyArray,address:t.address,addressArray:t.addressArray};a.setState({accountIdCount:n+1}),e.balance=Math.floor(1001*Math.random());var s=a.state.accounts;s.push(e),a.setState({accounts:s})},a.addTransaction=function(){var t=a.state.transactionIdCount,n={id:t,signed:!1,editable:!0};a.setState({transactionIdCount:t+1});var e=a.state.transactions,s=a.state.unusedTransactions;e.push(n),s.push(n.id),a.setState({transactions:e,unusedTransactions:s})},a.signTransaction=function(t){if(0!==a.state.accounts.length)if(void 0!==t.from&&void 0!==t.to){var n=t.from,e=a.state.accounts[n].privateKeyArray,s=a.state.accounts[n].addressArray;if(-1!==n&&void 0!==e&&void 0!==s){var r=Object(N.c)(t,e),c=a.state.transactions;c[t.id].signed=!0,c[t.id].signatureArray=r.signatureArray,c[t.id].signature=r.signature,a.setState({transactions:c})}}else O("All values have to be set to sign a transaction!");else O("At least one account is needed to set all transaction values!")},a.removeSignature=function(t){var n=a.state.transactions,e=n[t];e.signed=!1,e.signatureArray=void 0,e.signature=void 0,n[t]=e,a.setState({transactions:n})},a.recalculateBlocks=function(){for(var t=Object(i.a)(a.state.blocks),n=Object(i.a)(a.state.transactions),e=!1,s=0;s<t.length;s++){var r=Object(N.a)(t[s],n);if(""===r)return void console.log("Error while generating hash, see previous error-messages!");r!==t[s].hash&&(e=!0),e&&(t[s].confirmed=!1),t[s].hash=r,s!==t.length-1&&(t[s+1].prevHash=r)}a.setState({blocks:t})},a.confirmBlock=function(t){var n,e=Object(i.a)(a.state.blocks),s=Object(i.a)(a.state.transactions),r=Object(i.a)(a.state.accounts);if(0!==t&&!e[t-1].confirmed)return n="All previous blocks need to be confirmed first!",void v.b.warn(n,Object(p.a)(Object(p.a)({},m),{},{style:f}));if(Object(N.d)(e[t],s,r)){var c="",o=e[t];o.nonce=-1;do{o.nonce++,c=Object(N.a)(o,s)}while(!c.startsWith(y)||o.nonce>1e4);if(o.nonce>1e4&&!c.startsWith(y))return O("Could not validate block!"),void console.log("Didn't find nonce in 10000 iterations");o.confirmed=!0,o.hash=c,e[t]=o,a.setState({blocks:e},(function(){a.recalculateBlocks()}))}else O("Some transactions could not be verified!")},a.onDragEnd=function(t){var n=t.destination,e=t.source,s=t.draggableId;if(null!==t.destination&&(n.droppableId!==e.droppableId||n.index!==e.index)){var r=t.source.index,c=t.destination.index,i=parseInt(s.replace("transaction",""));if("transactionList"===t.destination.droppableId)if("transactionList"===t.source.droppableId){var o=a.state.unusedTransactions;o.splice(r,1),o.splice(c,0,i),a.setState({unusedTransactions:o})}else{var l=a.state.transactions,d=t.source.droppableId.replace("block",""),u=parseInt(d),p=a.state.blocks;p[u].transactions.splice(r,1);var b=a.state.unusedTransactions;b.splice(c,0,i),l[i].editable=!0,a.setState({blocks:p,unusedTransactions:b,transactions:l})}else if("transactionList"===t.source.droppableId){var j=a.state.transactions;if(!j[i].signed)return void O("Transaction must be signed to be included in a block!");var h=a.state.unusedTransactions;h.splice(r,1);var v=a.state.blocks,f=parseInt(t.destination.droppableId.replace("block","")),m=t.destination.index;v[f].transactions.splice(m,0,i),j[i].editable=!1,a.setState({unusedTransactions:h,blocks:v,transactions:j})}else{var g=parseInt(t.source.droppableId.replace("block","")),x=parseInt(t.destination.droppableId.replace("block",""));if(g===x){var k=a.state.blocks,y=k[g].transactions;y.splice(r,1),y.splice(c,0,i),k[g].transactions=y,a.setState({blocks:k})}else{var N=a.state.blocks,A=N[g].transactions;A.splice(r,1),N[g].transactions=A;var S=N[x].transactions;S.splice(c,0,i),N[x].transactions=S,a.setState({blocks:N})}}a.recalculateBlocks()}},a.state={accountIdCount:0,accounts:[],transactionIdCount:0,transactions:[],unusedTransactions:[],blocks:[{id:0,prevHash:"0000",nonce:0,transactions:[],confirmed:!1},{id:1,nonce:0,transactions:[],confirmed:!1}]},a.recalculateBlocks(),a}return Object(l.a)(e,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)(h.a,{onDragEnd:this.onDragEnd,children:[Object(b.jsxs)("div",{id:"upperContent",children:[Object(b.jsx)(k,{title:"accounts",accounts:this.state.accounts,droppableId:"accountList",className:"accountListContainer",addFunction:this.addAccount,dropDisabled:!0}),Object(b.jsx)(k,{title:"transactions",transactions:this.state.transactions,transactionOrder:this.state.unusedTransactions,numberOfAccounts:this.state.accountIdCount,className:"transactionListContainer",droppableId:"transactionList",addFunction:this.addTransaction,signFunction:this.signTransaction,removeSignatureFunction:this.removeSignature})]}),Object(b.jsx)("div",{id:"blockchainContent",children:Object(b.jsx)(F,{blocks:this.state.blocks,transactions:this.state.transactions,confirmFunction:this.confirmBlock})}),Object(b.jsx)("div",{id:"footer",children:"by nils lambertz"})]}),Object(b.jsx)(v.a,{})]})}}]),e}(s.a.Component));c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root"))},9:function(t,n,e){"use strict";(function(t){e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return p})),e.d(n,"d",(function(){return j})),e.d(n,"a",(function(){return h}));var a=e(12),s=e.n(a),r=e(20),c=e.n(r),i=e(21),o=e(22);function l(n){return t.from(c.a.encodeBase64(n),"base64").toString("hex")}function d(t){return Object(i.encode)(t)}function u(){var t=s.a.sign.keyPair(),n=l(t.secretKey),e=l(t.publicKey);return{privateKey:n,privateKeyArray:t.secretKey,address:e,addressArray:t.publicKey}}function p(t,n){var e=d(v(t)),a=s.a.sign.detached(e,n);return{signature:l(a),signatureArray:a}}function b(t,n,e){var a=d(v(t));return s.a.sign.detached.verify(a,n,e)}function j(t,n,e){for(var a=0;a<t.transactions.length;a++){var s=n[t.transactions[a]];if(void 0!==s.from){var r=e[s.from];if(void 0!==s.signatureArray&&void 0!==r.addressArray)if(!b(s,s.signatureArray,r.addressArray))return console.log("Error in block "+s.id+": Signature in transaction "+s.id+" could not be verified!"),!1}}return!0}function h(t,n){for(var e=[],a=0;a<t.transactions.length;a++){var s=n[t.transactions[a]];e.push(v(s))}var r={prevHash:t.prevHash,transactions:e,nonce:t.nonce},c=JSON.stringify(r);return Object(o.sha256)(c)}function v(t){var n={id:t.id,from:t.from,to:t.to,amount:t.amount};return JSON.stringify(n)}}).call(this,e(17).Buffer)}},[[43,1,2]]]);
//# sourceMappingURL=main.b967d90a.chunk.js.map