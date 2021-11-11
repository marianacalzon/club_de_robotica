let clear = 0
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 9))
    basic.pause(500)
    clear = 1
})
basic.forever(function () {
    if (clear != 0) {
        basic.clearScreen()
        clear = 0
    }
})
