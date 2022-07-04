//자바스크립트의 함수종류(JavaScripts funcitonsKind)

//1. 함수 선언문
function func(x){
    return x * x
}
console.log(func(2));

//2. method 함수
const methods = {
    func1: function(){
        return "Hello Worlds"
    }
}
console.log(methods.func1())

//3. 함수 생성자
function NewFunction(x) {
    return x ** x
}
console.log(4);

//4. 화살표 함수;
const ArrowFunction = (x) =>{return x * x}

console.log(ArrowFunction(4));