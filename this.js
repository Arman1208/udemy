const myCat={
    name:'Pushok',
    age:6,
    commands(color, gender){
        console.log(`${this.name} meows a lot`)
        console.log(`${this.name}'s gender is ${gender}'`)
        console.log(`and color is ${color}`)
    }
}
const cat2={
    name:'Murka'
}
const murka=myCat.commands.bind(cat2,'tricolor','girl')()
myCat.commands.call(cat2,'white','boy')
myCat.commands.apply(cat2,'tricolor','girl')()