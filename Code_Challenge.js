var year = [1990, 1969, 2004, 1999, 2009];
var age = [];
for (var i = 0; i < year.length; i++) {
    age[i] = 2020 - year[i];
}

for (var i = 0; i < age.length; i++) {
    if (age[i] == 18) {
        console.log('Person ' + (i + 1) + 'attains fullage of ' + age[i]);
    } else if (age[i] < 18) {
        console.log('Person ' + (i + 1) + ' not attains fullage and ' + age[i] + ' years old');
    } else {
        console.log('Person ' + (i + 1) + ' is older than fullage as his age is ' + age[i]);
    }
}

// function Ques
var years = [1990, 1969, 2004, 1999, 2009];

function printFullage(years) {

    var age = [];
    var fullages = [];
    for (var i = 0; i < years.length; i++) {
        age[i] = 2020 - years[i];
    }

    for (var i = 0; i < age.length; i++) {
        if (age[i] >= 18) {
            console.log('Person ' + (i + 1) + ' attains fullage of ' + age[i]);
            fullages.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' not attains fullage and ' + age[i] + ' years old');
            fullages.push(false);
        }
    }

    return fullages;
}

var years = [1990, 1969, 2004, 1999, 2009];
var full_1 = printFullage(years);
var full_2 = printFullage([1985, 1915, 1970]);
console.log(full_1);
console.log(full_2);