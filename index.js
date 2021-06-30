const returnFirstTwoDrivers = (list) => {
    return list.slice(0,2);
}

const returnLastTwoDrivers = (list) => {
    return list.slice(2,4);
} 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function() {
        let fare
        return fare = (num * 5);
    }
}

const fareDoubler = (time) => {
    let fare
    return fare = (time*2);
}

const fareTripler = (time) => {
    let fare
    return fare = time*3;
}

function selectDifferentDrivers(list, func) {
    return func(list)
}
