namespace SpriteKind {
    export const SpecialFood = SpriteKind.create()
}
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
    otherSprite.destroy(effects.disintegrate, 2000)
})
let sprout: Sprite = null
tiles.setTilemap(tilemap`level1`)
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
