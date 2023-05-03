

//========================================= Set =======================================================================================

//let arr = [0, 1, 1, 2, 3, 4, 4, 5];

/*

let arr = ['Anna', 'Victoria', 'Alex', 'Anna'];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));

*/

/*

let set = new Set(arr);

set.add('Kate');
set.add('Victoria');

*/

//set.has('Kate');
//console.log(set.has('Kate'));

//set.clear();

//set.size;

//console.log(set);

/*

for ( let value of set) {
    console.log(value);
}

*/

/*

set.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain);
});

*/

//console.log(set.values());
//console.log(set.keys());
//console.log(set.entries());
//set.keys();


//=========================================== Live Collection ============================================================================

/*


let boxesQuery = document.querySelectorAll('.box');
let boxesGet = document.getElementsByClassName('box');


boxesQuery.forEach(box => {
    if (box.matches('.this')){
        console.log('This one');
        console.log(box);
    };
});

console.log(boxesQuery[0].closest('.wrapper'));

*/



/*

boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    let d = document.createElement('div');
    d.classList.add('box');
    document.body.append(d);
    
} 



console.log(boxesQuery);
console.log(boxesGet);
//console.log(document.body.children);

console.log(Array.from(boxesGet));

*/

// =================================== Symbol DataType =================================================================================

let obj = {
    name: 'Test'
}

//let id = Symbol('id');
let id = Symbol('id');
let id2 = Symbol('id');
obj[id] = 1;
obj[id2] = 1;

console.log(id == id2);

console.log(obj[id2]);
console.log(obj);