// import './style.css'
// // const objectA = {
// //     name:10,
// //     b:true  
// // }
// // const copyOfA = objectA
// // copyOfA.a = 40
// // const copyOofA = objectA
// // copyOofA.z = false
// // console.log(objectA )


// // const eduard = {
// //     name: "eduard",
// //     age:21,
// //     surname:"zalyaev",
// //     city: "aznakaevo"
// // }
// // console.log(eduard)


// // var copyOfEduard = eduard
// // copyOfEduard.city = "chelyabinsk"
// // console.log(eduard)

// // var copyOfEduard2 = eduard
// // copyOfEduard2.girlfrend = false
// // console.log (eduard)

// // var copyOfEduard3 = eduard
// // copyOfEduard3.name = "evgeni"
// // console.log (eduard)


// // delete eduard.name
// // console.log(eduard)


// // // Динамическая типизация
// // function a (){
// //     console.log("Hello world")
// // }
// // a()
// // a()

// // // Динамическая типизация

// // let user = ['', '1Ваня', '2Ваня', '3Ваня',"4Иштван", "5Оля",];
// // user.shift();
// // console.log(user);
// // let newUser = user
// // newUser.splice(0,0, 'Андрей')
// // console.log(newUser)
// // user.shift()
// // console.log(user)

// // let name,txt
// // txt = "Давай познакомимся! Как вас зовут?"
// // name = prompt(txt)
// // if (name == ""){
// //     console.log("Как жаль что вы не представились!")
// // }
// // else{
// //    console.log("Приятно познакомиться,"+name+"!")
// // }
// // if ( name == null){
// //     console.log("Как жаль что вы не представились!")
// // }

// // let n = 100
// // let k = 1
// // let s = 0
// // let txt ="1<sup>2</sup> + 2<sup>2</sup>"
// // txt+=n+ "<sup>2</sup> ="
// // while (k<=n){
// //     s+=k*k
// //     k++
// // }
// // console.log(txt+s)
// // function show (x,y,op){
// //     let msg
// //     switch(op){
// //         case "сумма":
// //             msg = x+ " + "+y+ " = " +(x+y)
// //             break
// //         case "разность":
// //             msg = x+ " - "+y+ " = " +(x-y)
// //             break
// //         case "произведение":
// //                 msg = x+ " * "+y+ " = " +(x*y)
// //             break
// //         case "частное":
// //                 msg = x+ " / "+y+ " = " +(x/y)
// //             break
// //             default:
// //             msg = "<b>" + op + "</b> - неизвестная операция <br>"
// //     }
// //     console.log(msg)
// // }
// // show(10,4, "сумма")
// // show(8,4, "разность")
// // show(8,4, "произведение")
// // show(8,4, "частное")

// // function square(){
// //     let a = + prompt("Введите число")
// //     console.log(a**a)
// // }
// // square()

// // function del (){
// //     let a = + prompt("Введите число")
    


// // 1. Запросите у пользователя его имя и выведите в ответ: 
// // «Привет, его имя!»
// function aler(){
//     alert("Hello world")
// }
// aler()

// // 2. Запросите у пользователя год его рождения, посчитайте, 
// // сколько ему лет и выведите результат. Текущий год укажите 
// // в коде как константу
// function year(){
//     let user:number = prompt("Введите год рождения")
//     const newyear = 2023
//     alert("Вам " + (newyear-user) + " Года")
// }
// year()

// // 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. 

// function square(){
//     let user = prompt("Введите сторону квадрата")
//     let squa = user*4
//     alert(squa)
// }
// square()

// // 4. Запросите у пользователя радиус окружности и выведите 
// // площадь такой окружности.

// function rad(){
//     let user = prompt("Введите радиус")
//     let redi = user**2
//     alert("Площадь равна "+ redi)
// }
// rad()

// //  5. Запросите у пользователя расстояние в км между двумя 
// // городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы 
// // успеть вовремя

// // function city(){
// //     let user =  prompt("Рассстояние до города N")
// //     let user =  prompt("Рассстояние до города B") 
// // }
const result = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submit = document.getElementById('submit')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multi = document.getElementById('multi')
const del = document.getElementById('del')
let action = "+"

submit.onclick = function(){
    if (action == "+" ){
        const sum = Number(input1.value) + Number(input2.value)
        result.textContent = sum
    }
    if ( action == "-"){
        const sum = Number(input1.value) - Number(input2.value)
        result.textContent = sum
    }
    if ( action == "*"){
        const sum = Number(input1.value) * Number(input2.value)
        result.textContent = sum
    }
    if ( action == "/"){
        const sum = Number(input1.value) / Number(input2.value)
        result.textContent = sum
    }
    
}

plus.onclick = function (){
    action = "+"
}
minus.onclick = function(){
    action = "-"
}
multi.onclick = function(){
    action = "*"
}
del.onclick = function(){
    action = "/"
}
