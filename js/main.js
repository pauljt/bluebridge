console.log("WebBluetooth Shim Loaded into "+window.location);
console.log(window.wrappedJSObject)

function foo(){
  return 'foo';
}

function bar(arg){
  return 'bar:'+arg;
}


var api = { foo: foo, bar: bar};
var contentapi = cloneInto(api, window, { cloneFunctions: true , wrapReflectors: true});
Object.defineProperty(window.wrappedJSObject, 'webBluetooth', { value: contentapi });
