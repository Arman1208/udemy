let greet=function(func){
    func()
    func()

}
function rollDie(){
    let roll=Math.floor(Math.random()*6)+1
    return console.log(roll)
}