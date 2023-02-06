// task 1:

function task1() {
    console.log(`running task 1:`);

    for (let i = 0; i <= 10; i++) {
        if (i == 0) {
            console.log(`${i} - is zero`);
        }
        else if (i % 2 == 0) {
            console.log(`${i} - is even`);
        }
        else console.log(`${i} - is odd`);
    }

    console.log(`task 1 done.`);
}


// task 2:

function task2() {
    console.log(`running task 2:`);

    console.log(`initial array:`);
    const array = [1, 2, 3, 4, 5, 6, 7];
    printArray(array);

    console.log(`resulting array:`);
    array.splice(3, 2);
    printArray(array);

    console.log(`task 2 done.`);
}

function printArray(array) {
    var printArrayOutput = ``;

    for (let i = 0; i < array.length; i++) {
        printArrayOutput += array[i] + ` `;
    }

    console.log(printArrayOutput);
}


// task 3:

function task3() {
    console.log(`running task 3:`);

    const array = new Array(5);

    console.log(`random array:`);
    fillArray(array);
    printArray(array);

    console.log(`sum of elements: ${arraySum(array)}`);
    console.log(`lowest value: ${minValue(array)}`);
    console.log(`is there a three within the array?: ${findThree(array)}`);

    console.log(`task 3 done.`);
}

function fillArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 10);
    }
}

function arraySum(array) {
    var sum = array[0];

    for (let i = 1; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

function minValue(array) {
    var min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

function findThree(array) {
    var threeCheck = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 3) {
            threeCheck = true;
        }
    }

    return threeCheck;
}


// task 4:

function task4() {
    console.log(`running task 4:`);

    for (let i = 1; i <= 20; i++) {
        console.log(`x`.repeat(i));
    }

    console.log(`task 4 done.`);
}