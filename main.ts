namespace SpriteKind {
    export const OverlapDoor = SpriteKind.create()
    export const Wall = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Wall, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.OverlapDoor, function (sprite, otherSprite) {
    if (sprite == WaterGirl && otherSprite == WaterDoor) {
        WaterDoor.setImage(assets.image`WaterDoor2`)
        WaterGirl.setPosition(68, 120)
        controller.player2.moveSprite(WaterGirl, 0, 0)
        pause(100)
        if (FireBoyDone) {
            game.gameOver(true)
            game.setGameOverMessage(true, "blaa")
        } else {
            WaterGirlDone = true
        }
    } else if (sprite == FireBoy && otherSprite == FireDoor) {
        FireBoy.setPosition(87, 120)
        controller.moveSprite(FireBoy, 0, 0)
        FireDoor.setImage(assets.image`FireDoor2`)
        pause(100)
        if (WaterGirlDone) {
            game.gameOver(true)
            game.setGameOverMessage(true, "blaa")
        } else {
            FireBoyDone = true
        }
    } else {
    	
    }
})
let WaterGirlDone = false
let FireBoyDone = false
let FireDoor: Sprite = null
let WaterDoor: Sprite = null
let WaterGirl: Sprite = null
let FireBoy: Sprite = null
let mySprite = sprites.create(img`
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    f f f f 
    `, SpriteKind.Wall)
FireBoy = sprites.create(assets.image`FireBoy1`, SpriteKind.Player)
WaterGirl = sprites.create(assets.image`WaterGirl`, SpriteKind.Player)
WaterDoor = sprites.create(assets.image`WaterDoor1`, SpriteKind.OverlapDoor)
FireDoor = sprites.create(assets.image`FireDoor1`, SpriteKind.OverlapDoor)
WaterDoor.setPosition(69, 112)
FireDoor.setPosition(87, 112)
FireBoy.setStayInScreen(true)
WaterGirl.setStayInScreen(true)
controller.moveSprite(FireBoy, 100, 100)
controller.player2.moveSprite(WaterGirl, 100, 100)
scene.setBackgroundImage(assets.image`Level 1`)
info.startCountup(true)
