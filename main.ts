function E1 () {
    for (let index = 0; index < 4; index++) {
        Ouch1.change(LedSpriteProperty.Y, 1)
        Death1()
        basic.pause(speed)
    }
    Ouch1.delete()
}
function E13 () {
    for (let index = 0; index < 4; index++) {
        Ouch1.change(LedSpriteProperty.Y, 1)
        Ouch3.change(LedSpriteProperty.Y, 1)
        Death1()
        Death3()
        basic.pause(speed)
    }
    Ouch1.delete()
    Ouch3.delete()
}
function Death1 () {
    if (Ouch1.isTouching(Player)) {
        game.setScore(wave)
        game.gameOver()
    }
}
function E2 () {
    for (let index = 0; index < 4; index++) {
        Ouch2.change(LedSpriteProperty.Y, 1)
        Death2()
        basic.pause(speed)
    }
    Ouch2.delete()
}
function E12 () {
    for (let index = 0; index < 4; index++) {
        Ouch1.change(LedSpriteProperty.Y, 1)
        Ouch2.change(LedSpriteProperty.Y, 1)
        Death1()
        Death2()
        basic.pause(speed)
    }
    Ouch1.delete()
    Ouch2.delete()
}
function Enemy () {
    Ouch = randint(0, 5)
    if (Ouch == 0) {
        Ouch1 = game.createSprite(0, 0)
        basic.pause(speed)
        E1()
    } else if (Ouch == 1) {
        Ouch2 = game.createSprite(2, 0)
        basic.pause(speed)
        E2()
    } else if (Ouch == 2) {
        Ouch3 = game.createSprite(4, 0)
        basic.pause(speed)
        E3()
    } else if (Ouch == 3) {
        Ouch1 = game.createSprite(0, 0)
        Ouch2 = game.createSprite(2, 0)
        basic.pause(speed)
        E12()
    } else if (Ouch == 4) {
        Ouch1 = game.createSprite(0, 0)
        Ouch3 = game.createSprite(4, 0)
        basic.pause(speed)
        E13()
    } else if (Ouch == 5) {
        Ouch2 = game.createSprite(2, 0)
        Ouch3 = game.createSprite(4, 0)
        basic.pause(speed)
        E23()
    }
}
function Death3 () {
    if (Ouch3.isTouching(Player)) {
        game.setScore(wave)
        game.gameOver()
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Player.change(LedSpriteProperty.X, -2)
})
function E23 () {
    for (let index = 0; index < 4; index++) {
        Ouch2.change(LedSpriteProperty.Y, 1)
        Ouch3.change(LedSpriteProperty.Y, 1)
        Death2()
        Death3()
        basic.pause(speed)
    }
    Ouch2.delete()
    Ouch3.delete()
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Player.change(LedSpriteProperty.X, 2)
})
function E3 () {
    for (let index = 0; index < 4; index++) {
        Ouch3.change(LedSpriteProperty.Y, 1)
        Death3()
        basic.pause(speed)
    }
    Ouch3.delete()
}
function Death2 () {
    if (Ouch2.isTouching(Player)) {
        game.setScore(wave)
        game.gameOver()
    }
}
function difficulty () {
    wave += 1
    speed = 650
    speed += -30 * Math.floor(wave / 2)
}
let Ouch = 0
let Ouch2: game.LedSprite = null
let Ouch3: game.LedSprite = null
let Ouch1: game.LedSprite = null
let Player: game.LedSprite = null
let walls: game.LedSprite = null
let wave = 0
let speed = 0
speed = 650
wave = 0
let y = 0
for (let index = 0; index < 5; index++) {
    walls = game.createSprite(1, y)
    y += 1
}
y = 0
for (let index = 0; index < 5; index++) {
    walls = game.createSprite(3, y)
    y += 1
}
Player = game.createSprite(2, 3)
while (game.isRunning()) {
    Enemy()
    difficulty()
}
basic.forever(function () {
	
})
