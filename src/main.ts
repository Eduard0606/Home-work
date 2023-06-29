import './style.css'
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


const result = document.getElementById('result') as any
const input1 = document.getElementById('input1') as any
const input2 = document.getElementById('input2') as any
const minus = document.getElementById('minus') as any
const plus = document.getElementById('plus') as any
const multi = document.getElementById('multi') as any
const del = document.getElementById('del') as any
const submit = document.getElementById('submit') as any
let action = ""


submit.onclick = function(){

  if (action == "+"){
  const sum = Number(input1.value) + Number(input2.value)
  result.textContent = sum
  }

  else if (action == "-"){
  const sum = Number(input1.value) - Number(input2.value)
  result.textContent = sum
}

  else if (action == "*"){
  const sum = Number(input1.value)* Number(input2.value)
  result.textContent = sum
}

  else if (action == "/"){
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

plus.onclick = function(){
  action = "+"
}

del.onclick = function(){
  action = "/"
}

