function twice(value){
    return value * 2;
}

const triple = (value) => vlaue * 3;

function BlackDog(){
        this.name = '흰둥이';
        return {
            name: '검둥이',
            bark: function(){
                console.log(this.name + ': 멍멍!');
            }
        }
    }

    const blackDog = new BlackDog();
    blackDog.bark(); // 검둥이: 멍멍!

    function WhiteDog(){
        this.name = '흰둥이';
        return {
            name: '검둥이',
            bark: () => {
                console.log(this.name + ': 멍멍!');
            }
        }
    }

    const whiteDog = new WhiteDog();
    whiteDog.bark(); // 흰둥이: 멍멍!


setTimeout(function(){
    console.log('hello world');
}, 1000);

setTimeout(() => {
    console.log('hello world');
}, 1000)

class Dog {
    constructor(name){
        this.name = name;
    }
    say(){
        console.log(this.name + ': 멍멍');
    }
}

const dog = new Dog('흰둥이');
dog.say(); // 흰둥이: 멍멍