//=====================================================================================
//  SECTION III
//=====================================================================================
console.log("=================================================================")
console.log("Ayncronouse Javascript | Promise | async-wait | EventLoop |");

async function caclucateYears() {
    console.log("Calculating years...");
    let sum = 0;
    for (i = 0; i < 9000000; i++) {
        sum += 900000 * 900000 * 900000 * 9000000;
    }

    return sum;
}


function logYears(years) {
    console.log(years);
}


async function resolveYears() {
    await caclucateYears().then(logYears);
}

resolveYears();