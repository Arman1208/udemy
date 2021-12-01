//outputs heelo after 3 secs
//setTimeout(()=>(console.log('hello')),3000)

//outputs rand number every 3 secs,
const rand=setInterval(() => {
   console.log(Math.floor(Math.random()*100)+1)
}, 3000);

//stops the setinterval
clearInterval(rand)