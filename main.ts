basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("B")
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showString("AB")
    } else if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Skull)
    } else {
    	
    }
})
