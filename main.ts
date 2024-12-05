input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("0", 0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("0")
})
radio.setGroup(12345)
