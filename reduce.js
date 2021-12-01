const price=[0.90,1.26,0.80,2.55,0.55,12.1]
const minPrice=price.reduce((min,next)=>{
    if(next<min)
    return next
    else{
        return min
    }
})
const maxPrice=price.reduce((max,next)=>{
    if(next>max)
    return next
    else{
        return max
    }
})

const arr=[1,2,3,4,5,6]
const sum=arr.reduce((sum,second)=>sum+second)