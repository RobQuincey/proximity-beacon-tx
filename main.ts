radio.setGroup(1)
radio.setTransmitPower(2)
led.setBrightness(10)
basic.forever(function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
})
