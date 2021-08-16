namespace SpriteKind {
    export const SpecialFood = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.SpecialFood, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . e e e e e e . . . . . 
        . . e e e e e e e e e . . . . 
        . e e e e e e e e e e e e . . 
        e e e e e e e e e e e e e . . 
        e e e e e e e e e e e e . . e 
        . e e e e e e e e e e e e . . 
        . . e . e e e e e e e e . . . 
        . . . e . . e . e . . . . . . 
        . . . . . . . . . . e . . . . 
        `)
    info.changeScoreBy(3)
    otherSprite.destroy(effects.disintegrate, 2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . e e e e e e . . . . . 
        . . e e e e e e e e e . . . . 
        . e e e e e e e e e e e e . . 
        e e e e e e e e e e e e e . . 
        e e e e e e e e e e e e . . e 
        . e e e e e e e e e e e e . . 
        . . e . e e e e e e e e . . . 
        . . . e . . e . e . . . . . . 
        . . . . . . . . . . e . . . . 
        `)
    info.changeScoreBy(1)
    otherSprite.destroy(effects.disintegrate, 2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    let mySprite: Sprite = null
    music.powerDown.play()
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
})
let sprout: Sprite = null
let carrot: Sprite = null
game.setDialogFrame(img`
    333333333333333333333333
    3dddddddddddddddddddddd3
    3d33333333333333333333d3
    333333333333333333333333
    b3bddb333333333333bddb3b
    b3b33b333333333333b33b3b
    b3bbbb333333333333bbbb3b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3333333333333333333333b
    b3bddb333333333333bddb3b
    b3b33b333333333333b33b3b
    b3bbbb333333333333bbbb3b
    bb33333333333333333333bb
    bbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbb
    `)
game.showLongText("Eat as many carrots as you can before the farmer catches you!", DialogLayout.Full)
tiles.setTilemap(tilemap`explore2`)
let bunny = sprites.create(img`
    . . . . 1 . . . 1 . . . . . . . 
    . . . d 1 1 . d 1 1 . . . . . . 
    . . . d b 1 . d b 1 . . . . . . 
    . . . d c 1 . d c 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 . . . . . . 
    . 1 1 6 1 1 6 1 1 1 d . . . . . 
    . 1 1 f 1 1 f 1 1 1 d . . . . . 
    . 1 1 1 3 1 1 1 1 d d . . . . . 
    . 9 1 1 1 1 1 1 1 3 . . . . . . 
    . . b 1 1 1 d 3 3 d b . . 1 1 . 
    . . . c c c b 1 1 1 d c d 1 1 1 
    . . . d 1 1 1 1 1 1 1 1 b d 1 d 
    . . . d 1 1 1 1 1 1 1 1 d b d . 
    . . . . d 1 1 b 1 1 1 1 d b . . 
    . . . . 1 1 c 1 1 1 d d c . . . 
    . . . . c c b c c c c c . . . . 
    `, SpriteKind.Player)
controller.moveSprite(bunny)
tiles.placeOnRandomTile(bunny, sprites.castle.tilePath5)
scene.cameraFollowSprite(bunny)
let farmer = sprites.create(img`
    . . . . . b b c c c c . . . . . 
    . . . . b 5 5 5 5 5 5 c . . . . 
    . . . b 5 5 5 5 5 5 5 5 c . . . 
    . . b 5 5 5 5 5 d d 5 5 5 c . . 
    . 5 f 5 5 5 d d d d 5 5 5 c 5 . 
    5 4 f 4 5 5 5 5 5 5 5 5 4 e 4 5 
    5 5 5 e e 4 4 4 4 4 4 e e 5 5 5 
    b b 5 5 5 e e e e e e 5 5 5 b b 
    . . e c 5 5 5 5 5 5 5 5 c e . . 
    . . . b c c c c c c c c e . . . 
    . . . e f 4 f d d f 4 f e . . . 
    . . b 1 8 1 9 1 1 9 1 8 1 b . . 
    . . 4 d 1 8 8 8 8 8 8 1 d 4 . . 
    . . . 4 b 8 8 8 8 8 8 b 4 . . . 
    . . . . f 8 8 6 6 8 8 f . . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(farmer, sprites.castle.tilePath5)
farmer.follow(bunny, 25)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(5000, function () {
    carrot = sprites.create(img`
        . . . . . . 6 . 6 . . . . . . . 
        . . . . 5 6 7 6 7 8 . . . . . . 
        . . . . . 5 7 7 8 . . . . . . . 
        . . . . . 5 7 8 . . . . . . . . 
        . . . . . 4 4 4 e . . . . . . . 
        . . . . 4 4 e 4 4 e . . . . . . 
        . . . . 4 d 4 4 e e . . . . . . 
        . . . . 4 4 4 e 4 e . . . . . . 
        . . . . 4 4 4 4 4 e . . . . . . 
        . . . . 3 4 d 4 e . . . . . . . 
        . . . . 3 4 e 4 e . . . . . . . 
        . . . . . 4 4 4 e . . . . . . . 
        . . . . . 4 4 4 e . . . . . . . 
        . . . . . 4 4 4 e . . . . . . . 
        . . . . . 4 4 e . . . . . . . . 
        . . . . . . 4 e . . . . . . . . 
        `, SpriteKind.SpecialFood)
    tiles.placeOnRandomTile(carrot, sprites.castle.tilePath5)
})
game.onUpdateInterval(1000, function () {
    sprout = sprites.create(img`
        . . . . f 6 6 . . . 6 6 . . . 
        . . . . . f b 6 . 6 6 8 . . . 
        . . . . . . f 6 . 6 f . . . . 
        . . . f 6 6 8 6 6 f . . . . . 
        . . . . f 6 6 6 8 . . . . . . 
        . . . . e c 7 6 e e . . . . . 
        . . e e e c 7 6 e e e . . . . 
        . e e e c f 7 7 f c e e e . . 
        e e e e e e f f c e e e e . . 
        e e e e e c e e e e e e . . e 
        . e e e e e e e c e e e e . . 
        . . e . e e e e e e e e . . . 
        . . . e . . e . e . . . . . . 
        . . . . . . . . . . e . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(sprout, sprites.castle.tilePath5)
})
