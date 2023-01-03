let motor = stepperMotor.createMotor(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P8
)
let distencesensor = sonar.ping(
DigitalPin.P12,
DigitalPin.P16,
PingUnit.Centimeters
)
basic.forever(function () {
    if (distencesensor <= 5) {
        motor.moveClockwise(1, stepUnit.Rotations)
    } else if (distencesensor >= 5) {
        motor.moveClockwise(0, stepUnit.Rotations)
    }
})
