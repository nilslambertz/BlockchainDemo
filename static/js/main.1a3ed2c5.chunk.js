(this.webpackJsonpblockchaindemo=this.webpackJsonpblockchaindemo||[]).push([[0],{12:function(t,e,n){},19:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){},39:function(t,e){},43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s),r=n(7),o=n.n(r),i=(n(27),n(10)),c=n(2),l=n(3),d=n(5),u=n(4),p=(n(28),n(6)),b=(n(12),n(29),n(1)),h=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"account listElement",children:Object(b.jsx)("table",{className:"accountTable listTable",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"id",children:this.props.account.id}),Object(b.jsx)("td",{className:"privateKey smallText",children:this.props.account.privateKey}),Object(b.jsx)("td",{className:"address smallText",children:this.props.account.address}),Object(b.jsx)("td",{className:"balance",children:this.props.account.balanceBeforeBlock[this.props.lastConfirmedBlock+1]})]}),Object(b.jsxs)("tr",{className:"description",children:[Object(b.jsx)("td",{children:"ID"}),Object(b.jsx)("td",{children:"Private Key"}),Object(b.jsx)("td",{children:"Address"}),Object(b.jsx)("td",{children:"Balance"})]})]})})})}}]),n}(a.a.Component),f=(n(31),n(9)),j=n(11),m={backgroundColor:"#FF5226"},v={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0,style:m};function g(t){j.b.error(t,v)}var O,x=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={from:0,to:0,amount:0},t.sign=function(){if(-1!==t.state.from&&-1!==t.state.to&&-1!==t.state.amount){var e=t.props.transaction;e.from=t.state.from,e.to=t.state.to,e.amount=t.state.amount,t.props.signFunction(e)}else g("All values must be set to sign a transaction!"),t.props.addLogFunction({type:"error",message:"Transaction "+t.props.transaction.id+": All values must be set to sign the transaction!"})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.transaction;void 0!==t.from&&void 0!==t.to&&void 0!==t.amount&&this.setState({from:t.from,to:t.to,amount:t.amount})}},{key:"render",value:function(){var t=this;return Object(b.jsx)(f.b,{draggableId:"transaction"+this.props.transaction.id,index:this.props.index,children:function(e,n){return Object(b.jsx)("div",Object(p.a)(Object(p.a)(Object(p.a)({className:"transaction listElement"+(n.isDragging?" transactionDragging":""),ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:Object(b.jsx)("table",{className:"transactionTable listTable",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"id",children:t.props.transaction.id}),Object(b.jsx)("td",{className:"from"+(t.props.transaction.editable?"":" biggerText"),children:t.props.transaction.editable?Object(b.jsx)("select",{className:"selectStyle",value:t.state.from,onChange:function(e){var n=parseInt(e.target.value);t.state.from!==n&&(t.props.removeSignatureFunction(t.props.transaction.id),t.setState({from:n}))},children:Array.from(Array(t.props.numberOfAccounts).keys()).map((function(t){return Object(b.jsx)("option",{value:t,children:t},t)}))}):t.props.transaction.from}),Object(b.jsx)("td",{className:"to"+(t.props.transaction.editable?"":" biggerText"),children:t.props.transaction.editable?Object(b.jsx)("select",{className:"selectStyle",value:t.state.to,onChange:function(e){var n=parseInt(e.target.value);t.state.to!==n&&(t.props.removeSignatureFunction(t.props.transaction.id),t.setState({to:n}))},children:Array.from(Array(t.props.numberOfAccounts).keys()).map((function(t){return Object(b.jsx)("option",{value:t,children:t},t)}))}):t.props.transaction.to}),Object(b.jsx)("td",{className:"amount",children:t.props.transaction.editable?Object(b.jsx)("input",{type:"number",className:"amountInput",min:"0",max:"1000",value:t.state.amount,onChange:function(e){var n=parseInt(e.target.value);isNaN(n)||(t.state.amount!==n&&t.props.removeSignatureFunction(t.props.transaction.id),t.setState({amount:n}))}}):t.props.transaction.amount}),Object(b.jsx)("td",{className:"signature"+(t.props.transaction.signed?" smallText":""),children:t.props.transaction.signed?t.props.transaction.signature:Object(b.jsx)("div",{className:"signButton",onClick:function(){return t.sign()},children:"Sign"})})]}),Object(b.jsxs)("tr",{className:"description",children:[Object(b.jsx)("td",{children:"ID"}),Object(b.jsx)("td",{children:"From"}),Object(b.jsx)("td",{children:"To"}),Object(b.jsx)("td",{children:"Amount"}),Object(b.jsx)("td",{children:"Signature"})]})]})})}))}})}}]),n}(a.a.Component),k=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).printAccountList=function(e){var n,s=null!==(n=t.props.lastConfirmedBlock)&&void 0!==n?n:-1;return 0===e.length?Object(b.jsx)("div",{style:{color:"#575757"},children:t.props.emptyText}):e.map((function(t,e,n){return Object(b.jsx)(h,{account:t,lastConfirmedBlock:s},t.id)}))},t.printTransactionList=function(e){var n,s=0;(null===(n=t.props)||void 0===n?void 0:n.numberOfAccounts)&&(s=t.props.numberOfAccounts);var a=t.props.transactionOrder;void 0===a&&(a=[]);var r=t.props.signFunction,o=t.props.removeSignatureFunction;if(0===a.length)return Object(b.jsx)("div",{style:{color:"#575757"},children:t.props.emptyText});var i=t.props.addLogFunction;return a.map((function(t,n,a){return Object(b.jsx)(x,{transaction:e[t],numberOfAccounts:s,signFunction:r,removeSignatureFunction:o,index:n,addLogFunction:i},t)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=function(t){return Object(b.jsx)("div",{className:"listError",children:t})},e="Error";this.props.accounts?(t=this.printAccountList,e=this.props.accounts):this.props.transactions&&(t=this.printTransactionList,e=this.props.transactions);var n=this.props.addFunction;return n||(n=function(){console.log("Error: function is not defined")}),Object(b.jsxs)("div",{className:"upperListContainer "+this.props.className,children:[this.props.blockList?"":Object(b.jsx)("div",{className:"upperListTitle",children:this.props.title}),Object(b.jsx)(f.c,{droppableId:this.props.droppableId,isDropDisabled:this.props.dropDisabled,children:function(n,s){return Object(b.jsxs)("div",Object(p.a)(Object(p.a)({ref:n.innerRef},n.droppableProps),{},{className:"upperList",style:{backgroundColor:s.isDraggingOver?"rgba(255,255,255,0.05)":""},children:[t(e),n.placeholder]}))}}),this.props.blockList?"":Object(b.jsx)("div",{className:"addButtonContainer",children:Object(b.jsx)("div",{className:"addButton",onClick:function(){return n()},children:"Add"})})]})}}]),n}(a.a.Component),y="0".repeat(3),N=n(8),A=(n(19),function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).printTransactionList=function(){return Object(b.jsx)(k,{droppableId:"block"+t.props.block.id,title:"transactions",transactions:t.props.transactions,transactionOrder:t.props.block.transactions,className:"transactionListContainer",emptyText:"Drag and drop transactions here!",blockList:!0,addLogFunction:t.props.addLogFunction})},t.confirmFunction=function(){t.props.confirmFunction(t.props.block.id)},t}return Object(l.a)(n,[{key:"render",value:function(){var t,e,n,s,a,r=this;return Object(b.jsx)("div",{className:"blockContainer",children:Object(b.jsxs)("div",{className:"block",children:[Object(b.jsxs)("div",{className:"prevHash blockSmallText",children:[null===(t=this.props.block)||void 0===t?void 0:t.prevHash,Object(b.jsx)("div",{className:"blockDescription",children:"Previous hash"})]}),Object(b.jsxs)("div",{className:"transactions",children:[Object(b.jsx)("div",{className:"transactionList",children:this.printTransactionList()}),Object(b.jsx)("div",{className:"blockDescription",children:"Transactions"})]}),Object(b.jsxs)("div",{className:"nonce",children:[null===(e=this.props.block)||void 0===e?void 0:e.nonce,Object(b.jsx)("div",{className:"blockDescription",children:"Nonce"})]}),Object(b.jsxs)("div",{className:"confirmContainer",children:[this.props.block.confirmed?Object(b.jsx)("span",{className:"confirmedString",children:"confirmed"}):Object(b.jsx)("div",{className:"confirmButton",onClick:function(){return r.confirmFunction()},children:"Confirm"}),Object(b.jsx)("div",{className:"blockDescription",children:"Confirmation"})]}),Object(b.jsxs)("div",{className:"hash blockSmallText",children:[this.props.block.confirmed?Object(b.jsxs)("span",{children:[Object(b.jsx)("span",{className:"confirmedString",children:y}),null===(n=this.props.block)||void 0===n||null===(s=n.hash)||void 0===s?void 0:s.substr(y.length)]}):null===(a=this.props.block)||void 0===a?void 0:a.hash,Object(b.jsx)("div",{className:"blockDescription",children:"Hash"})]})]})})}}]),n}(a.a.Component)),L=["title","titleId"];function C(){return(C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}function S(t,e){if(null==t)return{};var n,s,a=function(t,e){if(null==t)return{};var n,s,a={},r=Object.keys(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function B(t,e){var n=t.title,a=t.titleId,r=S(t,L);return s.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",enableBackground:"new 0 0 150 50",xmlSpace:"preserve",viewBox:"0 0 150 50",y:"0px",x:"0px",ref:e,"aria-labelledby":a},r),n?s.createElement("title",{id:a},n):null,O||(O=s.createElement("g",null,s.createElement("line",{y2:24.704,x1:1.266,x2:125.3,stroke:"white",strokeMiterlimit:10,y1:24.704,strokeWidth:6}),s.createElement("polygon",{points:"124.4 6.284 124.4 44.606 148.35 23.69",stroke:"white",fill:"white"}))))}var I=s.forwardRef(B),T=(n.p,function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).printBlocks=function(){var e=t.props.transactions,n=t.props.confirmFunction,s=t.props.addLogFunction;return t.props.blocks.map((function(t,r,o){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(A,{block:t,transactions:e,confirmFunction:n,addLogFunction:s}),r!==o.length-1?Object(b.jsx)("div",{className:"arrows",children:Object(b.jsx)(I,{})}):""]},r)}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"blockchain",children:this.printBlocks()})}}]),n}(a.a.Component)),F=(n(42),n(43),function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{id:"logs",className:this.props.logsVisible?"visible":"",children:Object(b.jsx)("div",{id:"logList",children:Object(b.jsx)("table",{children:Object(b.jsx)("tbody",{children:this.props.logs.map((function(t,e,n){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.time}),Object(b.jsx)("td",{className:t.type,children:t.message},e)]})}))})})})})}}]),n}(a.a.Component)),w=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).addAccount=function(){var t=Object(N.d)(),e=s.state.accountIdCount,n=Math.floor(1001*Math.random()),a={id:e,privateKey:t.privateKey,privateKeyArray:t.privateKeyArray,address:t.address,addressArray:t.addressArray,balanceBeforeBlock:Array(s.state.lastConfirmedBlock+2).fill(n)},r=s.state.accounts;r.push(a),s.setState({accounts:r,accountIdCount:e+1},(function(){s.addLog({type:"info",message:"Added account "+a.id})}))},s.addTransaction=function(){var t=s.state.transactionIdCount,e={id:t,signed:!1,editable:!0},n=s.state.transactions,a=s.state.unusedTransactions;n.push(e),a.push(e.id),s.setState({transactions:n,unusedTransactions:a,transactionIdCount:t+1},(function(){s.addLog({type:"info",message:"Added transaction "+e.id})}))},s.signTransaction=function(t){if(0===s.state.accounts.length)return g("At least one account is needed to set all transaction values!"),void s.addLog({type:"error",message:"At least one account is needed to set all transaction values!"});if(void 0===t.from||void 0===t.to)return g("All values have to be set to sign a transaction!"),void s.addLog({type:"error",message:"Transaction "+t.id+": All values have to be set to sign the transaction!"});var e=t.from,n=s.state.accounts[e].privateKeyArray,a=s.state.accounts[e].addressArray;if(-1!==e&&void 0!==n&&void 0!==a){var r=Object(N.e)(t,n),o=s.state.transactions;o[t.id].signed=!0,o[t.id].signatureArray=r.signatureArray,o[t.id].signature=r.signature,s.setState({transactions:o},(function(){s.addLog({type:"success",message:"Signed transaction "+t.id})}))}},s.removeSignature=function(t){var e=s.state.transactions,n=e[t];n.signed&&(n.signed=!1,n.signatureArray=void 0,n.signature=void 0,e[t]=n,s.setState({transactions:e},(function(){s.addLog({type:"info",message:"Removed signature of transaction "+n.id+" because some values changed"})})))},s.recalculateBlocks=function(){var t=Object(i.a)(s.state.blocks),e=Object(i.a)(s.state.transactions),n=s.state.lastUnusedBlock,a=s.state.blockIdCount;(t[t.length-1].confirmed||0!==t[t.length-1].transactions.length)&&(t.push({id:a,nonce:0,transactions:[],confirmed:!1}),s.addLog({type:"info",message:"Added new block"}),n=a++);for(var r=!1,o=s.state.lastConfirmedBlock,c=0;c<t.length;c++){var l=Object(N.b)(t[c],e);if(""===l)return void console.log("Error while generating hash, see previous error-messages!");l!==t[c].hash&&(!r&&o>c-1&&(o=c-1,s.addLog({type:"warning",message:"Hash of block "+c+" changed, all following blocks are set to unconfirmed"})),r=!0),r&&(t[c].confirmed=!1),t[c].hash=l,c!==t.length-1&&(t[c+1].prevHash=l)}s.setState({blocks:t,lastUnusedBlock:n,lastConfirmedBlock:o,blockIdCount:a})},s.confirmBlock=function(t){var e,n=Object(i.a)(s.state.blocks),a=Object(i.a)(s.state.transactions),r=Object(i.a)(s.state.accounts);if(0!==t&&!n[t-1].confirmed)return e="All previous blocks need to be confirmed first!",j.b.warn(e,Object(p.a)(Object(p.a)({},v),{},{style:m})),void s.addLog({type:"error",message:"All previous blocks need to be confirmed first!"});if(!Object(N.f)(n[t],a,r))return g("Some transactions could not be verified!"),void s.addLog({type:"error",message:"Some transactions in block "+t+" could not be verified!"});s.addLog({type:"info",message:"All transactions in block "+t+" have valid signatures"});for(var o=[],c=0;c<r.length;c++)o[c]=r[c].balanceBeforeBlock[t];for(var l=0;l<n[t].transactions.length;l++){var d=a[n[t].transactions[l]];if(void 0===d.from||void 0===d.to||void 0===d.amount)return;if(o[d.from]-d.amount<0){g("Transaction "+d.id+" could not be confirmed, account "+d.from+" doesn't have enough balance for this transaction!"),s.addLog({type:"error",message:"Transaction "+d.id+" could not be confirmed, account "+d.from+" doesn't have enough balance for this transaction!"});for(var u=0;u<r.length;u++)r[u].balanceBeforeBlock=r[u].balanceBeforeBlock.slice(0,t+1);return void s.setState({accounts:r})}o[d.from]=o[d.from]-d.amount,o[d.to]=o[d.to]+d.amount}for(var b=0;b<r.length;b++)r[b].balanceBeforeBlock[t+1]=o[b];var h="",f=n[t],O=-1,x=Object(N.a)(f,a),k=1e6,A=performance.now();do{O++,h=Object(N.c)(x,O)}while(!h.startsWith(y)&&O<k);var L=performance.now();if(O>=k&&!h.startsWith(y))return g("Could not validate block!"),void s.addLog({type:"error",message:"Didn't find a valid nonce in 1000000 iterations!"});f.nonce=O,f.confirmed=!0,f.hash=h,n[t]=f,s.setState({blocks:n,lastConfirmedBlock:f.id,accounts:r},(function(){s.addLog({type:"success",message:"Confirmed block "+t+" with nonce "+O+"; calculation time: "+(L-A)+"ms"}),s.recalculateBlocks()}))},s.onDragEnd=function(t){var e=t.destination,n=t.source,a=t.draggableId;if(null!==t.destination&&(e.droppableId!==n.droppableId||e.index!==n.index)){var r=t.source.index,o=t.destination.index,i=parseInt(a.replace("transaction","")),c=s.state.transactions,l=s.state.unusedTransactions,d=s.state.blocks;if("transactionList"===t.destination.droppableId)if("transactionList"===t.source.droppableId)l.splice(r,1),l.splice(o,0,i),s.setState({unusedTransactions:l});else{var u=t.source.droppableId.replace("block","");d[parseInt(u)].transactions.splice(r,1),l.splice(o,0,i),c[i].editable=!0,s.setState({blocks:d,unusedTransactions:l,transactions:c})}else if("transactionList"===t.source.droppableId){var p=s.state.transactions;if(!p[i].signed)return void g("Transaction must be signed to be included in a block!");l.splice(r,1);var b=parseInt(t.destination.droppableId.replace("block","")),h=t.destination.index;d[b].transactions.splice(h,0,i),p[i].editable=!1,s.setState({unusedTransactions:l,blocks:d,transactions:p})}else{var f=parseInt(t.source.droppableId.replace("block","")),j=parseInt(t.destination.droppableId.replace("block",""));if(f===j){var m=s.state.blocks,v=m[f].transactions;v.splice(r,1),v.splice(o,0,i),m[f].transactions=v,s.setState({blocks:m})}else{var O=d[f].transactions;O.splice(r,1),d[f].transactions=O;var x=d[j].transactions;x.splice(o,0,i),d[j].transactions=x,s.setState({blocks:d})}}s.recalculateBlocks()}},s.addLog=function(t){var e=new Date,n=e.getHours(),a=e.getMinutes(),r=e.getSeconds();t.time=(n<10?"0"+n:n)+":"+(a<10?"0"+a:a)+":"+(r<10?"0"+r:r);var o=s.state.logs;o.push(t),s.setState({logs:o})},s.state={accountIdCount:0,accounts:[],transactionIdCount:0,transactions:[],unusedTransactions:[],blockIdCount:2,blocks:[{id:0,prevHash:y,nonce:0,transactions:[],confirmed:!1},{id:1,nonce:0,transactions:[],confirmed:!1}],lastConfirmedBlock:-1,lastUnusedBlock:1,logs:[],logsVisible:!1},s.recalculateBlocks(),s}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)(f.a,{onDragEnd:this.onDragEnd,children:[Object(b.jsxs)("div",{id:"upperContent",children:[Object(b.jsx)(k,{title:"accounts",accounts:this.state.accounts,droppableId:"accountList",lastConfirmedBlock:this.state.lastConfirmedBlock,className:"accountListContainer",addFunction:this.addAccount,emptyText:"Add some accounts!",dropDisabled:!0,addLogFunction:this.addLog}),Object(b.jsx)(k,{title:"transactions",transactions:this.state.transactions,transactionOrder:this.state.unusedTransactions,numberOfAccounts:this.state.accountIdCount,className:"transactionListContainer",droppableId:"transactionList",addFunction:this.addTransaction,signFunction:this.signTransaction,removeSignatureFunction:this.removeSignature,addLogFunction:this.addLog}),Object(b.jsx)(F,{logsVisible:this.state.logsVisible,logs:this.state.logs})]}),Object(b.jsx)("div",{id:"lowerContent",children:Object(b.jsx)(T,{blocks:this.state.blocks,transactions:this.state.transactions,confirmFunction:this.confirmBlock,addLogFunction:this.addLog})}),Object(b.jsxs)("div",{id:"footer",children:[Object(b.jsx)("span",{children:Object(b.jsx)("a",{href:"https://github.com/nilslambertz/BlockchainDemo",target:"_blank",rel:"noreferrer",children:"source code"})}),Object(b.jsxs)("span",{children:["by ",Object(b.jsx)("a",{href:"https://nilslambertz.github.io/",target:"_blank",rel:"noreferrer",children:"nils lambertz"})]}),Object(b.jsxs)("div",{className:"logsToggle",onClick:function(){var e=t.state.logsVisible;t.setState({logsVisible:!e})},children:["Logs: ",Object(b.jsx)("span",{children:this.state.logsVisible?"ON":"OFF"})]})]})]}),Object(b.jsx)(j.a,{})]})}}]),n}(a.a.Component);o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))},8:function(t,e,n){"use strict";(function(t){n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return h})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return m}));var s=n(13),a=n.n(s),r=n(20),o=n.n(r),i=n(21),c=n(22);function l(e){return t.from(o.a.encodeBase64(e),"base64").toString("hex")}function d(t){return Object(i.encode)(t)}function u(){var t=a.a.sign.keyPair(),e=l(t.secretKey),n=l(t.publicKey);return{privateKey:e,privateKeyArray:t.secretKey,address:n,addressArray:t.publicKey}}function p(t,e){var n=d(v(t)),s=a.a.sign.detached(n,e);return{signature:l(s),signatureArray:s}}function b(t,e,n){var s=d(v(t));return a.a.sign.detached.verify(s,e,n)}function h(t,e,n){for(var s=0;s<t.transactions.length;s++){var a=e[t.transactions[s]];if(void 0!==a.from){var r=n[a.from];if(void 0!==a.signatureArray&&void 0!==r.addressArray)if(!b(a,a.signatureArray,r.addressArray))return console.log("Error in block "+a.id+": Signature in transaction "+a.id+" could not be verified!"),!1}}return!0}function f(t,e){return void 0===t.nonce?"":j(m(t,e),t.nonce)}function j(t,e){return Object(c.sha256)(t+e)}function m(t,e){for(var n=[],s=0;s<t.transactions.length;s++){var a=e[t.transactions[s]];n.push(v(a))}var r={prevHash:t.prevHash,transactions:n};return JSON.stringify(r)}function v(t){var e={id:t.id,from:t.from,to:t.to,amount:t.amount};return JSON.stringify(e)}}).call(this,n(17).Buffer)}},[[44,1,2]]]);
//# sourceMappingURL=main.1a3ed2c5.chunk.js.map