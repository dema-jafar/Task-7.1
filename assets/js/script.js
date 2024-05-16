// task-1
const minMax=document.getElementById('task-1');
minMax.addEventListener('submit', (event)=> {
    event.preventDefault();
    const numbers=document.getElementsByClassName('num');
    let max=parseInt(numbers[0].value);
    let min=parseInt(numbers[0].value);
    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index].value);
        if (parseInt(numbers[index].value)>max) {
            max=parseInt(numbers[index].value);
        }

        if (parseInt(numbers[index].value)<min) {
            min=parseInt(numbers[index].value);
        }

        numbers[index].value="";
    }
    console.log(' max element is:',max,'\n','min element is:',min);
})

// task-2
const isVowel=document.getElementById('task-2');
isVowel.addEventListener('submit', (event)=> {
    event.preventDefault();
    const character=document.getElementById('char');
    let vowelChar=['a','e','i','o','u'];
    let consonantChar=['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    
    if (character.value.length!=1) {
        character.value="";
        return console.log('Enter a single letter')
    }

    for (let index = 0; index < vowelChar.length; index++) {
        if (character.value==vowelChar[index] || character.value==vowelChar[index].toUpperCase()) {
            character.value="";
            return console.log('tha character ',character.value,' is vowel');
        }
    }

    for (let index = 0; index < consonantChar.length; index++) {
        if (character.value==consonantChar[index] || character.value==consonantChar[index].toUpperCase()) {
            character.value="";
            return console.log('tha character ',character.value,' is consonant');
        }
    }

    console.log('Enter a valid character');
    character.value="";
})


// task-3
const multiply=document.getElementById('task-3');
multiply.addEventListener('submit', (event)=> {
    event.preventDefault();
    const num=document.getElementById('num');
    let multiplyArray=[];
    for (let index = 1; index <= 12; index++) {
        multiplyArray[index-1]=parseInt(num.value)*index;
    }
    console.log('multiplication table for ',num.value,':','\n',multiplyArray);
    num.value="";
})

// task-4
const even=document.getElementById('task-4');
even.addEventListener('submit', (event)=> {
    event.preventDefault();
    const number=document.getElementById('number');
    let evenNum=[];
    let i =0;
    if (parseInt(number.value)<0) {
        return console.log('Enter a positive number')
    }

    for (let index = 1; index < parseInt(number.value); index++) {
        if (index%2==0) {
            evenNum[i]=index;
            i++;
        }
    }
    console.log('even numbers for',number.value,':','\n',evenNum);
    number.value="";
})

function percentage(marks){
    let sum=0;
    for (let index = 0; index < marks.length; index++) {
        console.log(marks[index].value);
        // if (parseInt(marks[index].value)<0) {
        //     return console.log('Enter a positive number')
        // }
        sum+=parseInt(marks[index].value);
        marks[index].value="";
    }
    return sum/marks.length;
}

// task-5
const average=document.getElementById('task-5');
average.addEventListener('submit', (event)=> {
    event.preventDefault();
    const marks=document.getElementsByClassName('mark');
    let markAverage=percentage(marks);
    console.log(' average marks=',markAverage,'\n','percentage=',markAverage,'%');
})


// task-6 
const grad=document.getElementById('task-6');
grad.addEventListener('submit', (event)=> {
    event.preventDefault();
    const numbers=document.getElementsByClassName('course');
    let markAverage=percentage(numbers);
    let mark;
    if (markAverage>=90) {
        mark='A';
    }
    if (markAverage<90 && markAverage>=80) {
        mark='B';
    }
    if (markAverage<80 && markAverage>=70) {
        mark='C';
    }
    if (markAverage<70 && markAverage>=60) {
        mark='D';
    }
    if (markAverage<60 && markAverage>=40) {
        mark='E';
    }
    if (markAverage<40) {
        mark='F';
    }
    console.log(' percentage=',markAverage,'%','\n','grad=',mark);
})
