input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # . # .
        # . # . #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Giraffe)
    basic.pause(1000)
    basic.clearScreen()
})
