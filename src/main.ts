// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


const result = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const multi = document.getElementById('multi')
const del = document.getElementById('del')
const submit = document.getElementById('submit')
let action = "+"


submit.onclick = function(){
  if (action == "+"){
  const sum = Number(input1.value) + Number(input2.value)
  result.textContent = sum
  }
if (action == "-"){
  const sum = Number(input1.value) - Number(input2.value)
result.textContent = sum
}
if (action == "*") {
  const sum = Number(input1.value)* Number(input2.value)
result.textContent = sum
}
if (action == "/") {
  const sum = Number(input1.value)/ Number(input2.value)
result.textContent = sum
}
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

