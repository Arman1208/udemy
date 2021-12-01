function makeMysteryFunc(params) {
    const rand=Math.random()
    if (rand>0.5) {
        return function(){
            return console.log('num is less than half')
        }
    }else{
        alert('heeh num is bigger than half')
    }
}

// to hold value create variable
const keeper=makeMysteryFunc()

const ageBetween=function(min,max){
    return function(num){
       return num>=0&&num<=max
        
    }
}   
