namespace SpriteKind {
    export const SpecialFood = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.powerDown.play()
    tiles.placeOnRandomTile(farmer, sprites.castle.tilePath5)
})
let farmer: Sprite = null
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
tiles.placeOnRandomTile(bunny, sprites.castle.tilePath5)
farmer = sprites.create(img`
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
