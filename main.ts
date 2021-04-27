input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    randomNumber = randint(1, 4)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(125)
        basic.showLeds(`
            . . . . #
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(125)
    }
    if (randomNumber == 1) {
        basic.showString("IDK")
    } else if (randomNumber == 2) {
        basic.showString("N")
    } else if (randomNumber == 3) {
        basic.showString("Y")
    } else if (randomNumber == 4) {
        basic.showIcon(IconNames.Sad)
    }
})
let randomNumber = 0
basic.showString("?")
