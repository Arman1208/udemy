//example
const add=(a,b)=>{
    return a+b
}
//WE CAN EXCLUDE PARENTETHIS IF THERE'S ONLY ONE ARGUMENT
let square=x=>{
    return x*2
}
//with no args

const rollDie=()=>{
    return Math.floor(Math.random()*10)+1
}

//implicit return
const subtract=a=>(
    console.log(a-5)
    //works if there's only ONE expression
)
//ONE LINE IMPLICIT RETURN
const isEven=a=>a%2==0
//works if there's only ONE expression

const movies=[
    {title:'Amadeus',
    score:9.8},
    {title:'Gone by Wind',
     score:9.9}
]
const newMovies=movies.map(movie=>(
    `${movie.title}-${movie.score}`
))
