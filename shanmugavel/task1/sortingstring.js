
let string = 'India is my country';

sorting(string);

function sorting(a) {
    let p1 = a.trim();
    let p2 = p1.split('');
    let p3 = p2.sort();

    console.log(p3)

    for (let x = 0; x < p3.length; x++) {
        if (p3[x] == ' ') {
            p3.splice(x, 1)
            x = x - 1;
        }
    }
    console.log(p3);
}