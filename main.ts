let number = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(1, 10)
    if (number == 1) {
        basic.showString("Yes")
    } else if (number == 2) {
        basic.showString("No")
    } else if (number == 3) {
        basic.showString("Maybe")
    } else if (number == 4) {
        basic.showString("Bruh nah")
    } else if (number == 5) {
        basic.showString("Defo")
    } else if (number == 6) {
        basic.showString("My reply is no")
    } else if (number == 7) {
        basic.showString("omg totes")
    } else if (number == 8) {
        basic.showString("Outlook good.")
    } else if (number == 9) {
        basic.showString("try again")
    } else if (number == 10) {
        basic.showString("Outlook not so good")
    } else {
    	
    }
})
