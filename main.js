let budget = document.querySelector('.budget');
let input1 = document.querySelector('.user-input1')
let input2 = document.querySelector('.user-input2');
let input3 = document.querySelector('.user-input3');
let input4 = document.querySelector('.user-input4');
let input5 = document.querySelector('.user-input5');
let input6 = document.querySelector('.user-input6');
let input7 = document.querySelector('.user-input7');
let input8 = document.querySelector('.user-input8');
let input9 = document.querySelector('.user-input9');


let screen1 = document.querySelector('.introduction');
let screenButton1 = document.querySelector('.screen-button1');
let screen2 = document.querySelector('.Budget');
let screenButton2 = document.querySelector('.screen-button2');
let screen3 = document.querySelector('.Appearance');
let screenButton3 = document.querySelector('.screen-button3');
let screen4 = document.querySelector('.Beauty');
let screenButton4 = document.querySelector('.screen-button4');
let screen5 = document.querySelector('.Entertainment');
let screenButton5 = document.querySelector('.screen-button5');
let results = document.querySelector('.results');
let done = document.querySelector('.done');




let total = 0;
let category1 = 0;
let category2 = 0;
let category3 = 0;
let net = 0;




screenButton1.addEventListener('click',function(){
    screen1.style.display = 'none';
    screen2.style.display = 'flex';
})


screenButton2.addEventListener('click',function(){
    screen2.style.display = 'none';
    screen3.style.display = 'flex';
})


screenButton3.addEventListener('click',function(){
    screen3.style.display = 'none';
    screen4.style.display = 'flex';
})
screenButton4.addEventListener('click',function(){
    screen4.style.display = 'none';
    screen5.style.display = 'flex';
})

function calculateAll(){
    let value1 = Number(input1.value);
    let value2 = Number(input1.value);
    let value3 = Number(input1.value);
    let value4 = Number(input1.value);
    let value5 = Number(input1.value);
    let value6 = Number(input1.value);
    let value7 = Number(input1.value);
    let value8 = Number(input1.value);
    let value9 = Number(input1.value);
    let realBudget = Number(budget.value);


    total =  value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8 + value9;
    category1 = value1 + value2 + value3;
    category2 = value4 + value5 + value6;
    category3 = value7 + value8 + value9;
    net = realBudget - total;

    console.log(total);
    console.log(category1);
    console.log(category2);
    console.log(category3);
    console.log(net);

    let netSpan = document.querySelector("#net-span");
    netSpan.innerHTML = net;

    let totalSpan = document.querySelector("#total-span");
    totalSpan.innerHTML = total;

    let category1Span = document.querySelector("#category1-span");
    category1Span.innerHTML = category1;

    let category2Span = document.querySelector("#category2-span");
    category2Span.innerHTML = category2;

    let category3Span = document.querySelector("#category3-span");
    category3Span.innerHTML = category3;

    let conditionalText = document.querySelector("#conditional-text");
    let conditionalImage = document.querySelector("#conditional-image");

    if (net > 0) {
        conditionalText.innerText = "Congratulations, you have money left over!";
        conditionalImage.src = "./pictures/positive-conditional.webp"
    } else {
        conditionalText.innerText = "Oh no, it looks like you need a larger budget based on your expenses!";
        conditionalImage.src = "./pictures/negative-conditional.jpg"
    }
}

screenButton5.addEventListener('click',function(){
    screen5.style.display = 'none';
    results.style.display = 'flex';
    calculateAll();
})


done.addEventListener('click',function(){
    results.style.display ='none'
    screen1.style.display = 'flex';

})