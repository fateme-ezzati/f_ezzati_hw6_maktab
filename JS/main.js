carsRace()

function findCar(cars, valid_name) {
    return cars.find(function (item) {
        return item.name === valid_name
    });
}

function checkName(cars, name, i) {
    let valid_name = name
    while (findCar(cars, valid_name)) {
        valid_name = prompt(`please enter name of car number ${i} again!!!!`)
    }
    return valid_name
}

function showMap(cars) {
    let map = []
    for (let i = 1; i <= 300; i++) {
        map.push('*')
    }
    let cars_len = cars.length
    if (cars_len) {
        for (let i = 0; i < cars_len; i++) {
            let position = cars[i].position
            map[position - 1] = cars[i].name
            console.log(cars, position)
        }
    }
    return console.log(map.join(''))
}

function carsRace() {
    let carsNumber = prompt('please enter cars number')
    carsNumber = parseInt(carsNumber)
    if (typeof carsNumber !== 'number') {
        return console.log('unvalid value!')
    }
    let cars = []
    for (let i = 1; i <= carsNumber; i++) {
        let name = prompt(`please enter name of car number ${i}`)
        name = checkName(cars, name, i)
        let car = {
            name,
            position: 0
        }
        cars.push(car)
    }
    showMap(cars)
    console.log('---------------------------------------------------------------------------------')
    let flag = []
    while (flag.length < carsNumber) {
        for (let i = 0; i < carsNumber; i++) {
            let new_pos = cars[i].position + Math.floor(Math.random() * 10) + 1
            if (new_pos < 301 && cars[i].position !== -1) {
                let index = cars.findIndex(function (item) {
                    // console.log("index", new_pos, Number(item.position))
                    return Number(item.position) === new_pos
                })

                if (index !== -1) {
                    cars[index].position = 0
                }
                cars[i].position = new_pos

            } else {
                cars[i].position = -1
                if (flag.findIndex(item => item === cars[i].name) === -1) {
                    flag.push(cars[i].name)

                }
                // cars.splice(i, 1)
                // console.log('end',flag,cars)
            }
        }
        // console.log('end', flag, flag.length, carsNumber)
        showMap(cars)
        console.log('---------------------------------------------------------------------------------')
    }


    
    return console.log(`END OF GAME! ${flag[0]} is winner!`)
}


// halge cars tekrari