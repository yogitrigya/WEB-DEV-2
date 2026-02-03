// console.log("Hello, World!");
// console.log(document)

// const para = document.querySelector("p")

// para.innerText="THIS IS UPDATED PARAGRAPH TEXT"
// console.log(para.innerText);

// const para = document.getElementsByClassName("para") //return html collection
// para[0].innerText="THIS IS UPDATED PARAGRAPH TEXT"
// para[1].style.color="red"
// console.log(para);

// const para = document.querySelectorAll(".para") //return node list 
//  para[0].innerText="THIS IS UPDATED PARAGRAPH TEXT"
//  para[1].style.color="red"
//  console.log(para);

//  let arr= [1,2,3,4,5]
//  const newArr= arr.forEach((ele)=>console.log(ele))

// const container = document.querySelector(".container") 
// container.innerHTML= "<h1>This is a heading</h1><p>This is a paragraph inside container div</p>"
// console.log(container)

// const btn = document.querySelector("button");
// btn.classList.add("btn")
// btn.classList.remove("btn")
// btn.classList.toggle("btn")

// function printMessage(){
//     console.log("Button Clicked");
// }

// btn.addEventListener("click", printMessage)
// btn.removeEventListener("click", printMessage)
// btn.addEventListener("click", ()=>console.log("Anonymous Function Called"))


// function  startTimer(){
//     console.log("Timer Started");
// }

// const btn = document.querySelector(".click");
// btn.addEventListener("click", startTimer);


// function stopTimer(){
//     console.log("Timer Stopped");
//     btn.removeEventListener("click", startTimer);
// }
// const stopBtn = document.querySelector(".stop");
// stopBtn.addEventListener("click", stopTimer);


// function message(){
//     console.log("Button Clicked");
// }

// const click = document.querySelector(".click");
// click.addEventListener("click", message);

// const stop = document.querySelector(".stop");
// stop.addEventListener("click", ()=>{
//     console.log("Button Stopped");
//     click.removeEventListener("click", message);
// });

// function message(){
//     console.log("Button Clicked");
// }

// const click = document.querySelector(".click");
// click.addEventListener("click", message);
// click.addEventListener("mouseover", ()=>{
//     console.log("Hovering over Click button");
// });


// const stop = document.querySelector(".stop");
// stop.addEventListener("click", ()=>{
//     console.log("Button Stopped");
//     click.removeEventListener("click", message);
// });
// stop.addEventListener("mouseover", ()=>{
//     console.log("Hovering over Stop button");
// });



// const click = document.querySelector(".click");

// function message(event){

//     console.log(event.key);
//     console.log("Button Clicked");

// }

// click.addEventListener("keyup", message);



// const form = document.querySelector("form");
// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     console.log("Form Submitted");
// });

// console.log("Script loaded");

// window.addEventListener("load", ()=>{
//     console.log("All resources finished loading!");
// });

// console.log(a); 
// // console.log(b); 


// var a = 10;
// let b = 20;

// console.log(a); 
// console.log(b); 

// function test(){
//     let c = 30;
//     console.log(c);
//     console.log("Inside Test Function");
// }

// test();

// function greet (){

//     var message = "Hello, user!";
//     console.log(message);
// }
// greet();
// console.log(message);


// function first (){
//     second ();
// }
// function second (){
//     third ();
// }
// function third (){
//     console.trace()
// }
// first ();


// console.log("first line");
// setTimeout(()=>{console.log("second line")},2000);
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");



// const timerId=setInterval(() => {
//     console.log("after 3 seconds")
// }, 1000);
// console.log(timerId);
// setTimeout(() => {
//     clearInterval(timerId)

// },10*1000)

// var hello=1
// const timerId=setInterval(()=>{
//     hello+=1
//     console.log(hello)
// },1000)

// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000)       

// let count=1

// const timerId=setInterval(()=>{
//     if(count===10)clearInterval(timerId)
//     console.log(count)
//     count+=1

// },1000)

// console.log("before timeout")
// setTimeout(()=>{
//     console.log("inside timeout")
// },0)
// console.log("after timeout")

const name = document.querySelector("#name")
const btn = document.querySelector(".btn")
const list = document.querySelector(".list")

btn.addEventListener("click", () => {

    if (name.value === "") return
    const li = document.createElement("li")
    const dlt = document.createElement("button")


    dlt.innerText = "Delete"
    li.innerText = name.value;


    dlt.addEventListener("click", () => {
        list.removeChild(li)
    })


    list.appendChild(li)
    li.appendChild(dlt)


    name.value = ""
})
