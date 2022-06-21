function repeatString(string, n) {
  let array = []
  for (let i = 0; i < n; i++) {
    array.push(string)
  }

  console.log(array.join(" "))

}
/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/
let input = document.getElementById("input");
let kg = document.getElementById("kg");

let kgCounter = 0.453592;

let smallLetters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
let s = smallLetters.split(",").join("");
let start = input.value[0];
console.log(s)
let capitalLetters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
let c = capitalLetters.split(",").join("");
console.log(c)
input.onkeyup = function () {
  kg.textContent = input.value * kgCounter + "kg";

}