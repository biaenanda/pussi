input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Vai!")
    basic.clearScreen()
    basic.pause(randint(1000, 5000))
    basic.showIcon(IconNames.House)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . . # #
        . . . # #
        . . # # #
        . . # # #
        . . # # #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # . . .
        # # . . .
        `)
})
