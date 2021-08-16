// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010202020202020202020202020202010102010101020202020202020102020101020202020201010102020201010201010201010202020102020102010202010102010202010201020201020102020101020202020102020201010202020201010201010201020202020202020202010102020102010201010101010101020101020201020202020202020202020201010202020202020202020102020202010102010102010101020201020101020101020102020201020202010202020201010201020202010201010101010202010102020202020202020202020202020101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 . . . . . . . 2 . . 2 
2 . . . . . 2 2 2 . . . 2 2 . 2 
2 . 2 2 . . . 2 . . 2 . 2 . . 2 
2 . 2 . . 2 . 2 . . 2 . 2 . . 2 
2 . . . . 2 . . . 2 2 . . . . 2 
2 . 2 2 . 2 . . . . . . . . . 2 
2 . . 2 . 2 . 2 2 2 2 2 2 2 . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . 2 2 . 2 2 2 . . 2 . 2 2 . 2 
2 . 2 . . . 2 . . . 2 . . . . 2 
2 . 2 . . . 2 . 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tilePath5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
