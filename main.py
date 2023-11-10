def Enemy():
    global Ouch, Ouch1, Ouch2, Ouch3
    Ouch = randint(0, 5)
    if Ouch == 0:
        Ouch1 = game.create_sprite(0, 0)
        basic.pause(speed)
        for index in range(4):
            Ouch1.change(LedSpriteProperty.Y, 1)
            basic.pause(speed)
        Ouch1.delete()
    elif Ouch == 1:
        Ouch2 = game.create_sprite(2, 0)
        basic.pause(speed)
        for index2 in range(4):
            Ouch2.change(LedSpriteProperty.Y, 1)
            basic.pause(speed)
        Ouch2.delete()
    elif Ouch == 2:
        Ouch3 = game.create_sprite(4, 0)
        basic.pause(speed)
        for index3 in range(4):
            Ouch3.change(LedSpriteProperty.Y, 1)
            basic.pause(speed)
        Ouch3.delete()
    elif Ouch == 3:
        Ouch1 = game.create_sprite(0, 0)
        Ouch2 = game.create_sprite(2, 0)
        basic.pause(speed)
        for index4 in range(4):
            Ouch1.change(LedSpriteProperty.Y, 1)
            Ouch2.change(LedSpriteProperty.Y, 1)
            basic.pause(speed)
        Ouch1.delete()
        Ouch2.delete()
    elif Ouch == 4:
        Ouch1 = game.create_sprite(0, 0)
        Ouch3 = game.create_sprite(4, 0)
        basic.pause(speed)
        for index5 in range(4):
            Ouch1.change(LedSpriteProperty.Y, 1)
            Ouch3.change(LedSpriteProperty.Y, 1)
            basic.pause(speed)
        Ouch1.delete()
        Ouch3.delete()
    elif Ouch == 5:
        Ouch2 = game.create_sprite(2, 0)
        Ouch3 = game.create_sprite(4, 0)
        basic.pause(speed)
        for index6 in range(4):
            Ouch2.change(LedSpriteProperty.Y, 1)
            Ouch3.change(LedSpriteProperty.Y, 1)
            basic.pause(speed)
        Ouch2.delete()
        Ouch3.delete()

def on_button_a():
    Player.change(LedSpriteProperty.X, -2)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    Player.change(LedSpriteProperty.X, 2)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def Death():
    if Ouch1.get(LedSpriteProperty.Y) == 3 or (Ouch2.get(LedSpriteProperty.Y) == 3 or Ouch3.get(LedSpriteProperty.Y) == 3):
        if Ouch1.is_touching(Player) or (Ouch2.is_touching(Player) or Ouch3.is_touching(Player)):
            game.game_over()
def difficulty():
    global wave, speed
    wave += 1
    speed += -10 * Math.floor(wave / 2)
Ouch3: game.LedSprite = None
Ouch2: game.LedSprite = None
Ouch1: game.LedSprite = None
Ouch = 0
Player: game.LedSprite = None
walls: game.LedSprite = None
wave = 0
speed = 0
speed = 500
wave = 0
y = 0
for index7 in range(5):
    walls = game.create_sprite(1, y)
    y += 1
y = 0
for index8 in range(5):
    walls = game.create_sprite(3, y)
    y += 1
Player = game.create_sprite(2, 3)
while game.is_running():
    Enemy()

def on_forever():
    pass
basic.forever(on_forever)
