let hasSentry = false
let runeRaged = false
let sethDead = false
let hexagonShoes = false
let lightningStriking = false
let lightningPositionList: number[] = []
let gamblePot = 0
let blackJackWins = 0
let addicted = false
let basicTargeted = false
let blackjackFocused = false
let sentryFiring = false
let gamblingMenu: Sprite = null
let sentryTargetSprite: Sprite = null
let sentryCooldown = 100
let cardIndex = 0
let dealerScore = 0
let drawnCardRank = 0
let playerOneScore = 0
let playerCardAmount = 0
let dealerCardAmount = 0
let playerCollctedAces = 0
let dealerCollctedAces = 0
let trueSentryTargetX = 0
let trueSentryTargetY = 0
let sentryTargetX = 0
let sentryTargetY = 0
let startAddiction = false
let sethFocused = false
let difficultyText: fancyText.TextSprite = null
let selectingDifficulty = false
let selectedDifficulty = 0
let cycledSuit = 0
let throwingCooldown = false
let blockerSprite: Sprite = null
let horseshoeFound = false
let familyImages: Image[] = []
let theMemory = false
let moneyText: TextSprite = null
let keystoneSprite: Sprite = null
let sentrySprite: Sprite = null
let shopItemSprite: Sprite = null
let currentShopList: number[] = []
let shopItemImageList: Image[] = []
let suitImageList: Image[] = []
let rankImageList: Image[] = []
let minCardImageList: Image[] = []
let weaponList: string[] = []
let swingingRight = false
let anhkSheildImage: Image = null
let livesText: TextSprite = null
let attractorSprite: Sprite = null
let shiftAmount = 0
let propTextAlt = ""
let golemCam = false
let generatedText: fancyText.TextSprite = null
let blackjackScoreText: fancyText.TextSprite = null
let blackjackPotText: TextSprite = null
let dealerScoreText: fancyText.TextSprite = null
let npcImage: Image = null
let breakablePotList: Image[] = []
let goalSprite: Sprite = null
let snowflakeImage: Image = null
let ghostImage: Image = null
let enemySprite: Sprite = null
let propText: fancyText.TextSprite = null
let goldDepsoitImages: Image[] = []
let oreSprite: Sprite = null
let flowerTileList: Image[] = []
let aimingMS = 0
let gunPowerBar: StatusBarSprite = null
let cardPowerBar: StatusBarSprite = null
let gunCooldown = false
let weaponImageList: Image[] = []
let attractedSprite: Sprite = null
let CanPlaySong = false
let commemberationText: fancyText.TextSprite = null
let birdSprite: Sprite = null
let alterText: TextSprite = null
let alterDetector: Sprite = null
let keySprite: Sprite = null
let moonImages: Image[] = []
let moonSprite: Sprite = null
let backgroundCharaImage: Image = null
let promptText: TextSprite = null
let preistWeaponImage: Image = null
let anubisMimic = false
let anubisQuery = false
let finailBossHPBar: StatusBarSprite = null
let enemyHealthBar: StatusBarSprite = null
let startMS = 0
let eyeMovementOn = false
let hasKey = false
let hasBlueMushroom = false
let storedSpell = ""
let enemyCap = 0
let discriptoryText: fancyText.TextSprite = null
let pickupTextSprite: TextSprite = null
let playerAnimList: Image[][] = []
let introText: fancyText.TextSprite = null
let lives = 0
let invincible = false
let fireEffect: SpreadEffectData = null
let blueMushroomEffect: SpreadEffectData = null
let sentryEffect: SpreadEffectData = null
let fightingBandit = false
let cutSprite: Sprite = null
let npcSprite: Sprite = null
let permafrostCollected = false
let pickaxeSpawned = false
let goldGiven = false
let hasDiamond = false
let shardObtained = false
let killedBandit = false
let birdStory = false
let boomrangSprite: Sprite = null
let shiftList: number[] = []
let randomNumber = 0
let sheildEffect: SpreadEffectData = null
let redSheildEffect: SpreadEffectData = null
let preistSprite: Sprite = null
let gunPower = 0
let pickupBasic = false
let darkImmunity = false
let bossSpeed = 0
let konshuImageList: Image[] = []
let konshuSprite: Sprite = null
let endingText: fancyText.TextSprite = null
let snowing = false
let reanimatePlayer: Sprite = null
let shiftIntesity = 0
let usabtiSprite: Sprite = null
let anubisSprite: Sprite = null
let spellRingEffect: SpreadEffectData = null
let magicExplosionEffect: SpreadEffectData = null
let thornImageList: Image[] = []
let propStatus: StatusBarSprite = null
let timePointSprite: Sprite = null
let sheildStart = false
let aiming = false
let sheilding = false
let canSheild = false
let burstEffect: SpreadEffectData = null
let burstImageList: Image[] = []
let burstAttack: Sprite = null
let npcTalking = false
let manaRegen = false
let pickupSpecial = false
let explosionEffect: SpreadEffectData = null
let basicAttack = ""
let dead = false
let tomeSprite: Sprite = null
let otherworldSpellList: string[] = []
let otherworldImageList: Image[] = []
let specialAttack = ""
let tomeImage: Image = null
let cloudJump = false
let smashing = false
let winterPlatformBreakEffect: SpreadEffectData = null
let reformPlatformEffect: SpreadEffectData = null
let platformBreakEffect: SpreadEffectData = null
let flowerOwned = false
let powerOfRedspade = false
let hasCompass = false
let ninjaTrained = false
let luckyness = 0
let aquiredBuffs: number[] = []
let npcDataIndex = 0
let golemRight = false
let level = 0
let miniBoss: Sprite = null
let swapingStart = 0
let swappingSpell = false
let preistSheilding = false
let pickupSprite: Sprite = null
let money = 0
let shopItemDataList: number[][] = []
let deck: number[][] = []
let shopPrices: number[] = []
let bossHealthMonitor = 0
let propNumber = 0
let knightDefeated = false
let winterPlatformReformEffect: SpreadEffectData = null
let propImage: Image = null
let spearHeadImageList: Image[] = []
let propSprite: Sprite = null
let bossTurn = 0
let bossHealthBar: StatusBarSprite = null
let knightSprite: Sprite = null
let battlingKnight = false
let invisibleCloud: Sprite = null
let otherworldBar: StatusBarSprite = null
let hasKnightHelmut = false
let mySprite: platformer.PlatformerSprite = null
let speed = 0
let flameCenter = 0
let sethDashImage: Image = null
let chosenAttack = 0
let sethAttackCounter = 0
let orbRain = false
let sethHpBar: StatusBarSprite = null
let orbOffset = 0
let attackMarkerSprite: Sprite = null
let orbiters: Sprite[] = []
let orbitAnimDone = false
let sethAttacking = false
let sethAttackImages: Image[] = []
let sethSprite: Sprite = null
let sethSheilding = false
let magicRingEffect: SpreadEffectData = null
let bigBurstEffect: SpreadEffectData = null
let fireRingEffect: SpreadEffectData = null
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}
namespace SpriteKind {
    export const playerAttack = SpriteKind.create()
    export const prop = SpriteKind.create()
    export const weaponPickup = SpriteKind.create()
    export const pickupText = SpriteKind.create()
    export const gambleText = SpriteKind.create()
    export const boomerang = SpriteKind.create()
    export const basicEnemy = SpriteKind.create()
    export const goal = SpriteKind.create()
    export const stunnedEnemy = SpriteKind.create()
    export const otherworldAttack = SpriteKind.create()
    export const pot = SpriteKind.create()
    export const gold = SpriteKind.create()
    export const hurt = SpriteKind.create()
    export const cameraAnchor = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const otherworldPickup = SpriteKind.create()
    export const bossSpecial = SpriteKind.create()
    export const shard = SpriteKind.create()
    export const shopBuff = SpriteKind.create()
    export const shopItem = SpriteKind.create()
    export const timeOrb = SpriteKind.create()
    export const ore = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const npc = SpriteKind.create()
    export const feather = SpriteKind.create()
    export const trident = SpriteKind.create()
    export const anubis = SpriteKind.create()
    export const soul = SpriteKind.create()
    export const summon = SpriteKind.create()
    export const ui = SpriteKind.create()
    export const permafrost = SpriteKind.create()
    export const redOre = SpriteKind.create()
    export const familyMember = SpriteKind.create()
    export const well = SpriteKind.create()
    export const seth = SpriteKind.create()
    export const marker = SpriteKind.create()
    export const flamePillar = SpriteKind.create()
    export const drawnCard = SpriteKind.create()
    export const flippedCard = SpriteKind.create()
    export const thrownCard = SpriteKind.create()
    export const iceCloud = SpriteKind.create()
}
namespace StatusBarKind {
    export const bossHP = StatusBarKind.create()
    export const energyAlt = StatusBarKind.create()
    export const accuracy = StatusBarKind.create()
    export const sethHealth = StatusBarKind.create()
    export const cardShark = StatusBarKind.create()
}
spriteutils.setConsoleOverlay(false)
music.stopAllSounds()
intailizeVaribles()
speed = 75
scene.setBackgroundColor(15)
game.setDialogFrame(assets.image`textFrame`)
game.setDialogCursor(assets.image`moonWithMan`)
multilights.setShaderRamp(assets.image`shader`)
multilights.toggleLighting(false)
if (blockSettings.exists("Level")) {
    playerCreate()
    loadLevel(blockSettings.readNumber("Level"))
} else {
    blockSettings.clear()
    blockSettings.writeNumber("difficulty", 1)
    blockSettings.writeNumber("Luck", 0)
    blockSettings.writeNumber("Money", 0)
    blockSettings.writeString("Basic", "none")
    blockSettings.writeString("Super", "none")
    blockSettings.writeString("Tome", "none")
    blockSettings.writeNumber("pieces", 0)
    blockSettings.writeNumber("keys", 0)
    game.showLongText("We expect nighttime ghosts, though the daytime shivers more.  There is the ghost who turned the world. There is the ghost who froze it still. There is the ghost that never spoke. There is the ghost who is always screaming. How are we to know to run? What we didn't become, what we will...                  -Frank Hudson", DialogLayout.Center)
    blockSettings.writeNumber("Level", 1)
    game.reset()
}

function playerCreate () {
    mySprite = platformer.create(assets.image`playerHitbox`, SpriteKind.Player)
    platformer.moveSprite(mySprite, true, speed)
    platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnUpPressed, true)
    platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnAPressed, false)
    platformer.setFeatureEnabled(platformer.PlatformerFeatures.WallJumps, false)
    platformer.setConstant(mySprite, platformer.PlatformerConstant.MovementAcceleration, 330)
    sentrySprite = sprites.create(assets.image`eyeSummon`, SpriteKind.prop)
    sentrySprite.z = 3
    multilights.addLightSource(
    mySprite,
    7,
    15,
    0
    )
    platformer.setGravity(510)
    equipPlayerAnim(hasKnightHelmut, false)
    otherworldBar = statusbars.create(4, 20, StatusBarKind.Energy)
    if (blockSettings.exists("crystal")) {
        otherworldBar.max = 1200
    } else {
        otherworldBar.max = 1000
    }
    otherworldBar.value = otherworldBar.max
    otherworldBar.attachToSprite(mySprite, 3, 0)
    otherworldBar.setColor(5, 15)
    otherworldBar.setBarBorder(1, 14)
    cardPowerBar = statusbars.create(20, 4, StatusBarKind.cardShark)
    cardPowerBar.attachToSprite(mySprite, 5, 0)
    cardPowerBar.setColor(7, 15, 3)
    cardPowerBar.setBarBorder(1, 14)
    cardPowerBar.value = 0
    invisibleCloud = sprites.create(assets.image`cloudImage`, SpriteKind.prop)
}
function orcleKnight () {
    battlingKnight = true
    playTrack(8)
    sprites.destroyAllSpritesOfKind(SpriteKind.basicEnemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.stunnedEnemy)
    knightSprite = sprites.create(assets.image`knightDefault`, SpriteKind.boss)
    tiles.placeOnTile(knightSprite, tiles.getTileLocation(39, 24))
    knightSprite.ay = 200
    bossHealthBar = statusbars.create(33, 6, StatusBarKind.bossHP)
    characterAnimations.loopFrames(
    knightSprite,
    assets.animation`knightIdleLeft`,
    200,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    knightSprite,
    assets.animation`knightIdleRight`,
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    knightSprite,
    assets.animation`knightJupingLeft`,
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    knightSprite,
    assets.animation`knightJumpingRight`,
    500,
    characterAnimations.rule(Predicate.MovingRight, Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    knightSprite,
    assets.animation`knightWalkRight`,
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    knightSprite,
    assets.animation`knightWalkLeft`,
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.HittingWallDown)
    )
    bossHealthBar.max = 785
    bossHealthBar.value = 785
    bossHealthBar.setColor(2, 15, 3)
    bossHealthBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    bossHealthBar.setBarBorder(1, 14)
    bossHealthBar.attachToSprite(knightSprite, 1, 0)
    bossTurn = 0
    timer.after(2800, function () {
        timer.background(function () {
            pauseUntil(() => statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, knightSprite).value < 420)
            spriteutils.onSpriteUpdateInterval(knightSprite, 3900, function (sprite) {
                if (statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, knightSprite).value != 0) {
                    propSprite = sprites.create(spearHeadImageList[0], SpriteKind.prop)
                    propSprite.vy = -300
                    propSprite.ay = 80
                    propSprite.setPosition(sprite.x, sprite.y)
                    propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                    spriteutils.onSpriteUpdateInterval(propSprite, 200, function (sprite) {
                        if (sprite.bottom < scene.cameraProperty(CameraProperty.Top)) {
                            sprite.x = mySprite.x
                            sprite.vy = 160
                            sprite.bottom = scene.cameraProperty(CameraProperty.Top)
                            sprite.setKind(SpriteKind.hurt)
                            propImage = spearHeadImageList[0].clone()
                            propImage.flipY()
                            sprite.setImage(propImage.clone())
                            timer.after(900, function () {
                                sprite.setFlag(SpriteFlag.GhostThroughWalls, false)
                                pauseUntil(() => sprite.isHittingTile(CollisionDirection.Bottom) || statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, knightSprite).value == 0)
                                extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 100)
                                sprites.destroy(sprite)
                            })
                        }
                    })
                }
            })
            pauseUntil(() => statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, knightSprite).value == 0)
            playTrack(0)
            statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, knightSprite).setFlag(SpriteFlag.Invisible, true)
            for (let value of sprites.allOfKind(SpriteKind.hurt)) {
                extraEffects.createSpreadEffectOnAnchor(value, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), 100, 10, 20)
                sprites.destroy(value)
            }
            knightSprite.setKind(SpriteKind.prop)
            knightSprite.vy = 90
            knightSprite.vx = 0
            knightSprite.fx = 900
            characterAnimations.setCharacterAnimationsEnabled(knightSprite, false)
            knightSprite.setImage(assets.image`knightRevealed`)
            propSprite = sprites.create(assets.image`knightHelmut`, SpriteKind.prop)
            spriteutils.onSpriteUpdateInterval(propSprite, 500, function (sprite) {
                if (spriteutils.isDestroyed(knightSprite)) {
                    extraEffects.createSpreadEffectOnAnchor(sprite, winterPlatformReformEffect, 200, 30, 5)
                    sprite.setKind(SpriteKind.bossSpecial)
                }
            })
            propSprite.setPosition(knightSprite.x, knightSprite.y)
            propSprite.vy = -100
            propSprite.vx = 65
            propSprite.fx = 100
            propSprite.ay = 200
            timer.background(function () {
                pause(1000)
                generateText("You are the one", 150, (knightSprite.x + 1920) / 4, knightSprite.y - 50, 2800, true, true)
                pause(2900)
                generateText("Excuse my deception, but I had to be sure", 150, (knightSprite.x + 1920) / 4, knightSprite.y - 50, 3200, true, true)
                pause(3300)
                generateText("Meet me at the next peak and I'll explain it all", 150, (knightSprite.x + 1920) / 4, knightSprite.y - 50, 3200, true, true)
                pause(3300)
                knightDefeated = true
                battlingKnight = false
                playTrack(9)
            })
            if (knightSprite.x < mySprite.x) {
                propSprite.vx = -65
                propImage = propSprite.image.clone()
                propImage.flipX()
                propSprite.setImage(propImage.clone())
                propImage = knightSprite.image.clone()
                propImage.flipX()
                knightSprite.setImage(propImage.clone())
            }
        })
        spriteutils.onSpriteUpdateInterval(knightSprite, 2800, function (sprite) {
            if (sprite.isHittingTile(CollisionDirection.Bottom) && statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, knightSprite).value != 0) {
                if (Math.floor(bossTurn / 3) == bossTurn / 3) {
                    propNumber = 1
                    if (statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value < 250) {
                        propNumber = 2
                    }
                    for (let index = 0; index <= propNumber; index++) {
                        timer.after(index * 400, function () {
                            if (statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, knightSprite).value != 0) {
                                propNumber = -25
                                sprite.fx = 50
                                sprite.vx = 1
                                if (sprite.x > mySprite.x) {
                                    propNumber = 25
                                    sprite.vx = -1
                                }
                                extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Cloud), sprite.x + propNumber, sprite.y - 30, 100, 40, 20)
                                pause(100)
                                propSprite = sprites.create(spearHeadImageList[1], SpriteKind.hurt)
                                extraEffects.createSpreadEffectOnAnchor(propSprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 5000, 48, 10)
                                propSprite.setPosition(sprite.x + propNumber, sprite.y - 30)
                                spriteutils.setVelocityAtAngle(propSprite, spriteutils.angleFrom(propSprite, mySprite), 150 + spriteutils.distanceBetween(mySprite, propSprite) * 0.23)
                                propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                                propSprite.vy += -30
                                propSprite.ay += 60
                                propSprite.lifespan += 8000
                                propImage = spearHeadImageList[1].clone()
                                if (propSprite.x > mySprite.x) {
                                    propImage.flipX()
                                }
                                propSprite.setImage(propImage.clone())
                            }
                        })
                    }
                } else {
                    if (randint(1, 100) <= 39) {
                        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), 100, 48, 20)
                        timer.after(100, function () {
                            bossHealthMonitor = statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value
                            if (sprite.x < mySprite.x) {
                                sprite.ax = 100
                                sprite.vx = 40
                            } else {
                                sprite.ax = -100
                                sprite.vx = -40
                            }
                            timer.background(function () {
                                pauseUntil(() => sprite.isHittingTile(CollisionDirection.Left) || sprite.isHittingTile(CollisionDirection.Right) || bossHealthMonitor - 90 > statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value)
                                if (0 != statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value) {
                                    if (sprite.isHittingTile(CollisionDirection.Left) || sprite.isHittingTile(CollisionDirection.Right)) {
                                        if (sprite.isHittingTile(CollisionDirection.Left)) {
                                            sprite.vx = 60
                                        } else {
                                            sprite.vx = -60
                                        }
                                    } else {
                                        sprite.vx = sprite.vx * -1
                                    }
                                    sprite.ax = 0
                                    sprite.vy = -90
                                    sprite.fx = 100
                                }
                            })
                        })
                    } else {
                        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), sprite.x, sprite.y + 11, 100, 10, 10)
                        sprite.vy = -160
                        sprite.ax = 0
                        sprite.fx = 90
                        sprite.vx = (mySprite.x - sprite.x) * 2.3
                        sprite.setBounceOnWall(true)
                        timer.background(function () {
                            pause(200)
                            if (statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, knightSprite).value != 0) {
                                pauseUntil(() => mySprite.x + 8 > sprite.x && mySprite.x - 8 < sprite.x || tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)))
                                extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), sprite.x, sprite.y + 11, 100, 10, 10)
                                characterAnimations.setCharacterAnimationsEnabled(sprite, false)
                                sprite.vy = -80
                                sprite.vx = 0
                                pause(200)
                                if (statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, knightSprite).value != 0) {
                                    sprite.vy = 150
                                    sprite.setBounceOnWall(false)
                                    sprite.setImage(assets.image`knightDecending`)
                                    pauseUntil(() => sprite.isHittingTile(CollisionDirection.Bottom))
                                    if (statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, knightSprite).value != 0) {
                                        scene.cameraShake(4, 500)
                                        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), sprite.x, sprite.y + 11, 100, 50, 10)
                                        sprite.vy = -20
                                        pause(100)
                                        if (statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, knightSprite).value != 0) {
                                            characterAnimations.setCharacterAnimationsEnabled(sprite, true)
                                            for (let index = 0; index <= 1; index++) {
                                                if (statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value <= 300) {
                                                    propSprite = sprites.create(spearHeadImageList[1], SpriteKind.hurt)
                                                    extraEffects.createSpreadEffectOnAnchor(propSprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 1000, 48, 25)
                                                    propSprite.setPosition(sprite.x, sprite.y + 4)
                                                    propSprite.setFlag(SpriteFlag.DestroyOnWall, true)
                                                    propSprite.vx = 120
                                                    if (index == 1) {
                                                        propSprite.vx = -120
                                                        propImage = propSprite.image.clone()
                                                        propImage.flipX()
                                                        propSprite.setImage(propImage.clone())
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    }
                }
                bossTurn += 1
            }
        })
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.shopItem, function (sprite, otherSprite) {
    if (controller.A.isPressed() && shopPrices[shopItemDataList[Math.floor(otherSprite.z * 10)][1]] <= money) {
        sprites.destroy(otherSprite)
        summonWeapon(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, shopItemDataList[Math.floor(otherSprite.z * 10)][2])
        pickupSprite.y += 6
        money += shopPrices[shopItemDataList[Math.floor(otherSprite.z * 10)][1]] * -1
    }
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.otherworldAttack, function (sprite, otherSprite) {
    if (!(preistSheilding)) {
        if (otherSprite.z == 1) {
            sprites.destroy(otherSprite)
            statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -40
        }
        if (otherSprite.z == 0) {
            sprites.destroy(otherSprite)
            statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -25
        }
        if (otherSprite.z == -3) {
            sprites.destroy(otherSprite)
            statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -26
        }
        if (otherSprite.z == -4) {
            statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -100
            otherSprite.setKind(SpriteKind.prop)
            otherSprite.lifespan = 500
        }
    }
})
spriteutils.createRenderable(8, function (screen2) {
    if (swappingSpell) {
        for (let index = 0; index <= 2; index++) {
            spriteutils.drawCircle(
            screen2,
            40 - Math.sin((game.runtime() - swapingStart) / 125) * 9 * Math.cos((game.runtime() - swapingStart) / 125 + 2 * spriteutils.consts(spriteutils.Consts.Pi) / 3 * index),
            17 - Math.sin((game.runtime() - swapingStart) / 125) * 9 * Math.sin((game.runtime() - swapingStart) / 125 + 2 * spriteutils.consts(spriteutils.Consts.Pi) / 3 * index),
            1,
            6
            )
            screen2.setPixel(40 - Math.sin((game.runtime() - swapingStart) / 125) * 9 * Math.cos((game.runtime() - swapingStart) / 125 + 2 * spriteutils.consts(spriteutils.Consts.Pi) / 3 * index), 17 - Math.sin((game.runtime() - swapingStart) / 125) * 9 * Math.sin((game.runtime() - swapingStart) / 125 + 2 * spriteutils.consts(spriteutils.Consts.Pi) / 3 * index), 1)
            spriteutils.drawCircle(
            screen2,
            40 + Math.sin((game.runtime() - swapingStart) / 250) * 9 * Math.cos((game.runtime() - swapingStart) / 250 + 2 * spriteutils.consts(spriteutils.Consts.Pi) / 3 * index),
            17 + Math.sin((game.runtime() - swapingStart) / 250) * 9 * Math.sin((game.runtime() - swapingStart) / 250 + 2 * spriteutils.consts(spriteutils.Consts.Pi) / 3 * index),
            1,
            6
            )
            screen2.setPixel(40 + Math.sin((game.runtime() - swapingStart) / 250) * 9 * Math.cos((game.runtime() - swapingStart) / 250 + 2 * spriteutils.consts(spriteutils.Consts.Pi) / 3 * index), 17 + Math.sin((game.runtime() - swapingStart) / 250) * 9 * Math.sin((game.runtime() - swapingStart) / 250 + 2 * spriteutils.consts(spriteutils.Consts.Pi) / 3 * index), 1)
        }
    }
})
events.spriteEvent(SpriteKind.Player, SpriteKind.shopItem, events.SpriteEvent.StopOverlapping, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.pickupText)
})
function equipGolemAnims (flipped: boolean) {
    if (flipped) {
        characterAnimations.loopFrames(
        miniBoss,
        assets.animation`golemWalkRight`,
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        miniBoss,
        assets.animation`golemRightBackwards`,
        300,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        miniBoss,
        assets.animation`golemIdleRight`,
        500,
        characterAnimations.rule(Predicate.NotMoving)
        )
    } else {
        characterAnimations.loopFrames(
        miniBoss,
        assets.animation`golemWalkLeft`,
        200,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        miniBoss,
        assets.animation`golemBackwardsLeft`,
        300,
        characterAnimations.rule(Predicate.MovingRight)
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.seth, function (sprite, otherSprite) {
    hurtPlayer(true)
    if (mySprite.x < otherSprite.x) {
        sprite.vx = -190
    } else {
        sprite.vx = 190

    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    hurtPlayer(true)
    if (level == 8 || level == 12) {
        if (mySprite.x < otherSprite.x) {
            sprite.vx = -190
        } else {
            sprite.vx = 190
        }
    } else {
        if (golemRight) {
            sprite.vx = -190
        } else {
            sprite.vx = 190
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        npcText(npcDataIndex)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.shopBuff, function (sprite, otherSprite) {
    if (controller.A.isPressed() && shopPrices[shopItemDataList[Math.floor(otherSprite.z * 10)][1]] <= money) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100)
        sprites.destroy(otherSprite)
        money += shopPrices[shopItemDataList[Math.floor(otherSprite.z * 10)][1]] * -1
        aquiredBuffs.push(Math.floor(otherSprite.z * 10))
        for (let index = 0; index <= aquiredBuffs.length - 1; index++) {
            if (aquiredBuffs[index] == 2) {
                if (blockSettings.exists("Luckyness")) {
                    luckyness = blockSettings.readNumber("Luck") + 1
                } else {
                    luckyness = 1
                }
            }
            if (aquiredBuffs[index] == 1) {
                hexagonShoes = true
                hurtPlayer(true)
            }
            if (aquiredBuffs[index] == 3) {
                ninjaTrained = true
            }
            if (aquiredBuffs[index] == 4) {
                hasCompass = true
            }
            if (aquiredBuffs[index] == 5) {
                hasSentry = true
            }
            if (aquiredBuffs[index] == 7) {
                otherworldBar.max = 1200
            }
            if (aquiredBuffs[index] == 8) {
                powerOfRedspade = true
            }
            if (aquiredBuffs[index] == 9) {
                flowerOwned = true
            }
        }
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (tiles.tileAtLocationEquals(location, assets.tile`breakbleTile`)) {
            tiles.setTileAt(location, assets.tile`breakingTile`)
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 1550, 0, 120, 182, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            timer.after(650, function () {
                extraEffects.createSpreadEffectAt(platformBreakEffect, location.x, location.y, 100, 25, 27)
                tiles.setTileAt(location, assets.tile`transparency16`)
                tiles.setWallAt(location, false)
                music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
                pause(2000)
                extraEffects.createSpreadEffectAt(reformPlatformEffect, location.x, location.y, 100, 48, 20)
                tiles.setTileAt(location, assets.tile`breakbleTile`)
                tiles.setWallAt(location, true)
                music.play(music.createSoundEffect(WaveShape.Sawtooth, 671, 1989, 120, 182, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            })
        }
        if (tiles.tileAtLocationEquals(location, assets.tile`silverBreakbleTile`)) {
            tiles.setTileAt(location, assets.tile`silverBrokenTile`)
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 1550, 0, 120, 182, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            timer.after(650, function () {
                extraEffects.createSpreadEffectAt(winterPlatformBreakEffect, location.x, location.y, 100, 25, 27)
                tiles.setTileAt(location, assets.tile`transparency16`)
                tiles.setWallAt(location, false)
                music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
                pause(2000)
                extraEffects.createSpreadEffectAt(winterPlatformReformEffect, location.x, location.y, 100, 48, 20)
                tiles.setTileAt(location, assets.tile`silverBreakbleTile`)
                tiles.setWallAt(location, true)
                music.play(music.createSoundEffect(WaveShape.Sawtooth, 671, 1989, 120, 182, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            })
        }
        if (mySprite.vy > 350 && !(smashing)) {
            hurtPlayer(true)
        }
        if (cloudJump) {
            extraEffects.createSpreadEffectOnAnchor(invisibleCloud, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), 100, 48, 20)
            timer.background(function () {
                pause(1)
                cloudJump = false
            })
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cloudJump) {
        cloudJump = false
        platformer.setGravity(510)
        extraEffects.createSpreadEffectOnAnchor(invisibleCloud, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 200, 48, 20)
        mySprite.vy = -230
        music.play(music.createSoundEffect(WaveShape.Noise, 400, 1637, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    } else {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
        }
    }
})
function updateSpellUi () {
    propImage = tomeImage.clone()
    if (specialAttack != "none") {
        spriteutils.drawTransparentImage(otherworldImageList[otherworldSpellList.indexOf(specialAttack)], propImage, 3, 5)
    }
    tomeSprite.setImage(propImage.clone())
    if (swappingSpell) {
        spriteutils.moveTo(tomeSprite, spriteutils.pos(40, -15), 200)
    } else {
        spriteutils.moveTo(tomeSprite, spriteutils.pos(40, 15), 200)
    }
}
sprites.onOverlap(SpriteKind.anubis, SpriteKind.playerAttack, function (sprite, otherSprite) {
    fakeAnubisHit(otherSprite, false, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.basicEnemy, function (sprite, otherSprite) {
    if (!(dead)) {
        if (smashing && !(mySprite.isHittingTile(CollisionDirection.Bottom))) {
            otherSprite.setKind(SpriteKind.stunnedEnemy)
            otherSprite.vx = 0
            otherSprite.vy = -80
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -25
            timer.after(900, function () {
                if (!(spriteutils.isDestroyed(otherSprite))) {
                    otherSprite.setKind(SpriteKind.basicEnemy)
                }
            })
        } else {
            hurtPlayer(true)
            if (otherSprite.isHittingTile(CollisionDirection.Bottom)) {
                otherSprite.vy = -70
            }
        }
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), 100)
        sprites.destroy(otherSprite)
    }
})
sprites.onDestroyed(SpriteKind.playerAttack, function (sprite) {
    if (basicAttack == "smash") {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 100, 20, 5)
        summonLightning(sprite.x, sprite.y)
    }
    if (basicAttack == "cards") {
        cardPowerBar.value = 0
    }
})
sprites.onDestroyed(SpriteKind.bossSpecial, function (sprite) {
    if (level == 8) {
        extraEffects.createSpreadEffectOnAnchor(sprite, explosionEffect, 100, 45, 10)
        extraEffects.createSpreadEffectOnAnchor(sprite, explosionEffect, 100, 20, 17)
        explosionNoise()
        if (spriteutils.distanceBetween(mySprite, sprite) <= 30) {
            hurtPlayer(true)
        }
    }
})
sprites.onDestroyed(SpriteKind.hurt, function (sprite) {
    if (level == 14) {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(10, ExtraEffectPresetShape.Spark), 100, 48, 15)
    }
})
events.spriteEvent(SpriteKind.Player, SpriteKind.otherworldPickup, events.SpriteEvent.StopOverlapping, function (sprite, otherSprite) {
    pickupSpecial = false
    sprites.destroyAllSpritesOfKind(SpriteKind.pickupText)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.well, function (sprite, otherSprite) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom) && otherSprite.y < sprite.y - 15) {
        if (sprites.allOfKind(SpriteKind.well).indexOf(otherSprite) == 0) {
            sprite.y = sprites.allOfKind(SpriteKind.well)[1].y + 20
        } else {
            sprite.y = sprites.allOfKind(SpriteKind.well)[0].y + 20
        }
        sprite.vy = -240
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(manaRegen || dead || (smashing || npcTalking || swappingSpell))) {
        if (specialAttack == "burst") {
            if (otherworldBar.value > 500) {
                otherworldBar.value += -500
                music.play(music.createSoundEffect(WaveShape.Noise, 1220, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Square, 1220, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                burstAttack = sprites.create(burstImageList[randint(0, 2)], SpriteKind.otherworldAttack)
                extraEffects.createSpreadEffectOnAnchor(burstAttack, burstEffect, 3500, 20, 25)
                burstAttack.setPosition(mySprite.x, mySprite.y)
                burstAttack.lifespan = 2200
                burstAttack.z = 1
                burstAttack.setFlag(SpriteFlag.DestroyOnWall, true)
                if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
                    burstAttack.vx = 90
                    burstAttack.ax = 20
                } else {
                    burstAttack.vx = -90
                    burstAttack.ax = -20
                }
            }
        }
        if (specialAttack == "sheild" && canSheild) {
            if (!(sheilding || manaRegen || aiming || dead)) {
                sheildStart = true
                platformer.moveSprite(mySprite, false, 0)
                timer.after(150, function () {
                    if (sheildStart) {
                        sheildStart = false
                        sheilding = true
                    }
                })
            }
        }
        if (specialAttack == "clock") {
            if (otherworldBar.value == otherworldBar.max) {
                if (!(timePointSprite) || spriteutils.isDestroyed(timePointSprite)) {
                    timePointSprite = sprites.create(assets.image`timeOrb`, SpriteKind.timeOrb)
                    timePointSprite.setPosition(mySprite.x, mySprite.y)
                    propStatus = statusbars.create(4, 20, StatusBarKind.energyAlt)
                    propStatus.max = 400
                    propStatus.value = 400
                    propStatus.setColor(8, 15, 6)
                    propStatus.setBarBorder(1, 14)
                    propStatus.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                    propStatus.attachToSprite(timePointSprite, 3, 0)
                    spriteutils.onSpriteUpdateInterval(timePointSprite, 500, function (sprite) {
                        extraEffects.createSpreadEffectOnAnchor(sprite, burstEffect, 100)
                        statusbars.getStatusBarAttachedTo(StatusBarKind.energyAlt, sprite).value += -40
                        if (statusbars.getStatusBarAttachedTo(StatusBarKind.energyAlt, sprite).value == 0) {
                            sprites.destroy(sprite)
                        }
                    })
                } else {
                    sprites.destroy(timePointSprite)
                }
            }
        }
        if (specialAttack == "thorn") {
            if (otherworldBar.value >= 700) {
                propSprite = sprites.create(assets.image`magicSeed`, SpriteKind.prop)
                propSprite.setPosition(mySprite.x, mySprite.y)
                propSprite.vy = -110
                propSprite.ay = 220
                otherworldBar.value += -700
                propSprite.fx = 40
                if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
                    propSprite.vx = 100
                } else {
                    propSprite.vx = -100
                }
                for (let value of sprites.allOfKind(SpriteKind.boss)) {
                    if (spriteutils.distanceBetween(value, mySprite) <= 100) {
                        if (mySprite.x < value.x) {
                            spriteutils.setVelocityAtAngle(propSprite, (spriteutils.angleFrom(propSprite, value) * 3 + spriteutils.heading(propSprite)) / 4, spriteutils.speed(propSprite))
                        } else {
                            propSprite.vy += 35
                        }
                        propSprite.vy += -10
                    }
                }
                for (let value of sprites.allOfKind(SpriteKind.basicEnemy)) {
                    if (spriteutils.distanceBetween(value, mySprite) <= 100 && (mySprite.y > value.y - 5 && mySprite.y < value.y + 5)) {
                        if (mySprite.x < value.x) {
                            spriteutils.setVelocityAtAngle(propSprite, (spriteutils.angleFrom(propSprite, value) * 3 + spriteutils.heading(propSprite)) / 4, spriteutils.speed(propSprite))
                        } else {
                            propSprite.vy += 35
                        }
                        propSprite.vy += -10
                    }
                }
                spriteutils.onSpriteUpdateInterval(propSprite, 500, function (sprite) {
                    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
                        propSprite = sprites.create(thornImageList[randint(0, 2)], SpriteKind.otherworldAttack)
                        propSprite.setPosition(sprite.x, sprite.y)
                        music.play(music.createSoundEffect(WaveShape.Square, 1462, 671, 107, 191, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                        propSprite.z = -4
                        spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
                            if (sprite.lifespan < 110) {
                                extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 100, 22, 5)
                                sprite.setKind(SpriteKind.prop)
                            }
                        })
                        for (let value of sprites.allOfKind(SpriteKind.boss)) {
                            if (spriteutils.distanceBetween(value, sprite) <= 15) {
                                sprite.x = (value.x + sprite.x) / 2
                                sprite.vy += 5
                            }
                        }
                        for (let value of sprites.allOfKind(SpriteKind.basicEnemy)) {
                            if (spriteutils.distanceBetween(value, sprite) <= 15) {
                                sprite.x = (value.x + sprite.x * 2) / 3
                                sprite.vy += 10
                            }
                        }
                        propImage = propSprite.image.clone()
                        propImage.replace(7, 6)
                        propImage.replace(4, 8)
                        if (randint(1, 2) == 2) {
                            propImage.flipX()
                        }
                        propSprite.setImage(propImage.clone())
                        propSprite.top = sprite.bottom
                        propSprite.vy = -62
                        propSprite.fy = 120
                        propSprite.lifespan = 5500
                        sprites.destroy(sprite)
                    }
                })
            }
        }
        if (specialAttack == "boom") {
            if (700 <= otherworldBar.value) {
                otherworldBar.value += -700
                propSprite = sprites.create(assets.image`explosiveSpell`, SpriteKind.prop)
                propSprite.setPosition(mySprite.x, mySprite.y)
                propSprite.vy = mySprite.vy * 0.7 - 100
                propSprite.ay = 260
                spriteutils.onSpriteUpdateInterval(propSprite, 200, function (sprite) {
                    extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), sprite.x + 3, sprite.y - 3, 200, 3, 2)
                    extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Twinkle), sprite.x + 3, sprite.y - 3, 200, 9, 2)
                })
                spriteutils.onSpriteUpdateInterval(propSprite, 50, function (sprite) {
                    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
                        explosion(65, 39, sprite)
                        explosionNoise()
                        extraEffects.createSpreadEffectOnAnchor(sprite, magicExplosionEffect, 1000, 48, 25)
                        extraEffects.createSpreadEffectOnAnchor(sprite, magicExplosionEffect, 1000, 20, 15)
                        sprites.destroy(sprite)
                    }
                })
            }
        }
        if (specialAttack == "summon") {
            if (900 <= otherworldBar.value) {
                otherworldBar.value += -900
                propSprite = sprites.create(assets.image`summonedMoon`, SpriteKind.summon)
                music.play(music.createSoundEffect(WaveShape.Noise, 1769, 0, 76, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                propSprite.setPosition(mySprite.x, mySprite.y)
                propSprite.vy = -82
                propSprite.fx = 100
                propSprite.fy = 100
                propSprite.lifespan = 9500
                propSprite.setFlag(SpriteFlag.BounceOnWall, true)
                propStatus = statusbars.create(4, 20, StatusBarKind.energyAlt)
                propStatus.setColor(8, 15, 12)
                propStatus.setBarBorder(1, 14)
                propStatus.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
                propStatus.z = 0
                propStatus.attachToSprite(propSprite, 3, 0)
                if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
                    propSprite.vx = 80
                } else {
                    propSprite.vx = -80
                }
                spriteutils.onSpriteUpdateInterval(propSprite, 1400, function (sprite) {
                    if (spriteutils.speed(sprite) == 0) {
                        summonTargetKind(sprites.allOfKind(SpriteKind.basicEnemy), sprite)
                        summonTargetKind(sprites.allOfKind(SpriteKind.stunnedEnemy), sprite)
                        summonTargetKind(sprites.allOfKind(SpriteKind.boss), sprite)
                        summonTargetKind(sprites.allOfKind(SpriteKind.seth), sprite)
                        summonTargetKind(sprites.allOfKind(SpriteKind.anubis), sprite)
                    }
                })
                spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
                    if (spriteutils.speed(sprite) == 0) {
                        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Twinkle), sprite.x - 4, sprite.y - 4, 200, 3, 2)
                    }
                })
            }
        }
        if (specialAttack == "yell") {
            if (otherworldBar.value >= 1000) {
                otherworldBar.value += -1000
                extraEffects.createSpreadEffectOnAnchor(mySprite, spellRingEffect, 1000, 104, 45)
                explosion(25, 73, mySprite)
                music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            }
        }
        if (specialAttack == "icicle") {
            if (otherworldBar.value >= 700) {
                otherworldBar.value += -700
                propSprite = sprites.create(assets.image`iceSpell`, SpriteKind.iceCloud)
                propSprite.setPosition(mySprite.x, mySprite.y)
                propSprite.vy = -90
                propSprite.fy = 10
                propSprite.setFlag(SpriteFlag.BounceOnWall, true)
                if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
                    propSprite.vx = 95
                    propSprite.fx = 70
                } else {
                    propSprite.vx = -95
                }
                propSprite.lifespan = 800
            }
        }
    }
})
sprites.onDestroyed(SpriteKind.iceCloud, function (sprite) {
    for (let i = 0; i < 5; i++) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Cloud), sprite.x, sprite.y, 1700)
        extraEffects.createSpreadEffectAt(sentryEffect, sprite.x, sprite.y, 1600)
        timer.after((i + 0.1) * 200, function() {
            propSprite = sprites.create(assets.image`icicleOne`, SpriteKind.otherworldAttack)
            propSprite.setPosition(sprite.x + randint(-12, 12), sprite.y)
            propSprite.vy = 50
            propSprite.ay = 140
            propSprite.lifespan = 8000
            propSprite.setFlag(SpriteFlag.DestroyOnWall, true)
            propSprite.z = -3
        })
    }
})
events.spriteEvent(SpriteKind.Player, SpriteKind.bossSpecial, events.SpriteEvent.StopOverlapping, function (sprite, otherSprite) {
    if (level == 6 || level == 11) {
        sprites.destroyAllSpritesOfKind(SpriteKind.pickupText)
    }
})
function judgement () {
    npcTalking = true
    platformer.moveSprite(mySprite, false)
    timer.after(500, function () {
        generateText("Why does one approach a God?", 170, anubisSprite.x - 38, anubisSprite.y - 58, 3200, true, true)
        pause(3300)
        generateText("You are no god--Anubis, Overseer of the <c5>Veil</c5>. ", 150, mySprite.x + 35, mySprite.y - 55, 4200, false, true)
        pause(4300)
        generateText("<c2>Mortal</c2>, it is foolish to insult me", 170, anubisSprite.x - 38, anubisSprite.y - 58, 3200, true, true)
        pause(3300)
        generateText("Insult you? I will do much more than that! I am here to kill you!", 150, mySprite.x + 35, mySprite.y - 55, 3900, false, true)
        pause(4000)
        generateText("Then you will meet the same fate as many before", 170, anubisSprite.x - 38, anubisSprite.y - 58, 4200, true, true)
        extraEffects.createSpreadEffectAt(burstEffect, anubisSprite.x - 17, anubisSprite.y - 18, 4000, 48, 25)
        pause(4300)
        color.startFade(color.White, color.originalPalette)
        if (blockSettings.readNumber("pieces") == 5) {
            usabtiSprite = sprites.create(assets.image`ushabtiFull`, SpriteKind.prop)
            animation.runImageAnimation(
            usabtiSprite,
            assets.animation`ushabtiReform`,
            200,
            false
            )
            pause(600)
            extraEffects.createSpreadEffectOnAnchor(usabtiSprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 100, 100, 40)
            pause(1300)
            usabtiSprite.ay = 200
            pause(500)
            generateText("You can't hurt me in this realm", 150, mySprite.x + 35, mySprite.y - 55, 3000, false, true)
            pause(3100)
            generateText("The Pharaoh's Ushabti!", 170, anubisSprite.x - 38, anubisSprite.y - 58, 3000, true, true)
            pause(3100)
            generateText("You have no choice but to send me to Duat, to your physical form", 150, mySprite.x + 35, mySprite.y - 55, 3000, false, true)
            pause(3100)
            generateText("Very well,", 170, anubisSprite.x - 38, anubisSprite.y - 58, 3000, true, true)
            pause(3100)
            generateText("Prepare to face divine justice, <red>Mortal", 170, anubisSprite.x - 38, anubisSprite.y - 58, 4200, true, true)
            shiftIntesity = 1
            pause(3100)
            color.setPalette(
            color.Black
            )
            pause(150)
            color.setPalette(
            color.originalPalette
            )
            shiftIntesity = 2
            pause(800)
            color.setPalette(
            color.Black
            )
            pause(150)
            color.setPalette(
            color.originalPalette
            )
            pause(700)
            for (let index = 0; index <= 4; index++) {
                timer.after(index * 200, function () {
                    color.setPalette(
                    color.Black
                    )
                    timer.after(100, function () {
                        color.setPalette(
                        color.originalPalette
                        )
                    })
                })
            }
            pause(900)
            finishLevel(false)
        } else {
            playTrack(0)
            music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Noise, 2691, 1769, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            reanimatePlayer = sprites.create(assets.image`playerDisolved`, SpriteKind.prop)
            if (hasKnightHelmut) {
                reanimatePlayer.setImage(assets.image`knightedDisolved`)
            }
            reanimatePlayer.setPosition(mySprite.x, mySprite.y)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 15))
            mySprite.z = -99
            pause(3000)
            color.startFade(color.originalPalette, color.Black, 1500)
            pause(1500)
            snowing = true
            sprites.destroy(anubisSprite)
            tiles.setCurrentTilemap(tilemap`cliffEnding`)
            tiles.placeOnTile(reanimatePlayer, tiles.getTileLocation(9, 6))
            populateTiles()
            propImage = reanimatePlayer.image.clone()
            propImage.flipX()
            reanimatePlayer.setImage(propImage.clone())
            pause(200)
            color.startFade(color.Black, color.originalPalette, 1500)
            endingText = fancyText.create("The End?", 200, 1, fancyText.gothic_large)
            tiles.placeOnTile(endingText, tiles.getTileLocation(9, 2))
            pause(1500)
            endingText = fancyText.create("" + convertToText(blockSettings.readNumber("pieces")) + "/5 Ushabti Pieces ", 200, 1, fancyText.defaultArcade)
            tiles.placeOnTile(endingText, tiles.getTileLocation(9, 3))
            fancyText.animateForTime(endingText, 2000, fancyText.AnimationPlayMode.InBackground)
            pause(6500)
            color.startFade(color.originalPalette, color.Black, 2000)
            pause(2100)
            blockSettings.clear()
            game.reset()
        }
    })
}
function konshuTeleport () {
    if (!(spriteutils.isDestroyed(konshuSprite))) {
        tiles.placeOnRandomTile(konshuSprite, assets.tile`transparency16`)
        if (konshuSprite.x < scene.cameraProperty(CameraProperty.X)) {
            konshuSprite.x += 5
        } else {
            konshuSprite.x += -5
        }
        if (randint(1, 2) == 1) {
            konshuSprite.setImage(konshuImageList[1])
            konshuSprite.vx = bossSpeed * -1.2
        } else {
            konshuSprite.setImage(konshuImageList[2])
            konshuSprite.vx = bossSpeed * 1.2
        }
        color.setPalette(
        color.Black
        )
        darkImmunity = true
        timer.after(350, function () {
            color.setPalette(
            color.originalPalette
            )
            pause(100)
            darkImmunity = false
        })
    }
}
events.spriteEvent(SpriteKind.Player, SpriteKind.weaponPickup, events.SpriteEvent.StopOverlapping, function (sprite, otherSprite) {
    pickupBasic = false
    sprites.destroyAllSpritesOfKind(SpriteKind.pickupText)
})
events.spriteEvent(SpriteKind.boss, SpriteKind.boomerang, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    if (!(preistSheilding)) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -40
        otherSprite.vx = otherSprite.vx * -1
    }
})
sprites.onOverlap(SpriteKind.basicEnemy, SpriteKind.playerAttack, function (sprite, otherSprite) {
    if (basicAttack == "cut") {
        sprite.setKind(SpriteKind.stunnedEnemy)
        timer.background(function () {
            music.play(music.createSoundEffect(WaveShape.Noise, 1132, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        })
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -50
        if (sprite.x < otherSprite.x) {
            sprite.vx = -60
        } else {
            sprite.vx = 60
        }
        sprite.vy = -50
        timer.after(500, function () {
            if (!(spriteutils.isDestroyed(sprite))) {
                sprite.setKind(SpriteKind.basicEnemy)
            }
        })
    }
    if (basicAttack == "pick") {
        sprite.setKind(SpriteKind.stunnedEnemy)
        timer.background(function () {
            music.play(music.createSoundEffect(WaveShape.Noise, 1132, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        })
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -50
        if (sprite.x < otherSprite.x) {
            sprite.vx = -80
        } else {
            sprite.vx = 80
        }
        sprite.vy = -60
        timer.after(800, function () {
            if (!(spriteutils.isDestroyed(sprite))) {
                sprite.setKind(SpriteKind.basicEnemy)
            }
        })
    }
    if (basicAttack == "smash") {
        sprite.setKind(SpriteKind.stunnedEnemy)
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -50
        if (sprite.x < otherSprite.x) {
            sprite.vx = -60
        } else {
            sprite.vx = 60
        }
        sprite.vy = -60
        timer.after(600, function () {
            if (!(spriteutils.isDestroyed(sprite))) {
                sprite.setKind(SpriteKind.basicEnemy)
            }
        })
    }
    if (basicAttack == "gun") {
        sprite.setKind(SpriteKind.stunnedEnemy)
        timer.background(function () {
            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        })
        if (gunPower == 2) {
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -50
        }
        if (gunPower == 3) {
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -80
        }
        if (gunPower == 4) {
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -110
        } else {
            sprites.destroy(otherSprite)
        }
        if (sprite.x < otherSprite.x) {
            sprite.vx = -60
        } else {
            sprite.vx = 60
        }
        sprite.vy = -60
        timer.after(500, function () {
            if (!(spriteutils.isDestroyed(sprite))) {
                sprite.setKind(SpriteKind.basicEnemy)
            }
        })
    }
    if (basicAttack == "cards") {
        sprite.setKind(SpriteKind.stunnedEnemy)
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += 0 - cardPowerBar.value * 0.5
        cardPowerBar.value += 25
        otherSprite.setKind(SpriteKind.prop)
        sprites.destroy(otherSprite)
        if (sprite.x < otherSprite.x) {
            sprite.vx = -60
        } else {
            sprite.vx = 60
        }
        sprite.vy = -60
        timer.after(600, function () {
            if (!(spriteutils.isDestroyed(sprite))) {
                sprite.setKind(SpriteKind.basicEnemy)
            }
        })
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), 100)
        sprites.destroy(sprite)
    }
    
})
function preistBoss () {
    preistSprite = sprites.create(assets.image`preistRight`, SpriteKind.prop)
    tiles.placeOnTile(preistSprite, tiles.getTileLocation(7, 10))
    preistSprite.setFlag(SpriteFlag.ShowPhysics, false)
    platformer.moveSprite(mySprite, false)
    platformer.setCharacterAnimationsEnabled(mySprite, false)
    npcTalking = true
    timer.background(function () {
        if (!(blockSettings.exists("church"))) {
            generateText("I knew another would seek the Temple", 200, preistSprite.x + 6, preistSprite.y - 60, 2900, true, true)
            pause(3000)
            generateText("Oh no, not this again...", 200, mySprite.x - 6, mySprite.y - 60, 2900, false, true)
            pause(3000)
            generateText("I gave you a chance to live", 200, preistSprite.x + 6, preistSprite.y - 60, 2900, true, true)
            pause(3000)
            generateText("To rescind your mistake", 200, preistSprite.x + 6, preistSprite.y - 60, 2900, true, true)
            pause(3000)
            generateText("Before I kill you, you must know somthing", 200, preistSprite.x + 6, preistSprite.y - 60, 2900, true, true)
            pause(3000)
            blockSettings.writeString("church", "lectured")
        }
        generateText("There is no world the gods don't rule", 200, preistSprite.x + 6, preistSprite.y - 60, 3200, true, true)
        pause(3300)
        generateText("Seth?", 200, mySprite.x + 65, mySprite.y - 40, 1000, false, true)
        pause(1100)
        playTrack(3)
        platformer.moveSprite(mySprite, true)
        platformer.setCharacterAnimationsEnabled(mySprite, true)
        npcTalking = false
        preistSheilding = true
        spriteutils.onSpriteUpdateInterval(preistSprite, 100, function (sprite) {
            if (sprite.x < mySprite.x) {
                sprite.setImage(assets.image`preistRight`)
            } else {
                sprite.setImage(assets.image`preistLeft`)
            }
            if (preistSheilding) {
                extraEffects.createSpreadEffectOnAnchor(sprite, sheildEffect, 100, 22, 25)
            }
        })
        preistSprite.vy = -130
        preistSprite.fy = 100
        preistSprite.vx = -70
        preistSprite.fx = 100
        for (let index = 0; index <= 1; index++) {
            preistAttack(1, index * 120 + 60, 0, 5)
        }
        pause(2500)
        preistSprite.vx = -100
        timer.after(550, function () {
            preistSprite.vx = 200
            preistSprite.vy = -50
            for (let index = 0; index <= 7; index++) {
                timer.after(index * 150, function () {
                    preistAttack(2, preistSprite.x, preistSprite.y, 160)
                })
            }
            pause(2500)
            preistSprite.setKind(SpriteKind.boss)
            bossHealthBar = statusbars.create(23, 4, StatusBarKind.bossHP)
            bossHealthBar.max = 510
            bossHealthBar.value = 510
            bossHealthBar.setColor(12, 15, 11)
            bossHealthBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
            bossHealthBar.setBarBorder(1, 14)
            bossHealthBar.attachToSprite(preistSprite, 2, 0)
            spriteutils.onSpriteUpdateInterval(preistSprite, 3000, function (sprite) {
                if (preistSheilding) {
                    bossTurn += 1
                    if (bossTurn / 3 == Math.floor(bossTurn / 3)) {
                        sprite.fx = 0
                        sprite.fy = 0
                        spriteutils.moveTo(sprite, spriteutils.pos(mySprite.x, 80), 500)
                        timer.after(500, function () {
                            sprite.fx = 100
                            sprite.fy = 100
                            sprite.vy = -50
                            extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100)
                            preistSheilding = false
                            pause(bossHealthBar.value * 2.1)
                            sprite.vy = 600
                        })
                    } else {
                        if (randint(1, 3) == 1) {
                            sprite.vy = -60
                            for (let index = 0; index <= 2; index++) {
                                preistAttack(2, preistSprite.x, preistSprite.y, 110)
                                propSprite.x += (index - 1) * 20
                                propSprite.ax = (index - 1) * 80
                                propSprite.ay = 35
                            }
                            timer.after(1000, function () {
                                for (let index = 0; index <= 2; index++) {
                                    preistAttack(2, preistSprite.x, preistSprite.y, 110)
                                    propSprite.x += (index - 1) * 20
                                    propSprite.ax = (index - 1) * 80
                                    propSprite.ay = 35
                                }
                            })
                        } else {
                            if (randint(1, 2) == 1) {
                                randomNumber = randint(70, 170)
                                for (let index = 0; index <= 1; index++) {
                                    preistAttack(1, index * 121 + randomNumber, 0, 5)
                                }
                            } else {
                                preistAttack(3, preistSprite.x, preistSprite.y, randint(0, 359))
                            }
                        }
                    }
                } else {
                    if (spriteutils.distanceBetween(mySprite, sprite) >= 65) {
                        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Spark), 100)
                        timer.after(120, function () {
                            for (let index = 0; index <= 3; index++) {
                                preistAttack(2, preistSprite.x, preistSprite.y, index * 30 + 40)
                            }
                            pause(2000)
                            bossTurn = 0
                            preistSheilding = true
                            sprite.vy = -190
                        })
                    } else {
                        preistAttack(4, preistSprite.x, preistSprite.y, 90)
                        timer.after(2000, function () {
                            preistSheilding = true
                            sprite.vy = -190
                        })
                    }
                }
            })
            pauseUntil(() => bossHealthBar.value == 0)
            playTrack(0)
            generateText("<shake>AAAUGHH<shake>", 200, 150, mySprite.y - 60, 2900, true, true)
            explosionNoise()
            extraEffects.createSpreadEffectOnAnchor(preistSprite, burstEffect, 2000, 150, 90)
            music.play(music.createSoundEffect(WaveShape.Noise, 2955, 1418, 255, 0, 2000, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            propSprite = sprites.create(assets.image`preistMangled`, SpriteKind.prop)
            extraEffects.createSpreadEffectOnAnchor(propSprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Explosion), 2000, 150, 10)
            propSprite.setPosition(preistSprite.x, preistSprite.y)
            propSprite.ay = -150
            propSprite.ax = 100
            propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
            sprites.destroy(preistSprite)
            timer.after(3500, function () {
                color.startFade(color.originalPalette, color.Black, 800)
                pause(800)
                finishLevel(false)
            })
        })
    })
}
sprites.onDestroyed(SpriteKind.ore, function (sprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 2823, 0, 124, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    for (let index = 0; index < randint(luckyness + 1, randint(luckyness + 2, luckyness + 3)); index++) {
        summonGold(sprite.x, sprite.y)
    }
})
function shiftRow (screen2: Image, width: number, y: number, shiftAmount: number) {
    shiftList = []
    for (let index = 0; index <= shiftAmount; index++) {
        shiftList.push(screen2.getPixel(index, y))
    }
    for (let index = 0; index <= width - shiftAmount - 1; index++) {
        screen2.setPixel(index, y, screen2.getPixel(index + shiftAmount, y))
    }
    for (let index = 0; index <= shiftAmount; index++) {
        screen2.setPixel(width - shiftAmount + index, y, shiftList[index])
    }
}
scene.onHitWall(SpriteKind.bossSpecial, function (sprite, location) {
    if (level == 7) {
        timer.background(function () {
            sprite.setKind(SpriteKind.prop)
            sprite.fx = 190
            timer.after(600, function () {
                propSprite = sprites.create(thornImageList[randint(0, 2)], SpriteKind.hurt)
                if (randint(1, 2) == 2) {
                    propImage = propSprite.image.clone()
                    propImage.flipX()
                    propSprite.setImage(propImage.clone())
                }
                propSprite.setPosition(sprite.x, 0)
                propSprite.top = sprite.bottom
                propSprite.vy = -48
                propSprite.fy = 96
                propSprite.lifespan = 4500
                propSprite.z = -4
                sprite.setFlag(SpriteFlag.Invisible, true)
                timer.after(4500, function () {
                    extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), sprite.x, sprite.y, 100, 25, 3)
                })
                sprites.destroy(sprite)
            })
        })
    }
})
function throwBoomrang () {
    boomrangSprite = sprites.create(assets.image`boomerang`, SpriteKind.boomerang)
    boomrangSprite.setPosition(mySprite.x, mySprite.y)
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 1528, 83, 180, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    boomrangSprite,
    assets.animation`spinningBoomarang`,
    100,
    true
    )
    boomrangSprite.z = 0
    spriteutils.onSpriteUpdateInterval(boomrangSprite, 500000, function (sprite) {
        timer.after(500, function () {
            if (!(spriteutils.isDestroyed(sprite))) {
                sprite.z = 1
                pause(5500)
                if (!(spriteutils.isDestroyed(sprite))) {
                    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                    sprite.follow(mySprite, 120)
                }
            }
        })
    })
    spriteutils.onSpriteUpdateInterval(boomrangSprite, 100, function (sprite) {
        if (sprite.vx > 150) {
            sprite.vx = 150
        }
        if (sprite.vx < -150) {
            sprite.vx = -150
        }
        if (140 < spriteutils.distanceBetween(mySprite, sprite)) {
            sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
            sprite.follow(mySprite, 120)
        }
    })
    if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
        boomrangSprite.vx = 105
        boomrangSprite.ax = -80
    } else {
        boomrangSprite.vx = -105
        boomrangSprite.ax = 80
    }
    boomrangSprite.setFlag(SpriteFlag.BounceOnWall, true)
}
function npcText (num: number) {
    npcTalking = true
    if (sheilding) {
        stopSheild()
    }
    platformer.moveSprite(mySprite, false, 0)
    tiles.placeOnTile(mySprite, sprites.allOfKind(SpriteKind.npc)[0].tilemapLocation())
    mySprite.x += -24
    if (num == 1) {
        if (birdStory) {
            if (killedBandit) {
                generateText("Not sure where my bird went...", 150, mySprite.x + 25, mySprite.y - 50, 2900, true, true)
                timer.after(3000, function () {
                    generateText("But at least the bandit doesn't have him!", 150, mySprite.x + 25, mySprite.y - 50, 2800, true, true)
                    if (!(shardObtained)) {
                        pause(2900)
                        generateText("Take this artifact!", 150, mySprite.x + 25, mySprite.y - 50, 2800, true, true)
                        propSprite = sprites.create(assets.image`shardFour`, SpriteKind.shard)
                        propSprite.setPosition(mySprite.x + 16, mySprite.y - 85)
                        extraEffects.createSpreadEffectOnAnchor(propSprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 100)
                        pause(2900)
                    }
                    platformer.moveSprite(mySprite, true, speed)
                    npcTalking = false
                })
            } else {
                generateText("Do hurry <red>Traveler</red>!", 150, mySprite.x + 25, mySprite.y - 50, 2500, true, true)
                timer.after(2800, function () {
                    platformer.moveSprite(mySprite, true, speed)
                    npcTalking = false
                })
            }
        } else {
            generateText("<red>Traveller!</red> Spare but a moment of your time", 150, mySprite.x + 25, mySprite.y - 50, 2700, true, true)
            timer.after(2800, function () {
                generateText("Whats got you so paniced?", 150, mySprite.x, mySprite.y - 50, 2800, false, true)
                pause(2900)
                generateText("My favorite <c8>Bird</c8> has been stolen!", 150, mySprite.x + 20, mySprite.y - 50, 2500, true, true)
                pause(2600)
                generateText("By the bandit just left of the village.", 150, mySprite.x + 20, mySprite.y - 50, 2800, true, true)
                pause(2900)
                generateText("And you want me to stop him?", 150, mySprite.x, mySprite.y - 50, 2700, false, true)
                pause(2800)
                generateText("I also have an expensive <c12>artifact</c12>!", 150, mySprite.x + 20, mySprite.y - 50, 3100, true, true)
                pause(3100)
                generateText("You can keep it if you stop him!", 150, mySprite.x + 20, mySprite.y - 50, 2800, true, true)
                pause(2900)
                generateText("Do hurry <red>Traveler</red>!", 150, mySprite.x + 25, mySprite.y - 50, 2500, true, true)
                pause(2800)
                platformer.moveSprite(mySprite, true, speed)
                npcTalking = false
                birdStory = true
            })
        }
    }
    if (num == 2) {
        generateText("Why are you orange!?", 150, mySprite.x, mySprite.y - 50, 2700, false, true)
        timer.after(2800, function () {
            generateText("Color Palate Limitations..", 150, mySprite.x + 25, mySprite.y - 50, 2800, true, true)
            pause(2900)
            generateText("Jeez, that developer sure is is lazy", 150, mySprite.x, mySprite.y - 50, 2900, false, true)
            pause(3000)
            generateText("Do you think he'll ever finish coding my game?", 150, mySprite.x + 25, mySprite.y - 50, 3100, true, true)
            pause(3200)
            generateText("I doubt it...", 150, mySprite.x, mySprite.y - 50, 2800, false, true)
            pause(2900)
            platformer.moveSprite(mySprite, true, speed)
            npcTalking = false
        })
    }
    if (num == 4) {
        timer.background(function () {
            if (hasDiamond) {
                if (!(goldGiven)) {
                    goldGiven = true
                    generateText("Thanks, I hate dynamite", 150, mySprite.x + 25, mySprite.y - 50, 2800, true, true)
                    pause(2900)
                    generateText("Here is your reward", 150, mySprite.x + 25, mySprite.y - 50, 2700, true, true)
                    pause(2800)
                    for (let index = 0; index <= 11 + luckyness; index++) {
                        timer.after(index * 20, function () {
                            summonGold(sprites.allOfKind(SpriteKind.npc)[0].x, sprites.allOfKind(SpriteKind.npc)[0].y)
                            propSprite.vx = randint(-83, -28)
                        })
                    }
                } else {
                    generateText("I don't have anything else!", 150, mySprite.x + 25, mySprite.y - 50, 2700, true, true)
                    pause(2800)
                }
                platformer.moveSprite(mySprite, true, speed)
                npcTalking = false
            } else {
                if (!(blockSettings.exists("diamondQuest"))) {
                    generateText("Oh me? What am I doing?", 150, mySprite.x + 25, mySprite.y - 50, 2800, true, true)
                    pause(2800)
                    generateText("I'm supposed to be mining a <c2>Red Diamond</c2>", 150, mySprite.x + 25, mySprite.y - 50, 2900, true, true)
                    pause(2900)
                    generateText("But its in a crypt that is sealed...", 150, mySprite.x + 25, mySprite.y - 50, 2800, true, true)
                    pause(2800)
                    generateText("And I'm scared to go near that dynamite! Its super unstable!", 150, mySprite.x + 25, mySprite.y - 50, 3000, true, true)
                    pause(3000)
                    generateText("I could retrieve the <c2>Red Diamond</c2>... If you'd be willing to pay?", 150, mySprite.x, mySprite.y - 50, 3000, false, true)
                    pause(3100)
                    generateText("Sure! Keep anything else you find down there", 150, mySprite.x + 25, mySprite.y - 50, 3000, true, true)
                    pause(3100)
                    blockSettings.writeString("diamondQuest", "given")
                }
                generateText("Go get me a <c2>Red Diamond</c2>!", 150, mySprite.x + 25, mySprite.y - 50, 3000, true, true)
                if (!(pickaxeSpawned)) {
                    pickaxeSpawned = true
                    summonWeapon(40, 9, 2)
                    pickupSprite.vx = -80
                    pickupSprite.fx = 100
                    pickupSprite.vy = -100
                    pickupSprite.ay = 250
                    timer.background(function () {
                        pauseUntil(() => mySprite.x < 216)
                        platformer.moveSprite(mySprite, false, speed)
                        scene.cameraShake(6, 1000)
                        mySprite.vy = -230
                        mySprite.vx = 170
                        explosionNoise()
                        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 136, 456, 100, 70, 25)
                        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 156, 456, 100, 70, 25)
                        extraEffects.createSpreadEffectAt(extraEffects.createFullPresetsSpreadEffectData(ExtraEffectPresetColor.Smoke, ExtraEffectPresetShape.Explosion), 146, 456, 1000, 70, 25)
                        extraEffects.createSpreadEffectAt(explosionEffect, 156, 456, 1300, 30, 20)
                        extraEffects.createSpreadEffectAt(explosionEffect, 156, 456, 1300, 50, 30)
                        pause(100)
                        tiles.setTileAt(tiles.getTileLocation(8, 27), assets.tile`mossBottomLeft0`)
                        tiles.setTileAt(tiles.getTileLocation(9, 27), assets.tile`mossBottom`)
                        tiles.setTileAt(tiles.getTileLocation(9, 30), assets.tile`mossFloorAlt`)
                        tiles.setTileAt(tiles.getTileLocation(8, 30), assets.tile`mossFloor`)
                        for (let index = 0; index <= 3; index++) {
                            for (let index2 = 0; index2 <= 1; index2++) {
                                tiles.setTileAt(tiles.getTileLocation(index + 8, index2 + 28), assets.tile`transparency16`)
                                tiles.setWallAt(tiles.getTileLocation(index + 8, index2 + 28), false)
                            }
                        }
                        pause(1000)
                        platformer.moveSprite(mySprite, true, speed)
                    })
                }
                platformer.moveSprite(mySprite, true, speed)
                npcTalking = false
            }
        })
    }
    if (num == 3) {
        timer.background(function () {
            if (!(blockSettings.exists("armorQuest"))) {
                generateText("Greetings <c2>Traveler</c2>", 150, mySprite.x + 25, mySprite.y - 50, 2800, true, true)
                pause(2900)
                generateText("Your voice seems oddly familiar, Sir. Knight", 150, mySprite.x, mySprite.y - 50, 2900, false, true)
                pause(3000)
                generateText("That's <c8>Madam</c8> Knight to you!", 150, mySprite.x + 30, mySprite.y - 50, 2700, true, true)
                pause(2800)
                generateText("Do you want to be knightly like me?", 150, mySprite.x + 30, mySprite.y - 50, 2800, true, true)
                pause(2800)
                generateText("If it means I can get some of that <c5>armor</c5>...", 150, mySprite.x + 30, mySprite.y - 50, 2800, false, true)
                pause(2800)
                blockSettings.writeString("armorQuest", "started")
            }
            if (permafrostCollected) {
                blockSettings.writeString("armorQuest", "preBoss")
            }
            if (blockSettings.readString("armorQuest") == "started") {
                generateText("Of course, let us joust for my <c5>armor</c5>!", 150, mySprite.x + 25, mySprite.y - 50, 3000, true, true)
                pause(3100)
                generateText("But first get me some <wave><c6>Enchanted Permafrost</c6>!", 150, mySprite.x + 30, mySprite.y - 50, 3100, true, true)
                pause(3200)
                generateText("Why? Well because all knights go on quests!", 150, mySprite.x + 30, mySprite.y - 50, 3100, true, true)
                pause(3100)
                platformer.moveSprite(mySprite, true, speed)
                npcTalking = false
            } else {
                if (permafrostCollected) {
                    generateText("Getting that permafrost was impressive", 150, mySprite.x + 30, mySprite.y - 50, 3100, true, true)
                    pause(3200)
                    generateText("You might be the one", 150, mySprite.x + 30, mySprite.y - 50, 3100, true, true)
                    pause(3100)
                }
                for (let index = 0; index <= 1; index++) {
                    propSprite = sprites.create(spearHeadImageList[2], SpriteKind.prop)
                    tiles.placeOnTile(propSprite, tiles.getTileLocation(30, 27))
                    propSprite.vy = -96
                    propSprite.fy = 75
                    propSprite.z = -5
                    if (index == 1) {
                        propSprite.x = 808
                    }
                    spriteutils.onSpriteUpdateInterval(propSprite, 5000, function (sprite) {
                        timer.background(function () {
                            pauseUntil(() => knightDefeated)
                            if (!(spriteutils.isDestroyed(sprite))) {
                                extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Explosion), 100, 86, 5)
                                sprites.destroy(sprite)
                            }
                        })
                    })
                }
                for (let index = 0; index <= 2; index++) {
                    tiles.setWallAt(tiles.getTileLocation(50, index + 22), true)
                    tiles.setWallAt(tiles.getTileLocation(30, index + 22), true)
                }
                pause(3000)
                npcSprite.vx = -100
                npcSprite.vy = -100
                npcSprite.ay = 210
                npcSprite.setKind(SpriteKind.prop)
                platformer.moveSprite(mySprite, true, speed)
                npcTalking = false
                npcSprite.setImage(assets.image`knightNpcRight`)
                pause(1100)
                sprites.destroy(npcSprite)
                orcleKnight()
                timer.after(100, function () {
                    generateText("Prove your worth...", 150, knightSprite.x + 30, knightSprite.y - 50, 3100, true, true)
                    extraEffects.createSpreadEffectOnAnchor(knightSprite, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), 100)
                    pauseUntil(() => knightDefeated)
                    for (let index = 0; index <= 2; index++) {
                        tiles.setWallAt(tiles.getTileLocation(50, index + 22), false)
                        tiles.setWallAt(tiles.getTileLocation(30, index + 22), false)
                    }
                    pause(1500)
                    color.setPalette(
                    color.Black
                    )
                    sprites.destroy(knightSprite)
                    pause(1000)
                    color.setPalette(
                    color.originalPalette
                    )
                })
            }
        })
    }
}
function summonTargetKind (spriteArray: any[], summonSprite: Sprite) {
    for (let value of spriteArray) {
        if (!(spriteutils.isDestroyed(summonSprite))) {
            if (spriteutils.distanceBetween(summonSprite, value) < 115) {
                propSprite =sprites.create(assets.image`fallenStarSpell`, SpriteKind.otherworldAttack)
                propSprite.setPosition(summonSprite.x - 3, summonSprite.y - 4)
                propSprite.setFlag(SpriteFlag.BounceOnWall, true)
                propSprite.lifespan = 4500
                spriteutils.setVelocityAtAngle(propSprite, spriteutils.angleFrom(propSprite, value), 105)
                music.play(music.createSoundEffect(WaveShape.Sine, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
                    extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 30, 1)
                })
                statusbars.getStatusBarAttachedTo(StatusBarKind.energyAlt, summonSprite).value += -25
                if (statusbars.getStatusBarAttachedTo(StatusBarKind.energyAlt, summonSprite).value == 0) {
                    sprites.destroy(summonSprite)
                }
            }
        }
    }
}
sprites.onOverlap(SpriteKind.otherworldAttack, SpriteKind.pot, function (sprite, otherSprite) {
    otherSprite.vy = -35
    otherSprite.setKind(SpriteKind.prop)
    timer.after(200, function () {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100, 20, 10)
        otherSprite.setKind(SpriteKind.pot)
        sprites.destroy(otherSprite)
    })
})
sprites.onOverlap(SpriteKind.basicEnemy, SpriteKind.otherworldAttack, function (sprite, otherSprite) {
    if (otherSprite.z == 1) {
        sprites.destroy(otherSprite)
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -35
    }
    if (otherSprite.z == 0) {
        sprites.destroy(otherSprite)
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -40
    }
    if (otherSprite.z == -3) {
        sprites.destroy(otherSprite)
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -30
    }
    if (otherSprite.z == -4) {
        otherSprite.setKind(SpriteKind.prop)
        otherSprite.lifespan = 500
        sprite.setKind(SpriteKind.stunnedEnemy)
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -100
        if (sprite.x < otherSprite.x) {
            sprite.vx = -60
        } else {
            sprite.vx = 60
        }
        sprite.vy = -50
        timer.after(500, function () {
            if (!(spriteutils.isDestroyed(sprite))) {
                sprite.setKind(SpriteKind.basicEnemy)
            }
        })
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), 100)
        sprites.destroy(sprite)
    }
})


controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (startAddiction && money > 0 && !(addicted)){
        blackJack()
    }
    
    if (!(pickupBasic || (npcTalking || dead) || pickupSpecial) && sprites.allOfKind(SpriteKind.pickupText).length == 0) {
        if (!(sheilding || sheildStart || smashing)) {
            if ((spriteutils.isDestroyed(cutSprite) || !(cutSprite)) && basicAttack == "cut") {
                cutAttack()
            }
            if ((spriteutils.isDestroyed(boomrangSprite) || !(boomrangSprite)) && basicAttack == "return") {
                throwBoomrang()
            }
            if ((spriteutils.isDestroyed(cutSprite) || !(cutSprite)) && basicAttack == "pick") {
                swingPickaxe()
            }
            if ((spriteutils.isDestroyed(cutSprite) || !(cutSprite)) && basicAttack == "smash") {
                useHammer()
            }
            if (basicAttack == "gun") {
                shootGun()
            }
            if (basicAttack == "cards" && !(throwingCooldown)) {
                throwCard()
                throwingCooldown = true
                timer.after(400, function() {
                    throwingCooldown = false
                })
            }
        }
    }
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.permafrost, function (sprite, otherSprite) {
    permafrostCollected = true
    extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), 100)
    sprites.destroy(otherSprite)
})
function banditEnconterSetup () {
    timer.background(function () {
        pause(100)
        pauseUntil(() => 176 > mySprite.x)
        npcTalking = true
        if (sheilding) {
            stopSheild()
        }
        platformer.moveSprite(mySprite, false)
        mySprite.x = 178
        mySprite.vx = 0
        playTrack(0)
        generateText("You are in the wrong spot, kid", 200, miniBoss.x + 50, miniBoss.y - 50, 3000, true, true)
        timer.after(3100, function () {
            if (birdStory) {
                if (!(blockSettings.exists("angeredBandit"))) {
                    generateText("I don't think I am, Bandit", 200, 169, mySprite.y - 50, 3000, false, true)
                    pause(3100)
                    generateText("Return that bird before things get ugly", 190, 169, mySprite.y - 50, 3000, false, true)
                    pause(3100)
                    playTrack(0)
                    generateText("You're <red>dead", 200, miniBoss.x + 50, miniBoss.y - 50, 3000, true, true)
                    pause(3100)
                }
                npcTalking = false
                fightingBandit = true
                platformer.moveSprite(mySprite, true, speed)
                blockSettings.writeString("angeredBandit", "ya")
                banditFight()
            } else {
                npcTalking = false
                playTrack(2)
                platformer.moveSprite(mySprite, true, speed)
                banditEnconterSetup()
            }
        })
    })
}
function loadEffects () {
    sentryEffect = extraEffects.createCustomSpreadEffectData(
        [
            5,
            8,
            8,
            6
        ],
        true,
        extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Explosion),
        extraEffects.createPercentageRange(0, 50),
        extraEffects.createPercentageRange(50, 100),
        extraEffects.createTimeRange(100, 400)
    )
    magicRingEffect = extraEffects.createCustomSpreadEffectData(
        [
            9,
            11,
            10,
            12
        ],
        false,
        extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Twinkle),
        extraEffects.createPercentageRange(100, 100),
        extraEffects.createPercentageRange(100, 100),
        extraEffects.createTimeRange(500, 500)
    )
    magicRingEffect.z = -2

    
    
    bigBurstEffect = extraEffects.createCustomSpreadEffectData(
        [
            9,
            3,
            2
        ],
        false,
        extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Spark),
        extraEffects.createPercentageRange(80, 85),
        extraEffects.createPercentageRange(90, 100),
        extraEffects.createTimeRange(500, 700),
        0,
        0,
        extraEffects.createPercentageRange(50, 100),
        0,
        70,
        200
    )

    fireRingEffect = extraEffects.createCustomSpreadEffectData(
        [
            9,
            9,
            3,
            2
        ],
        false,
        extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Spark),
        extraEffects.createPercentageRange(95, 100),
        extraEffects.createPercentageRange(100, 100),
        extraEffects.createTimeRange(500, 1000)
    )
    
    magicExplosionEffect = extraEffects.createCustomSpreadEffectData(
    [
    5,
    8,
    8,
    6,
    14,
    14
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Explosion),
    extraEffects.createPercentageRange(30, 69),
    extraEffects.createPercentageRange(80, 100),
    extraEffects.createTimeRange(500, 800)
    )
    explosionEffect = extraEffects.createCustomSpreadEffectData(
    [
    12,
    10,
    10,
    3,
    14,
    14
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Explosion),
    extraEffects.createPercentageRange(30, 69),
    extraEffects.createPercentageRange(80, 100),
    extraEffects.createTimeRange(500, 800)
    )
    spellRingEffect = extraEffects.createCustomSpreadEffectData(
    [
    8,
    5,
    6,
    6
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Spark),
    extraEffects.createPercentageRange(95, 100),
    extraEffects.createPercentageRange(100, 100),
    extraEffects.createTimeRange(500, 1000)
    )
    winterPlatformBreakEffect = extraEffects.createCustomSpreadEffectData(
    [
    8,
    5,
    1,
    14,
    14
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Spark),
    extraEffects.createPercentageRange(10, 100),
    extraEffects.createPercentageRange(50, 100),
    extraEffects.createTimeRange(500, 1000)
    )
    platformBreakEffect = extraEffects.createCustomSpreadEffectData(
    [
    3,
    2,
    12,
    14,
    14
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Spark),
    extraEffects.createPercentageRange(10, 100),
    extraEffects.createPercentageRange(50, 100),
    extraEffects.createTimeRange(500, 1000)
    )
    winterPlatformReformEffect = extraEffects.createCustomSpreadEffectData(
    [
    5,
    5,
    8
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Twinkle),
    extraEffects.createPercentageRange(25, 50),
    extraEffects.createPercentageRange(75, 100),
    extraEffects.createTimeRange(500, 1000),
    0,
    0,
    extraEffects.createPercentageRange(50, 100),
    0,
    23,
    200
    )
    reformPlatformEffect = extraEffects.createCustomSpreadEffectData(
    [
    2,
    2,
    3
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Twinkle),
    extraEffects.createPercentageRange(25, 50),
    extraEffects.createPercentageRange(75, 100),
    extraEffects.createTimeRange(500, 1000),
    0,
    0,
    extraEffects.createPercentageRange(50, 100),
    0,
    23,
    200
    )
    blueMushroomEffect = extraEffects.createCustomSpreadEffectData(
    [
    6,
    8,
    8,
    1
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Twinkle),
    extraEffects.createPercentageRange(10, 50),
    extraEffects.createPercentageRange(50, 100),
    extraEffects.createTimeRange(500, 1000),
    0,
    -30,
    extraEffects.createPercentageRange(50, 100),
    -140,
    30,
    200
    )
    blueMushroomEffect.z = -5
    redSheildEffect = extraEffects.createCustomSpreadEffectData(
        [
            3,
            2,
            12
        ],
        false,
        extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Twinkle),
        extraEffects.createPercentageRange(100, 100),
        extraEffects.createPercentageRange(160, 160),
        extraEffects.createTimeRange(500, 1000)
    )
    sheildEffect = extraEffects.createCustomSpreadEffectData(
    [
    6,
    8,
    5
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Twinkle),
    extraEffects.createPercentageRange(100, 100),
    extraEffects.createPercentageRange(160, 160),
    extraEffects.createTimeRange(500, 1000)
    )
    fireEffect = extraEffects.createCustomSpreadEffectData(
    [
    2,
    10,
    10,
    12
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Twinkle),
    extraEffects.createPercentageRange(0, 50),
    extraEffects.createPercentageRange(50, 100),
    extraEffects.createTimeRange(200, 500),
    0,
    -50,
    extraEffects.createPercentageRange(50, 100),
    0,
    0,
    400
    )
    burstEffect = extraEffects.createCustomSpreadEffectData(
    [
    6,
    6,
    6,
    8,
    8,
    5
    ],
    false,
    extraEffects.createPresetSizeTable(ExtraEffectPresetShape.Twinkle),
    extraEffects.createPercentageRange(0, 50),
    extraEffects.createPercentageRange(80, 100),
    extraEffects.createTimeRange(500, 1000),
    0,
    0,
    extraEffects.createPercentageRange(50, 100),
    0,
    15,
    200
    )
}
events.spriteEvent(SpriteKind.Player, SpriteKind.shopBuff, events.SpriteEvent.StopOverlapping, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.pickupText)
})
sprites.onDestroyed(SpriteKind.summon, function (sprite) {
    extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), 100)
})
sprites.onCreated(SpriteKind.trident, function (sprite) {
    spriteutils.onSpriteUpdateInterval(sprite, 100, function (sprite) {
        transformSprites.rotateSprite(sprite, spriteutils.radiansToDegrees(spriteutils.heading(sprite)) + 90)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.feather, function (sprite, otherSprite) {
    mySprite.vy = -80
    otherSprite.setKind(SpriteKind.prop)
    otherSprite.setImage(assets.image`featherDisabled`)
    cloudJump = true
    mySprite.setPosition((otherSprite.x + sprite.x) / 2, (otherSprite.y + sprite.y) / 2)
    platformer.setGravity(450)
    timer.background(function () {
        pauseUntil(() => mySprite.isHittingTile(CollisionDirection.Bottom))
        pause(2500)
        otherSprite.setKind(SpriteKind.feather)
        otherSprite.setImage(assets.image`cloudImage`)
    })
})
sprites.onDestroyed(SpriteKind.pot, function (sprite) {
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 2823, 0, 124, 255, 120, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Noise, 2823, 0, 124, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    for (let index = 0; index < randint(randint(luckyness, luckyness + 1), randint(luckyness + 2, luckyness + 4)); index++) {
        summonGold(sprite.x, sprite.y)
    }
})
function hurtPlayer (invice: boolean) {
    if ((invice && !(invincible) || !(invice)) && !(sheilding) && !(dead)) {
        if (flowerOwned) {
            otherworldBar.value = 1
        }
        cardPowerBar.value = 0

        if (!(ninjaTrained || smashing)) {
            equipPlayerAnim(hasKnightHelmut, true)
        }
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        if (!npcTalking) {
        lives += -1
        }
        scene.cameraShake(4, 500)
        if (0 < lives) {
            extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(3, ExtraEffectPresetShape.Spark), 100)
            if (invice) {
                invincible = true
                timer.after(800, function () {
                    invincible = false
                })
            }
            for (let index = 0; index <= randint(1, 3); index++) {
                propSprite = sprites.create(assets.image`blood`, SpriteKind.prop)
                propSprite.setPosition(mySprite.x, mySprite.y)
                propSprite.vy = -80
                propSprite.vx = randint(-80, 80)
                propSprite.ay = 120
                propSprite.lifespan = 1500
            }
            if (!(smashing)) {
                if (mySprite.vy > -100) {
                    mySprite.vy = -70
                }
                if (!(sheildStart || sheilding || npcTalking)) {
                    if (!(ninjaTrained)) {
                        platformer.moveSprite(mySprite, true, 35)
                    }
                }
                timer.after(700, function () {
                    if (!(sheildStart || sheilding)) {
                        equipPlayerAnim(hasKnightHelmut, false)
                        if (!npcTalking) {
                        platformer.moveSprite(mySprite, true, speed)
                        }
                    }
                })
            }
        }
    }
}
function openIntroText () {
    introText = fancyText.create("Conquest Of Duat", 200, 2, fancyText.gothic_large)
    introText.y += -50
    introText = fancyText.create("By Bifrosty", 200, 1, fancyText.bold_sans_7)
    introText.y += -20
    timer.background(function () {
        pauseUntil(() => 250 < mySprite.x)
        introText = fancyText.create("Dear Journal,", 200, 1, fancyText.bold_sans_7)
        introText.x = 400
        introText.y += -40
        fancyText.animateForTime(introText, 800, fancyText.AnimationPlayMode.InBackground)
        pause(900)
        introText = fancyText.create("I knew never to mourn the dead, lest I become one.", 160, 1, fancyText.bold_sans_7)
        introText.x = 385
        introText.y += -25
        fancyText.animateForTime(introText, 1500, fancyText.AnimationPlayMode.InBackground)
        fancyText.setTextFlag(introText, fancyText.Flag.ChangeHeightWhileAnimating, false)
        pauseUntil(() => basicAttack == "cut")
        introText = fancyText.create("But now there are too many dead...", 130, 1, fancyText.bold_sans_7)
        fancyText.animateForTime(introText, 1000, fancyText.AnimationPlayMode.InBackground)
        introText.x = 590
        introText.y += 100
        pauseUntil(() => 1000 < mySprite.x)
        introText = fancyText.create("Without the world I lived in what am I?", 130, 1, fancyText.bold_sans_7)
        fancyText.animateForTime(introText, 1000, fancyText.AnimationPlayMode.InBackground)
        introText.y += -100
        introText.x = 1150
        pauseUntil(() => 1200 < mySprite.x)
        introText = fancyText.create("The one who killed them, his power comes from Duat--A land of ghosts", 190, 1, fancyText.bold_sans_7)
        fancyText.animateForTime(introText, 3000, fancyText.AnimationPlayMode.InBackground)
        introText.x = 1280
        introText.y += -50
        pause(3000)
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(14, ExtraEffectPresetShape.Spark), 1472, 16, 200)
        pause(65)
        tiles.setTileAt(tiles.getTileLocation(92, 1), assets.tile`transparency16`)
        pause(600)
        introText = fancyText.create("I must find the veil between our world and the next. I must begin my Conquest of Duat", 190, 1, fancyText.bold_sans_7)
        fancyText.animateForTime(introText, 2000, fancyText.AnimationPlayMode.InBackground)
        introText.x = 1400
        introText.y += 10
    })
}
function equipPlayerAnim (armored: boolean, hurt: boolean) {
    playerAnimList = [
    assets.animation`playerIdleRight`,
    assets.animation`playerIdleLeft`,
    assets.animation`playerMoveRight`,
    assets.animation`playerMoveLeft`,
    assets.animation`playerJumpingRight`,
    assets.animation`playerJumpingLeft`,
    assets.animation`playerFallingRight`,
    assets.animation`playerFallingLeft`,
    assets.animation`playerWallSlideLeft`,
    assets.animation`unusedWallSlide`,
    assets.animation`playerHurtRight`,
    assets.animation`playerHurtLeft`,
    assets.animation`playerDead`
    ]
    if (armored) {
        playerAnimList = [
        assets.animation`knightedIdleRight`,
        assets.animation`knightedIdleLeft`,
        assets.animation`knightedWalkRight`,
        assets.animation`knightedWalkLeft`,
        assets.animation`knightedJumpRight`,
        assets.animation`knightedJumpLeft`,
        assets.animation`knightedFallRight`,
        assets.animation`knightedFallLeft`,
        playerAnimList[8],
        playerAnimList[9],
        assets.animation`knightedHurtRight`,
        assets.animation`knightedHurtLeft`,
        assets.animation`knightedDead`
        ]
    }
    if (hurt) {
        playerAnimList[0] = playerAnimList[10]
        playerAnimList[1] = playerAnimList[11]
        playerAnimList[2] = playerAnimList[10]
        playerAnimList[3] = playerAnimList[11]
        playerAnimList[4] = playerAnimList[10]
        playerAnimList[5] = playerAnimList[11]
        playerAnimList[6] = playerAnimList[10]
        playerAnimList[7] = playerAnimList[11]
    }
    platformer.loopFrames(
    mySprite,
    playerAnimList[0],
    200,
    platformer.rule(platformer.PlatformerSpriteState.FacingRight)
    )
    platformer.loopFrames(
    mySprite,
    playerAnimList[1],
    200,
    platformer.rule(platformer.PlatformerSpriteState.FacingLeft)
    )
    platformer.loopFrames(
    mySprite,
    playerAnimList[2],
    100,
    platformer.rule(platformer.PlatformerSpriteState.FacingRight, platformer.PlatformerSpriteState.Moving)
    )
    platformer.loopFrames(
    mySprite,
    playerAnimList[3],
    100,
    platformer.rule(platformer.PlatformerSpriteState.FacingLeft, platformer.PlatformerSpriteState.Moving)
    )
    platformer.runFrames(
    mySprite,
    playerAnimList[4],
    100,
    platformer.rule(platformer.PlatformerSpriteState.JumpingUp, platformer.PlatformerSpriteState.FacingRight)
    )
    platformer.runFrames(
    mySprite,
    playerAnimList[4],
    100,
    platformer.rule(platformer.PlatformerSpriteState.JumpingUp, platformer.PlatformerSpriteState.FacingRight, platformer.PlatformerSpriteState.Moving)
    )
    platformer.runFrames(
    mySprite,
    playerAnimList[5],
    100,
    platformer.rule(platformer.PlatformerSpriteState.JumpingUp, platformer.PlatformerSpriteState.FacingLeft)
    )
    platformer.runFrames(
    mySprite,
    playerAnimList[5],
    100,
    platformer.rule(platformer.PlatformerSpriteState.JumpingUp, platformer.PlatformerSpriteState.FacingLeft, platformer.PlatformerSpriteState.Moving)
    )
    platformer.runFrames(
    mySprite,
    playerAnimList[6],
    100,
    platformer.rule(platformer.PlatformerSpriteState.AfterJumpApex, platformer.PlatformerSpriteState.FacingRight, platformer.PlatformerSpriteState.Moving)
    )
    platformer.runFrames(
    mySprite,
    playerAnimList[6],
    100,
    platformer.rule(platformer.PlatformerSpriteState.AfterJumpApex, platformer.PlatformerSpriteState.FacingRight)
    )
    platformer.runFrames(
    mySprite,
    playerAnimList[7],
    100,
    platformer.rule(platformer.PlatformerSpriteState.AfterJumpApex, platformer.PlatformerSpriteState.FacingLeft, platformer.PlatformerSpriteState.Moving)
    )
    platformer.runFrames(
    mySprite,
    playerAnimList[7],
    100,
    platformer.rule(platformer.PlatformerSpriteState.AfterJumpApex, platformer.PlatformerSpriteState.FacingLeft)
    )
    platformer.runFrames(
    mySprite,
    playerAnimList[7],
    100,
    platformer.rule(platformer.PlatformerSpriteState.Falling, platformer.PlatformerSpriteState.FacingLeft)
    )
    platformer.runFrames(
    mySprite,
    playerAnimList[7],
    100,
    platformer.rule(platformer.PlatformerSpriteState.Falling, platformer.PlatformerSpriteState.FacingLeft, platformer.PlatformerSpriteState.Moving)
    )
    platformer.runFrames(
    mySprite,
    playerAnimList[6],
    100,
    platformer.rule(platformer.PlatformerSpriteState.Falling, platformer.PlatformerSpriteState.FacingRight)
    )
    platformer.runFrames(
    mySprite,
    playerAnimList[6],
    100,
    platformer.rule(platformer.PlatformerSpriteState.Falling, platformer.PlatformerSpriteState.FacingRight, platformer.PlatformerSpriteState.Moving)
    )
    platformer.loopFrames(
    mySprite,
    playerAnimList[8],
    100,
    platformer.rule(platformer.PlatformerSpriteState.OnWallRight, platformer.PlatformerSpriteState.WallSliding, platformer.PlatformerSpriteState.FacingRight)
    )
    platformer.loopFrames(
    mySprite,
    playerAnimList[9],
    100,
    platformer.rule(platformer.PlatformerSpriteState.OnWallLeft, platformer.PlatformerSpriteState.WallSliding, platformer.PlatformerSpriteState.FacingLeft)
    )
}
sprites.onOverlap(SpriteKind.playerAttack, SpriteKind.ore, function (sprite, otherSprite) {
    if (basicAttack == "pick") {
        otherSprite.setKind(SpriteKind.prop)
        timer.after(400, function () {
            if (!(spriteutils.isDestroyed(otherSprite))) {
                if (sprite.overlapsWith(otherSprite)) {
                    extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 100, 20, 20)
                    otherSprite.setKind(SpriteKind.ore)
                    sprites.destroy(otherSprite)
                } else {
                    otherSprite.setKind(SpriteKind.ore)
                }
            }
        })
    }
})
events.spriteEvent(SpriteKind.Player, SpriteKind.shopBuff, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    pickupTextSprite = textsprite.create("Press A To Purchase for $" + convertToText(shopPrices[Math.floor(otherSprite.z * 10)]))
    pickupTextSprite.x = otherSprite.x
    pickupTextSprite.y = otherSprite.y - 20
    pickupTextSprite.z = 5
    pickupTextSprite.setOutline(1, 15)
    pickupTextSprite.setKind(SpriteKind.pickupText)
    if (Math.floor(otherSprite.z * 10) == 9) {
        pickupTextSprite.y += 104
    }
    spawnItemText(Math.floor(otherSprite.z * 10), otherSprite.x - 30, otherSprite.y - 70)
})
function background (clouds: boolean) {
    scroller.setLayerImage(scroller.BackgroundLayer.Layer0,assets.image`nightSky`)
    if (clouds) {
        scroller.setLayerImage(scroller.BackgroundLayer.Layer1,assets.image`clouds`)
    }
}
function spawnItemText (num: number, x: number, y: number) {
    discriptoryText = fancyText.create("abc")
    discriptoryText.x = x
    discriptoryText.y = y
    discriptoryText.z = 5
    fancyText.setFont(discriptoryText, fancyText.bold_sans_7)
    fancyText.setMinLines(discriptoryText, 2)
    fancyText.setMaxWidth(discriptoryText, 100)
    if (num == 0) {
        fancyText.setText(discriptoryText, "Anhk - Start With an extra life at the beginning of each level")
    }
    if (num == 1) {
        fancyText.setText(discriptoryText, "Tiny Cleats - Boost ground speed; craming into tiny shoes costs 1 life")
    }
    if (num == 2) {
        fancyText.setText(discriptoryText, "Monkey Paw - Boosted Luck, careful what you wish for...")
    }
    if (num == 3) {
        fancyText.setText(discriptoryText, "Emerald Amulet - Remove Damage Stun")
    }
    if (num == 4) {
        fancyText.setText(discriptoryText, "Compass - Attracted to otherworldly powers")
    }
    if (num == 5) {
        fancyText.setText(discriptoryText, "Tatterted Scroll- Drains mana when still to summon a beam")
    }
    if (num == 6) {
        fancyText.setText(discriptoryText, "Hammer - Once wielded by The Boy Who Would Be Thunder")
    }
    if (num == 7) {
        fancyText.setText(discriptoryText, "Mana Crystal - Increase Max Mana by 1.2x")
    }
    if (num == 8) {
        fancyText.setText(discriptoryText, "Red Spade - Grants the ability to destroy projectiles with \"A\" attack")
        fancyText.setMaxWidth(discriptoryText, 120)
        discriptoryText.x += 5
    }
    if (num == 9) {
        fancyText.setText(discriptoryText, "Carnivorous Flower - Boost mana regen! Damage removes live mana")
        fancyText.setMaxWidth(discriptoryText, 110)
        discriptoryText.y += -10
        discriptoryText.x += 2
    }
    discriptoryText.setKind(SpriteKind.pickupText)
}
scene.onOverlapTile(SpriteKind.playerAttack, assets.tile`cobwebRipable`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`cobwebRipped`)
    tiles.setWallAt(location.getNeighboringLocation(CollisionDirection.Right), false)
})
sprites.onDestroyed(SpriteKind.stunnedEnemy, function (sprite) {
    if (level == 7 && enemyCap < 4 || level != 7 && level != 18) {
        enemyCap += 1
        for (let index = 0; index < randint(randint(luckyness, luckyness + 1), randint(luckyness + 2, luckyness + 3)); index++) {
            summonGold(sprite.x, sprite.y)
        }
    }
    if (sprite.z == 2.11) {
        for (let value of sprites.allOfKind(SpriteKind.hurt)) {
            if (value.z == -4.11 || (value.z == 3.11 || value.z == 3.01)) {
                extraEffects.createSpreadEffectOnAnchor(value, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 100)
                sprites.destroy(value)
            }
        }
    }
})
function finishLevel (delay: boolean) {
    if (!(dead)) {
        blockSettings.writeNumber("Level", blockSettings.readNumber("Level") + 1)
        blockSettings.writeString("Basic", basicAttack)
        blockSettings.writeNumber("Money", money)
        blockSettings.writeString("Super", specialAttack)
        blockSettings.writeString("Tome", storedSpell)
        color.startFade(color.originalPalette, color.Black, 500)
        if (hasBlueMushroom) {
            blockSettings.writeString("hasMushroom", "true")
        }
        if (hasCompass) {
            blockSettings.writeString("seeker", "true")
        }
        if (hasKnightHelmut) {
            blockSettings.writeString("knighted", "true")
        }
        if (shardObtained) {
            blockSettings.writeNumber("pieces", blockSettings.readNumber("pieces") + 1)
        }
        if (hasKey) {
            blockSettings.writeNumber("keys", blockSettings.readNumber("keys") + 1)
        }
        if (horseshoeFound) {
            blockSettings.writeNumber("Luck", blockSettings.readNumber("Luck") + 1)


        }
        for (let index = 0; index <= aquiredBuffs.length - 1; index++) {
            if (aquiredBuffs[index] == 0) {
                blockSettings.writeNumber("hasAnhk", 1)
            }
            if (aquiredBuffs[index] == 1) {
                blockSettings.writeString("shoe", "thomas!!!!")
            }
            if (aquiredBuffs[index] == 2) {
                blockSettings.writeNumber("Luck", blockSettings.readNumber("Luck") + 1)
            }
            if (aquiredBuffs[index] == 3) {
                blockSettings.writeString("ninjaSkill", "canDodge")
            }
            if (aquiredBuffs[index] == 5) {
                blockSettings.writeString("cyclops", "canDodge")
            }
            if (aquiredBuffs[index] == 7) {
                blockSettings.writeString("crystal", "power")
            }
            if (aquiredBuffs[index] == 8) {
                blockSettings.writeString("spade", "cheater")
            }
            if (aquiredBuffs[index] == 9) {
                blockSettings.writeString("teethFlower", "eating")
            }
        }
        if (delay) {
            music.play(music.createSoundEffect(WaveShape.Noise, 4162, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            timer.after(500, function () {
                game.reset()
            })
        } else {
            game.reset()
        }
    }
}
sprites.onDestroyed(SpriteKind.otherworldAttack, function (sprite) {
    if (specialAttack == "summon") {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100)
    }
    if (specialAttack == "icicle") {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 100)
    }
})
events.spriteEvent(SpriteKind.Player, SpriteKind.bossSpecial, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    if (level == 6 || level == 11) {
        pickupTextSprite = textsprite.create("Press A To Pickup")
        pickupTextSprite.x = otherSprite.x
        pickupTextSprite.y = otherSprite.y - 20
        pickupTextSprite.z = 5
        pickupTextSprite.setKind(SpriteKind.pickupText)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boomerang, function (sprite, otherSprite) {
    if (otherSprite.z == 1) {
        sprites.destroy(otherSprite)
    }
})
function tickEyeMovment () {
    if (eyeMovementOn) {
        miniBoss.x = Math.sin((game.runtime() - startMS) / 1000) * (192 / 2) + 760
    }
}
function stopSheild () {
    sheildStart = false
    sheilding = false
    timer.after(50, function () {
        if (!(dead || npcTalking)) {
            platformer.moveSprite(mySprite, true, speed)
            equipPlayerAnim(hasKnightHelmut, false)
        }
    })
}
events.spriteEvent(SpriteKind.Player, SpriteKind.shopItem, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    pickupTextSprite = textsprite.create("Press A To Purchase for $" + convertToText(shopPrices[Math.floor(otherSprite.z * 10)]))
    pickupTextSprite.x = otherSprite.x
    pickupTextSprite.y = otherSprite.y - 20
    pickupTextSprite.z = 5
    pickupTextSprite.setKind(SpriteKind.pickupText)
    spawnItemText(Math.floor(otherSprite.z * 10), otherSprite.x - 30, otherSprite.y - 70)
})
function summonGold (x: number, y: number) {
    propSprite = sprites.create(assets.image`goldIngot`, SpriteKind.prop)
    propSprite.setPosition(x, y)
    propSprite.fx = 75
    propSprite.vx = randint(randint(-60, -55), randint(55, 60))
    propSprite.ay = 120
    propSprite.vy = -10
    multilights.addLightSource(propSprite, 2, 5, 0)
    spriteutils.onSpriteUpdateInterval(propSprite, 500, function (sprite) {
        if (sprite.z == 0.1) {
            sprite.setKind(SpriteKind.gold)
        }
        sprite.z = 0.1
    })
}
function giveEnemyHp (_enum: Sprite, hp: number) {
    enemyHealthBar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    enemyHealthBar.setColor(2, 15, 3)
    enemyHealthBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    enemyHealthBar.attachToSprite(_enum)
    enemyHealthBar.setBarBorder(1, 14)
    enemyHealthBar.max = hp
    enemyHealthBar.value = hp
}
function welcomeEnding () {
    generateText("Welcome To Duat!", 170, anubisSprite.x - 38, anubisSprite.y - 50, 3100, true, true)
    anubisSprite.z = 3
    timer.after(3200, function () {
        anubisSprite.setKind(SpriteKind.anubis)
        finailBossHPBar = statusbars.create(250, 10, StatusBarKind.bossHP)
        finailBossHPBar.positionDirection(CollisionDirection.Top)
        finailBossHPBar.setColor(2, 15, 8)
        finailBossHPBar.setBarBorder(2, 14)
        finailBossHPBar.setLabel("ANUBIS", 12)
        finailBossHPBar.max = 1075
        finailBossHPBar.value = 1075
        finailBossHPBar.z = 1005
        finailBossHPBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        anubisQuery = true
        pauseUntil(() => !(anubisQuery))
        AnubisTrack()
        pause(3200)
        anubisSprite.setImage(assets.image`anubisFloat`)
        anubisSprite.ay = 0
        anubisSprite.fx = 50
        anubisSprite.fy = 50
        anubisSprite.vy = -45
        pause(100)
        anubisSprite.vx = 84
        for (let index = 0; index <= 3; index++) {
            timer.after(index * 200, function () {
                anubisFireball(anubisSprite.x - 17, anubisSprite.y - 20, 120, 0, true, 0)
                propSprite.setFlag(SpriteFlag.DestroyOnWall, true)
            })
        }
        pause(1000)
        anubisSprite.vy = -75
        pause(500)
        propImage = anubisSprite.image.clone()
        propImage.flipX()
        anubisSprite.setImage(propImage.clone())
        anubisSprite.vx = -150
        anubisSprite.setFlag(SpriteFlag.BounceOnWall, true)
        anubisSprite.setFlag(SpriteFlag.StayInScreen, true)
        anubisSprite.vy = 15
        for (let index = 0; index <= 5; index++) {
            timer.after(index * 200, function () {
                anubisFireball(anubisSprite.x + 17, anubisSprite.y - 20, 120, 0, true, 0)
            })
        }
        pause(2400)
        timer.background(function () {
            for (let index = 0; index <= 9; index++) {
                tiles.setTileAt(tiles.getTileLocation(index + 17, 8), assets.tile`chainHorizontal`)
                extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(14, ExtraEffectPresetShape.Spark), (index + 17) * 16, 128, 100, 12, 8)
            }
            for (let index = 0; index <= 3; index++) {
                tiles.setWallAt(tiles.getTileLocation(index + 20, 8), true)
            }
            for (let index = 0; index <= 2; index++) {
                tiles.setWallAt(tiles.getTileLocation(27, index + 5), false)
            }
            tiles.setTileAt(tiles.getTileLocation(20, 8), assets.tile`stoneFloorSingleLeft0`)
            tiles.setTileAt(tiles.getTileLocation(21, 8), assets.tile`stoneFloorSingle0`)
            tiles.setTileAt(tiles.getTileLocation(22, 8), assets.tile`stoneFloorSingle0`)
            tiles.setTileAt(tiles.getTileLocation(23, 8), assets.tile`stoneFloorSingleRight`)
            anubisSprite.vx = 80
            timer.after(500, function () {
                anubisMimic = true
                anubisSprite.fx = 0
                anubisSprite.fy = 0
            })
            spriteutils.onSpriteUpdateInterval(anubisSprite, 2000, function (sprite) {
                if (912 > mySprite.x) {
                    anubisFireball(1, 72, 83, 0, false, 0)
                    propSprite.ax = 5
                    anubisFireball(1, 96, 91, 0, false, 0)
                    propSprite.ax = 5
                    anubisFireball(1, 120, 83, 0, false, 0)
                    propSprite.ax = 5
                }
            })
            pauseUntil(() => 932 < mySprite.x)
            sprites.destroyAllSpritesOfKind(SpriteKind.hurt)
            anubisSprite.vy = 80
            anubisSprite.fy = 100
            anubisSprite.x += 10
            pauseUntil(() => mySprite.isHittingTile(CollisionDirection.Bottom))
            pause(250)
            spriteutils.onSpriteUpdateInterval(anubisSprite, 1500, function (sprite) {
                if (finailBossHPBar.value == finailBossHPBar.max) {
                    for (let index = 0; index <= 3; index++) {
                        anubisFireball(anubisSprite.x + 17, anubisSprite.y - 20, index * 40 + 60, 0, true, 0)
                    }
                }
            })
            pauseUntil(() => finailBossHPBar.value != finailBossHPBar.max)
            anubisMimic = false
            anubisSprite.setFlag(SpriteFlag.StayInScreen, false)
            anubisSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
            anubisSprite.vy = 240
            anubisSprite.ay = 50
            anubisSprite.z = -10
            pause(1500)
            for (let index = 0; index <= 5; index++) {
                propSprite = sprites.create(assets.image`evilScarab`, SpriteKind.trident)
                propSprite.vy = -90 + 10 * index
                propSprite.ay = 10
                propSprite.ax = 50
                tiles.placeOnTile(propSprite, tiles.getTileLocation(index + 56, 13))
                propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                if (index > 2) {
                    propSprite.ax = -50
                    propSprite.vy += -30
                    tiles.placeOnTile(propSprite, tiles.getTileLocation(index + 69, 13))
                }
            }
            pause(1500)
            for (let value of sprites.allOfKind(SpriteKind.trident)) {
                if (sprites.allOfKind(SpriteKind.trident).indexOf(value) <= 2) {
                    timer.after(sprites.allOfKind(SpriteKind.trident).indexOf(value) * 550, function () {
                        value.ax = 0
                        value.setFlag(SpriteFlag.DestroyOnWall, true)
                        spriteutils.setVelocityAtAngle(value, spriteutils.angleFrom(value, mySprite), 150)
                        value.setFlag(SpriteFlag.GhostThroughWalls, false)
                        value.setKind(SpriteKind.hurt)
                    })
                } else {
                    timer.after(sprites.allOfKind(SpriteKind.trident).indexOf(value) * 500 - 1000, function () {
                        value.ax = 0
                        value.setFlag(SpriteFlag.DestroyOnWall, true)
                        spriteutils.setVelocityAtAngle(value, spriteutils.angleFrom(value, mySprite), 150)
                        value.setFlag(SpriteFlag.GhostThroughWalls, false)
                        value.setKind(SpriteKind.hurt)
                    })
                }
            }
            pause(3200)
            if (!(dead)) {
                anubisSprite.vy = -180
                anubisSprite.vx = 0
                anubisSprite.ay = 0
                anubisSprite.fy = 100
                anubisSprite.fx = 100
                anubisSprite.setPosition(1052, scene.cameraProperty(CameraProperty.Bottom))
                pause(1000)
                anubisSprite.z = 3
                generateText("<shake>Give Up!", 170, anubisSprite.x, anubisSprite.y - 50, 2900, true, true)
                platformer.setConstant(mySprite, platformer.PlatformerConstant.MovementAcceleration, 450)
                pause(3000)
                for (let index = 0; index <= 2; index++) {
                    tiles.setTileAt(tiles.getTileLocation(74 + index * 3, 11), assets.tile`standaloneTile`)
                    tiles.setWallAt(tiles.getTileLocation(74 + index * 3, 11), true)
                    extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(14, ExtraEffectPresetShape.Spark), 1184 + index * 32, 176, 100)
                }
                anubisSprite.fx = 0
                anubisSprite.fy = 0
                spriteutils.moveTo(anubisSprite, spriteutils.pos(scene.cameraProperty(CameraProperty.Left) + 45, scene.cameraProperty(CameraProperty.Top) + 85), 400)
                pause(400)
                anubisMimic = true
                spriteutils.onSpriteUpdateInterval(anubisSprite, 7000, function (sprite) {
                    if (randint(1, 2) == 1 && mySprite.tilemapLocation().row > 5) {
                        propNumber = randint(3, 5)
                        for (let index = 0; index <= 5; index++) {
                            anubisFireball(scene.cameraProperty(CameraProperty.Left) + (16 * propNumber + index * 48), scene.cameraProperty(CameraProperty.Top), 0, 90, false, 0)
                            propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                            propSprite.lifespan = 6800
                            propSprite.ay = 100
                        }
                    } else {
                        if (mySprite.tilemapLocation().row != 14) {
                            anubisFireball(scene.cameraProperty(CameraProperty.Left), mySprite.y, 85, 0, false, 0)
                            propSprite.lifespan = 6800
                            propSprite.ax = 160
                            propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                            anubisFireball(scene.cameraProperty(CameraProperty.Right), mySprite.y, -85, 0, false, 0)
                            propSprite.lifespan = 6800
                            propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                            propSprite.ax = -160
                        }
                    }
                })
                spriteutils.onSpriteUpdateInterval(anubisSprite, 2000, function (sprite) {
                    anubisFireball(anubisSprite.x + 17, anubisSprite.y - 20, 83, 0, true, 0)
                    propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                    propSprite.lifespan = 6800
                })
                pauseUntil(() => finailBossHPBar.value == 0 || mySprite.x > 3952)
                if (finailBossHPBar.value == 0) {
                    sprites.destroyAllSpritesOfKind(SpriteKind.hurt)
                    sprites.destroyAllSpritesOfKind(SpriteKind.basicEnemy)
                    sprites.destroyAllSpritesOfKind(SpriteKind.stunnedEnemy)
                    extraEffects.createSpreadEffectOnAnchor(anubisSprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Explosion), 100, 60, 25)
                    sprites.destroy(anubisSprite)
                    explosionNoise()
                    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
                    timer.after(800, function () {
                        finishLevel(true)
                    })
                } else {
                    spriteutils.onSpriteUpdateInterval(anubisSprite, 800, function (sprite) {
                        anubisFireball(anubisSprite.x + 17, anubisSprite.y - 20, 120, 0, true, 0)
                        propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                        propSprite.lifespan = 6800
                    })
                }
            }
        })
    })
}
sprites.onOverlap(SpriteKind.boomerang, SpriteKind.pot, function (sprite, otherSprite) {
    otherSprite.vy = -35
    otherSprite.setKind(SpriteKind.prop)
    timer.after(200, function () {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100, 20, 10)
        otherSprite.setKind(SpriteKind.pot)
        sprites.destroy(otherSprite)
    })
})
sprites.onOverlap(SpriteKind.anubis, SpriteKind.otherworldAttack, function (sprite, otherSprite) {
    fakeAnubisHit(otherSprite, true, true)
})
sprites.onDestroyed(SpriteKind.redOre, function (sprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 2823, 0, 124, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    propSprite = sprites.create(assets.image`cutDiamond`, SpriteKind.prop)
    propSprite.setPosition(sprite.x, sprite.y)
    propSprite.fx = 75
    propSprite.vx = randint(-40, 40)
    propSprite.ay = 120
    propSprite.vy = -10
    spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 1, 5)
    })
    spriteutils.onSpriteUpdateInterval(propSprite, 600, function (sprite) {
        if (sprite.z == 0.1) {
            sprite.z = 0.2
            timer.background(function () {
                pauseUntil(() => mySprite.overlapsWith(sprite))
                hasDiamond = true
                sprites.destroy(sprite)
            })
        }
        if (sprite.z == 0) {
            sprite.z = 0.1
        }
    })
})
function preistAttack (num: number, x: number, y: number, hurtNum: number) {
    if (num == 1) {
        for (let index = 0; index <= hurtNum - 1; index++) {
            timer.after(index * 160, function () {
                for (let index2 = 0; index2 <= 1; index2++) {
                    propSprite = sprites.create(preistWeaponImage, SpriteKind.hurt)
                    propSprite.setPosition(x, y)
                    extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Cloud), x, y, 100, 48, 5)
                    propSprite.setFlag(SpriteFlag.AutoDestroy, true)
                    propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                    propSprite.vy = 80
                    propSprite.ay = 2
                    propSprite.vx = -100
                    if (index2 == 1) {
                        propSprite.vx = 100
                    }
                    propSprite.ax = propSprite.vx * -1.5
                }
            })
        }
    }
    if (num == 2) {
        propSprite = sprites.create(preistWeaponImage, SpriteKind.hurt)
        propSprite.setPosition(x, y)
        propSprite.setFlag(SpriteFlag.AutoDestroy, true)
        propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        spriteutils.setVelocityAtAngle(propSprite, spriteutils.angleFrom(propSprite, mySprite), hurtNum)
    }
    if (num == 3) {
        for (let index = 0; index <= 9; index++) {
            propSprite = sprites.create(preistWeaponImage, SpriteKind.hurt)
            propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
            extraEffects.createSpreadEffectOnAnchor(propSprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Cloud), 100)
            propSprite.lifespan = 8000
            spriteutils.placeAngleFrom(
            propSprite,
            spriteutils.degreesToRadians(hurtNum) + spriteutils.degreesToRadians(index * 36),
            190,
            mySprite
            )
            spriteutils.setVelocityAtAngle(propSprite, spriteutils.degreesToRadians(hurtNum) + spriteutils.degreesToRadians(index * 36), -20)
            propSprite.ax = propSprite.vx * 1.5
            propSprite.ay = propSprite.vy * 1.5
        }
    }
    if (num == 4) {
        for (let index = 0; index <= 2; index++) {
            propSprite = sprites.create(preistWeaponImage, SpriteKind.hurt)
            propSprite.setPosition(x, y)
            propSprite.setFlag(SpriteFlag.AutoDestroy, true)
            propSprite.setFlag(SpriteFlag.BounceOnWall, true)
            propSprite.ax = (index - 1) * 80
            propSprite.vy = -60
            propSprite.lifespan = 4500
            spriteutils.onSpriteUpdateInterval(propSprite, 1000, function (sprite) {
                if (sprite.lifespan < 3100 && sprite.lifespan > 2500) {
                    sprite.ax = 0
                    spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, mySprite), 150)
                    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                }
            })
        }
    }
}
function loadLevel (num: number) {
    level = num
    if (num == 1) {
        tiles.setCurrentTilemap(tilemap`tutroial`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 9))
        summonWeapon(34, 11, 0)        
        platformer.moveSprite(mySprite, false, 0)
        npcTalking = false
        if (!blockSettings.exists("difficultySelected")) {
            timer.background(function() {
                propImage = image.create(320, 260)
                propImage.fill(15)
                blockerSprite = sprites.create(propImage.clone(), SpriteKind.prop)
                let difficultyMenu = miniMenu.createMenu(miniMenu.createMenuItem("Explorer",assets.image`mapSelect`), miniMenu.createMenuItem("Mercenary", assets.image`swordSelect`), miniMenu.createMenuItem("Mortal", assets.image`skullSelect`))
                selectingDifficulty = true
                miniMenu.setFrame(difficultyMenu,assets.image`textFrame`)
                difficultyMenu.z = 999
                miniMenu.setMenuStyleProperty(difficultyMenu, miniMenu.MenuStyleProperty.Width, 125)
                miniMenu.setMenuStyleProperty(difficultyMenu, miniMenu.MenuStyleProperty.Height, 37)
                miniMenu.setMenuStyleProperty(difficultyMenu, miniMenu.MenuStyleProperty.Rows, 1)
                miniMenu.setMenuStyleProperty(difficultyMenu, miniMenu.MenuStyleProperty.Columns, 3)
                miniMenu.setStyleProperty(difficultyMenu, miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 12)
                miniMenu.setStyleProperty(difficultyMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 15)
                miniMenu.setStyleProperty(difficultyMenu, miniMenu.StyleKind.All, miniMenu.StyleProperty.IconOnly, 1)
                miniMenu.setStyleProperty(difficultyMenu, miniMenu.StyleKind.All, miniMenu.StyleProperty.Margin, 0)
                miniMenu.setStyleProperty(difficultyMenu, miniMenu.StyleKind.All, miniMenu.StyleProperty.Padding, 0)
                difficultyMenu.y = 80
                difficultyMenu.x = 160
                difficultyText = fancyText.create("replace", 230, 1, fancyText.bold_sans_7)                
                miniMenu.onSelectionChanged(difficultyMenu, function(selection: string, selectedIndex: number) {
                    selectedDifficulty = selectedIndex + 1
                })
                miniMenu.onButtonPressed(difficultyMenu, miniMenu.Button.A, function(selection: string, selectedIndex: number) {
                    selectingDifficulty = false
                    miniMenu.close(difficultyMenu)
                    sprites.destroy(blockerSprite)
                    sprites.destroy(difficultyText)
                    blockSettings.writeNumber("difficulty", selectedDifficulty)
                    blockSettings.writeString("difficultySelected", "true")
                    if (blockSettings.readNumber("difficulty") == 2) {
                        lives += -1
                    }
                    npcTalking = false
                    platformer.moveSprite(mySprite, true, speed)

                })


            })
        } else {
            npcTalking = false
            platformer.moveSprite(mySprite, true, speed)

        }


        background(true)
        openIntroText()
        timer.background(function () {
            pauseUntil(() => basicAttack == "cut")
            promptText = textsprite.create("Press A To Cut")
            tiles.placeOnTile(promptText, tiles.getTileLocation(37, 6))
        })
        playTrack(1)
    }
    if (num == 2) {
        background(true)
        tiles.setCurrentTilemap(tilemap`hallowedProtection`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 8))
        summonWeapon(88, 35, 1)
        timer.background(function () {
            pauseUntil(() => 1205 < mySprite.x && 256 > mySprite.y)
            platformer.moveSprite(mySprite, false, 0)
            orcleCutscene(1)
        })
        playTrack(4)
    }
    if (num == 3) {
        playTrack(4)
        background(true)
        backgroundCharaImage =assets.image`sultanShopkeeper`
        tiles.setCurrentTilemap(tilemap`firstShop`)
        if (blockSettings.readNumber("difficulty") == 1) {
            tiles.setTileAt(tiles.getTileLocation(104, 12), assets.tile`lavatile`)
            tiles.setTileAt(tiles.getTileLocation(105, 12), assets.tile`lavatile`)
            tiles.setTileAt(tiles.getTileLocation(106, 12), assets.tile`lavatile`)

        }
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 9))
        loadShop(1)
        trueNorth(47, 20)
        timer.background(function () {
            pauseUntil(() => 95 > spriteutils.distanceBetween(mySprite, miniBoss))
            startEyeBoss()
        })
    }
    if (num == 4) {
        background(true)
        tiles.setCurrentTilemap(tilemap`lunarArena`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 11))
        moonSprite = sprites.create(moonImages[0], SpriteKind.prop)
        moonSprite.y += -75
        timer.background(function () {
            pauseUntil(() => mySprite.x > 183)
            moonKnight()
        })
    }
    if (num == 5) {
        tiles.setCurrentTilemap(tilemap`jungleIntro`)
        scripNPCs(4)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(18, 0))
        mySprite.vy = 120
        playTrack(6)
        timer.background(function() {
            jungleCrypt()
        })

    }
    if (num == 6) {
        tiles.setCurrentTilemap(tilemap`blueMushroomGrove`)
        backgroundCharaImage =assets.image`hollowed`
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 9))
        propSprite = sprites.create(assets.image`anubisMural`, SpriteKind.prop)
        tiles.placeOnTile(propSprite, tiles.getTileLocation(61, 6))
        propSprite.z = -7
        propSprite.x += 6
        playTrack(1)
        loadShop(2)
        if (blockSettings.readNumber("difficulty") == 1) {
            tiles.setTileAt(tiles.getTileLocation(53, 28), assets.tile`floweryVines`)
            tiles.setTileAt(tiles.getTileLocation(53, 29), assets.tile`floweryVines`)
            tiles.setWallAt(tiles.getTileLocation(53, 28), true)
            tiles.setWallAt(tiles.getTileLocation(53, 29), true)

        }

        propSprite = sprites.create(assets.image`blueMushroomLarge`, SpriteKind.bossSpecial)
        propSprite.z = 1
        tiles.placeOnTile(propSprite, tiles.getTileLocation(17, 35))
        trueNorth(17, 34)
        spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
            extraEffects.createSpreadEffectOnAnchor(sprite, blueMushroomEffect, 100, 48, 2)
        })
        keySprite = sprites.create(assets.image`keyCollectable`, SpriteKind.prop)
        tiles.placeOnTile(keySprite, tiles.getTileLocation(90, 12))
        spriteutils.onSpriteUpdateInterval(keySprite, 500, function (sprite) {
            extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Twinkle), 1000, 30, 20)
        })
        timer.background(function () {
            pauseUntil(() => mySprite.x > 1360)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(85, 13))
            theTruth()
            pauseUntil(() => mySprite.overlapsWith(keySprite))
            hasKey = true
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            sprites.destroy(keySprite)
        })
    }
    if (num == 7) {
        tiles.setCurrentTilemap(tilemap`golemChamber`)
        playTrack(6)
        backgroundCharaImage =assets.image`biclops`
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 29))
        alterDetector = sprites.create(assets.image`nullImage`, SpriteKind.prop)
        tiles.placeOnTile(alterDetector, tiles.getTileLocation(16, 30))
        alterDetector.x += 8
        alterText = textsprite.create("    Nothing To Sacrifice...")
        if (hasBlueMushroom) {
            alterText.setText("Press A To Sacrifice Mushroom")
        }
        tiles.placeOnTile(alterText, tiles.getTileLocation(15, 27))
        alterText.x += 10
        alterText.y += -6
        timer.background(function () {
            pause(1000)
            pauseUntil(() => 120 > spriteutils.distanceBetween(mySprite, miniBoss))
            golemBoss()
        })
        loadShop(6)
    }

    if (num == 8) {
        background(true)
        tiles.setCurrentTilemap(tilemap`village`)
        playTrack(2)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(22, 22))
        summonWeapon(82, 36, 5)
        commemberationText = fancyText.create("Snake Eye's Casino", 100, 9, fancyText.bold_sans_7)
        tiles.placeOnTile(commemberationText, tiles.getTileLocation(62, 35))
        if (!(blockSettings.readString("Tome") == "sheild" || blockSettings.readString("Super") == "sheild" )) {
            summonSuperPickup(86, 36, 0)
        } else {
            summonSuperPickup(86, 36, 1)
        }
        if ((blockSettings.readString("Basic") != "pick")) {
            summonWeapon(89, 36, 2)
        } else {
            summonWeapon(89, 36, 1)
        }
        if (blockSettings.readNumber("difficulty") == 1) {
            tiles.setTileAt(tiles.getTileLocation(65, 36), assets.tile`floweryVines`)
            tiles.setTileAt(tiles.getTileLocation(65, 37), assets.tile`floweryVines`)
            tiles.setWallAt(tiles.getTileLocation(65, 36), true)
            tiles.setWallAt(tiles.getTileLocation(65, 37), true)

        }
        scripNPCs(1)
        loadShop(3)
        birdSprite = sprites.create(assets.image`birdIdle`, SpriteKind.prop)
        birdSprite.z = -5
        tiles.placeOnTile(birdSprite, tiles.getTileLocation(1, 11))
        timer.background(function () {
            pauseUntil(() => mySprite.x > 900 && killedBandit && mySprite.y < 300)
            npcText(1)
        })
        timer.background(function () {
            pauseUntil(() => mySprite.x > 1382 && mySprite.y < 300)
            preistEncounter()
        })
    }
    if (num == 9) {
        background(true)
        tiles.setCurrentTilemap(tilemap`fightPreist`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 10))
        preistBoss()
    }
    if (num == 10) {
        background(false)
        tiles.setCurrentTilemap(tilemap`thunderStruck`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 24))
        scripNPCs(2)
        loadShop(4)
        summonSuperPickup(19, 2, 7)
        promptText = textsprite.create("Clouds Grant Double Jump")
        tiles.placeOnTile(promptText, tiles.getTileLocation(23, 27))
        playTrack(9)
        propSprite = sprites.create(assets.image`presitGatekeeping`, SpriteKind.prop)
        propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        tiles.placeOnTile(propSprite, tiles.getTileLocation(97, 7))
        spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
            if (spriteutils.distanceBetween(mySprite, sprite) < 50 && sprite.vx == 0) {
                sprite.setFlag(SpriteFlag.AutoDestroy, true)
                sprite.vx = 190
                promptText = textsprite.create("Locked...")
                tiles.placeOnTile(promptText, tiles.getTileLocation(96, 5))
                if (blockSettings.readNumber("keys") == 1) {
                    promptText.setText("Press A To Unlock")
                    tiles.placeOnTile(promptText, tiles.getTileLocation(94, 5))
                    timer.background(function () {
                        pauseUntil(() => 1506 < mySprite.x && controller.A.isPressed())
                        blockSettings.writeNumber("Level", 15)
                        finishLevel(false)
                        mySprite.x += 10
                    })
                }
            }
        })
    }
    if (num == 11) {
        background(false)
        scripNPCs(3)
        tiles.setCurrentTilemap(tilemap`knightOfYourLife`)
        trueNorth(20, 2)
        summonSuperPickup(64, 10, 5)
        if (blockSettings.exists("confrontation")) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(71, 10))
        } else {
            if (blockSettings.exists("armorQuest")) {
                tiles.placeOnTile(mySprite, tiles.getTileLocation(36, 24))
            } else {
                tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 22))
            }
        }
        playTrack(9)
    }
    if (num == 12) {
        background(false)
        playTrack(1)
        tiles.setCurrentTilemap(tilemap`templeEntrance`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 20))
        commemberationText = fancyText.create("RIP Centaurus Four", 150, 9, fancyText.bold_sans_7)
        tiles.placeOnTile(commemberationText, tiles.getTileLocation(104, 25))
        playTrack(1)
        timer.background(function () {
            if (hasKnightHelmut) {
                pauseUntil(() => mySprite.x > 410)
                orcleCutscene(2)
                platformer.setGravity(400)
            } else {
                tiles.setTileAt(tiles.getTileLocation(27, 15), assets.tile`transparency16`)
            }
        })
    }
    if (num == 13) {
        tiles.setCurrentTilemap(tilemap`anubisChamber`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 11))
        summonAnubis(219, 159)
        playTrack(7)
        timer.background(function () {
            pauseUntil(() => mySprite.x > 85)
            judgement()
        })
    }
    if (num == 14) {
        CanPlaySong = true
        tiles.setCurrentTilemap(tilemap`duatRunway`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 7))
        summonAnubis(192, 95)
        welcomeEnding()
        playTrack(10)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`chainBackground`)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer3, assets.image`chainTwo`)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer4, transformSprites.scale2x(assets.image`chainsThree`))
    }
    if (num == 15) {
        tiles.setCurrentTilemap(tilemap`victory`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 10))
        playTrack(1)
        music.setVolume(20)
        background(false)
        trueEnd()
    }
    if (num == 16) {
        tiles.setCurrentTilemap(tilemap`dungeon`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 12))
        multilights.toggleLighting(true)
        backgroundCharaImage =assets.image`clothier`
        commemberationText = fancyText.create("Anubis Misses His Nipples", 150, 13, fancyText.bold_sans_7)
        tiles.placeOnTile(commemberationText, tiles.getTileLocation(6, 3))
        loadShop(5)
    }
    if(num == 17 ) {
        tiles.setCurrentTilemap(assets.tilemap`chasingTraitor`)
        multilights.toggleLighting(true)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 20))
        playTrack(12)
    }
    if(num == 18) {
        multilights.toggleLighting(true)
        tiles.setCurrentTilemap(tilemap`sethArena`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 5))
        sethSprite = sprites.create(assets.image`preistMangledLeft`, SpriteKind.prop)
        tiles.placeOnTile(sethSprite, tiles.getTileLocation(13, 5))
        timer.background(function() {
            pauseUntil(() => mySprite.x >= 110)
            sethEncounter()
        })
    }
    if (num != 15) {
        populateTiles()
    }
    attractedSprite = sprites.create(assets.image`compassIndication`, SpriteKind.prop)
    attractedSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    for (let value of tiles.getTilesByType(assets.tile`ghostSpawnBoss`)) {
        propSprite = sprites.create(assets.image`ectoplasm`, SpriteKind.soul)
        animation.runImageAnimation(
        propSprite,
        assets.animation`ghostFloat`,
        200,
        true
        )
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.placeOnTile(propSprite, value)
        propSprite.y += 5
        propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        spriteutils.onSpriteUpdateInterval(propSprite, 500, function (sprite) {
            extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 1000, 20, 5)
        })
    }
}
function resetDeck() {
    playerOneScore = 0
    dealerScore = 0 
    playerCardAmount = 0
    dealerCardAmount = 0
    for (let suitSelection = 0; suitSelection <= 3; suitSelection++) {
        for (let rankSelection = 0; rankSelection <= 12; rankSelection++) {
            deck.push([suitSelection + 1,rankSelection + 1,])
        }
    }

}
function drawCard(playerNum: number, burn: boolean, suit: number, rank: number) {
    suitImageList = [assets.image`suitSpade`, assets.image`suitHeart`, assets.image`suitDiamond`, assets.image`suitClub`]
    rankImageList = [assets.image`rankOne`, assets.image`rankTwo`, assets.image`rankThree`, assets.image`rankFour`, assets.image`rankFive`, assets.image`rankSix`, assets.image`rankSeven`, assets.image`rankEight`, assets.image`rankNine`, assets.image`rankTen`, assets.image`rankEleven`, assets.image`rankTwelve`, assets.image`rankThirteen`]
    propImage = assets.image`cardFlipped`
    spriteutils.drawTransparentImage(rankImageList[rank - 1], propImage, 5, 6)
    spriteutils.drawTransparentImage(suitImageList[suit - 1], propImage, 8, 15)
    propSprite = sprites.create(propImage.clone(), SpriteKind.drawnCard)
    propSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    propSprite.setPosition(215, 70)
    drawnCardRank = Math.constrain(rank, 1, 10)
    if (burn) {        
        timer.background(function() {
            easing.easeTo(propSprite, 215, 130, 800, easing.Mode.InSine)

            pause(1200)

            
            animation.runImageAnimation(sprites.allOfKind(SpriteKind.drawnCard)[0], assets.animation`cardBurn`, 100, false)
            sprites.allOfKind(SpriteKind.drawnCard)[0].lifespan = 1400
        })
        
    } else {
        if (playerNum == 1) {
            easing.easeTo(propSprite, 140 + (playerCardAmount * 7), 110 + (playerCardAmount * 7), 600, easing.Mode.InSine)
            playerCardAmount += 1
            if (drawnCardRank == 1 && playerOneScore + 11 <= 21) {
                drawnCardRank = 11
                playerCollctedAces += 1
            }
            playerOneScore += drawnCardRank            
            while (playerOneScore > 21 && playerCollctedAces > 0) {
                playerCollctedAces += -1
                playerOneScore += -10                
            }
        }
        if (playerNum == 2) {
            easing.easeTo(propSprite, 270 + (dealerCardAmount * 7), 110 + (dealerCardAmount * 7), 600, easing.Mode.InSine)
            dealerCardAmount += 1
            if (drawnCardRank == 1 && dealerScore + 11 <= 21) {
                drawnCardRank = 11
            }
            dealerScore += drawnCardRank
            while (dealerScore > 21 && dealerCollctedAces > 0) {
                dealerCollctedAces += -1
                dealerScore += -10
            }
        }
    }
}


function blackJack() {
    mySprite.vx = 0
    for (let value of sprites.allOfKind(SpriteKind.gambleText)) {
        sprites.destroy(value)
    }
    npcTalking = true
    platformer.moveSprite(mySprite, false)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(69, 36))
    startAddiction = false
    addicted = true
    blackjackFocused = false
    playerCollctedAces = 0
    dealerCollctedAces = 0
    resetDeck()
    gamblePot = 2
    money += -1
    sprites.destroy(sprites.allOfKind(SpriteKind.gambleText)[0])
    gamblingMenu = miniMenu.createMenu(miniMenu.createMenuItem("Bet 1$"), miniMenu.createMenuItem("Bet 3$"), miniMenu.createMenuItem("Stand"))
    gamblingMenu.setFlag(SpriteFlag.RelativeToCamera, true)
    miniMenu.setFrame(gamblingMenu, assets.image`textFrame`)
    gamblingMenu.z = 999
    miniMenu.setStyleProperty(gamblingMenu, miniMenu.StyleKind.All, miniMenu.StyleProperty.Padding, 0)
    miniMenu.setStyleProperty(gamblingMenu, miniMenu.StyleKind.All, miniMenu.StyleProperty.Margin, 0)
    miniMenu.setMenuStyleProperty(gamblingMenu, miniMenu.MenuStyleProperty.Rows, 1)
    miniMenu.setMenuStyleProperty(gamblingMenu, miniMenu.MenuStyleProperty.Columns, 1)
    miniMenu.setMenuStyleProperty(gamblingMenu, miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
    miniMenu.setMenuStyleProperty(gamblingMenu, miniMenu.MenuStyleProperty.Width, 96)
    miniMenu.setMenuStyleProperty(gamblingMenu, miniMenu.MenuStyleProperty.Height, 40)
    miniMenu.setStyleProperty(gamblingMenu, miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 1)
    miniMenu.setTitle(gamblingMenu, "Press A To:")
    miniMenu.setButtonEventsEnabled(gamblingMenu, false)
    gamblingMenu.setPosition(-80, 90)
    cardIndex = randint(0, deck.length - 1)
    drawCard(1, true, deck[cardIndex][0], deck.removeAt(cardIndex)[1])
    blackjackScoreText = fancyText.create("0/21")
    blackjackScoreText.setKind(SpriteKind.gambleText)
    blackjackScoreText.setPosition(150, 73)
    blackjackScoreText.setFlag(SpriteFlag.RelativeToCamera, true)
    dealerScoreText = fancyText.create("0/21")
    dealerScoreText.setKind(SpriteKind.gambleText)
    dealerScoreText.setPosition(270, 73)
    dealerScoreText.setFlag(SpriteFlag.RelativeToCamera, true)
    blackjackPotText = textsprite.create("x0 In Pot")
    blackjackPotText.setKind(SpriteKind.gambleText)
    blackjackPotText.setPosition(205, 45)
    blackjackPotText.setFlag(SpriteFlag.RelativeToCamera, true)
    blackjackPotText.setIcon(assets.image`coinImage`)

    timer.background(function() {
        pause(2600)
        cardIndex = randint(0, deck.length - 1)
        drawCard(1, false, deck[cardIndex][0], deck.removeAt(cardIndex)[1])
        pause(400)
        cardIndex = randint(0, deck.length - 1)
        drawCard(2, false, deck[cardIndex][0], deck.removeAt(cardIndex)[1])
        pause(400)
        cardIndex = randint(0, deck.length - 1)
        drawCard(1, false, deck[cardIndex][0], deck.removeAt(cardIndex)[1])
        pause(400)
        blackjackFocused = true

        miniMenu.onButtonPressed(gamblingMenu, miniMenu.Button.A, function(selection: string, selectedIndex: number) {
            if (blackjackFocused) {
                if (selectedIndex == 0 && money > 0 || selectedIndex == 1 && money > 2) {
                    if (selectedIndex == 0) {
                        money += -1
                        gamblePot += 2

                    } else {
                        money += -3
                        gamblePot += 6
                    }
                    blackjackFocused = false
                    cardIndex = randint(0, deck.length - 1)
                    drawCard(1, false, deck[cardIndex][0], deck.removeAt(cardIndex)[1])
                    pause(1000)


                }
                if (playerOneScore > 21) {
                    endCardGame(false)
                } else {
                    if (16 < dealerScore) {
                        blackjackFocused = false
                        cardIndex = randint(0, deck.length - 1)
                        drawCard(2, false, deck[cardIndex][0], deck.removeAt(cardIndex)[1])
                        pause(1000)
                        blackjackFocused = true
                    }
                    if (selectedIndex == 2) {
                        blackjackFocused = false
                        while (16 > dealerScore && playerOneScore > dealerScore) {
                            cardIndex = randint(0, deck.length - 1)
                            drawCard(2, false, deck[cardIndex][0], deck.removeAt(cardIndex)[1])
                            pause(1000)

                        }
                        if (playerOneScore <= dealerScore && dealerScore <= 21) {
                            endCardGame(false)
                        }
                        if (playerOneScore > dealerScore && dealerScore > 15) {
                            endCardGame(true)
                        }
                    }
                    if (21 < dealerScore) {
                        endCardGame(true)
                    }
                    pause(100)
                    if (addicted && !(selectedIndex == 2)) {
                        blackjackFocused = true
                    }
                }
            }
        })
    })

}
function endCardGame(won: boolean) {
    miniMenu.close(gamblingMenu)
    for (let value of sprites.allOfKind(SpriteKind.drawnCard)) {
        value.ax = 200
        value.lifespan = 2000
    }
    for (let value of sprites.allOfKind(SpriteKind.gambleText)) {
        value.ax = -240
        value.lifespan = 2000
    }
    if (won) {
        for (let i = 1; i <= gamblePot; i++) {
            summonGold(mySprite.x - 10, mySprite.y - 50)
            pause(100)
            
            

        }
        blackJackWins += 1
        if (blackJackWins == 1) {
            doorOpen(76, 35)
        } else if (blackJackWins == 2) {
            doorOpen(80, 35)
        } else {
            doorOpen(84, 35)
        }
    }
    npcTalking = false
    platformer.moveSprite(mySprite, true, speed)
    startAddiction = false
    addicted = false
    blackjackFocused = false

}
function doorOpen(col: number, row: number) {
    for (let i = 0; i < 3; i++) {
        
        tiles.setTileAt(tiles.getTileLocation(col, i + row), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(col, i + row), false)
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(14, ExtraEffectPresetShape.Spark), col * 16, (row + i) * 16, 100, 12, 8)
        
    }
}
function summonLightning(x: number, y: number) {
    lightningPositionList = [x - 2, y + 4, x + randint(-30, 30), x + randint(-55, 55)]
    lightningStriking = true
    timer.after(300, function() {
        lightningStriking = false
    })
    explosionNoise()
    
}
spriteutils.createRenderable(10, function(screen: Image) {
    if (lightningStriking) {
        screen.drawLine(lightningPositionList[3] - scene.cameraProperty(CameraProperty.Left), 0 - scene.cameraProperty(CameraProperty.Top), lightningPositionList[2] - scene.cameraProperty(CameraProperty.Left), (lightningPositionList[1] - scene.cameraProperty(CameraProperty.Top)) / 2, 5)
        screen.drawLine(lightningPositionList[2] - scene.cameraProperty(CameraProperty.Left), (lightningPositionList[1] - scene.cameraProperty(CameraProperty.Top)) / 2, lightningPositionList[0] - scene.cameraProperty(CameraProperty.Left), lightningPositionList[1] - scene.cameraProperty(CameraProperty.Top), 5)
    }
})
function playTrack (num: number) {
    music.stopAllSounds()
    if (num == 1) {
        music.play(music.createSong(assets.song`introMusic`), music.PlaybackMode.LoopingInBackground)
    }
    if (num == 2) {
        music.play(music.createSong(assets.song`townTheme`), music.PlaybackMode.LoopingInBackground)
    }
    if (num == 3) {
        music.play(music.createSong(assets.song`cultistTheme`), music.PlaybackMode.LoopingInBackground)
    }
    if (num == 4) {
        music.play(music.createSong(assets.song`midnightTheme`), music.PlaybackMode.LoopingInBackground)
    }
    if (num == 5) {
        music.play(music.createSong(assets.song`falconFury`), music.PlaybackMode.LoopingInBackground)
    }
    if (num == 6) {
        music.play(music.createSong(assets.song`emeraldDepths`), music.PlaybackMode.LoopingInBackground)
    }
    if (num == 7) {
        music.play(music.createSong(assets.song`familairKnightTheme`), music.PlaybackMode.LoopingInBackground)
    }
    if (num == 8) {
        music.play(music.createSong(assets.song`lunarShadows`), music.PlaybackMode.LoopingInBackground)
    }
    if (num == 9) {
        music.play(music.createSong(assets.song`snowTheme`), music.PlaybackMode.LoopingInBackground)
    }
    if (num == 10) {
        music.play(music.createSong(assets.song`anubisIntroTrack`), music.PlaybackMode.LoopingInBackground)
    }
    if (num == 11) {
        music.play(music.createSong(assets.song`banditTheme`), music.PlaybackMode.LoopingInBackground)
    }
    if (num == 12) {
        music.play(music.createSong(assets.song`caveOfDoom`), music.PlaybackMode.LoopingInBackground)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        hurtPlayer(true)
    }
})
function summonWeapon (col: number, row: number, index: number) {
    pickupSprite = sprites.create(weaponImageList[index], SpriteKind.prop)
    tiles.placeOnTile(pickupSprite, tiles.getTileLocation(col, row))
    pickupSprite.z = 4
    pickupSprite.z += index * 0.1
    spriteutils.onSpriteUpdateInterval(pickupSprite, 100, function (sprite) {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 12, 1)
        if (!(controller.A.isPressed())) {
            sprite.setKind(SpriteKind.weaponPickup)
        }
    })
}
sprites.onOverlap(SpriteKind.boomerang, SpriteKind.hurt, function (sprite, otherSprite) {
    if (powerOfRedspade) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(14, ExtraEffectPresetShape.Spark), 100, 48, 15)
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 100, 20, 10)
        sprites.destroy(otherSprite)
    }
})
function cutAttack () {
    cutSprite = sprites.create(assets.image`cutImage`, SpriteKind.playerAttack)
    cutSprite.setFlag(SpriteFlag.DestroyOnWall, true)
    cutSprite.z = 1
    cutSprite.lifespan = 750
    music.play(music.createSoundEffect(WaveShape.Sine, 5000 - randint(0, 500), 0 + randint(0, 1000), 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    spriteutils.onSpriteUpdateInterval(cutSprite, 100, function (sprite) {
        if (tiles.tileAtLocationEquals(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`cobwebRipable`)) {
            tiles.setTileAt(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`cobwebRipped`)
            tiles.setWallAt(sprite.tilemapLocation(), false)
        }
        if (tiles.tileAtLocationIsWall(sprite.tilemapLocation())) {
            sprites.destroy(sprite)
        }
    })
    if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
        cutSprite.setPosition(mySprite.x + 9, mySprite.y)
        animation.runImageAnimation(
        cutSprite,
        assets.animation`cutRight`,
        125,
        false
        )
        cutSprite.vx = mySprite.vx + 15
    } else {
        cutSprite.setPosition(mySprite.x - 9, mySprite.y)
        animation.runImageAnimation(
        cutSprite,
        assets.animation`cutLeft`,
        125,
        false
        )
        cutSprite.vx = mySprite.vx - 15
    }
}
function tickSemiSolid (locationsArray: tiles.Location[]) {
    for (let value of locationsArray) {
        if (mySprite.y + 15 >= value.y) {
            tiles.setWallAt(value, false)
        } else {
            tiles.setWallAt(value, true)
        }
    }
}
sprites.onDestroyed(SpriteKind.basicEnemy, function (sprite) {
    if (level == 7 && enemyCap < 5 || level != 7 && level != 18) {
        enemyCap += 1
        for (let index = 0; index < randint(randint(luckyness, luckyness + 1), randint(luckyness + 2, luckyness + 3)); index++) {
            summonGold(sprite.x, sprite.y)
        }
    }
    if (sprite.z == 2.11) {
        for (let value of sprites.allOfKind(SpriteKind.hurt)) {
            if (value.z == -4.11 || (value.z == 3.11 || value.z == 3.01)) {
                extraEffects.createSpreadEffectOnAnchor(value, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 100)
                sprites.destroy(value)
            }
        }
    }

})
sprites.onDestroyed(SpriteKind.timeOrb, function (sprite) {
    if (!(npcTalking)) {
        mySprite.setPosition(sprite.x, sprite.y)
        otherworldBar.value = 0
        mySprite.vx = 0
        mySprite.vy = 0
        color.startFade(color.Black, color.originalPalette, 200)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.boomerang, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -40
    bossSpeed += 3
    otherSprite.vx = otherSprite.vx * -1
    konshuTeleport()
})
function throwCard() {
    minCardImageList =[assets.image`miniSpade`, assets.image`miniHeart`, assets.image`miniClub`, assets.image`miniDiamond`,]
    
    if (cycledSuit == 4) {
        cycledSuit = 0
    }
        cutSprite = sprites.create(minCardImageList[cycledSuit], SpriteKind.playerAttack)
        cutSprite.setPosition(mySprite.x, mySprite.y)
        cutSprite.lifespan = 1500
        cutSprite.z = 3
        cutSprite.vx = 100
        cutSprite.setFlag(SpriteFlag.DestroyOnWall, true)
        if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingLeft)) {
            cutSprite.vx = -100
        }
        cutSprite.ax = cutSprite.vx * 0.8
        cutSprite.x += cutSprite.vx * 0.04
        cutSprite.vy = -11
        cutSprite.fy = 5

        spriteutils.onSpriteUpdateInterval(cutSprite, 200, function (sprite) {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(sprite.image.getPixel(3, 3), ExtraEffectPresetShape.Twinkle), 400, 5, 20)
        

        })

        cycledSuit += 1

}


function shootGun () {
    if (!(gunCooldown)) {
        if (aiming) {
            gunCooldown = true
            aiming = false
            mySprite.vy += -60
            cutSprite = sprites.create(weaponImageList[4], SpriteKind.prop)
            cutSprite.lifespan = 1500
            cutSprite.z = 3
            propSprite = sprites.create(assets.image`dot`, SpriteKind.prop)
            propSprite.setPosition(mySprite.x, mySprite.y)
            propSprite.lifespan = 800
            multilights.addLightSource(propSprite, 18, 5, 0)
            propSprite.setFlag(SpriteFlag.Invisible, true)
            cutSprite.setPosition(mySprite.x + 8, mySprite.y + 2)
            if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingLeft)) {
                propImage = cutSprite.image.clone()
                propImage.flipX()
                cutSprite.setImage(propImage.clone())
                cutSprite.x += -16
            }
            extraEffects.createSpreadEffectOnAnchor(cutSprite, extraEffects.createSingleColorSpreadEffectData(14, ExtraEffectPresetShape.Twinkle), 100)
            if (gunPower != 1) {
                propSprite = sprites.create(assets.image`bullet`, SpriteKind.playerAttack)
                propSprite.setPosition(mySprite.x, mySprite.y + 2)
                extraEffects.createSpreadEffectOnAnchor(cutSprite, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100)
                propSprite.setFlag(SpriteFlag.DestroyOnWall, true)
                if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
                    propSprite.vx = 200
                } else {
                    propSprite.vx = -200
                }
                propSprite.ax = propSprite.vx
                if (gunPower == 4) {
                    gunPowerBar.value = 100
                    explosionNoise()
                    spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
                        extraEffects.createSpreadEffectOnAnchor(sprite, fireEffect, 100, 20, 10)
                    })
                } else {
                    music.play(music.createSoundEffect(WaveShape.Noise, 1600, 1, 146, 255, 200, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                }
            } else {
                music.play(music.createSoundEffect(WaveShape.Noise, 3300, 1400, 255, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            }
            timer.after(500, function () {
                sprites.destroy(gunPowerBar)
                if (level == 9) {
                    cutSprite.lifespan += -500
                    pause(500)
                } else {
                    pause(1000)
                }
                gunCooldown = false
            })
        } else {
            gunPowerBar = statusbars.create(20, 4, StatusBarKind.accuracy)
            gunPowerBar.attachToSprite(mySprite, 5, 0)
            gunPowerBar.setColor(2, 15, 3)
            gunPowerBar.setBarBorder(1, 14)
            aiming = true
            aimingMS = game.runtime()
        }
    }
}
function sheildTick () {
    if (otherworldBar.value == otherworldBar.max) {
        otherworldBar.setFlag(SpriteFlag.Invisible, true)
    } else {
        otherworldBar.setFlag(SpriteFlag.Invisible, false)
    }
    if (otherworldBar.value > otherworldBar.max - 50) {
        otherworldBar.setColor(8, 15)
        manaRegen = false
    }
    if (specialAttack == "burst") {
        if (otherworldBar.value > 450) {
            otherworldBar.setColor(8, 15)
        } else {
            otherworldBar.setColor(2, 15)
        }
    }
    if (specialAttack == "thorn") {
        if (otherworldBar.value >= 700) {
            otherworldBar.setColor(8, 15)
        } else {
            otherworldBar.setColor(2, 15)
        }
    }
    if (specialAttack == "summon") {
        if (otherworldBar.value >= 900) {
            otherworldBar.setColor(8, 15)
        } else {
            otherworldBar.setColor(2, 15)
        }
    }
    if (specialAttack == "yell") {
        if (otherworldBar.value >= 1000) {
            otherworldBar.setColor(8, 15)
        } else {
            otherworldBar.setColor(2, 15)
        }
    }
    if (specialAttack == "boom") {
        if (otherworldBar.value >= 700) {
            otherworldBar.setColor(8, 15)
        } else {
            otherworldBar.setColor(2, 15)
        }
    }
    if (specialAttack == "icicle") {
        if (otherworldBar.value >= 700) {
            otherworldBar.setColor(8, 15)
        } else {
            otherworldBar.setColor(2, 15)
        }
    }
    if (sheilding) {
        otherworldBar.value += -10
        if (level == 18) {
            otherworldBar.value += -3
        }


        if (mySprite.vy > 20) {
            mySprite.vy = 20
        }
    } else {
        if (specialAttack == "clock" && blockSettings.exists("crystal")) {
            otherworldBar.value += otherworldBar.max * 0.004
        } else {
            otherworldBar.value += 4
        }
        if (flowerOwned) {
            otherworldBar.value += 1
        }
    }
}
events.tileEvent(SpriteKind.Player, assets.tile`tableLeft`, events.TileEvent.StartOverlapping, function(sprite: Sprite) {
    if (!(startAddiction)) {
    pickupTextSprite = textsprite.create("Press A To Gamble 1$")
    pickupTextSprite.x = mySprite.x + 23
    pickupTextSprite.y = mySprite.y - 20
    pickupTextSprite.z = 5
    pickupTextSprite.setKind(SpriteKind.gambleText)
    startAddiction = true
    }
})
events.tileEvent(SpriteKind.Player, assets.tile`tableLeft`, events.TileEvent.StopOverlapping, function (sprite: Sprite) {
    for (let value of sprites.allOfKind(SpriteKind.gambleText)) {
        sprites.destroy(value)
    }
    startAddiction = false

    
})

events.spriteEvent(SpriteKind.Player, SpriteKind.otherworldPickup, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    if (!(timePointSprite) || spriteutils.isDestroyed(timePointSprite)) {
        if (spriteutils.isDestroyed(boomrangSprite) || !(boomrangSprite)) {
            pickupSpecial = true
            pickupTextSprite = textsprite.create("Press A To Pickup")
            pickupTextSprite.x = otherSprite.x
            pickupTextSprite.y = otherSprite.y - 20
            pickupTextSprite.z = 5
            pickupTextSprite.setKind(SpriteKind.pickupText)
        }
    }
})
function populateTiles () {
    flowerTileList = [
    assets.tile`flower1`,
    assets.tile`flower2`,
    assets.tile`yellowFlowerAlt`,
    assets.tile`yellowFlower`,
    assets.tile`redFlower`,
    assets.tile`mushroom`
    ]
    for (let value of tiles.getTilesByType(assets.tile`brickFloor`)) {
        if (randint(1, 8) == 1) {
            tiles.setTileAt(value, assets.tile`brickFloorCracked`)
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`blackTile`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`brickBottomLayer`)
            }
        }
        if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`blackTile`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`brickBottomLayerAlt`)
            if (randint(1, 6) == 1) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`brickBottomLayerSkull`)
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`ruinedCelling`)) {
        if (randint(1, 3) == 1) {
            tiles.setTileAt(value, assets.tile`ruinedCellingAlt`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`ruinedTop`)) {
        if (randint(1, 2) == 1) {
            tiles.setTileAt(value, assets.tile`ruinedTopAlt`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`brickWallRight`)) {
        if (randint(1, 7) == 1) {
            tiles.setTileAt(value, assets.tile`brickWallRightCracked`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`brickWallLeft`)) {
        if (randint(1, 7) == 1) {
            tiles.setTileAt(value, assets.tile`brickWallRightCracked0`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`brickBottom`)) {
        if (randint(1, 8) == 1) {
            tiles.setTileAt(value, assets.tile`cornerNorth`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`stoneTopRight`)) {
        if (randint(1, 6) == 1 && blockSettings.readNumber("Level") != 4) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`) && (randint(1, 2) == 1 || !(tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`) || tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)))) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`deadBush`)
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`stoneTopLeft`)) {
        if (randint(1, 6) == 1 && blockSettings.readNumber("Level") != 4) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`) && (randint(1, 2) == 1 || !(tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`) || tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)))) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`deadBushAlt`)
            }
        }
        if (randint(1, 15) == 1) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`breakablePotSpawner`)
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`mossTopRight`)) {
        if (randint(1, 15) == 1) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`breakablePotSpawner`)
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`mossTopLeft`)) {
        if (randint(1, 15) == 1) {
            if (level != 8) {
                if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`breakablePotSpawner`)
                }
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`mossFloor`)) {
        if (randint(1, 3) == 1) {
            tiles.setTileAt(value, assets.tile`mossFloorAlt`)
        }
        if (randint(1, 10) == 1) {
            tiles.setTileAt(value, assets.tile`floweringMoss`)
        }
        if (randint(1, 6) == 1) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                if (randint(1, 20) == 1) {
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`mushroomBig`)
                } else {
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), flowerTileList[randint(0, flowerTileList.length - 1)])
                }
            }
        }
        if (randint(1, 21) == 1) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`breakablePotSpawner`)
            }
        }
        if (randint(1, 26) == 1) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`goldDepositTile`)
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`snowTopRight`)) {
        if (randint(1, 20) == 1) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`breakablePotSpawner`)
            }
        }
        if (randint(1, 3) == 1) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`piledSnow`)
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`snowTopLeft0`)) {
        if (randint(1, 20) == 1) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`breakablePotSpawner`)
            }
        }
        if (randint(1, 3) == 1) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`piledSnow`)
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`snowFloor`)) {
        if (randint(1, 3) == 1) {
            tiles.setTileAt(value, assets.tile`snowFloorAlt`)
        }
        if (randint(1, 21) == 1) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`breakablePotSpawner`)
            }
        }
        if (randint(1, 4) != 1) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`piledSnow`)
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`stoneFloor`)) {
        if (randint(1, 3) == 1) {
            tiles.setTileAt(value, assets.tile`stoneFloorAlt`)
        }
        if (randint(1, 9) == 1) {
            if (randint(1, 2) == 1) {
                tiles.setTileAt(value, assets.tile`rockDriedFloor0`)
            } else {
                tiles.setTileAt(value, assets.tile`rockDriedFloorAlt`)
            }
        }
        if (randint(1, 15) == 1) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`breakablePotSpawner`)
            }
        }
        if (randint(1, 25) == 1 && 7 < level) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`goldDepositTile`)
            }
        }
        if (randint(1, 7) == 1 && blockSettings.readNumber("Level") != 4) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`) && (randint(1, 2) == 1 || !(tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`) || tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)))) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`deadBush`)
                if (randint(1, 5) == 1) {
                    if (randint(1, 2) == 1) {
                        tiles.setTileAt(value, assets.tile`rockDriedFloor0`)
                    } else {
                        tiles.setTileAt(value, assets.tile`rockDriedFloorAlt`)
                    }
                }
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`diamondDepositTile`)) {
        oreSprite = sprites.create(goldDepsoitImages[3], SpriteKind.redOre)
        tiles.placeOnTile(oreSprite, value)
        oreSprite.bottom = value.bottom
        showMiningPrompt(oreSprite)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`goldDepositTile`)) {
        if (level != 4 && level != 9 && level != 14) {
            oreSprite = sprites.create(goldDepsoitImages[randint(0, 2)], SpriteKind.ore)
            tiles.placeOnTile(oreSprite, value)
            oreSprite.bottom = value.bottom
            showMiningPrompt(oreSprite)
        }
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`treeTile`)) {
        propSprite = sprites.create(assets.image`tree`, SpriteKind.prop)
        tiles.setTileAt(value, assets.tile`transparency16`)
        propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        propSprite.z = -5
        tiles.placeOnTile(propSprite, value.getNeighboringLocation(CollisionDirection.Top))
        propSprite.y += 10
    }
    for (let value of tiles.getTilesByType(assets.tile`deadBush`)) {
        if (randint(1, 2) == 1) {
            tiles.setTileAt(value, assets.tile`deadBushAlt`)
        }
        if (randint(1, 4) == 1) {
            tiles.setTileAt(value, assets.tile`cactus`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`cactus`)) {
        if (randint(1, 2) == 1) {
            tiles.setTileAt(value, assets.tile`cactusAlt`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`rockBottomRight`)) {
        if (randint(1, 6) == 1 && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`roots`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`rockBottomLeft`)) {
        if (randint(1, 6) == 1 && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`roots`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`rockBottom`)) {
        if (randint(1, 6) == 1 && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)) {
            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`roots`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`backgroundCharacter`)) {
        propSprite = sprites.create(backgroundCharaImage, SpriteKind.prop)
        tiles.placeOnTile(propSprite, value)
        propSprite.ay = 120
        tiles.setTileAt(value, assets.tile`transparency16`)
        propText = fancyText.create("Shop", 100, 12, fancyText.art_deco_11)
        propText.z = 3
        tiles.placeOnTile(propText, value.getNeighboringLocation(CollisionDirection.Top))
        propText.y += -5
        propText.x += 28
    }
    for (let value of tiles.getTilesByType(assets.tile`well`)) {
        propSprite = sprites.create(assets.image`wellBottom`, SpriteKind.prop)
        tiles.placeOnTile(propSprite, value)
        propSprite = sprites.create(assets.image`wellTop`, SpriteKind.well)
        tiles.placeOnTile(propSprite, value)
        propSprite.y += 8
        propSprite.z = 5
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`ruinedPillar`)) {
        if (randint(1, 3) == 1) {
            tiles.setTileAt(value, assets.tile`ruinedPillarAlt`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`roots`)) {
        if (randint(1, 3) == 1) {
            tiles.setTileAt(value, assets.tile`rootsAlt`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`cactus`)) {
        if (randint(1, 2) == 1) {
            tiles.setTileAt(value, assets.tile`cactusAlt`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`arrowTrapStone`)) {
        propSprite = sprites.create(assets.image`nullImage`, SpriteKind.prop)
        animation.runImageAnimation(
            propSprite,
            assets.animation`trapEyeAnim`,
            150,
            true
        )
        tiles.placeOnTile(propSprite, value)
        propSprite.z = 2
        propSprite.x += 2
        propSprite.y -= 3
        multilights.addLightSource(propSprite, 2, 4, 0)


    }
    for (let value of tiles.getTilesByType(assets.tile`arrowTrapStoneLeft`)) {
        propSprite = sprites.create(assets.image`nullImage`, SpriteKind.prop)
        animation.runImageAnimation(
            propSprite,
            assets.animation`trapEyeAnim`,
            150,
            true
        )
        tiles.placeOnTile(propSprite, value)
        propSprite.z = 2
        propSprite.x += 9
        propSprite.y -= 3
        multilights.addLightSource(propSprite, 2, 4, 0)


    }
    for (let value of tiles.getTilesByType(assets.tile`torchTile`)) {
        propSprite = sprites.create(assets.image`nullImage`, SpriteKind.prop)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
            propSprite,
            assets.animation`lanternAnim`,
            150,
            true
        )
        tiles.placeOnTile(propSprite, value)
        propSprite.z = -2
        multilights.addLightSource(propSprite, 10, 25, 0)


    }

    for (let value of tiles.getTilesByType(assets.tile`snowmanSpawn`)) {
        enemySprite = sprites.create(assets.image`snowmanDefault`, SpriteKind.basicEnemy)
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.placeOnTile(enemySprite, value)
        enemySprite.z = 2
        giveEnemyHp(enemySprite, 140)
        enemySprite.y += -10
        enemySprite.ay = 200
        enemySprite.fx = 50
        spriteutils.onSpriteUpdateInterval(enemySprite, 100, function (sprite) {
            if (sprite.kind() == SpriteKind.stunnedEnemy && 2 == sprite.z) {
                enemySprite.z = 2.02
                ghostImage = assets.image`snowmanHead`
                if (mySprite.x <= sprite.x) {
                    ghostImage.flipX()
                }
                sprite.setImage(ghostImage)
                sprite.vy = -180
                sprite.vx = randint(50, 85)
                if (randint(1, 2) == 1) {
                    sprite.vx = randint(-85, -50)
                }
                sprite.setBounceOnWall(true)
                sprite.setKind(SpriteKind.prop)
                propSprite = sprites.create(image.create(1, 1), SpriteKind.prop)
                propSprite.ay = 200
                propSprite.lifespan = 5000
                if (mySprite.x >= sprite.x) {
                    animation.runImageAnimation(
                    propSprite,
                    assets.animation`snowmanThrowRight`,
                    200,
                    false
                    )
                } else {
                    animation.runImageAnimation(
                    propSprite,
                    assets.animation`snowmanThrowLeft`,
                    500,
                    false
                    )
                }
                propSprite.x = sprite.x
                propSprite.y = sprite.y
                timer.background(function () {
                    pauseUntil(() => sprite.kind() != SpriteKind.prop)
                    sprite.vy += -15
                    sprite.vx += sprite.vx * 1.2
                    sprite.setBounceOnWall(true)
                    pause(3000)
                    sprite.setBounceOnWall(false)
                    pauseUntil(() => spriteutils.speed(sprite) == 0)
                    extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), 100, 48, 25)
                    enemySprite.z = 2
                })
            }
            if (spriteutils.speed(sprite) == 0) {
                ghostImage = assets.image`snowmanLeft`
                if (mySprite.x >= sprite.x) {
                    ghostImage.flipX()
                }
                sprite.setImage(ghostImage)
            }
        })
        spriteutils.onSpriteUpdateInterval(enemySprite, 1500, function (sprite) {
            if (spriteutils.distanceBetween(mySprite, sprite) < 170 && sprite.kind() == SpriteKind.basicEnemy) {
                propSprite = sprites.create(assets.image`snowball`, SpriteKind.hurt)
                propSprite.setPosition(sprite.x, sprite.y)
                spriteutils.setVelocityAtAngle(propSprite, spriteutils.angleFrom(sprite, mySprite) + spriteutils.degreesToRadians(randint(-10, 10)), 100)
                extraEffects.createSpreadEffectOnAnchor(propSprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 2000, 48, 15)
                propSprite.ay = 45
                propSprite.vy += -19
                propSprite.setFlag(SpriteFlag.DestroyOnWall, true)
            }
        })
    }
    for (let value of tiles.getTilesByType(assets.tile`ghostSpawn`)) {
        enemySprite = sprites.create(image.create(1, 1), SpriteKind.basicEnemy)
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.placeOnTile(enemySprite, value)
        giveEnemyHp(enemySprite, 150)
        enemySprite.setFlag(SpriteFlag.BounceOnWall, true)
        enemySprite.z = 2
        spriteutils.onSpriteUpdateInterval(enemySprite, 100, function (sprite) {
            ghostImage = assets.image`ghostDefault`
            if (sprite.vx == 0) {
                if (mySprite.x <= sprite.x) {
                    ghostImage.flipX()
                }
            } else {
                if (sprite.vx < 0) {
                    ghostImage.flipX()
                }
            }
            sprite.setImage(ghostImage.clone())
        })
        spriteutils.onSpriteUpdateInterval(enemySprite, 500, function (sprite) {
            if (spriteutils.distanceBetween(mySprite, sprite) < 120 && sprite.kind() == SpriteKind.basicEnemy && !(sheilding)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, mySprite), (spriteutils.speed(sprite) + 48) / 2)
                sprite.fx = 0
                sprite.fy = 0
            } else {
                sprite.fx = 500
                sprite.fy = 500
            }
        })
    }
    for (let value of tiles.getTilesByType(assets.tile`wizardSpawn`)) {
        enemySprite = sprites.create(image.create(1, 1), SpriteKind.basicEnemy)
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.placeOnTile(enemySprite, value)
        enemySprite.ay = 200
        enemySprite.fx = 90
        enemySprite.z = 2.11
        enemySprite.y += -4
        if (level == 14) {
            giveEnemyHp(enemySprite, 100)
        } else {
            giveEnemyHp(enemySprite, 150)
        }
        spriteutils.onSpriteUpdateInterval(enemySprite, 100, function (sprite) {
            if (sprite.kind() == SpriteKind.stunnedEnemy) {
                if (mySprite.x < sprite.x) {
                    sprite.vx = 65
                } else {
                    sprite.vx = -65
                }
                sprite.vy = -60
                for (let index = 0; index <= 4; index++) {
                    extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), sprite.x - 8 + index * 2, sprite.y + 10, 100, 5, 10)
                }
                sprite.setFlag(SpriteFlag.BounceOnWall, true)
            } else {
                sprite.setFlag(SpriteFlag.BounceOnWall, false)
            }
            propImage = assets.image`wizard`
            if (mySprite.x > sprite.x) {
                propImage.flipX()
            }
            sprite.setImage(propImage)
        })
        spriteutils.onSpriteUpdateInterval(enemySprite, 2800, function (sprite) {
            if (sprite.isHittingTile(CollisionDirection.Bottom) && sprite.kind() == SpriteKind.basicEnemy && spriteutils.distanceBetween(mySprite, sprite) < 180) {
                propSprite = sprites.create(snowflakeImage, SpriteKind.prop)
                propSprite.z = 0
                propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                if (sprite.x < mySprite.x) {
                    propSprite.setPosition(sprite.x - 3, sprite.y + 16)
                } else {
                    propSprite.setPosition(sprite.x + 3, sprite.y + 16)
                }
                propSprite.vy = -96
                propSprite.fy = 100
                spriteutils.onSpriteUpdateInterval(propSprite, 50, function (sprite) {
                    if (sprite.z == 3.01 || sprite.z == 3.11) {
                        transformSprites.changeRotation(sprite, spriteutils.speed(sprite) / 5)
                    }
                })
                spriteutils.onSpriteUpdateInterval(propSprite, 2000, function (sprite) {
                    if (sprite.z == 3.01) {
                        sprite.z = 3.11
                        spriteutils.onSpriteUpdateInterval(sprite, 100, function (sprite) {
                            if (sprite.vx == 0 && sprite.vy == 0) {
                                extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 100)
                                sprites.destroy(sprite)
                            }
                        })
                    }
                    if (sprite.z == -4.11) {
                        sprite.setFlag(SpriteFlag.GhostThroughWalls, false)
                        sprite.z = 3.01
                        sprite.setFlag(SpriteFlag.BounceOnWall, true)
                        sprite.fy = 25
                        sprite.fx = 25
                        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 100)
                        sprite.setKind(SpriteKind.hurt)
                        spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, mySprite), 130)
                        sprite.vy += 15
                    }
                    if (sprite.z == 0) {
                        sprite.z = -4.11
                    }
                })
                extraEffects.createSpreadEffectOnAnchor(propSprite, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), 100)
            }
        })
    }
    for (let value of tiles.getTilesByType(assets.tile`monkeySpawner`)) {
        enemySprite = sprites.create(assets.image`monkeyIdle`, SpriteKind.basicEnemy)
        characterAnimations.loopFrames(
        enemySprite,
        assets.animation`monkeyRight`,
        500,
        characterAnimations.rule(Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        enemySprite,
        assets.animation`monkeyMoveRight`,
        100,
        characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        enemySprite,
        assets.animation`monkeyIdleLeft`,
        500,
        characterAnimations.rule(Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        enemySprite,
        assets.animation`monkeyIdleLeft`,
        100,
        characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
        )
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.placeOnTile(enemySprite, value)
        enemySprite.ay = 200
        enemySprite.z = 2
        giveEnemyHp(enemySprite, 150)
        spriteutils.onSpriteUpdateInterval(enemySprite, 100, function (sprite) {
            if (78 > spriteutils.distanceBetween(mySprite, sprite) && sprite.vx == 0) {
                if (sprite.x < mySprite.x) {
                    sprite.ax = 80
                } else {
                    sprite.ax = -80
                }
                timer.background(function () {
                    pauseUntil(() => sprite.isHittingTile(CollisionDirection.Right) || sprite.isHittingTile(CollisionDirection.Left))
                    sprite.ax = 0
                    sprite.vy = -80
                })
            }
        })
    }
    for (let value of tiles.getTilesByType(assets.tile`coffin`)) {
        enemySprite = sprites.create(assets.image`skeletonCoffin`, SpriteKind.prop)
        tiles.placeOnTile(enemySprite, value)
        enemySprite.ay = 200
        tiles.setTileAt(value, assets.tile`transparency16`)
        spriteutils.onSpriteUpdateInterval(enemySprite, 100, function (sprite) {
            if (sprite.z == 2) {
                if (tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))) {
                    sprite.vx = 40
                }
                if (tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))) {
                    sprite.vx = -40
                }
                if (sprite.kind() == SpriteKind.basicEnemy) {
                    if (spriteutils.distanceBetween(mySprite, sprite) < 25 && !(dead || invincible || sheilding)) {
                        if (sprite.x < mySprite.x) {
                            sprite.vx = 40
                        } else {
                            sprite.vx = -40
                        }
                    }
                    if (sprite.vx == 0) {
                        if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.FacingRight))) {
                            sprite.vx = 40
                        } else {
                            sprite.vx = -40
                        }
                    }
                }
            }
            if (spriteutils.distanceBetween(mySprite, sprite) < 100 && sprite.z == 0) {
                sprite.setKind(SpriteKind.basicEnemy)
                giveEnemyHp(sprite, 150)
                characterAnimations.loopFrames(
                sprite,
                assets.animation`skeletonLeft`,
                200,
                characterAnimations.rule(Predicate.FacingLeft)
                )
                characterAnimations.loopFrames(
                sprite,
                assets.animation`skeletonRight`,
                200,
                characterAnimations.rule(Predicate.FacingRight)
                )
                sprite.vy = -50
                sprite.z = 2
                if (sprite.x < mySprite.x) {
                    sprite.vx = 40
                } else {
                    sprite.vx = -40
                }
            }
        })
    }
    for (let value of tiles.getTilesByType(assets.tile`snnakeTile`)) {
        enemySprite = sprites.create(assets.image`snakeIdle`, SpriteKind.basicEnemy)
        tiles.placeOnTile(enemySprite, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        enemySprite.z = 1
        enemySprite.fx = 85
        if (level == 14) {
            giveEnemyHp(enemySprite, 60)
        } else {
            giveEnemyHp(enemySprite, 110)
        }
        enemySprite.ay = 200
        characterAnimations.loopFrames(
        enemySprite,
        assets.animation`snakeIdleLeft`,
        100,
        characterAnimations.rule(Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        enemySprite,
        assets.animation`snakeIdleRight`,
        100,
        characterAnimations.rule(Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        enemySprite,
        assets.animation`snakeMoveLeft`,
        150,
        characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        enemySprite,
        assets.animation`snakeAnimRight`,
        150,
        characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
        )
        propNumber = 1100
        if (level == 14) {
            propNumber = 1700
        }
        spriteutils.onSpriteUpdateInterval(enemySprite, propNumber, function (sprite) {
            if (spriteutils.distanceBetween(mySprite, sprite) < 115 && !(spriteutils.distanceBetween(mySprite, sprite) < 60) && sprite.vx == 0) {
                propSprite = sprites.create(assets.image`snakeVenom`, SpriteKind.hurt)
                extraEffects.createSpreadEffectOnAnchor(propSprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), 300, 10, 4)
                propSprite.setPosition(sprite.x, sprite.y)
                spriteutils.setVelocityAtAngle(propSprite, spriteutils.angleFrom(sprite, mySprite), 100)
                propSprite.setFlag(SpriteFlag.DestroyOnWall, true)
                spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
                    extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Twinkle), 100, 20, 5)
                })
            }
        })
        spriteutils.onSpriteUpdateInterval(enemySprite, 50, function (sprite) {
            if (sprite.kind() == SpriteKind.basicEnemy) {
                if (spriteutils.distanceBetween(mySprite, sprite) < 60) {
                    if (sprite.x < mySprite.x) {
                        sprite.vx = -50
                        if (tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)) && !(tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Left))) && sprite.isHittingTile(CollisionDirection.Bottom)) {
                            sprite.vy = -110
                            sprite.vx = -40
                        }
                    } else {
                        sprite.vx = 50
                        if (tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right)) && !(tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Right))) && sprite.isHittingTile(CollisionDirection.Bottom)) {
                            sprite.vy = -110
                            sprite.vx = 40
                        }
                    }
                }
            }
        })
    }
    for (let value of tiles.getTilesByType(assets.tile`spiderSpawn`)) {
        enemySprite = sprites.create(assets.image`spiderHang`, SpriteKind.prop)
        tiles.placeOnTile(enemySprite, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        enemySprite.z = 1
        spriteutils.onSpriteUpdateInterval(enemySprite, 2400, function (sprite) {
            if (sprite.z == 2 && sprite.isHittingTile(CollisionDirection.Bottom) || sprite.kind() == SpriteKind.stunnedEnemy) {
                sprite.vy = -100
                if (sprite.x < mySprite.x) {
                    sprite.vx = 90
                } else {
                    sprite.vx = -90
                }
            }
        })
        spriteutils.onSpriteUpdateInterval(enemySprite, 50, function (sprite) {
            if (sprite.z == 2) {
                if (sprite.isHittingTile(CollisionDirection.Bottom)) {
                    sprite.fx = 250
                } else {
                    sprite.fx = 0
                }
            } else {
                if (mySprite.x < sprite.x + 8 && mySprite.x > sprite.x - 8 && mySprite.y > sprite.y) {
                    giveEnemyHp(sprite, 100)
                    sprite.ay = 200
                    sprite.z = 2
                    sprite.setKind(SpriteKind.basicEnemy)
                    animation.runImageAnimation(
                    sprite,
                    assets.animation`spiderIdle`,
                    100,
                    true
                    )
                }
            }
        })
    }
    
    for (let value of tiles.getTilesByType(assets.tile`wispSpawn`)) {
        summonWisp(false, value.x, value.y)
        tiles.setTileAt(value, assets.tile`transparency16`)

    }


    for (let value of tiles.getTilesByType(assets.tile`cactusSpawn`)) {
        enemySprite = sprites.create(assets.image`cactusMan`, SpriteKind.basicEnemy)
        tiles.placeOnTile(enemySprite, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        enemySprite.z = 1
        enemySprite.ay = 120
        giveEnemyHp(enemySprite, 100)
        spriteutils.onSpriteUpdateInterval(enemySprite, 50, function (sprite) {
            if (sprite.isHittingTile(CollisionDirection.Bottom)) {
                sprite.fx = 105
            } else {
                sprite.fx = 35
            }
        })
        spriteutils.onSpriteUpdateInterval(enemySprite, 1500, function (sprite) {
            if (mySprite.x < sprite.x) {
                animation.runImageAnimation(
                sprite,
                assets.animation`cactusLeft`,
                500,
                true
                )
            } else {
                animation.runImageAnimation(
                sprite,
                assets.animation`cactusRight`,
                500,
                true
                )
            }
        })
    }
    for (let value of tiles.getTilesByType(assets.tile`permaFrost`)) {
        propSprite = sprites.create(assets.image`nullImage`, SpriteKind.permafrost)
        tiles.placeOnTile(propSprite, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        propSprite,
        assets.animation`permafrostAnim`,
        100,
        true
        )
        spriteutils.onSpriteUpdateInterval(propSprite, 200, function (sprite) {
            if (spriteutils.distanceBetween(mySprite, sprite) <= 300) {
                extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 25, 4)
            }
        })
    }
    for (let value of tiles.getTilesByType(assets.tile`featherTile`)) {
        propSprite = sprites.create(assets.image`cloudImage`, SpriteKind.feather)
        tiles.placeOnTile(propSprite, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        propSprite.z = 4
        spriteutils.onSpriteUpdateInterval(propSprite, 500, function (sprite) {
            if (spriteutils.distanceBetween(mySprite, sprite) <= 300) {
                extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Twinkle), 500, 20, 5)
            }
        })
    }
    for (let value of tiles.getTilesByType(assets.tile`campFire`)) {
        propSprite = sprites.create(assets.image`fire`, SpriteKind.prop)
        propSprite.z = -4
        tiles.placeOnTile(propSprite, value)
        propSprite.x += -1
        propSprite.y += -2
        animation.runImageAnimation(
        propSprite,
        assets.animation`torchAnim`,
        200,
        true
        )
        spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
            extraEffects.createSpreadEffectOnAnchor(sprite, fireEffect, 100, 20, 20)
        })
    }
    for (let value of tiles.getTilesByType(assets.tile`coinTile`)) {
        if (blockSettings.readNumber("Luck") != 0 && randint(blockSettings.readNumber("Luck"), 20) == 20) {
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Left), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Left), assets.tile`coinTile`)
            }
            if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)) {
                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`coinTile`)
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`coinTile`)) {
        propSprite = sprites.create(assets.image`coinImage`, SpriteKind.coin)
        animation.runImageAnimation(
        propSprite,
        assets.animation`coinAnim`,
        200,
        true
        )
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.placeOnTile(propSprite, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`goalTile`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
        goalSprite = sprites.create(assets.image`levelGoal`, SpriteKind.goal)
        tiles.placeOnTile(goalSprite, value)
        goalSprite.y += -12
        spriteutils.onSpriteUpdateInterval(goalSprite, 100, function (sprite) {
            extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Twinkle), 100, 25, 3)
        })
    }
    for (let value of tiles.getTilesByType(assets.tile`breakablePotSpawner`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
        if (level != 4 && level != 9 && level > 11) {
            breakablePotList = [
            assets.image`smallChestImage`,
            assets.image`pot`,
            assets.image`largePot`,
            assets.image`potSkinny`
            ]
            propSprite = sprites.create(breakablePotList[randint(0, 3)], SpriteKind.pot)
            propSprite.ay = 120
            tiles.placeOnTile(propSprite, value)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`lavatile`)) {
        propSprite = sprites.create(assets.image`nullImage`, SpriteKind.prop)
        tiles.placeOnTile(propSprite, value)
        propSprite.z = 4
        animation.runImageAnimation(
        propSprite,
        assets.animation`lavaAnim`,
        400,
        true
        )
        if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`stoneTopLeft`) || tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile0`)) {
            tiles.setTileAt(value, assets.tile`myTile0`)
            tiles.setWallAt(value, true)
        }
        if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`stoneTopRight`) || tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile`)) {
            tiles.setTileAt(value, assets.tile`myTile`)
            tiles.setWallAt(value, true)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`lavaHorshoetile`)) {
        propSprite = sprites.create(assets.image`nullImage`, SpriteKind.prop)
        tiles.placeOnTile(propSprite, value)
        propSprite.z = 4
        animation.runImageAnimation(
            propSprite,
            assets.animation`lavaAnim`,
            400,
            true
        )
        if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`stoneTopLeft`) || tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile0`)) {
            tiles.setTileAt(value, assets.tile`myTile0`)
            tiles.setWallAt(value, true)
        }
        if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`stoneTopRight`) || tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile`)) {
            tiles.setTileAt(value, assets.tile`myTile`)
            tiles.setWallAt(value, true)
        }
        spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
            extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 15, 1)
        })
    }
    for (let value of tiles.getTilesByType(assets.tile`cameraAncor`)) {
        propSprite = sprites.create(assets.image`camera`, SpriteKind.cameraAnchor)
        tiles.placeOnTile(propSprite, value)
        propSprite.setFlag(SpriteFlag.Invisible, true)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`bossSpawn`)) {
        if (level == 8) {
            miniBoss = sprites.create(assets.image`banditBasic`, SpriteKind.prop)
            miniBoss.ay = 200
            characterAnimations.loopFrames(
            miniBoss,
            assets.animation`banditIdleRight`,
            500,
            characterAnimations.rule(Predicate.FacingRight)
            )
            characterAnimations.loopFrames(
            miniBoss,
            assets.animation`banditMoveRight`,
            100,
            characterAnimations.rule(Predicate.FacingRight, Predicate.Moving)
            )
            characterAnimations.loopFrames(
            miniBoss,
            assets.animation`banditIdleLeft`,
            500,
            characterAnimations.rule(Predicate.FacingLeft)
            )
            characterAnimations.loopFrames(
            miniBoss,
            assets.animation`banditMoveLeft`,
            100,
            characterAnimations.rule(Predicate.FacingLeft, Predicate.Moving)
            )
            banditEnconterSetup()
        } else {
            if (level == 7) {
                miniBoss = sprites.create(assets.image`TreeGolem`, SpriteKind.boss)
                miniBoss.ay = 200
            } else {
                miniBoss = sprites.create(assets.image`eyeManActive`, SpriteKind.prop)
            }
        }
        tiles.placeOnTile(miniBoss, value)
        miniBoss.z = 3
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`npcTile`)) {
        npcSprite = sprites.create(npcImage, SpriteKind.npc)
        tiles.placeOnTile(npcSprite, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.otherworldAttack, function (sprite, otherSprite) {
    if (specialAttack == "burst") {
        sprites.destroy(otherSprite)
        bossSpeed += 3
        statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -30
        konshuTeleport()
    }
})
function useHammer () {
    mySprite.vy = -50
    cutSprite = sprites.create(weaponImageList[3], SpriteKind.prop)
    music.play(music.createSoundEffect(WaveShape.Noise, 400, 600, 255, 160, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
        animation.runImageAnimation(
        cutSprite,
        assets.animation`hammerSwingRight`,
        100,
        false
        )
    } else {
        animation.runImageAnimation(
        cutSprite,
        assets.animation`hammerSwingLeft`,
        100,
        false
        )
    }
    platformer.moveSprite(mySprite, false, speed)
    smashing = true
    timer.after(100, function () {
        pauseUntil(() => mySprite.isHittingTile(CollisionDirection.Bottom))
        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 160, 200, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        timer.background(function () {
            pause(100)
            cutSprite.setImage(assets.image`hammerReturn`)
            cutSprite.vy = -100
            cutSprite.fy = 100
            pause(500)
            cutSprite.follow(mySprite, 160)
            cutSprite.fy = 0
            cutSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
            pauseUntil(() => mySprite.overlapsWith(cutSprite))
            extraEffects.createSpreadEffectOnAnchor(cutSprite, extraEffects.createSingleColorSpreadEffectData(14, ExtraEffectPresetShape.Spark), 100, 20, 5)
            sprites.destroy(cutSprite)
        })
        scene.cameraShake(4, 500)
        smashing = false
        propSprite = sprites.create(assets.image`gust`, SpriteKind.playerAttack)
        propSprite.setPosition(mySprite.x, mySprite.y)
        propSprite.bottom = mySprite.bottom
        spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
            extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 10, 2)
        })
        propSprite.x += 5
        propSprite.vx = 130
        propSprite.setFlag(SpriteFlag.DestroyOnWall, true)
        propSprite.lifespan = 600
        if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingLeft)) {
            propImage = propSprite.image.clone()
            propImage.flipX()
            propSprite.setImage(propImage.clone())
            propSprite.x += -10
            propSprite.vx = -130
        }
        propSprite.ax = propSprite.vx * 2
        smashing = false
        pause(100)
        if (!(npcTalking || dead)) {
            platformer.moveSprite(mySprite, true, speed)
        }
    })
}
scene.onOverlapTile(SpriteKind.basicEnemy, assets.tile`lavatile`, function (sprite, location) {
    extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(14, ExtraEffectPresetShape.Spark), 100)
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lavaHorshoetile`, function (sprite, location) {

    platformer.moveSprite(mySprite, false, 0)
    sprite.setVelocity(-150, -350)
    timer.background(function() {
        pause(600)    
        platformer.moveSprite(mySprite, true, speed)
        if(!horseshoeFound) {

        horseshoeFound = true
        generateText("Horseshoe of Luck", 120, location.x, location.y -100, 2500, true, false)


        propSprite = sprites.create(assets.image`horseShoe`, SpriteKind.playerAttack)
        tiles.placeOnTile(propSprite, tiles.getTileLocation(105, 12))
        propSprite.ay = 250
        propSprite.vx = -100
        propSprite.vy = -200
        propSprite.fx = 80
        propSprite.lifespan = 2000
        spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
            extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 15, 1)
            if(sprite.lifespan < 1000){
            
                sprite.follow(mySprite, 150)
                if(sprite.lifespan < 200){
                    extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), 100, 15, 1)
                    luckyness += 1

                }

            }
        })



        }        

    })
})


function generateText (text: string, width: number, x: number, y: number, duration: number, npc: boolean, seth: boolean) {
    generatedText = fancyText.create(text)
    fancyText.setMaxWidth(generatedText, width)
    generatedText.setPosition(x, y)
    fancyText.animateForTime(generatedText, duration * 0.5, fancyText.AnimationPlayMode.InBackground)
    generatedText.lifespan = duration
    fancyText.setAnimationSound(generatedText, music.createSoundEffect(WaveShape.Sine, 1528, 1176, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear))
    fancyText.setFont(generatedText, fancyText.bold_sans_7)
    generatedText.z = 10
    if (npc) {
        fancyText.setAnimationSound(generatedText, music.createSoundEffect(WaveShape.Noise, 3020, 1176, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear))
        fancyText.setFont(generatedText, fancyText.rounded_small)
    }
    if (!(seth)) {
        fancyText.setFont(generatedText, fancyText.art_deco_11)
    }
}
function golemBoss () {
    for (let index = 0; index <= 1; index++) {
        tiles.setTileAt(tiles.getTileLocation(29, 28 + index), assets.tile`floweryVines`)
        tiles.setWallAt(tiles.getTileLocation(29, 28 + index), true)
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Spark), 472, 312 + index * 16, 100, 40, 15)
    }
    equipGolemAnims(false)
    bossHealthBar = statusbars.create(38, 6, StatusBarKind.bossHP)
    bossHealthBar.max = 540
    bossHealthBar.value = 540
    bossHealthBar.setColor(2, 15, 3)
    bossHealthBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    bossHealthBar.setBarBorder(1, 14)
    bossHealthBar.attachToSprite(miniBoss, 1, 0)
    sprites.destroyAllSpritesOfKind(SpriteKind.basicEnemy)
    miniBoss.vx = 60
    miniBoss.fx = 50
    golemCam = true
    timer.after(2000, function () {
        playTrack(5)
        golemRight = true
        miniBoss.fx = 70
        spriteutils.onSpriteUpdateInterval(miniBoss, 1000, function (sprite) {
            propSprite = sprites.create(assets.image`fallingRock`, SpriteKind.hurt)
            propSprite.vy = 50
            propSprite.z = 2
            propSprite.setPosition(((scene.cameraProperty(CameraProperty.Left) + randint(25, 295)) * 3 + mySprite.x) / 4, scene.cameraProperty(CameraProperty.Top))
            propSprite.ay = 165
            propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
            propSprite.lifespan = 8000
            extraEffects.createSpreadEffectOnAnchor(propSprite, extraEffects.createSingleColorSpreadEffectData(14, ExtraEffectPresetShape.Cloud), 5000, 48, 4)
            extraEffects.createSpreadEffectOnAnchor(propSprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 5000, 55, 25)
        })
        spriteutils.onSpriteUpdateInterval(miniBoss, 4200, function (sprite) {
            if (1 == randint(1, 2)) {
                if (golemRight) {
                    characterAnimations.setCharacterAnimationsEnabled(sprite, false)
                    animation.runImageAnimation(
                    miniBoss,
                    assets.animation`golemJumpLeft`,
                    200,
                    false
                    )
                    timer.after(1200, function () {
                        golemRight = false
                        sprite.vx = -156
                        sprite.vy = -170
                        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
                        timer.after(2500, function () {
                            characterAnimations.setCharacterAnimationsEnabled(sprite, true)
                            equipGolemAnims(true)
                        })
                    })
                } else {
                    characterAnimations.setCharacterAnimationsEnabled(sprite, false)
                    animation.runImageAnimation(
                    sprite,
                    assets.animation`golemJumpRight`,
                    200,
                    false
                    )
                    timer.after(1200, function () {
                        golemRight = true
                        sprite.vx = 156
                        sprite.vy = -170
                        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
                        timer.after(2500, function () {
                            characterAnimations.setCharacterAnimationsEnabled(sprite, true)
                            equipGolemAnims(false)
                        })
                    })
                }
            } else {
                if (randint(1, 2) == 1) {
                    enemySprite = sprites.create(assets.image`mushroomTurret`, SpriteKind.prop)
                    enemySprite.fx = 100
                    enemySprite.ay = 200
                    enemySprite.z = -4
                    giveEnemyHp(enemySprite, 60)
                    tiles.placeOnTile(enemySprite, tiles.getTileLocation(34 + randint(0, 6), 29))
                    spriteutils.onSpriteUpdateInterval(enemySprite, 2500, function (sprite) {
                        if (-4 == sprite.z) {
                            sprite.vy = -145
                            timer.after(1200, function () {
                                enemySprite.z = 2
                                sprite.setKind(SpriteKind.basicEnemy)
                            })
                        } else {
                            if (sprite.isHittingTile(CollisionDirection.Bottom)) {
                                sprite.vy = -125
                                timer.background(function () {
                                    pause(100)
                                    pauseUntil(() => sprite.isHittingTile(CollisionDirection.Bottom))
                                    for (let index = 0; index <= 1; index++) {
                                        propSprite = sprites.create(assets.image`sporeOfGolem`, SpriteKind.hurt)
                                        propSprite.setPosition(sprite.x, sprite.y)
                                        propSprite.vx = 70 * (1 + index * -2)
                                        propSprite.setFlag(SpriteFlag.DestroyOnWall, true)
                                    }
                                })
                            }
                        }
                    })
                } else {
                    characterAnimations.setCharacterAnimationsEnabled(sprite, false)
                    if (golemRight) {
                        animation.runImageAnimation(
                        sprite,
                        assets.animation`golemThrowLeft`,
                        100,
                        false
                        )
                    } else {
                        animation.runImageAnimation(
                        sprite,
                        assets.animation`golemThrowRight`,
                        100,
                        false
                        )
                    }
                    timer.after(500, function () {
                        for (let index = 0; index <= randint(3, 4); index++) {
                            propSprite = sprites.create(assets.image`seed`, SpriteKind.bossSpecial)
                            propSprite.setPosition(sprite.x, sprite.y)
                            spriteutils.setVelocityAtAngle(propSprite, spriteutils.angleFrom(propSprite, mySprite) + spriteutils.degreesToRadians(randint(-8, 8)), randint(50, 120))
                            propSprite.ay = 180
                            propSprite.vy += spriteutils.distanceBetween(mySprite, propSprite) * -0.85
                        }
                        pause(400)
                        characterAnimations.setCharacterAnimationsEnabled(sprite, true)
                    })
                }
            }
        })
        pauseUntil(() => bossHealthBar.value == 0)
        sprites.destroyAllSpritesOfKind(SpriteKind.basicEnemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.hurt)
        summonSuperPickup(36, 29, 3)
        playTrack(6)
        golemCam = false
        propSprite = sprites.create(assets.image`shardThree`, SpriteKind.shard)
        propSprite.setPosition(miniBoss.x, miniBoss.y)
        sprites.destroy(miniBoss)
        color.startFade(color.White, color.originalPalette)
        for (let index = 0; index <= 1; index++) {
            tiles.setTileAt(tiles.getTileLocation(29, 28 + index), assets.tile`transparency16`)
            tiles.setWallAt(tiles.getTileLocation(29, 28 + index), false)
        }
    })
}
sprites.onOverlap(SpriteKind.playerAttack, SpriteKind.hurt, function (sprite, otherSprite) {
    if (eyeMovementOn) {
        if (mySprite.x < otherSprite.x) {
            otherSprite.vx = 80
        } else {
            otherSprite.vx = -80
        }
    }
    if (powerOfRedspade) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(14, ExtraEffectPresetShape.Spark), 100, 48, 15)
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), 100, 20, 10)
        sprites.destroy(otherSprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 10, 8)
    sprites.destroy(otherSprite)
    money += 1
    timer.background(function () {
        music.play(music.createSoundEffect(WaveShape.Sine, 957, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundEffect(WaveShape.Sine, 3196, 4469, 0, 250, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    })
})
function showMiningPrompt (ore: Sprite) {
    spriteutils.onSpriteUpdateInterval(ore, 100, function (sprite) {
        if (spriteutils.distanceBetween(mySprite, sprite) < 50) {
            propSprite = sprites.create(assets.image`pickaxeIndicater`, SpriteKind.prop)
            propSprite.lifespan = 200
            propSprite.setPosition(sprite.x, sprite.y - 16)
        }
    })
}
function scripNPCs (num: number) {
    if (num == 1) {
        npcDataIndex = 1
        npcImage = assets.image`oldManNpc`
    }
    if (num == 2) {
        npcDataIndex = 2
        npcImage = assets.image`thunderBoy`
    }
    if (num == 3) {
        npcDataIndex = 3
        npcImage = assets.image`knightNpcLeft`
    }
    if (num == 4) {
        npcDataIndex = 4
        npcImage = assets.image`theSpelunky`
    }
}
function summonAnubis (x: number, y: number) {
    anubisSprite = sprites.create(assets.image`anbuisStand`, SpriteKind.prop)
    anubisSprite.ay = 200
    anubisSprite.setFlag(SpriteFlag.ShowPhysics, false)
    anubisSprite.setPosition(x, y)
}
function banditFight () {
    tiles.setWallAt(tiles.getTileLocation(17, 10), true)
    tiles.setWallAt(tiles.getTileLocation(17, 11), true)
    summonEnemyBullet(180, 0, false, 0)
    bossHealthBar = statusbars.create(33, 6, StatusBarKind.bossHP)
    bossHealthBar.max = 460
    bossHealthBar.value = 460
    bossHealthBar.setColor(2, 15, 3)
    bossHealthBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    bossHealthBar.setBarBorder(1, 14)
    bossHealthBar.attachToSprite(miniBoss, 1, 0)
    miniBoss.setKind(SpriteKind.boss)
    golemCam = true
    timer.after(1500, function () {
        playTrack(11)
        spriteutils.onSpriteUpdateInterval(miniBoss, 2850, function (sprite) {
            sprite.fx = 40
            if (randint(1, 2) == 1) {
                sprite.ay = 200
                if (sprite.x < mySprite.x) {
                    sprite.vx = 100
                    timer.after(100, function () {
                        sprite.vy = -120
                        pause(200)
                        summonEnemyBullet(180, 0, false, 0)
                        pause(350)
                        summonEnemyBullet(150, 0, true, spriteutils.angleFrom(sprite, mySprite))
                    })
                } else {
                    sprite.vx = -100
                    timer.after(100, function () {
                        sprite.vy = -120
                        pause(200)
                        summonEnemyBullet(-180, 0, false, 0)
                        pause(350)
                        summonEnemyBullet(150, 0, true, spriteutils.angleFrom(sprite, mySprite))
                    })
                }
            } else {
                if (randint(1, 3) == 1) {
                    sprite.vy = -150
                    if (sprite.x < mySprite.x) {
                        sprite.vx = 20
                    } else {
                        sprite.vx = -20
                    }
                    timer.after(1000, function () {
                        for (let index = 0; index <= 2; index++) {
                            timer.after(index * 150, function () {
                                summonEnemyBullet(150, 0, true, spriteutils.angleFrom(sprite, mySprite))
                                sprite.vy = -50
                            })
                        }
                    })
                } else {
                    sprite.fx = 20
                    if (sprite.x < mySprite.x) {
                        sprite.vx = 60
                    } else {
                        sprite.vx = -60
                    }
                    for (let index = 0; index <= 2; index++) {
                        timer.after((index + 1) * 100, function () {
                            sprite.vx = sprite.vx * ((index + 1) * 0.09 + 1)
                        })
                    }
                }
            }
        })
        pauseUntil(() => bossHealthBar.value <= 250)
        spriteutils.onSpriteUpdateInterval(miniBoss, 2850, function (sprite) {
            propSprite = sprites.create(assets.image`bomb`, SpriteKind.bossSpecial)
            extraEffects.createSpreadEffectOnAnchor(propSprite, fireEffect, 1000, 48, 30)
            propSprite.vy = -80
            propSprite.ay = 200
            propSprite.lifespan = 1000
            propSprite.setPosition(sprite.x, sprite.y - 4)
            spriteutils.setVelocityAtAngle(propSprite, spriteutils.angleFrom(propSprite, mySprite), spriteutils.distanceBetween(mySprite, propSprite) * 1.18)
            spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
                if (sprite.isHittingTile(CollisionDirection.Bottom)) {
                    propSprite.fx = 70
                } else {
                    propSprite.fx = 5
                }
            })
        })
        pauseUntil(() => bossHealthBar.value == 0)
        extraEffects.createSpreadEffectOnAnchor(miniBoss, extraEffects.createSingleColorSpreadEffectData(14, ExtraEffectPresetShape.Explosion), 100, 70, 40)
        summonWeapon(miniBoss.tilemapLocation().column, Math.floor((miniBoss.tilemapLocation().row + 10) / 2), 4)
        golemCam = false
        playTrack(2)
        sprites.destroy(miniBoss)
        tiles.setWallAt(tiles.getTileLocation(17, 10), false)
        tiles.setWallAt(tiles.getTileLocation(17, 11), false)
        birdSprite.z = 2
        tiles.setTileAt(tiles.getTileLocation(1, 11), assets.tile`birdCageBroken`)
        killedBandit = true
        birdSprite.vx = 90
        birdSprite.ax = 50
        birdSprite.lifespan = 5000
        birdSprite.ay = 180
        spriteutils.onSpriteUpdateInterval(birdSprite, 400, function (sprite) {
            birdSprite.vy = -40
        })
        birdSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        animation.runImageAnimation(
        birdSprite,
        assets.animation`birdFly`,
        200,
        true
        )
    })
}
scene.onOverlapTile(SpriteKind.basicEnemy, assets.tile`spikes`, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(14, ExtraEffectPresetShape.Spark), 100)
        sprites.destroy(sprite)
    }
})
scene.onHitWall(SpriteKind.boss, function (sprite, location) {
    if (5000 < game.runtime() && level == 7 && 25 < sprite.vy) {
        scene.cameraShake(4, 500)
    }
})
scene.onOverlapTile(SpriteKind.boomerang, assets.tile`cobwebRipable`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`cobwebRipped`)
    tiles.setWallAt(location.getNeighboringLocation(CollisionDirection.Right), false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (storedSpell != "none" && !(sheilding || sheildStart || swappingSpell || addicted) && Math.round(tomeSprite.y) == 15) {
        swappingSpell = true
        swappingSpell = true
        swapingStart = game.runtime()
        timer.after(800, function () {
            propTextAlt = specialAttack
            specialAttack = storedSpell
            storedSpell = propTextAlt
            swappingSpell = false
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lavatile`, function (sprite, location) {
    if (!(dead)) {
        if (!(invincible)) {
            sprite.vy = -270
            hurtPlayer(true)
            if (level == 14) {
                sprite.vy = -305
            }
        }
    }
})
sprites.onOverlap(SpriteKind.basicEnemy, SpriteKind.boomerang, function (sprite, otherSprite) {
    sprite.setKind(SpriteKind.stunnedEnemy)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -40
    sprite.vx = 0
    sprite.vy = -20
    if (sprite.x < otherSprite.x) {
        sprite.vx = -30
    } else {
        sprite.vx = 30
    }
    timer.after(500, function () {
        if (!(spriteutils.isDestroyed(sprite))) {
            sprite.setKind(SpriteKind.basicEnemy)
        }
    })
    otherSprite.vx = otherSprite.vx * -1
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), 100)
        sprites.destroy(sprite)
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of blockSettings.list()) {
        console.log(value)
    }
    if (controller.B.isPressed()) {
        blockSettings.clear()
        game.reset()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gold, function (sprite, otherSprite) {
    extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 20, 4)
    sprites.destroy(otherSprite)
    money += 1
    timer.background(function () {
        music.play(music.createSoundEffect(WaveShape.Sine, 957, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundEffect(WaveShape.Sine, 3196, 4469, 0, 250, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikesOfSnow`, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        hurtPlayer(true)
    }
})
function anubisFireball (x: number, y: number, velX: number, velY: number, hasAngle: boolean, angle: number) {
    propSprite = sprites.create(assets.image`anubisFireballImage`, SpriteKind.hurt)
    propSprite.setPosition(x, y)
    propSprite.setVelocity(velX, velY)
    spriteutils.onSpriteUpdateInterval(propSprite, 1000, function (sprite) {
        if (spriteutils.distanceBetween(mySprite, sprite) < 290) {
            extraEffects.createSpreadEffectOnAnchor(sprite, fireEffect, 1500, 58, 23)
        }
    })
    propSprite.setFlag(SpriteFlag.DestroyOnWall, true)
    if (hasAngle) {
        spriteutils.setVelocityAtAngle(propSprite, angle, velX)
        if (angle == 0) {
            spriteutils.setVelocityAtAngle(propSprite, spriteutils.angleFrom(propSprite, mySprite), velX)
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {

    
    if (!(swappingSpell || (manaRegen || dead) || npcTalking) && specialAttack == "sheild" && canSheild) {
        stopSheild()
    }
})
function explosion (damage: number, range: number, explodingSprite: Sprite) {
    for (let value of spriteutils.getSpritesWithin(SpriteKind.seth, range, explodingSprite)) {
        if (!(sethSheilding)) {
            extraEffects.createSpreadEffectOnAnchor(value, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 100)
            sethHpBar.value += damage * -1
        }
    }
    for (let value of spriteutils.getSpritesWithin(SpriteKind.boss, range, explodingSprite)) {
        if (!(preistSheilding)) {
            extraEffects.createSpreadEffectOnAnchor(value, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 100)
            statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, value).value += damage * -1
        }
    }
    for (let value of spriteutils.getSpritesWithin(SpriteKind.pot, range, explodingSprite)) {
        value.vy = -40
        value.setKind(SpriteKind.prop)
        timer.after(400, function () {
            extraEffects.createSpreadEffectOnAnchor(value, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100)
            value.setKind(SpriteKind.pot)
            sprites.destroy(value)
        })
    }
    if (damage == 25) {
        for (let value of spriteutils.getSpritesWithin(SpriteKind.hurt, range, explodingSprite)) {
            extraEffects.createSpreadEffectOnAnchor(value, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 100)
            sprites.destroy(value)
        }
    }
    for (let value of spriteutils.getSpritesWithin(SpriteKind.anubis, range, explodingSprite)) {
        fakeAnubisHit(value, true, false)
    }
    for (let value of spriteutils.getSpritesWithin(SpriteKind.basicEnemy, range, explodingSprite)) {
        value.vy = -80
        value.vx = 0
        extraEffects.createSpreadEffectOnAnchor(value, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 100)
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, value).value += damage * -1
        if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, value).value == 0) {
            sprites.destroy(value)
        }
    }
    for (let value of spriteutils.getSpritesWithin(SpriteKind.stunnedEnemy, range, explodingSprite)) {
        value.vy = -80
        value.vx = 0
        extraEffects.createSpreadEffectOnAnchor(value, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 100)
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, value).value += damage * -1
        if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, value).value == 0) {
            sprites.destroy(value)
        }
    }
}
spriteutils.createRenderable(50, function (screen2) {
    for (let index = 0; index <= scene.screenHeight() - 1; index++) {
        shiftAmount = shiftIntesity * (1 + Math.sin(game.runtime() / 400 + index / 10))
        shiftRow(screen2, scene.screenWidth(), index, shiftAmount)
    }
})
function preistEncounter () {
    platformer.moveSprite(mySprite, false, 0)
    timer.background(function () {
        pause(100)
        generateText("Are you the <wave>Keystone Priest?", 200, mySprite.x + 6, mySprite.y - 60, 2900, false, true)
        pause(3000)
        generateText("What Sins do you have to confess?", 200, mySprite.x + 55, mySprite.y - 60, 2800, true, true)
        pause(2900)
        generateText("No Sins I have undertaken with regret", 200, mySprite.x + 6, mySprite.y - 60, 2900, false, true)
        pause(3000)
        generateText("Then what have you to consult?", 200, mySprite.x + 55, mySprite.y - 60, 2800, true, true)
        pause(2900)
        generateText("I seek a path to Anubis's Temple", 200, mySprite.x + 6, mySprite.y - 60, 2900, false, true)
        pause(3000)
        generateText("I wish a audience with the Anubis himself", 200, mySprite.x + 6, mySprite.y - 60, 2900, false, true)
        pause(3000)
        generateText("I see...", 200, mySprite.x + 55, mySprite.y - 60, 2500, true, true)
        pause(2500)
        generateText("Climb the <c5>Thunderstruck Mountains", 200, mySprite.x + 55, mySprite.y - 60, 3000, true, true)
        pause(3100)
        generateText("There lays the temple", 200, mySprite.x + 55, mySprite.y - 60, 2500, true, true)
        pause(2600)
        generateText("Thank you, I will make haste to the mountain", 200, mySprite.x + 6, mySprite.y - 60, 2900, false, true)
        pause(3000)
        generateText("Know the <c2>gods</c2> do not wish you there", 200, mySprite.x + 55, mySprite.y - 60, 3200, true, true)
        pause(3300)
        generateText("I advise you to turn back now...", 200, mySprite.x + 55, mySprite.y - 60, 3100, true, true)
        pause(3200)
        platformer.moveSprite(mySprite, true, speed)
    })
}
function trueEnd () {
    npcTalking = true
    platformer.moveSprite(mySprite, false)
    endingText = fancyText.create("Conquest Of Duat", 200, 2, fancyText.gothic_large)
    fancyText.animateForTime(endingText, 2000, fancyText.AnimationPlayMode.InBackground)
    endingText.y += -50
    if (blockSettings.exists("confrontation")) {
        keystoneSprite = sprites.create(assets.image`keystoneItself`, SpriteKind.Player)
        keystoneSprite.y += 20
        spriteutils.onSpriteUpdateInterval(keystoneSprite, 100, function (sprite) {
            extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 12, 1)
            extraEffects.createSpreadEffectOnAnchor(sprite, burstEffect, 100, 12, 1)
        })
        animation.runMovementAnimation(keystoneSprite, animation.animationPresets(animation.bobbing), 2800, true)
    }
   
    timer.after(2000, function () {
        if (blockSettings.readNumber("difficulty") == 1) {
            endingText = fancyText.create("- Explorer Mode", 200, 12, fancyText.serif_small)
            fancyText.animateForTime(endingText, 1200, fancyText.AnimationPlayMode.InBackground)
            endingText.y += -35
            endingText.x += 63
        } else if (blockSettings.readNumber("difficulty") == 2) {
            endingText = fancyText.create("- Mercenary Mode", 200, 12, fancyText.serif_small)
            fancyText.animateForTime(endingText, 1200, fancyText.AnimationPlayMode.InBackground)
            endingText.y += -35
            endingText.x += 63
        } else {
            endingText = fancyText.create("- Mortal Mode", 200, 12, fancyText.serif_small)
            fancyText.animateForTime(endingText, 1200, fancyText.AnimationPlayMode.InBackground)
            endingText.y += -35
            endingText.x += 63
        }
        pause(1500)
        endingText = fancyText.create("By Bifrosty", 200, 1, fancyText.bold_sans_7)
        fancyText.animateForTime(endingText, 2000, fancyText.AnimationPlayMode.InBackground)
        endingText.y += -20
        propSprite = sprites.create(assets.image`nullImage`, SpriteKind.prop)
        tiles.placeOnTile(propSprite, tiles.getTileLocation(0, 5))
        propSprite.x += -14
        propSprite.vx = 100
        propSprite.vy = 5
        animation.runImageAnimation(
        propSprite,
        assets.animation`birdFly`,
        100,
        true
        )
        propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        pause(4000)
        endingText = fancyText.create("Thanks For Playing!", 200, 5, fancyText.geometric_sans_7)
        fancyText.animateForTime(endingText, 1000, fancyText.AnimationPlayMode.InBackground)
        endingText.y += 30
        pause(2500)
        game.setDialogTextColor(11)
        game.showLongText("Dear Journal,    I've defeated death itself. Duat is gone. I think I see ghosts in the corner of my eye, but I know I'm not paranoid--they soothe me. I no longer know what happens after death. Until then I won't know if I served justice. The best I can do now is to live my life its fullest. For I've killed the past. ", DialogLayout.Center)
        game.setDialogTextColor(2)
        if (blockSettings.readNumber("difficulty") == 3 && blockSettings.exists("confrontation")) { 
            game.showLongText("Seeing This Means you overcame every challenge in this game on the hardest difficulty...                                    Cool...                                                                  What!? You want a secret message from the developer? Ok fine, here: 'Be sure to drink your Ovaltine' ", DialogLayout.Center)
        }
        game.setDialogTextColor(1)
        game.showLongText("This game is dedicated to anyone who has ever lost someone, living or dead. Find solace.", DialogLayout.Center)
        blockSettings.clear()
        game.reset()
    })
}
sprites.onOverlap(SpriteKind.anubis, SpriteKind.boomerang, function (sprite, otherSprite) {
    fakeAnubisHit(otherSprite, false, true)
})
function sethTrack(intro: boolean) {    
    timer.background(function() {
        if (CanPlaySong && intro) {
            music.play(music.createSong(assets.song`zenithIntro`), music.PlaybackMode.UntilDone)
        }
        if (CanPlaySong) {
        music.play(music.createSong(assets.song`zenithAccending`), music.PlaybackMode.UntilDone)
        }
        if (CanPlaySong) {
            music.play(music.createSong(assets.song`zenithAccended`), music.PlaybackMode.UntilDone)
        }
        for (let index = 0; index < 2; index++) {
            if (CanPlaySong) {
                music.play(music.createSong(assets.song`displayOfPower`), music.PlaybackMode.UntilDone)
            }
        }
        if (CanPlaySong) {
            music.play(music.createSong(assets.song`zenithDecending`), music.PlaybackMode.UntilDone)
        }
        if (sethHpBar.value < sethHpBar.max / 2) {
            if (CanPlaySong) {
                music.play(music.createSong(assets.song`keystoneAnthem`), music.PlaybackMode.UntilDone)
            }
            if (CanPlaySong) {
                music.play(music.createSong(assets.song`calmBeforeStorm`), music.PlaybackMode.UntilDone)
            }
            for (let index = 0; index < 2; index++) {
                if (CanPlaySong) {
                    music.play(music.createSong(assets.song`theStorm`), music.PlaybackMode.UntilDone)
                }
            }
            sethTrack(false)
        } else {
            sethTrack(false)
        }
    })
}

function AnubisTrack () {
    timer.background(function () {
        playTrack(10)
        pause(4000)
        if (CanPlaySong) {
            playTrack(0)
            music.play(music.createSong(assets.song`accendingOne`), music.PlaybackMode.UntilDone)
            music.play(music.createSong(assets.song`accendingTwo`), music.PlaybackMode.UntilDone)
            music.play(music.createSong(assets.song`accendingFour`), music.PlaybackMode.UntilDone)
            music.play(music.createSong(assets.song`accendingFive`), music.PlaybackMode.UntilDone)
        }
        if (CanPlaySong) {
            music.play(music.createSong(assets.song`beatDrop`), music.PlaybackMode.UntilDone)
        }
        if (CanPlaySong) {
            music.play(music.createSong(assets.song`beatNuetral`), music.PlaybackMode.UntilDone)
        }
        while (CanPlaySong) {
            for (let index = 0; index < 2; index++) {
                if (CanPlaySong) {
                    music.play(music.createSong(assets.song`clankers`), music.PlaybackMode.UntilDone)
                    music.play(music.createSong(assets.song`clankersTwo`), music.PlaybackMode.UntilDone)
                }
            }
            if (CanPlaySong) {
                music.play(music.createSong(assets.song`epicOne`), music.PlaybackMode.UntilDone)
                music.play(music.createSong(assets.song`epicTwo`), music.PlaybackMode.UntilDone)
            }
            for (let index = 0; index < 2; index++) {
                if (CanPlaySong) {
                    music.play(music.createSong(assets.song`intensityOne`), music.PlaybackMode.UntilDone)
                    music.play(music.createSong(assets.song`intensityTwo`), music.PlaybackMode.UntilDone)
                }
                if (CanPlaySong) {
                    music.play(music.createSong(assets.song`fightingOne`), music.PlaybackMode.UntilDone)
                    music.play(music.createSong(assets.song`fightingTwo`), music.PlaybackMode.UntilDone)
                }
            }
            if (CanPlaySong) {
                music.play(music.createSong(assets.song`adhorrentOne`), music.PlaybackMode.UntilDone)
                music.play(music.createSong(assets.song`adhorrentTwo`), music.PlaybackMode.UntilDone)
            }
            if (CanPlaySong) {
                music.play(music.createSong(assets.song`ghostly`), music.PlaybackMode.UntilDone)
            }
            if (CanPlaySong) {
                music.play(music.createSong(assets.song`thrReturn`), music.PlaybackMode.UntilDone)
            }
        }
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.bossSpecial, function (sprite, otherSprite) {
    if (level == 6 && controller.A.isPressed()) {
        sprites.destroy(attractorSprite)
        sprites.destroy(otherSprite)
        hasBlueMushroom = true
    }
    if (level == 11 && controller.A.isPressed()) {
        hasKnightHelmut = true
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        equipPlayerAnim(true, false)
        lives += 2
        extraEffects.createSpreadEffectOnAnchor(livesText, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Explosion), 100, 56, 40)
        livesText.setIcon(anhkSheildImage)
    }
    if (eyeMovementOn) {
        otherSprite.setKind(SpriteKind.prop)
        timer.background(function () {
            otherSprite.follow(miniBoss, 150)
            pauseUntil(() => otherSprite.overlapsWith(miniBoss))
            music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, miniBoss).value += -25
            extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Twinkle), 500, 35, 10)
            sprites.destroy(otherSprite)
            if (statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, miniBoss).value == 0) {
                playTrack(4)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                color.startFade(color.White, color.originalPalette)
                eyeMovementOn = false
                propSprite = sprites.create(assets.image`gaurdianShardOne`, SpriteKind.shard)
                propSprite.setPosition(miniBoss.x, miniBoss.y)
                sprites.destroy(miniBoss)
                sprites.destroy(attractorSprite)
                sprites.destroyAllSpritesOfKind(SpriteKind.hurt)
                summonSuperPickup(47, 24, 1)
                tiles.setTileAt(tiles.getTileLocation(55, 23), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(55, 22), assets.tile`transparency16`)
                tiles.setWallAt(tiles.getTileLocation(55, 23), false)
                tiles.setWallAt(tiles.getTileLocation(55, 22), false)
                tiles.setTileAt(tiles.getTileLocation(64, 22), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(64, 23), assets.tile`transparency16`)
                tiles.setWallAt(tiles.getTileLocation(64, 22), false)
                tiles.setWallAt(tiles.getTileLocation(64, 23), false)
                tiles.setTileAt(tiles.getTileLocation(64, 24), assets.tile`stoneTopRight`)
                for (let index = 0; index <= 8; index++) {
                    tiles.setTileAt(tiles.getTileLocation(index + 55, 20), assets.tile`rockBottom`)
                }
                for (let index = 0; index <= 8; index++) {
                    tiles.setTileAt(tiles.getTileLocation(index + 55, 24), assets.tile`stoneFloor`)
                }
                tiles.setTileAt(tiles.getTileLocation(55, 21), assets.tile`stoneCellingSingle`)
                tiles.setTileAt(tiles.getTileLocation(55, 20), assets.tile`stoneWallLeftBottomCorner`)
                tiles.setTileAt(tiles.getTileLocation(64, 21), assets.tile`rockBottomLeft`)
                tiles.setTileAt(tiles.getTileLocation(64, 20), assets.tile`rockCornerNortheast0`)
            }
        })
    }
})
function fakeAnubisHit (atackerSprite: Sprite, magicAttack: boolean, destructable: boolean) {
    extraEffects.createSpreadEffectOnAnchor(atackerSprite, extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Twinkle), 100, 48, 40)
    scene.cameraShake(2, 500)
    if (destructable) {
        sprites.destroy(atackerSprite)
    }
    if (anubisQuery) {
        anubisQuery = false
        if (magicAttack) {
            generateText("Your untrained magic is worthless against me!", 200, anubisSprite.x + 6, anubisSprite.y - 60, 3100, true, true)
        } else {
            generateText("Weapons of the material world can not harm me!", 200, anubisSprite.x + 6, anubisSprite.y - 60, 3100, true, true)
        }
    }
}
function moonKnight () {
    timer.background(function () {
        canSheild = false
        npcTalking = true
        color.setPalette(
        color.Black
        )
        moonSprite.setImage(moonImages[1])
        platformer.moveSprite(mySprite, false)
        pause(500)
        color.setPalette(
        color.originalPalette
        )
        pause(2000)
        moonSprite.setImage(moonImages[0])
        konshuSprite = sprites.create(konshuImageList[0], SpriteKind.prop)
        konshuSprite.z = 3
        konshuSprite.setFlag(SpriteFlag.StayInScreen, true)
        konshuSprite.setPosition(moonSprite.x + 5, moonSprite.y)
        konshuSprite.vy = 160
        konshuSprite.ay = 210
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
        pauseUntil(() => konshuSprite.isHittingTile(CollisionDirection.Bottom))
        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
        lunarang(konshuSprite.x, konshuSprite.y, 270, 220, true, 2000, true)
        pause(200)
        konshuSprite.setImage(konshuImageList[2])
        konshuSprite.fx = 100
        konshuSprite.vx = -100
        pause(3000)
        platformer.setCharacterAnimationsEnabled(mySprite, false)
        if (!(blockSettings.exists("mooned"))) {
            npcTalking = true
            generateText("Who are you, man of the moon?", 100, mySprite.x, mySprite.y - 45, 3000, false, true)
            pause(3500)
            generateText("I am not like you, <red>Mortal", 140, konshuSprite.x, mySprite.y - 45, 3000, true, true)
            pause(3500)
            generateText("I am <blue>Khonsu</blue>, God Of The Moon", 140, konshuSprite.x, mySprite.y - 45, 3000, true, true)
            pause(3500)
            generateText("And are here to...?", 100, mySprite.x, mySprite.y - 45, 3000, false, true)
            pause(3500)
            generateText("I know of your personal quest...", 140, konshuSprite.x, mySprite.y - 45, 3000, true, true)
            pause(3100)
            generateText("Your \"Conquest Of Duat\"", 140, konshuSprite.x, mySprite.y - 45, 3000, true, true)
            pause(3100)
            generateText("You are overturning the balance of life and death!", 140, konshuSprite.x, mySprite.y - 57, 3300, true, true)
            pause(3400)
            generateText("Accept my mercy and <shake>die</shake> quickly", 140, konshuSprite.x, mySprite.y - 45, 3200, true, true)
            pause(1750)
            blockSettings.writeString("mooned", "true")
        }
        pause(1500)
        npcTalking = false
        bossHealthBar = statusbars.create(20, 5, StatusBarKind.bossHP)
        bossHealthBar.max = 350
        bossHealthBar.value = 350
        bossHealthBar.setColor(1, 15, 8)
        bossHealthBar.setBarBorder(1, 14)
        bossHealthBar.attachToSprite(konshuSprite, 1, 0)
        platformer.setCharacterAnimationsEnabled(mySprite, true)
        platformer.moveSprite(mySprite, true)
        canSheild = true
        konshuSprite.fx = 0
        konshuSprite.vy = -150
        konshuSprite.vx = 70
        konshuSprite.setKind(SpriteKind.Enemy)
        bossSpeed = 70
        pause(300)
        playTrack(8)
        lunarang(konshuSprite.x, konshuSprite.y, spriteutils.radiansToDegrees(spriteutils.angleFrom(konshuSprite, mySprite)), 200, true, 4000, true)
        spriteutils.onSpriteUpdateInterval(konshuSprite, 50, function (sprite) {
            if (tiles.tileAtLocationIsWall(sprite.tilemapLocation())) {
                konshuSprite.vy = -100
            }
            
            if (sprite.isHittingTile(CollisionDirection.Bottom)) {
                if (tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))) {
                    konshuSprite.setImage(konshuImageList[1])
                    sprite.vx = bossSpeed * -1
                    if (!(tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Right)))) {
                        sprite.vy = -110
                        sprite.vx = 40
                        konshuSprite.setImage(konshuImageList[2])
                        timer.after(300, function () {
                            sprite.vx = bossSpeed
                        })
                    }
                }
                if (tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))) {
                    konshuSprite.setImage(konshuImageList[2])
                    sprite.vx = bossSpeed
                    if (!(tiles.tileAtLocationIsWall(sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Left)))) {
                        sprite.vy = -110
                        sprite.vx = -40
                        konshuSprite.setImage(konshuImageList[1])
                        timer.after(300, function () {
                            sprite.vx = bossSpeed * -1
                        })
                    }
                }
            }
        })
        timer.after(2000, function () {
            spriteutils.onSpriteUpdateInterval(konshuSprite, 3000, function (sprite) {
                lunarang(mySprite.x, 1, 90, 370 + mySprite.y * 0.11, true, 1500, false)
                extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), mySprite.x, 1, 500, 80, 30)
                propSprite.ay = propSprite.vy * -1.08
            })
            spriteutils.onSpriteUpdateInterval(konshuSprite, 5600, function (sprite) {
                if (1 == randint(1, 2)) {
                    if (randint(1, 2) == 1) {
                        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 16, mySprite.tilemapLocation().y, 100, 80, 20)
                        for (let index = 0; index <= 4; index++) {
                            lunarang(-16, mySprite.tilemapLocation().y, 180, index * 55 + 20, false, 9000, true)
                            propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                            propSprite.ax = propSprite.vx * -1.5
                        }
                    } else {
                        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 304, mySprite.tilemapLocation().y, 100, 80, 20)
                        for (let index = 0; index <= 4; index++) {
                            lunarang(336, mySprite.tilemapLocation().y, 0, index * 55 + 20, false, 9000, true)
                            propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                            propSprite.ax = propSprite.vx * -1.5
                        }
                    }
                } else {
                    if (randint(1, 2) == 1) {
                        for (let index = 0; index <= 10; index++) {
                            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), index * 32 + 16, 0, 500, 16, 20)
                        }
                        timer.after(700, function () {
                            if (!(spriteutils.isDestroyed(sprite))) {
                                for (let index = 0; index <= 10; index++) {
                                    lunarang(index * 32 + 16, 0, 90, 396, true, 3000, false)
                                }
                            }
                        })
                    } else {
                        for (let index = 0; index <= 9; index++) {
                            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), index * 32 + 32, 0, 500, 16, 20)
                        }
                        timer.after(700, function () {
                            if (!(spriteutils.isDestroyed(sprite))) {
                                for (let index = 0; index <= 9; index++) {
                                    lunarang(index * 32 + 32, 0, 90, 396, true, 3000, false)
                                }
                            }
                        })
                    }
                }
            })
        })
        pauseUntil(() => bossHealthBar.value == 0)
        sprites.destroy(konshuSprite)
        tiles.setCurrentTilemap(tilemap`theFall`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 7))
        sprites.destroyAllSpritesOfKind(SpriteKind.hurt)
        for (let value of sprites.allOfKind(SpriteKind.boomerang)) {
            value.setFlag(SpriteFlag.GhostThroughWalls, true)
            value.follow(mySprite, 120)
        }
        moonSprite.setImage(moonImages[1])
        music.stopAllSounds()
        generateText("You are a tough one", 140, moonSprite.x, mySprite.y - 40, 3000, true, true)
        pause(3500)
        generateText("But you won't reach Duat Alive, Dutiful Betrayer", 140, moonSprite.x, mySprite.y - 40, 3000, true, true)
        pause(3500)
        generateText("May The <c4>Jungles</c4> beneath consume you", 140, moonSprite.x, mySprite.y - 40, 3000, true, true)
        pause(3500)
        color.setPalette(
        color.Black
        )
        timer.after(500, function () {
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
            lives += 1
            for (let index = 0; index <= 7; index++) {
                for (let index2 = 0; index2 <= 3; index2++) {
                    if (index == 0) {
                        tiles.setTileAt(tiles.getTileLocation(index + 6, index2 + 11), assets.tile`myTile`)
                    } else {
                        if (index == 7) {
                            tiles.setTileAt(tiles.getTileLocation(index + 6, index2 + 11), assets.tile`myTile0`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(index + 6, index2 + 11), assets.tile`transparency16`)
                            tiles.setWallAt(tiles.getTileLocation(index + 6, index2 + 11), false)
                        }
                    }
                }
            }
            color.setPalette(
            color.originalPalette
            )
            pause(100)
            pauseUntil(() => mySprite.isHittingTile(CollisionDirection.Bottom))
            finishLevel(false)
        })
    })
}
function killPlayer () {
    if (blockSettings.readNumber("difficulty") == 3) {
        blockSettings.clear()
    }
    
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    music.stopAllSounds()
    music.setVolume(5)
    platformer.setCharacterAnimationsEnabled(mySprite, false)
    dead = true
    platformer.moveSprite(mySprite, false, 0)
    animation.runImageAnimation(
    mySprite,
    playerAnimList[12],
    500,
    false
    )
    timer.after(3500, function () {
        color.startFade(color.originalPalette, color.Black, 2000)
        pause(2000)
        game.reset()
    })
}
events.spriteEvent(SpriteKind.Player, SpriteKind.npc, events.SpriteEvent.StopOverlapping, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.pickupText)
})
function summonEnemyBullet (vx: number, vy: number, useAngle: boolean, angle: number) {
    propSprite = sprites.create(assets.image`bullet`, SpriteKind.hurt)
    propSprite.setPosition(miniBoss.x, miniBoss.y - 3)
    propSprite.setFlag(SpriteFlag.DestroyOnWall, true)
    if (useAngle) {
        spriteutils.setVelocityAtAngle(propSprite, angle, vx)
    } else {
        propSprite.setVelocity(vx, vy)
    }
    music.play(music.tonePlayable(165, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    if (level == 8) {
        tiles.setTileAt(tiles.getTileLocation(90, 10), assets.tile`preistEvil`)
        sprites.destroy(otherSprite)
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Explosion), 100)
        timer.after(100, function () {
            playTrack(0)
            generateText("I told you to turn back...", 150, otherSprite.x - 55, otherSprite.y - 60, 3100, true, true)
            pause(3200)
            finishLevel(false)
        })
    } else {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100)
        finishLevel(true)
        sprites.destroy(otherSprite)
    }
})
function summonSuperPickup (col: number, row: number, num: number) {
    pickupSprite = sprites.create(otherworldImageList[num], SpriteKind.prop)
    tiles.placeOnTile(pickupSprite, tiles.getTileLocation(col, row))
    pickupSprite.z = 4
    pickupSprite.z += num * 0.1
    spriteutils.onSpriteUpdateInterval(pickupSprite, 100, function (sprite) {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 15, 1)
        if (!(controller.A.isPressed())) {
            sprite.setKind(SpriteKind.otherworldPickup)
        }
    })
}
function swingPickaxe () {
    cutSprite = sprites.create(weaponImageList[2], SpriteKind.playerAttack)
    cutSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    cutSprite.lifespan = 950
    if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
        animation.runImageAnimation(
        cutSprite,
        assets.animation`picaxeSwingRight`,
        150,
        false
        )
        swingingRight = true
    } else {
        animation.runImageAnimation(
        cutSprite,
        assets.animation`pickaxeSwingLeft`,
        150,
        false
        )
        swingingRight = false
    }
}
events.spriteEvent(SpriteKind.Player, SpriteKind.weaponPickup, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    if (spriteutils.isDestroyed(boomrangSprite) || !(boomrangSprite)) {
        pickupBasic = true
        pickupTextSprite = textsprite.create("Press A To Pickup")
        pickupTextSprite.x = otherSprite.x
        pickupTextSprite.y = otherSprite.y - 20
        pickupTextSprite.z = 5
        pickupTextSprite.setKind(SpriteKind.pickupText)
    }
})
sprites.onOverlap(SpriteKind.stunnedEnemy, SpriteKind.otherworldAttack, function (sprite, otherSprite) {
    if (otherSprite.z == 1) {
        sprites.destroy(otherSprite)
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -35
    }
    if (otherSprite.z == 0) {
        sprites.destroy(otherSprite)
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -45
    }
    if (otherSprite.z == -3) {
        sprites.destroy(otherSprite)
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -30
    }
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value == 0) {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), 100)
        sprites.destroy(sprite)
    }
})
sprites.onOverlap(SpriteKind.playerAttack, SpriteKind.redOre, function (sprite, otherSprite) {
    if (basicAttack == "pick") {
        otherSprite.setKind(SpriteKind.prop)
        timer.after(400, function () {
            if (!(spriteutils.isDestroyed(otherSprite))) {
                if (sprite.overlapsWith(otherSprite)) {
                    extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 100, 20, 20)
                    otherSprite.setKind(SpriteKind.redOre)
                    sprites.destroy(otherSprite)
                } else {
                    otherSprite.setKind(SpriteKind.redOre)
                }
            }
        })
    }
})
events.spriteEvent(SpriteKind.Player, SpriteKind.soul, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    otherSprite.follow(anubisSprite, 100)
})
sprites.onOverlap(SpriteKind.playerAttack, SpriteKind.pot, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.prop)
    otherSprite.vy = -35
    timer.after(200, function () {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100, 20, 10)
        otherSprite.setKind(SpriteKind.pot)
        sprites.destroy(otherSprite)
    })
})
function fireArrow (vx: number) {
    propSprite = sprites.create(assets.image`arrowRight`, SpriteKind.hurt)
    propSprite.z = -5
    propSprite.vx = vx
    propSprite.ax = vx * 0.285
    propSprite.setFlag(SpriteFlag.DestroyOnWall, true)
    if (0 > vx) {
        propSprite.setImage(assets.image`arrowLeft`)
    }
    if (level == 17 || level == 16) {
        spriteutils.onSpriteUpdateInterval(propSprite, 500, function (sprite) {
            if (spriteutils.distanceBetween(mySprite, sprite) <= 300) {
                extraEffects.createSpreadEffectOnAnchor(sprite, fireEffect, 500, 20, 5)
            }
        })
        multilights.addLightSource(propSprite, 2, 5, 0)
        propSprite.ax = vx * 0.585
    }


}
sprites.onOverlap(SpriteKind.Player, SpriteKind.hurt, function (sprite, otherSprite) {
    if (!(sheilding) || darkImmunity) {
        hurtPlayer(true)
        sprites.destroy(otherSprite)
    }
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    manaRegen = true
    otherworldBar.setColor(2, 15)
    if (specialAttack == "sheild") {
        stopSheild()
    }
})
function jungleCrypt () {
    trueNorth(24, 39)
    timer.after(700, function () {
        summonSuperPickup(19, 5, 4)
        pickupSprite.ay = 250
    })
    timer.background(function () {
        pauseUntil(() => mySprite.isHittingTile(CollisionDirection.Bottom))
        lives += 1
    })
    propSprite = sprites.create(assets.image`shardFive`, SpriteKind.shard)
    tiles.placeOnTile(propSprite, tiles.getTileLocation(35, 38))
    propSprite = sprites.create(assets.image`dynamiteScroll`, SpriteKind.prop)
    tiles.placeOnTile(propSprite, tiles.getTileLocation(24, 39))
    propSprite.z = 5
    spriteutils.onSpriteUpdateInterval(propSprite, 400, function (sprite) {
        if (spriteutils.distanceBetween(mySprite, sprite) < 250) {
            extraEffects.createSpreadEffectOnAnchor(sprite, burstEffect, 100)
        }
    })
    spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
        if (mySprite.overlapsWith(sprite)) {
            extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(5, ExtraEffectPresetShape.Spark), 100)
            storedSpell = "boom"
            sprites.destroy(sprite)
            promptText = textsprite.create("Press Down To Swap Spells")
            tiles.placeOnTile(promptText, tiles.getTileLocation(23, 39))
        }
    })
}
sprites.onCreated(SpriteKind.shard, function (sprite) {
    spriteutils.onSpriteUpdateInterval(sprite, 100, function (sprite) {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 20, 1)
    })
    timer.after(2000, function () {
        if (level == 5) {
            pauseUntil(() => spriteutils.distanceBetween(mySprite, sprite) < 25)
        }
        sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        sprite.follow(mySprite)
        pauseUntil(() => sprite.overlapsWith(mySprite))
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100, 30, 20)
        shardObtained = true
        sprites.destroy(sprite)
        music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Sine, 123, 4250, 127, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Noise, 123, 4250, 127, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.weaponPickup, function (sprite, otherSprite) {
    if (controller.A.isPressed() && pickupBasic && !(aiming) && !(gunCooldown)) {
        if (basicAttack == weaponList[0]) {
            summonWeapon(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 0)
        }
        if (basicAttack == weaponList[1]) {
            summonWeapon(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 1)
        }
        if (basicAttack == weaponList[2]) {
            summonWeapon(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 2)
        }
        if (basicAttack == weaponList[3]) {
            summonWeapon(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 3)
        }
        if (basicAttack == weaponList[4]) {
            summonWeapon(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 4)
        }
        if (basicAttack == weaponList[5]) {
            summonWeapon(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 5)
        }
        basicAttack = "none"
        if (otherSprite.z == 4) {
            basicAttack = weaponList[0]
        }
        if (otherSprite.z == 4.1) {
            basicAttack = weaponList[1]
        }
        if (otherSprite.z == 4.2) {
            basicAttack = weaponList[2]
        }
        if (otherSprite.z == 4.3) {
            basicAttack = weaponList[3]
        }
        if (otherSprite.z == 4.4) {
            basicAttack = weaponList[4]
        }
        if (otherSprite.z == 4.5) {
            basicAttack = weaponList[5]
        }
        sprites.destroy(otherSprite)
        pickupBasic = false
    }
})
function loadShop (num: number) {
    shopItemImageList = [
    assets.image`anhkShop`,
    assets.image`spikedShoes`,
    assets.image`monkeyPaw`,
    assets.image`amulet`,
    assets.image`compass`,
    assets.image`sentryScroll`,
    weaponImageList[3],
    assets.image`mainaCrystal`,
    assets.image`redSpade`,
    assets.image`mainaFlower`
    ]
    shopPrices = [
    20,
    15,
    15,
    20,
    20,
    15,
    30,
    20,
    3,
    25
    ]
    shopItemDataList = [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 6, 3],
    [0, 7],
    [0, 8],
    [0, 9],
    ]
    if (num == 1) {
        currentShopList = [0, 4]
    }
    if (num == 2) {
        currentShopList = [2, 3]
    }
    if (num == 3) {
        currentShopList = [7, 9, 8]
    }
    if (num == 4) {
        currentShopList = [6]
    }
    if (num == 5) {
        currentShopList = [1]
    }
    if (num == 6) {
        currentShopList = [5]
    }
    for (let index = 0; index <= currentShopList.length - 1; index++) {
        shopItemSprite = sprites.create(shopItemImageList[shopItemDataList[currentShopList[index]][1]], SpriteKind.shopBuff)
        tiles.placeOnTile(shopItemSprite, tiles.getTilesByType(assets.tile`pedistal`)[index].getNeighboringLocation(CollisionDirection.Top))
        shopItemSprite.y += 4
        shopItemSprite.z += shopItemDataList[currentShopList[index]][1] * 0.1
        if (currentShopList[index] == 6) {
            shopItemSprite.y += -6
        }
        if (shopItemDataList[currentShopList[index]][0] == 1) {
            shopItemSprite.setKind(SpriteKind.shopItem)
            shopItemSprite.y += 2
        }
    }
}
function explosionNoise () {
    music.play(music.createSoundEffect(WaveShape.Square, 1550, 3481, 89, 146, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Noise, 1506, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
}
function startEyeBoss () {
    timer.background(function () {
        miniBoss.vy = 220
        miniBoss.ay = 220
        pauseUntil(() => miniBoss.isHittingTile(CollisionDirection.Bottom))
        miniBoss.ay = 0
        mySprite.vy = -230
        mySprite.vx = -130
        color.startFade(color.White, color.originalPalette)
        playTrack(5)
        tiles.setTileAt(tiles.getTileLocation(47, 25), assets.tile`brickFloorCracked`)
        for (let index = 0; index <= 5; index++) {
            tiles.setTileAt(tiles.getTileLocation(39, index + 19), assets.tile`brickWallRight`)
            tiles.setWallAt(tiles.getTileLocation(39, index + 19), true)
        }
        for (let index = 0; index <= 7; index++) {
            for (let index2 = 0; index2 <= 9; index2++) {
                tiles.setTileAt(tiles.getTileLocation(index2 + 29, index + 18), assets.tile`blackTile`)
            }
        }
        tiles.setTileAt(tiles.getTileLocation(39, 24), assets.tile`cornerSouthwest`)
        miniBoss.vy = -60
        miniBoss.fy = 20
        pause(2000)
        startMS = game.runtime()
        eyeMovementOn = true
        bossHealthBar = statusbars.create(20, 4, StatusBarKind.bossHP)
        bossHealthBar.setColor(3, 15, 8)
        bossHealthBar.attachToSprite(miniBoss, 1, 0)
        bossHealthBar.setBarBorder(1, 14)
        bossHealthBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        bossTurn = 0
        spriteutils.onSpriteUpdateInterval(miniBoss, 3500, function (sprite) {
            bossTurn += 1
            if (bossTurn / 3 == Math.floor(bossTurn / 3)) {
                propSprite = sprites.create(burstImageList[randint(0, 2)], SpriteKind.bossSpecial)
                music.play(music.createSoundEffect(WaveShape.Noise, 1001, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Square, 1001, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                propSprite.setPosition(sprite.x, sprite.y)
                propSprite.z = 1
                propSprite.vy = 25
                propSprite.setFlag(SpriteFlag.DestroyOnWall, true)
                spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
                    extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(8, ExtraEffectPresetShape.Twinkle), 150, 35, 10)
                })
            } else {
                propSprite = sprites.create(assets.image`skullAttack`, SpriteKind.hurt)
                propSprite.setPosition(sprite.x, sprite.y)
                spriteutils.setVelocityAtAngle(propSprite, spriteutils.angleFrom(propSprite, mySprite), 85)
                propSprite.z = 1
                propSprite.setFlag(SpriteFlag.BounceOnWall, true)
                spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
                    extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(9, ExtraEffectPresetShape.Spark), 150, 35, 5)
                })
            }
        })
    })
}
function orcleCutscene (num: number) {
    npcSprite = sprites.create(assets.image`theTutorial`, SpriteKind.prop)
    if (num == 1) {
        tiles.setTileAt(tiles.getTileLocation(78, 12), assets.tile`transparency16`)
        tiles.placeOnTile(npcSprite, tiles.getTileLocation(78, 12))
        timer.background(function () {
            generateText("!!!", 150, 1250, 150, 800, true, true)
            pause(800)
            generateText("I've Never Seen anyone survive that cave", 150, 1250, 150, 2800, true, true)
            pause(2800)
            generateText("You Must Be Something Special, <red>Traveler", 150, 1250, 150, 2800, true, true)
            pause(3300)
            generateText("What I am and aren't is none of your concern", 150, 1200, 160, 2800, false, true)
            pause(3300)
            generateText("How do I get to the Keystone Village?", 150, 1200, 160, 2600, false, true)
            pause(3300)
            generateText("Just up ahead... but I have more for you", 150, 1250, 150, 2800, true, true)
            pause(3300)
            generateText("I offer <blue>protection</blue>...", 150, 1250, 150, 2800, true, true)
            pause(3300)
            generateText("What sort of protection?", 150, 1200, 160, 2600, false, true)
            pause(3300)
            generateText("The Hallowed Kind", 150, 1250, 150, 3700, true, true)
            pause(3700)
            for (let index = 0; index < 4; index++) {
                color.setPalette(
                color.Black
                )
                pause(100)
                color.setPalette(
                color.originalPalette
                )
                pause(100)
            }
            color.setPalette(
            color.Black
            )
            sprites.destroy(npcSprite)
            summonSuperPickup(77, 12, 0)
            pause(500)
            color.setPalette(
            color.originalPalette
            )
            platformer.moveSprite(mySprite, true, speed)
            pauseUntil(() => spriteutils.isDestroyed(pickupSprite))
            promptText = textsprite.create("Hold B to use shield")
            tiles.placeOnTile(promptText, tiles.getTileLocation(78, 14))
        })
    }
    if (num == 2) {
        tiles.setTileAt(tiles.getTileLocation(27, 15), assets.tile`transparency16`)
        tiles.placeOnTile(npcSprite, tiles.getTileLocation(27, 15))
        platformer.moveSprite(mySprite, false, 0)
        npcTalking = true
        timer.background(function () {
            if (!(blockSettings.exists("chosen"))) {
                generateText("<red>Traveler</red>!", 150, mySprite.x + 25, mySprite.y - 65, 2000, true, true)
                pause(2100)
                if (specialAttack == "sheild") {
                    generateText("I see my protection has served you well", 150, mySprite.x + 25, mySprite.y - 65, 3100, true, true)
                    pause(3100)
                }
                generateText("You have journeyed far, overcame many obstacles", 150, mySprite.x + 25, mySprite.y - 65, 3000, true, true)
                pause(3100)
                generateText("And now the fruits of you labor lie ahead", 150, mySprite.x + 25, mySprite.y - 65, 2800, true, true)
                pause(2900)
                generateText("Beyond this point is the temple", 150, mySprite.x + 25, mySprite.y - 65, 2800, true, true)
                pause(2900)
                generateText("and the <c5>veil</c5> within..", 150, mySprite.x + 25, mySprite.y - 65, 2800, true, true)
                pause(2900)
                generateText("It wasn't a coincidence you were at that cave was it?", 150, mySprite.x, mySprite.y - 65, 3000, false, true)
                pause(3100)
                generateText("No it was not,", 150, mySprite.x + 25, mySprite.y - 65, 2800, true, true)
                pause(2900)
                generateText("Like you, I once sook the temple", 150, mySprite.x + 25, mySprite.y - 65, 2800, true, true)
                pause(2900)
                generateText("But when I found my journey's end I didn't have all the pieces.", 150, mySprite.x + 25, mySprite.y - 65, 3500, true, true)
                pause(3600)
                blockSettings.writeString("chosen", "true")
            }
            generateText("Take my piece, may you be different...", 150, mySprite.x + 25, mySprite.y - 65, 2800, true, true)
            pause(2900)
            propSprite = sprites.create(assets.image`shardTwo`, SpriteKind.shard)
            propSprite.setPosition(mySprite.x + 16, mySprite.y - 85)
            pause(2900)
            generateText("Good Luck", 150, mySprite.x + 25, mySprite.y - 65, 2800, true, true)
            platformer.moveSprite(mySprite, true, speed)
            npcTalking = false
            extraEffects.createSpreadEffectOnAnchor(propSprite, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 100)
        })
    }
}
function intailizeVaribles () {
    loadEffects()
    sheilding = false
    preistWeaponImage = assets.image`evilEye`
    otherworldImageList = [
    assets.image`otherwoldSheild`,
    assets.image`runeOtheworld`,
    assets.image`hourglass`,
    assets.image`thornSpell`,
    assets.image`moonSpell`,
    assets.image`yellingSpell`,
    assets.image`boomSpell`,
    assets.image`flake`
    ]
    otherworldSpellList = [
    "sheild",
    "burst",
    "clock",
    "thorn",
    "summon",
    "yell",
    "boom",
    "icicle"
    ]
    goldDepsoitImages = [
    assets.image`goldDepositOne`,
    assets.image`goldDepositTwo`,
    assets.image`goldDepositThree`,
    assets.image`diamondOre`
    ]
    burstImageList = [assets.image`burstOne`, assets.image`burstTwo`, assets.image`burstThree`]
    konshuImageList = [assets.image`konshuFront`, assets.image`konshuLeft`, assets.image`konshuRight`]
    moonImages = [assets.image`moon`, assets.image`moonWithMan`]
    basicAttack = blockSettings.readString("Basic")
    specialAttack = blockSettings.readString("Super")
    storedSpell = blockSettings.readString("Tome")
    luckyness = blockSettings.readNumber("Luck")
    canSheild = true
    swappingSpell = false
    if (blockSettings.exists("knighted")) {
        hasKnightHelmut = true
    } else {
        hasKnightHelmut = false
    }
    if (blockSettings.exists("angeredBandit")) {
        birdStory = true
    } else {
        birdStory = false
    }
    if (blockSettings.exists("teethFlower")) {
        flowerOwned = true
    } else {
        flowerOwned = false
    }
    if (blockSettings.exists("spade")) {
        powerOfRedspade = true
    } else {
        powerOfRedspade = false
    }
    if (blockSettings.exists("hasMushroom")) {
        hasBlueMushroom = true
    } else {
        hasBlueMushroom = false
    }
    if (blockSettings.exists("seeker")) {
        hasCompass = true
    } else {
        hasCompass = false
    }
    if (blockSettings.exists("ninjaSkill")) {
        ninjaTrained = true
    } else {
        ninjaTrained = false
    }
    if (blockSettings.exists("cyclops")) {
        hasSentry = true
    } else {
        hasSentry = false
    }
    money = blockSettings.readNumber("Money")
    aquiredBuffs = []
    if (blockSettings.readNumber("difficulty") == 2){
        lives = 4
    } else {
        lives = 5
    }    
    if (blockSettings.exists("hasAnhk")) {
        lives += 1
    }
    if (blockSettings.exists("shoe")) {
        lives += -1
    }
    anhkSheildImage = assets.image`sheildLifeImage`
    livesText = textsprite.create("")
    livesText.setFlag(SpriteFlag.RelativeToCamera, true)
    livesText.setPosition(5, 8)
    livesText.setIcon(assets.image`lifeImage`)
    livesText.z = 100
    if (hasKnightHelmut) {
        livesText.setIcon(anhkSheildImage)
        lives += 2
    }
    moneyText = textsprite.create("")
    moneyText.setFlag(SpriteFlag.RelativeToCamera, true)
    moneyText.setPosition(8, 29)
    moneyText.setIcon(assets.image`coinImage`)
    moneyText.z = 100
    tomeImage = assets.image`tomeImage`
    tomeSprite = sprites.create(tomeImage, SpriteKind.ui)
    tomeSprite.z = 100
    tomeSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    tomeSprite.setPosition(40, 15)
    thornImageList = [assets.image`thornBasic`, assets.image`thornLarge`, assets.image`thornSmall`]
    propImage = image.create(16, 16)
    snowflakeImage = assets.image`snowflakeEnumSpell`
    weaponImageList = [
    assets.image`dagger`,
    assets.image`boomerang`,
    assets.image`pickaxe`,
    assets.image`hammer`,
    assets.image`gunImage`,
    assets.image`cardDeck`
    ]
    weaponList = [
    "cut",
    "return",
    "pick",
    "smash",
    "gun",
    "cards"
    ]
    spearHeadImageList = [assets.image`spearheadVertical`, assets.image`spearheadHorizonatal`, assets.image`sphearheadDoor`]
}
function lunarang (x: number, y: number, dir: number, speed: number, returnable: boolean, lifespawn: number, large: boolean) {
    propSprite = sprites.create(assets.image`nullImage`, SpriteKind.hurt)
    propSprite.setFlag(SpriteFlag.BounceOnWall, true)
    if (large) {
        animation.runImageAnimation(
        propSprite,
        assets.animation`lunarangSpin`,
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        propSprite,
        assets.animation`spinnSmall`,
        100,
        true
        )
    }
    propSprite.setPosition(x, y)
    spriteutils.setVelocityAtAngle(propSprite, spriteutils.degreesToRadians(dir), speed*0.8)
    propSprite.fx = 30
    propSprite.fy = 30
    propSprite.ax = propSprite.vx * -0.8
    propSprite.ay = propSprite.vy * -0.8
    if (returnable) {
        spriteutils.onSpriteUpdateInterval(propSprite, 100, function (sprite) {
            timer.after(lifespawn, function () {
                if (!(spriteutils.isDestroyed(sprite))) {
                    extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Spark), 100, 20, 10)
                    music.play(music.createSoundEffect(WaveShape.Sine, 1703, 0, 255, 210, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                    sprites.destroy(sprite)
                }
            })
        })
    } else {
        propSprite.lifespan = lifespawn
    }
}
function theTruth () {
    npcTalking = true
    playTrack(0)
    platformer.moveSprite(mySprite, false)
    generateText("A wave of nostalgia comes over you", 200, mySprite.x - 15, mySprite.y - 50, 3000, false, true)
    color.startFade(color.originalPalette, color.Black, 2850)
    timer.background(function () {
        pause(3000)
        theMemory = true
        for (let value of tiles.getTilesByType(assets.tile`bonesLeft`)) {
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        for (let value of tiles.getTilesByType(assets.tile`bonesright`)) {
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        familyImages = [
        assets.image`memberOne`,
        assets.image`memberTwo`,
        assets.image`memberThree`,
        assets.image`memberFour`,
        assets.image`memberFive`,
        assets.image`hoodieRemembered`
        ]
        for (let value of familyImages) {
            propSprite = sprites.create(value, SpriteKind.familyMember)
            tiles.placeOnTile(propSprite, tiles.getTileLocation(79, 13))
            propSprite.x += familyImages.indexOf(value) * 11
            if (familyImages.indexOf(value) == 0) {
                tiles.placeOnTile(propSprite, tiles.getTileLocation(77, 12))
            }
        }
        multilights.toggleLighting(true)
        platformer.setCharacterAnimationsEnabled(mySprite, false)
        mySprite.setFlag(SpriteFlag.Invisible, true)
        propSprite = sprites.create(assets.image`theSickly`, SpriteKind.prop)
        tiles.placeOnTile(propSprite, tiles.getTileLocation(85, 13))
        propSprite.x += 2
        propSprite.lifespan = 50000
        pause(1000)
        color.startFade(color.Black, color.originalPalette, 2850)
        pause(3000)
        generateText("The Sickly", 200, mySprite.x + 63, mySprite.y - 14, 3000, true, true)
        pause(3000)
        generateText("The Abused", 200, mySprite.x + 60, mySprite.y - 14, 3000, true, true)
        pause(3000)
        generateText("The Serfs", 200, mySprite.x + 63, mySprite.y - 14, 3000, true, true)
        pause(3000)
        multilights.toggleLighting(false)
        pause(100)
        generateText("They continue to suffer!", 200, mySprite.x - 63, mySprite.y - 70, 3000, true, true)
        pause(3000)
        generateText("The gods have forsaken our world!", 200, mySprite.x - 63, mySprite.y - 70, 3000, true, true)
        pause(3000)
        generateText("And yet we continue to build alters for cruel deities?", 200, mySprite.x - 63, mySprite.y - 70, 4000, true, true)
        pause(4100)
        sprites.allOfKind(SpriteKind.familyMember)[1].vx = -50
        sprites.allOfKind(SpriteKind.familyMember)[1].fx = 100
        generateText("The gods are not cruel! They test our faith!", 200, mySprite.x - 25, mySprite.y - 40, 2200, true, true)
        pause(2300)
        generateText("You speak of faith, <c2>Seth</c2>? This is suffering!", 200, mySprite.x - 63, mySprite.y - 70, 3300, true, true)
        pause(3400)
        generateText("We do not suffer! Have you forgotten my gifts?", 200, mySprite.x - 25, mySprite.y - 40, 3300, true, true)
        pause(3400)
        sprites.allOfKind(SpriteKind.familyMember)[1].setImage(assets.image`seth`)
        generateText("The magic Anubis gave to me?", 200, mySprite.x - 25, mySprite.y - 40, 2800, true, true)
        pause(2900)
        generateText("<c2>Seth</c2>, the magic of your <wave>Keystone</wave> is from a false idol!", 200, mySprite.x - 63, mySprite.y - 70, 3500, true, true)
        pause(3600)
        generateText("A false idol that holds no dominion over us.", 200, mySprite.x - 63, mySprite.y - 70, 3500, true, true)
        pause(3500)
        generateText("No dominion?!!", 200, mySprite.x - 25, mySprite.y - 40, 1100, true, true)
        pause(1200)
        generateText("<shake>THERE IS NO WORLD THE GODS DON'T RULE", 200, mySprite.x - 63, mySprite.y - 70, 2800, true, true)
        sprites.allOfKind(SpriteKind.familyMember)[1].vy = -250
        sprites.allOfKind(SpriteKind.familyMember)[1].fy = 240
        explosionNoise()
        spriteutils.onSpriteUpdateInterval(sprites.allOfKind(SpriteKind.familyMember)[1], 100, function (sprite) {
            extraEffects.createSpreadEffectOnAnchor(sprite, sheildEffect, 100, 22, 25)
        })
        scene.cameraShake(4, 5000)
        pause(3000)
        for (let index = 0; index <= 8; index++) {
            timer.after(index * 100, function () {
                for (let value of sprites.allOfKind(SpriteKind.familyMember)) {
                    if (!(sprites.allOfKind(SpriteKind.familyMember).indexOf(value) == 1)) {
                        propSprite = sprites.create(preistWeaponImage, SpriteKind.prop)
                        propSprite.setPosition(value.x, scene.cameraProperty(CameraProperty.Top))
                        propSprite.vy = 100
                        propSprite.ay = 200
                        propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                        propSprite.lifespan = 6000
                    }
                }
            })
        }
        pause(550)
        sprites.allOfKind(SpriteKind.familyMember)[5].vx = 100
        pause(150)
        color.setPalette(
        color.Black
        )
        sprites.destroyAllSpritesOfKind(SpriteKind.familyMember)
        pause(2000)
        platformer.setCharacterAnimationsEnabled(mySprite, true)
        tiles.setTileAt(tiles.getTileLocation(75, 13), assets.tile`bonesLeft`)
        tiles.setTileAt(tiles.getTileLocation(76, 12), assets.tile`bonesLeft`)
        tiles.setTileAt(tiles.getTileLocation(77, 12), assets.tile`bonesright`)
        tiles.setTileAt(tiles.getTileLocation(78, 13), assets.tile`bonesright`)
        tiles.setTileAt(tiles.getTileLocation(81, 13), assets.tile`bonesLeft`)
        tiles.setTileAt(tiles.getTileLocation(82, 13), assets.tile`bonesright`)
        color.startFade(color.Black, color.originalPalette, 2500)
        pause(1000)
        npcTalking = false
        platformer.moveSprite(mySprite, true, speed)
        playTrack(1)
    })
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.playerAttack, function (sprite, otherSprite) {
    if (basicAttack == "cut") {
        statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -50
        bossSpeed += 5
        konshuTeleport()
    }
})
function trueNorth (col: number, row: number) {
    attractorSprite = sprites.create(assets.image`attractor`, SpriteKind.prop)
    tiles.placeOnTile(attractorSprite, tiles.getTileLocation(col, row))
    attractorSprite.setFlag(SpriteFlag.Invisible, true)
    attractorSprite.y += 8
}
events.spriteEvent(SpriteKind.Player, SpriteKind.npc, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    pickupTextSprite = textsprite.create("Press A To Talk")
    pickupTextSprite.x = otherSprite.x
    pickupTextSprite.y = otherSprite.y - 20
    pickupTextSprite.z = 5
    pickupTextSprite.setKind(SpriteKind.pickupText)
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.playerAttack, function (sprite, otherSprite) {
    if (!(preistSheilding)) {
        if (basicAttack == "cut") {
            statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -50
            timer.background(function () {
                music.play(music.createSoundEffect(WaveShape.Noise, 1132, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            })
            otherSprite.setKind(SpriteKind.prop)
            if (level == 8) {
                sprite.vy = -30
                sprite.ay = 200
                if (mySprite.x < sprite.x) {
                    sprite.vx = 40
                } else {
                    sprite.vx = -40
                }
            }
        }
        if (basicAttack == "pick") {
            statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -50
            timer.background(function () {
                music.play(music.createSoundEffect(WaveShape.Noise, 1132, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            })
            otherSprite.setKind(SpriteKind.prop)
            if (level == 8) {
                sprite.vy = -30
                sprite.ay = 200
                if (mySprite.x < sprite.x) {
                    sprite.vx = 40
                } else {
                    sprite.vx = -40
                }
            }
        }
        if (basicAttack == "smash") {
            statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -75
            sprites.destroy(otherSprite)
        }
        if (basicAttack == "gun") {
            if (gunPower == 2) {
                statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -50
            }
            if (gunPower == 3) {
                statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -80
            }
            if (gunPower == 4) {
                statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += -110
            }
            sprites.destroy(otherSprite)
        }
        if (basicAttack == "cards") {
            statusbars.getStatusBarAttachedTo(StatusBarKind.bossHP, sprite).value += 0 - (cardPowerBar.value * 0.5)
            cardPowerBar.value += 25
            otherSprite.setKind(SpriteKind.prop)
            sprites.destroy(otherSprite)
        }
    }
})
sprites.onOverlap(SpriteKind.gold, SpriteKind.gold, function (sprite, otherSprite) {
    if (sprites.allOfKind(SpriteKind.gold).indexOf(sprite) < sprites.allOfKind(SpriteKind.gold).indexOf(otherSprite) && spriteutils.distanceBetween(sprite, otherSprite) < 4) {
        sprite.ay = 0
        spriteutils.moveTo(sprite, spriteutils.pos(sprite.x, otherSprite.y - 5), 100)
        timer.background(function () {
            pause(2000)
            pauseUntil(() => spriteutils.isDestroyed(otherSprite))
            sprite.ay = 120
        })
    }
})
sprites.onOverlap(SpriteKind.anubis, SpriteKind.soul, function (sprite, otherSprite) {
    if (spriteutils.speed(otherSprite) != 0) {
        extraEffects.createSpreadEffectOnAnchor(otherSprite, extraEffects.createSingleColorSpreadEffectData(3, ExtraEffectPresetShape.Spark), 100)
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
        finailBossHPBar.value += -75
        if (settings.readNumber("difficulty") == 1) {
            finailBossHPBar.value += -10
        }
    }
})
spriteutils.createRenderable(-5, function (screen2) {
    if (konshuSprite && !(spriteutils.isDestroyed(konshuSprite))) {
        for (let index = 0; index <= 24; index++) {
            for (let index2 = 0; index2 <= 24; index2++) {
                if (screen2.getPixel(konshuSprite.x - 12 + index, konshuSprite.y - 12 + index2) == 15 && randint(1, 6) == 6) {
                    screen2.setPixel(konshuSprite.x - 12 + index, konshuSprite.y - 12 + index2, 14)
                }
            }
        }
        for (let index = 0; index <= 6; index++) {
            spriteutils.drawCircle(
            screen2,
            konshuSprite.x,
            konshuSprite.y,
            Math.sin(game.runtime() / 300) * 11 + index,
            15
            )
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.otherworldPickup, function (sprite, otherSprite) {
    if (controller.A.isPressed() && pickupSpecial && (!(timePointSprite) || spriteutils.isDestroyed(timePointSprite))) {
        if (specialAttack == otherworldSpellList[0]) {
            summonSuperPickup(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 0)
        }
        if (specialAttack == otherworldSpellList[1]) {
            summonSuperPickup(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 1)
        }
        if (specialAttack == otherworldSpellList[2]) {
            summonSuperPickup(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 2)
        }
        if (specialAttack == otherworldSpellList[3]) {
            summonSuperPickup(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 3)
        }
        if (specialAttack == otherworldSpellList[4]) {
            summonSuperPickup(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 4)
        }
        if (specialAttack == otherworldSpellList[5]) {
            summonSuperPickup(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 5)
        }
        if (specialAttack == otherworldSpellList[6]) {
            summonSuperPickup(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 6)
        }
        if (specialAttack == otherworldSpellList[7]) {
            summonSuperPickup(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row, 7)
        }
        specialAttack = "none"
        if (otherSprite.z == 4) {
            specialAttack = otherworldSpellList[0]
        }
        if (otherSprite.z == 4.1) {
            specialAttack = otherworldSpellList[1]
        }
        if (otherSprite.z == 4.2) {
            specialAttack = otherworldSpellList[2]
        }
        if (otherSprite.z == 4.3) {
            specialAttack = otherworldSpellList[3]
        }
        if (otherSprite.z == 4.4) {
            specialAttack = otherworldSpellList[4]
        }
        if (otherSprite.z == 4.5) {
            specialAttack = otherworldSpellList[5]
        }
        if (otherSprite.z == 4.6) {
            specialAttack = otherworldSpellList[6]
        }
        if (otherSprite.z == 4.7) {
            specialAttack = otherworldSpellList[7]
        }
        sprites.destroy(otherSprite)
        pickupSpecial = false
    }
})
spriteutils.createRenderable(1, function(screen: Image) {
    if (sentryFiring) {
        screen.drawLine(sentrySprite.x - scene.cameraLeft(), sentrySprite.y - scene.cameraTop(), sentryTargetX - scene.cameraLeft(), sentryTargetY - scene.cameraTop(), 8)
        screen.drawLine(sentrySprite.x - scene.cameraLeft() - 1, sentrySprite.y - scene.cameraTop(), sentryTargetX - scene.cameraLeft() - 1, sentryTargetY - scene.cameraTop(), 8)
        screen.drawLine(sentrySprite.x - scene.cameraLeft(), sentrySprite.y - scene.cameraTop() - 1, sentryTargetX - scene.cameraLeft(), sentryTargetY - scene.cameraTop() - 1, 8)
        screen.drawLine(sentrySprite.x - scene.cameraLeft() + 1, sentrySprite.y - scene.cameraTop(), sentryTargetX - scene.cameraLeft() + 1, sentryTargetY - scene.cameraTop(), 8)
        screen.drawLine(sentrySprite.x - scene.cameraLeft(), sentrySprite.y - scene.cameraTop() + 1, sentryTargetX - scene.cameraLeft(), sentryTargetY - scene.cameraTop() + 1, 8)
        screen.drawLine(sentrySprite.x - scene.cameraLeft() + 1, sentrySprite.y - scene.cameraTop() + 1, sentryTargetX - scene.cameraLeft() + 1, sentryTargetY - scene.cameraTop() + 1, 8)
        screen.drawLine(sentrySprite.x - scene.cameraLeft() - 1, sentrySprite.y - scene.cameraTop() + 1, sentryTargetX - scene.cameraLeft() - 1, sentryTargetY - scene.cameraTop() + 1, 8)
        screen.drawLine(sentrySprite.x - scene.cameraLeft() - 1, sentrySprite.y - scene.cameraTop() - 1, sentryTargetX - scene.cameraLeft() - 1, sentryTargetY - scene.cameraTop() - 1, 8)
        screen.drawLine(sentrySprite.x - scene.cameraLeft() + 1, sentrySprite.y - scene.cameraTop() - 1, sentryTargetX - scene.cameraLeft() + 1, sentryTargetY - scene.cameraTop() - 1, 8)
        screen.drawLine(sentrySprite.x - scene.cameraLeft(), sentrySprite.y - scene.cameraTop(), sentryTargetX - scene.cameraLeft(), sentryTargetY - scene.cameraTop(), 5)
    }
})
function getSenrtyTarget() {
    sentryTargetSprite = spriteutils.getSpritesWithin(SpriteKind.basicEnemy, 150, mySprite)[0]
    basicTargeted = true
    if (!(spriteutils.getSpritesWithin(SpriteKind.boss, 150, mySprite)[0] == null)) {
        sentryTargetSprite = spriteutils.getSpritesWithin(SpriteKind.boss, 150, mySprite)[0]
        basicTargeted = false
    } else {
        if (!(spriteutils.getSpritesWithin(SpriteKind.seth, 150, mySprite)[0] == null)) {
            sentryTargetSprite = spriteutils.getSpritesWithin(SpriteKind.seth, 150, mySprite)[0]
            basicTargeted = false
        }
    }
    if (!(sentryTargetSprite == null)) {
        trueSentryTargetX = sentryTargetSprite.x
        trueSentryTargetY = sentryTargetSprite.y
    }
}
game.onUpdateInterval(50, function() {
    if (sentryFiring && hasSentry) {
        extraEffects.createSpreadEffectAt(sentryEffect, sentryTargetX, sentryTargetY, 100)
        extraEffects.createSpreadEffectOnAnchor(sentrySprite, burstEffect, 80, 20, 10)
    }
})
game.onUpdate(function () {
    if (mySprite.vx == 0 && !(npcTalking) && !(preistSheilding || sethSheilding) && hasSentry) {
        sentrySprite.setFlag(SpriteFlag.Invisible, false)
        if (sentryFiring) {
            spriteutils.moveTo(sentrySprite, spriteutils.pos(mySprite.x, mySprite.y - 16 + (Math.sin(game.runtime() / 200) * 4)), 200)
        } else {
            spriteutils.moveTo(sentrySprite, spriteutils.pos(mySprite.x, mySprite.y - 16), 200)
        }
        sentryCooldown += -10
        if (sentryCooldown == 0) {
            getSenrtyTarget()
            sentryTargetX = sentrySprite.x
            sentryTargetY = sentrySprite.y
            if (!(sentryTargetSprite == null)) {
                sentryFiring = true
            }
            
        } else {
            if (sentryCooldown < 0) {
                getSenrtyTarget()
                if (!(sentryTargetSprite == null)) {
                    if (spriteutils.distanceBetween(sentrySprite, sentryTargetSprite) < 90) {
                        sentryFiring = true
                        sentryTargetX = sentryTargetX + ((trueSentryTargetX - sentryTargetX) * 0.17)
                        sentryTargetY = sentryTargetY + ((trueSentryTargetY - sentryTargetY) * 0.17)
                        if (basicTargeted == true) {
                            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sentryTargetSprite).value += -1
                            otherworldBar.value += -11
                            if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sentryTargetSprite).value == 0) {
                                extraEffects.createSpreadEffectOnAnchor(sentryTargetSprite, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), 100)
                                sprites.destroy(sentryTargetSprite)
                                sentryFiring = false
                            }
                        } else {
                            if (level < 9 || level == 11) {
                                bossHealthBar.value += -0.9
                                otherworldBar.value += -11
                                if (bossHealthBar.value == 0) {
                                    extraEffects.createSpreadEffectOnAnchor(sentryTargetSprite, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), 100)
                                    sprites.destroy(sentryTargetSprite)
                                    sentryFiring = false
                                }
                            }
                            if (level == 9 && !(preistSheilding)) {
                                bossHealthBar.value += -0.9
                                otherworldBar.value += -11
                                if (bossHealthBar.value == 0) {
                                    extraEffects.createSpreadEffectOnAnchor(sentryTargetSprite, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), 100)
                                    sprites.destroy(sentryTargetSprite)
                                    sentryFiring = false
                                }
                            }
                            if (level == 18 && !(sethSheilding)) {
                                sethHpBar.value += -0.8
                                otherworldBar.value += -11
                                if (sethHpBar.value == 0) {
                                    extraEffects.createSpreadEffectOnAnchor(sentryTargetSprite, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), 100)
                                    sprites.destroy(sentryTargetSprite)
                                    sentryFiring = false
                                }
                            }
                        }
                    } else {
                        sentryFiring = false
                    }
                }
                if (otherworldBar.value < 15 || dead) {
                    sentryFiring = false
                    sentryCooldown = 1000
                    otherworldBar.value = 0
                }
            }
        }


    } else {
        sentrySprite.setFlag(SpriteFlag.Invisible, true)
        sentrySprite.setPosition(mySprite.x, mySprite.y)
        sentryCooldown = 500
        sentryFiring = false
    }
    if (hexagonShoes) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            speed = 90
        } else {
            speed = 75
            if (!invincible || npcTalking) {
                mySprite.vx = Math.constrain(mySprite.vx, -75, 75)
            }
        }
    }
    if (addicted) {
        fancyText.setText(blackjackScoreText,convertToText(playerOneScore) + "/21")
        fancyText.setText(dealerScoreText, convertToText(dealerScore) + "/21")
    }
    if (blackjackPotText && !(spriteutils.isDestroyed(blackjackPotText))) {
        blackjackPotText.setText("x" + gamblePot + " In Pot")

    }
    if (selectingDifficulty) {
        if (selectedDifficulty == 1) {
            fancyText.setText(difficultyText, "The default game experience. Still challenging, 5 HP, and secrets waiting to be discovered. Highly reccomened for a first playthrough")
        } else if (selectedDifficulty == 2){
            fancyText.setText(difficultyText, "For the brave. Exhange a lower HP count of 4 for an challenging hidden questline, and opportunities for extra riches.")
        } else if (selectedDifficulty == 3) {
            fancyText.setText(difficultyText, "Insurmountable Difficulty. Inhert all of a Mercenary's Upsides. However, you must renounce your endless respawns, death is permanent.")
        }
    }
    if (cardPowerBar.value == 0) {
        cardPowerBar.setFlag(SpriteFlag.Invisible, true)
    } else {
        cardPowerBar.setFlag(SpriteFlag.Invisible, false)
        if (cardPowerBar.value == 25) {
            cardPowerBar.setColor(3, 15, 3)
        }
        if (cardPowerBar.value == 50) {
            cardPowerBar.setColor(2, 15, 3)
        }
        if (cardPowerBar.value == 75) {
            cardPowerBar.setColor(11, 15, 3)
        }
        if (cardPowerBar.value == 100) {
            cardPowerBar.setColor(12, 15, 3)
        }


    }
    if (orbitAnimDone) {
        for (let value of orbiters) {
            spriteutils.placeAngleFrom(
                value,
                spriteutils.degreesToRadians(orbOffset + (game.runtime() / 30 + orbiters.indexOf(value) * 45)),
                76,
                sethSprite
            )
        }
    } else {
        for (let value of sprites.allOfKind(SpriteKind.marker)) {
            spriteutils.placeAngleFrom(
                value,
                spriteutils.degreesToRadians(orbOffset + (game.runtime() / 30 + sprites.allOfKind(SpriteKind.marker).indexOf(value) * 45)),
                76,
                sethSprite
            )
        }
    }
    if (eyeMovementOn || golemCam) {
        scene.centerCameraAt((mySprite.x + miniBoss.x) / 2, (mySprite.y - 23 + miniBoss.y) / 2)
    } else {
        if (spriteutils.getSpritesWithin(SpriteKind.cameraAnchor, 90, mySprite).length == 0) {
            scene.centerCameraAt((mySprite.x + scene.cameraProperty(CameraProperty.X)) / 2, (mySprite.y - 23 + scene.cameraProperty(CameraProperty.Y)) / 2)
        } else {
            scene.centerCameraAt((mySprite.x * 2 + spriteutils.getSpritesWithin(SpriteKind.cameraAnchor, 90, mySprite)[0].x) / 3, ((mySprite.y - 23) * 2 + spriteutils.getSpritesWithin(SpriteKind.cameraAnchor, 90, mySprite)[0].y) / 3)
            if (spriteutils.getSpritesWithin(SpriteKind.cameraAnchor, 120, mySprite).length == 1) {
                scene.centerCameraAt(((mySprite.x * 3 + spriteutils.getSpritesWithin(SpriteKind.cameraAnchor, 120, mySprite)[0].x) / 4 + (scene.cameraProperty(CameraProperty.X) + mySprite.x * 3)) / 5, (((mySprite.y - 23) * 3 + spriteutils.getSpritesWithin(SpriteKind.cameraAnchor, 120, mySprite)[0].y) / 4 + (scene.cameraProperty(CameraProperty.Y) + mySprite.y * 3)) / 5)
            }
        }
    }
    if (battlingKnight && !(knightDefeated) && knightSprite) {
        scene.centerCameraAt((mySprite.x + knightSprite.x) / 2, (mySprite.y - 23 + knightSprite.y) / 2)
    }
    scroller.setBackgroundScrollOffset(game.runtime() * 0.005 + scene.cameraProperty(CameraProperty.X) * 0.01, 0, scroller.BackgroundLayer.Layer0)
    scroller.setBackgroundScrollOffset(game.runtime() * 0.01 + scene.cameraProperty(CameraProperty.X) * 0.01, 0, scroller.BackgroundLayer.Layer1)
    if (level == 14) {
        scroller.setBackgroundScrollOffset(scene.cameraProperty(CameraProperty.X) * -0.1, 0, scroller.BackgroundLayer.Layer2)
        scroller.setBackgroundScrollOffset(scene.cameraProperty(CameraProperty.X) * -0.2, 0, scroller.BackgroundLayer.Layer3)
        scroller.setBackgroundScrollOffset(scene.cameraProperty(CameraProperty.X) * -0.31, 0, scroller.BackgroundLayer.Layer4)
        if (anubisMimic) {
            anubisSprite.vx = mySprite.vx
        }
    }
    livesText.setText("x" + convertToText(lives))
    moneyText.setText("x" + convertToText(money))
    if (lives <= 0 && !(dead)) {
        killPlayer()
    }
    sheildTick()
    tickSemiSolid(tiles.getTilesByType(assets.tile`semiSolid`))
    tickSemiSolid(tiles.getTilesByType(assets.tile`silverSemiSolid`))
    tickSemiSolid(tiles.getTilesByType(assets.tile`ruinedSemiSolid`))
    if (!(spriteutils.isDestroyed(cutSprite)) && cutSprite && basicAttack == "pick") {
        if (swingingRight) {
            cutSprite.setPosition(mySprite.x + 10 + Math.sin(cutSprite.lifespan / 200), mySprite.y + 3 + Math.sin(cutSprite.lifespan / 150) * 2)
        } else {
            cutSprite.setPosition(mySprite.x - 10 - Math.sin(cutSprite.lifespan / 200), mySprite.y + 3 + Math.sin(cutSprite.lifespan / 150) * 2)
        }
        if (invincible) {
            sprites.destroy(cutSprite)
        }
    }
    if (smashing) {
        if (controller.right.isPressed()) {
            mySprite.vx = speed * 0.4
        }
        if (controller.left.isPressed()) {
            mySprite.vx = speed * -0.4
        }
        if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingRight)) {
            cutSprite.setPosition(mySprite.x + 2, mySprite.y)
        } else {
            cutSprite.setPosition(mySprite.x - 2, mySprite.y)
        }
    }
    if (gunCooldown) {
        cutSprite.setPosition(mySprite.x + 8, mySprite.y + 2)
        cutSprite.setImage(weaponImageList[4])
        if (platformer.hasState(mySprite, platformer.PlatformerSpriteState.FacingLeft)) {
            propImage = weaponImageList[4].clone()
            propImage.flipX()
            cutSprite.setImage(propImage.clone())
            cutSprite.x += -16
        }
    }
    tickEyeMovment()
    if (attractorSprite && !(spriteutils.isDestroyed(attractorSprite)) && hasCompass) {
        attractedSprite.setFlag(SpriteFlag.Invisible, false)
        spriteutils.placeAngleFrom(
        attractedSprite,
        spriteutils.angleFrom(mySprite, attractorSprite),
        40,
        mySprite
        )
    } else {
        attractedSprite.setFlag(SpriteFlag.Invisible, true)
    }
    if (alterDetector) {
        if (!(spriteutils.isDestroyed(alterDetector))) {
            if (spriteutils.distanceBetween(mySprite, alterDetector) <= 34) {
                alterText.setFlag(SpriteFlag.Invisible, false)
                if (controller.A.isPressed() && hasBlueMushroom) {
                    propSprite = sprites.create(assets.image`blueMushroomLarge`, SpriteKind.prop)
                    tiles.placeOnTile(propSprite, tiles.getTileLocation(16, 27))
                    propSprite.x += 8
                    propSprite.ay = 200
                    sprites.destroy(alterDetector)
                    sprites.destroy(alterText)
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                    timer.after(500, function () {
                        for (let index = 0; index <= 2; index++) {
                            tiles.setTileAt(tiles.getTileLocation(22, index + 28), assets.tile`transparency16`)
                            tiles.setWallAt(tiles.getTileLocation(22, index + 28), false)
                            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Spark), 352, index * 16 + 464, 100, 20, 8)
                        }
                    })
                }
            } else {
                alterText.setFlag(SpriteFlag.Invisible, true)
            }
        }
    }
    updateSpellUi()
    if (aiming) {
        gunPowerBar.value = 100 - Math.abs(Math.sin((game.runtime() - aimingMS) / 390) * 100)
        if (gunPowerBar.value <= 50) {
            gunPowerBar.setColor(2, 15)
            gunPower = 1
        } else {
            gunPowerBar.setColor(8, 15)
            gunPower = 2
        }
        if (gunPowerBar.value >= 80) {
            gunPowerBar.setColor(7, 15)
            gunPower = 3
        }
        if (gunPowerBar.value > 90) {
            gunPowerBar.setColor(12, 15)
            gunPower = 4
        }
    }
    spriteutils.moveTo(invisibleCloud, spriteutils.pos(mySprite.x + Math.sin(game.runtime() / 450) * 15, mySprite.y - 20), 150)
    if (cloudJump) {
        invisibleCloud.setFlag(SpriteFlag.Invisible, false)
    } else {
        invisibleCloud.setFlag(SpriteFlag.Invisible, true)
        invisibleCloud.setPosition(mySprite.x, mySprite.y)
    }
})
function rainSnow(intense: Boolean) {
    propImage = image.create(1, 1)
    propImage.fill(1)
    if (randint(1, 2) == 1) {
        propImage.replace(1, 5)
        if (randint(1, 4) == 1) {
            propImage.replace(1, 8)
        }
    }
    propSprite = sprites.create(propImage, SpriteKind.prop)
    propSprite.setPosition(randint(scene.cameraProperty(CameraProperty.Left), scene.cameraProperty(CameraProperty.Right)), scene.cameraProperty(CameraProperty.Top))
    propSprite.vy = randint(28, 70)
    propSprite.z = -7
    propSprite.setFlag(SpriteFlag.DestroyOnWall, true)
    propSprite.setFlag(SpriteFlag.AutoDestroy, true)
    if (intense) {
        propSprite.ax = -10
        propSprite.ay = 10
    }
    if (randint(1, 30) == 1) {
        propImage = assets.image`snowflakeHole`
        if (randint(1, 2) == 1) {
            propImage.replace(1, 5)
            if (randint(1, 4) == 1) {
                propImage.replace(1, 8)
            }
        }
        propSprite.setImage(propImage)
    }
    if (randint(1, 15) == 1) {
        animation.runImageAnimation(
            propSprite,
            assets.animation`snowflakeSpin`,
            500,
            true
        )
        if (randint(1, 2) == 1) {
            animation.runImageAnimation(
                propSprite,
                assets.animation`snowflakeSpinAlt`,
                500,
                true
            )
        }
    }
    if (tiles.tileAtLocationIsWall(propSprite.tilemapLocation())) {
        sprites.destroy(propSprite)
    }
}

game.onUpdateInterval(125, function () {
    if (snowing || level < 13 && (level > 9 && !(level == 12 && 625 < mySprite.x))) {
        rainSnow(false)
        if (battlingKnight) {
            rainSnow(true)
            rainSnow(true)
            rainSnow(true)
        }
    }
})

game.onUpdateInterval(150, function () {
    if (blackjackFocused) {
        easing.blockEaseTo(gamblingMenu, 55, 90, 149, easing.Mode.Linear)
        miniMenu.setButtonEventsEnabled(gamblingMenu, true)

    } else if (gamblingMenu) {        
        easing.blockEaseTo(gamblingMenu, -50, 90, 149, easing.Mode.Linear)
        miniMenu.setButtonEventsEnabled(gamblingMenu, false)

    }
    lightningPositionList[2] = lightningPositionList[0] + randint(-55, 55)
    if (sheilding) {
        music.play(music.createSoundEffect(
        WaveShape.Square,
        randint(1000, 2000),
        randint(1000, 2000),
        255,
        0,
        150,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(
        WaveShape.Noise,
        randint(1000, 2000),
        randint(1000, 2000),
        255,
        0,
        150,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    }
})

game.onUpdateInterval(2300, function () {
    
    for (let value of tiles.getTilesByType(assets.tile`arrowTrapStone`)) {
        fireArrow(140)
        tiles.placeOnTile(propSprite, value)
        propSprite.y += -3
    }
    for (let value of tiles.getTilesByType(assets.tile`arrowTrapStoneLeft`)) {
        fireArrow(-140)
        tiles.placeOnTile(propSprite, value)
        propSprite.y += -3
    }
    
})


game.onUpdateInterval(1800, function () {
    if (level == 12 || level == 6) {
        for (let value of tiles.getTilesByType(assets.tile`arrowTrap`)) {
            fireArrow(140)
            tiles.placeOnTile(propSprite, value)
            propSprite.y += -3
        }
        for (let value of tiles.getTilesByType(assets.tile`arrowTrapAlt`)) {
            fireArrow(-140)
            tiles.placeOnTile(propSprite, value)
            propSprite.y += -3
        }
    }
})


game.onUpdateInterval(100, function () {
    if (sheilding) {
        extraEffects.createSpreadEffectOnAnchor(mySprite, sheildEffect, 100, 22, 25)
    }
    if (mySprite.vx == 0 && (mySprite.vy == 0 && !(mySprite.isHittingTile(CollisionDirection.Bottom)))) {
        timer.after(90, function () {
            if (mySprite.vx == 0 && (mySprite.vy == 0 && !(mySprite.isHittingTile(CollisionDirection.Bottom)))) {
                mySprite.vy = 20
            }
        })
    }
})
game.onUpdateInterval(3000, function () {
    if (!(level == 12 || level == 6)) {
        for (let value of tiles.getTilesByType(assets.tile`arrowTrap`)) {
            fireArrow(140)
            tiles.placeOnTile(propSprite, value)
            propSprite.y += -3
        }
        for (let value of tiles.getTilesByType(assets.tile`arrowTrapAlt`)) {
            fireArrow(-140)
            tiles.placeOnTile(propSprite, value)
            propSprite.y += -3
        }
    }
})
function startSethFight() {
    npcTalking = false
    platformer.moveSprite(mySprite, true, speed)
    sethAttackImages= [assets.image`evilEyeRed`, assets.image`tinyEvilEye`]
    sethSprite.setFlag(SpriteFlag.ShowPhysics, false)
    sethHpBar = statusbars.create(250, 6, StatusBarKind.sethHealth)
    sethHpBar.setLabel("SETH", 12)
    sethHpBar.positionDirection(CollisionDirection.Top)
    sethHpBar.setBarBorder(1, 14)
    sethHpBar.setColor(2, 15, 3)
    sethHpBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    sethHpBar.max = 780
    sethHpBar.value = sethHpBar.max
    startOrbRain()
    CanPlaySong = true
    timer.background(function () {
        pause(5600)
        pauseUntil(() => !(orbRain))
        sethAttackCounter = 0
        while (sethHpBar.value != 0) {
            sethAttackCounter += 1
            sethAttacking = true
            chosenAttack = randint(1, 3)
            if (sethAttackCounter > 4) {
                if (sethAttackCounter == 8) {
                    sethAttackCounter = 0
                    sethAttacking = false
                } else {
                    if (chosenAttack == 1) {
                        closingOrbs()
                    } else if (chosenAttack == 2) {
                        startFlurry()
                    } else {
                        startOrbRevolve()
                    }
                }
            } else if (sethAttackCounter == 1) {
                pillarsOfFlame()
                runeRaged = false
            } else {
                if (sethAttackCounter == 4) {
                    sethFlyUp()
                    pause(1200)
                    sethAttacking = false
                } else {
                    if (randint(1,10) < 5 && !runeRaged) {
                        runeRage()
                        runeRaged = true
                    } else {
                        dashAttack()
                    }
                }
            }
            pauseUntil(() => !(sethAttacking))
            pause(50)
            
        }
        CanPlaySong = false
        music.stopAllSounds()
        sethDead = true
        extraEffects.createSpreadEffectOnAnchor(sethSprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Explosion), 5000, 60, 25)
        extraEffects.createSpreadEffectOnAnchor(sethSprite, bigBurstEffect, 5000, 60, 25)
        sprites.destroyAllSpritesOfKind(SpriteKind.hurt)
        sprites.destroyAllSpritesOfKind(SpriteKind.basicEnemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.stunnedEnemy)
        sprites.destroy(sethSprite)
        explosionNoise()
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        settings.writeNumber("Level", 10)
        finishLevel(true)
    })
    spriteutils.onSpriteUpdateInterval(sethSprite, 100, function (sprite) {
        if (sethSheilding) {
            extraEffects.createSpreadEffectOnAnchor(sprite, redSheildEffect, 200, 30, 30)
        }
        if (sethFocused) {
            
            animation.stopAnimation(animation.AnimationTypes.ImageAnimation, sethSprite)
            
            if (sethSprite.x > mySprite.x) {
                sethSprite.setImage(assets.image`sethLeft`)

            } else {
                sethSprite.setImage(assets.image`sethRight`)

            }
        }

    })
    spriteutils.onSpriteUpdateInterval(sethSprite, 1000, function (sprite) {
        if (orbRain) {
            sethSheilding = true
            for (let index = 0; index <= 4; index++) {
                extraEffects.createSpreadEffectAt(bigBurstEffect, 160, index * 50 + 10, 2250, 48, 40)
            }
            for (let index = 0; index <= 3; index++) {
                propSprite = sprites.create(sethAttackImages[1], SpriteKind.hurt)
                propSprite.setPosition(sethSprite.x + (index * 33 - 48), 0)
                propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                if (randint(1, 2) == 1) {
                    easing.blockEaseTo(propSprite, propSprite.x, 213, 2500, easing.Mode.InSine)
                } else {
                    easing.blockEaseTo(propSprite, propSprite.x, 174, 2500, easing.Mode.InSine)
                }
                propSprite.setFlag(SpriteFlag.AutoDestroy, true)
                propSprite.z = 1 + index * 0.1
                spriteutils.onSpriteUpdateInterval(propSprite, 1000, function (sprite) {
                    if (100 < sprite.y) {
                        if (1.1 < sprite.z) {
                            sprite.ax = -60
                        } else {
                            sprite.ax = 60
                        }
                    }
                })
            }
        }
    })
}
function startOrbRain() {
    sethFocused = false
    spriteutils.moveTo(sethSprite, spriteutils.pos(160, 60), 200, false)
    timer.after(200, function () {
        animation.runImageAnimation(
            sethSprite,
            assets.animation`priestRasing`,
            250,
            false
        )
        orbRain = true
        pause(900)
        animation.runImageAnimation(
            sethSprite,
            assets.animation`priestRaised`,
            100,
            true
        )
        sethTrack(true)
        pause(2000)
        sethFocused = true
        animation.stopAnimation(animation.AnimationTypes.All, sethSprite)
        orbRain = false
    })
}
function sethFlyUp() {
    sethSprite.fy = 200
    sethSprite.vy = -240
}
function pillarsOfFlame() {
    sethFocused = true
    timer.background(function () {
        easing.blockEaseTo(sethSprite, mySprite.x, mySprite.y - 100, 100, easing.Mode.Linear)
        sethSheilding = false
        pause(100)
        easing.blockEaseTo(sethSprite, sethSprite.x, sethSprite.y - 10, 500, easing.Mode.InOutSine)
        extraEffects.createSpreadEffectOnAnchor(sethSprite, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100)
        pause(500)
        easing.blockEaseTo(sethSprite, sethSprite.x, 216, 200, easing.Mode.InOutSine)
        pause(200)
        if (sethHpBar.value < sethHpBar.max / 2) {
           summonWisp(true, sethSprite.x, sethSprite.y - 15)
        }
        flameCenter = mySprite.x + randint(-5, 5)
        for (let index = 0; index <= 11; index++) {
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(11, ExtraEffectPresetShape.Twinkle), (index - 6) * 48 + flameCenter, 215, 500, 2, 20)
        }
        pause(350)
        for (let index = 0; index <= 11; index++) {
            propSprite= sprites.create(assets.image`nullImage`, SpriteKind.flamePillar)
            propSprite.lifespan = 1200
            animation.runImageAnimation(
                propSprite,
                assets.animation`firePillarIntro`,
                100,
                false
            )
            propSprite.setPosition((index - 6) * 48 + flameCenter, 173)
            propSprite.z = -5
        }
        pause(700)
        sethAttacking = false
    })
}
sprites.onCreated(SpriteKind.flamePillar, function (sprite) {
    timer.background(function () {
        pause(400)
        animation.runImageAnimation(
            sprite,
            assets.animation`firePillar`,
            100,
            true
        )
        pause(400)
        animation.runImageAnimation(
            sprite,
            assets.animation`flameOut`,
            100,
            false

        )
        pause(250)
        sprite.setKind(SpriteKind.prop)
    })
})
events.spriteEvent(SpriteKind.Player, SpriteKind.flamePillar, events.SpriteEvent.StartOverlapping, function(sprite: Sprite, otherSprite: Sprite) {
    hurtPlayer(true)

})
function dashAttack() {
    timer.background(function () {
        sethFocused = false
        sethDashImage = assets.image`sethRedEye`
        sethSprite.setFlag(SpriteFlag.GhostThroughWalls, false)
        if (mySprite.x < sethSprite.x) {
            sethSprite.vx = 10
            sethSprite.setImage(sethDashImage)
            pause(700)
            if (sethHpBar.value < sethHpBar.max / 50) {
                pause(300)
            }
            animation.runImageAnimation(
                sethSprite,
                assets.animation`sethSpinLeft`,
                100,
                true
            )
            sethSprite.vx = -250
            pauseUntil(() => sethSprite.x < mySprite.x - 55 || sethSprite.isHittingTile(CollisionDirection.Left))
            sethSprite.vx = 0
            if (sethSprite.isHittingTile(CollisionDirection.Left)) {
                sethSprite.vx = 80
                sethSprite.fx = 100
            }
            animation.stopAnimation(animation.AnimationTypes.All, sethSprite)
            sethDashImage.flipX()
            sethSprite.setImage(sethDashImage)
        } else {
            sethDashImage.flipX()
            sethSprite.vx = -10
            sethSprite.setImage(sethDashImage)
            pause(1000)
            animation.runImageAnimation(
                sethSprite,
                assets.animation`sethSpinRight`,
                100,
                true
            )
            sethSprite.vx = 250
            pauseUntil(() => sethSprite.x > mySprite.x + 55 || sethSprite.isHittingTile(CollisionDirection.Right))
            sethSprite.vx = 0
            if (sethSprite.isHittingTile(CollisionDirection.Right)) {
                sethSprite.vx = -80
                sethSprite.fx = 100
            }
            animation.stopAnimation(animation.AnimationTypes.All, sethSprite)
            sethDashImage.flipX()
            sethSprite.setImage(sethDashImage)
        }
        sethFocused = true
        if (sethHpBar.value < sethHpBar.max / 50) {
            pause(100)
        } else {
            pause(1300)
        }
        sethAttacking = false
    })
}
function runeRage() {
    sethFocused = false
    extraEffects.createSpreadEffectOnAnchor(sethSprite, magicRingEffect, -100, 65, 60)
    animation.runImageAnimation(
        sethSprite,
        assets.animation`sethCharging`,
        200,
        true
    )
    
    
    timer.after(1300, function () {
        effects.clearParticles(sethSprite)
        animation.stopAnimation(animation.AnimationTypes.All, sethSprite)
        if (spriteutils.distanceBetween(mySprite, sethSprite) < 45) {
            hurtPlayer(true)
        }
        extraEffects.createSpreadEffectOnAnchor(sethSprite, fireRingEffect, 200, 70, 50)


        for (let index = 0; index <= 4; index++) {
            propSprite = sprites.create(sethAttackImages[0], SpriteKind.hurt)
            propSprite.setPosition(sethSprite.x, sethSprite.y)
            propSprite.ay = 230
            propSprite.vy = -130
            propSprite.lifespan = 8000
            propSprite.vx = (index - 2) * 0.6 * 65
            propSprite.setFlag(SpriteFlag.BounceOnWall, true)
            propSprite.z = -6
            propSprite.setFlag(SpriteFlag.AutoDestroy, true)
            spriteutils.onSpriteUpdateInterval(propSprite, 1000, function (sprite) {
                if (sprite.lifespan < 4500) {
                    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                }
            })
        }
        
        sethFocused = true
        pause(2000)
        if (sethHpBar.value < sethHpBar.max / 2) {
            easing.blockEaseTo(sethSprite, sethSprite.x, 154, 150, easing.Mode.InSine)
            pause(1500)
            easing.blockEaseTo(sethSprite, mySprite.x, 154, 200, easing.Mode.InSine)
            pause(200)
            easing.blockEaseTo(sethSprite, sethSprite.x - 5, 145, 250, easing.Mode.InSine)
            extraEffects.createSpreadEffectOnAnchor(sethSprite, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Spark), 100)
            pause(250)
            easing.blockEaseTo(sethSprite, sethSprite.x, 216, 150, easing.Mode.InOutSine)
            pause(150)
            sethAttacking = false
        } else {
            pause(800)
            sethAttacking = false
            
        }
    })
}
function startFlurry() {
    timer.background(function () {
        sethSheilding = true
        sethFocused = true
        for (let index = 0; index < 25; index++) {
            easing.blockEaseTo(sethSprite, randint(34, 281), randint(20, 110), 200, easing.Mode.Linear)
            pause(200)
            propSprite = sprites.create(sethAttackImages[1], SpriteKind.hurt)
            propSprite.setPosition(sethSprite.x, sethSprite.y)
            extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Spark), sethSprite.x, sethSprite.y, 100, 10, 5)
            spriteutils.setVelocityAtAngle(propSprite, spriteutils.angleFrom(propSprite, mySprite), 130)
            propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
            propSprite.setFlag(SpriteFlag.AutoDestroy, true)
        }
        pause(800)
        if (sethHpBar.value >= sethHpBar.max / 50) {
            pause(200)
            sethAttacking = false
        } else {
            sethAttacking = false
        }
    })
}
function startOrbRevolve() {
    sethFocused = true
    timer.background(function () {
        sethSprite.fy = 0
        sethSprite.fx = 0
        if (randint(1, 2) == 1) {
            easing.blockEaseTo(sethSprite, 208, 81, 200, easing.Mode.InOutSine)
        } else {
            easing.blockEaseTo(sethSprite, 112, 81, 200, easing.Mode.InOutSine)
        }
        pause(200)
        sethSheilding = true
        orbitAnimDone = false
        orbiters = []
        for (let index = 0; index <= 7; index++) {
            attackMarkerSprite = sprites.create(assets.image`dot`, SpriteKind.marker)
            attackMarkerSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
            attackMarkerSprite.setFlag(SpriteFlag.Invisible, true)
            attackMarkerSprite.lifespan = 2100
            orbOffset = randint(0, 180)
            timer.after(index * 150, function () {
                propSprite = sprites.create(sethAttackImages[0], SpriteKind.hurt)
                propSprite.setPosition(sethSprite.x, -5)
                propSprite.vy = 100
                orbiters.push(propSprite)
                propSprite.follow(sprites.allOfKind(SpriteKind.marker)[orbiters.indexOf(propSprite)], 200)
                propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
            })
        }
        timer.after(2100, function () {
            orbitAnimDone = true
            easing.blockEaseTo(sethSprite, sethSprite.x, 137, 1000, easing.Mode.InOutSine)
            timer.after(1000, function () {
                if (sethSprite.x < mySprite.x) {
                    sethSprite.vx = 75
                } else {
                    sethSprite.vx = -75
                }
                pauseUntil(() => sethSprite.x != Math.constrain(sethSprite.x, 25, 295))
                easing.blockEaseTo(sethSprite, sethSprite.x, 90, 500, easing.Mode.InOutSine)
                pause(500)
                easing.blockEaseTo(sethSprite, 160, 90, 500, easing.Mode.InOutSine)
                pause(500)
                sethSprite.fx = 400
                for (let value of orbiters) {
                    value.setFlag(SpriteFlag.BounceOnWall, true)
                    spriteutils.setVelocityAtAngle(value, spriteutils.angleFrom(value, sethSprite), 180)
                    value.setFlag(SpriteFlag.GhostThroughWalls, false)
                    value.lifespan = 6000
                }
                orbiters = []
                pause(2500)
                if (sethHpBar.value < sethHpBar.max / 2) {
                    propSprite = sprites.create(sethAttackImages[0], SpriteKind.hurt)
                    propSprite.setPosition(sethSprite.x, sethSprite.y)
                    propSprite.lifespan = 3100
                    spriteutils.setVelocityAtAngle(propSprite, spriteutils.angleFrom(sethSprite, mySprite), 165)
                    propSprite.setFlag(SpriteFlag.BounceOnWall, true)
                }
                pause(3500)
                sethAttacking = false
                sethSprite.fx = 0
            })
        })
    })
}
function closingOrbs() {
    timer.background(function () {
        sethSheilding = true
        sethFocused = true
        
        for (let index = 0; index < 2; index++) {
            orbOffset = randint(0, 180)
            for (let index = 0; index <= 9; index++) {
                propSprite = sprites.create(sethAttackImages[0], SpriteKind.hurt)
                extraEffects.createSpreadEffectOnAnchor(propSprite, extraEffects.createSingleColorSpreadEffectData(2, ExtraEffectPresetShape.Explosion), 100)
                propSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                propSprite.lifespan = 9000
                spriteutils.placeAngleFrom(
                    propSprite,
                    spriteutils.degreesToRadians(index * 36 + orbOffset),
                    200,
                    mySprite
                )
                spriteutils.setVelocityAtAngle(propSprite, spriteutils.angleFrom(propSprite, mySprite), 4)
                propSprite.ax = propSprite.vx * 11.5
                propSprite.ay = propSprite.vy * 11.5

            }
            pause(2200)
        }
        pause(1000)
        if (sethHpBar.value >= sethHpBar.max / 2) { 
            pause(2000)
        } 
        sethAttacking = false
    })
}
sprites.onOverlap(SpriteKind.seth, SpriteKind.otherworldAttack, function (sprite, otherSprite) {
    if (!(sethSheilding)) {
        if (otherSprite.z == 1) {
            sprites.destroy(otherSprite)
            sethHpBar.value += -30
        }
        if (otherSprite.z == 0) {
            sprites.destroy(otherSprite)
            sethHpBar.value += -40
        }
        if (otherSprite.z == -3) {
            sprites.destroy(otherSprite)
            sethHpBar.value += -25
        }
        if (otherSprite.z == -4) {
            sethHpBar.value += -110
            otherSprite.setKind(SpriteKind.prop)
            otherSprite.lifespan = 200
        }
    }
})
events.spriteEvent(SpriteKind.seth, SpriteKind.boomerang, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    if (!(sethSheilding)) {
        otherSprite.vx = otherSprite.vx * -1
        sethHpBar.value += -40
        music.play(music.createSoundEffect(WaveShape.Noise, 1132, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    }
})
sprites.onOverlap(SpriteKind.seth, SpriteKind.playerAttack, function (sprite, otherSprite) {
    if (!(sethSheilding)) {
        if (basicAttack == "cut") {
            sethHpBar.value += -50
            timer.background(function () {
                music.play(music.createSoundEffect(WaveShape.Noise, 1132, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            })
            otherSprite.setKind(SpriteKind.prop)
        }
        if (basicAttack == "pick") {
            sethHpBar.value += -45
            timer.background(function () {
                music.play(music.createSoundEffect(WaveShape.Noise, 1132, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            })
            otherSprite.setKind(SpriteKind.prop)
        }
        if (basicAttack == "smash") {
            sethHpBar.value += -75
            sprites.destroy(otherSprite)
        }
        if (basicAttack == "gun") {
            if (gunPower == 2) {
                sethHpBar.value += -50
            }
            if (gunPower == 3) {
                sethHpBar.value += -80
            }
            if (gunPower == 4) {
                sethHpBar.value += -110
            }
            sprites.destroy(otherSprite)
        }
        if (basicAttack == "cards") {
            sethHpBar.value += 0 - (cardPowerBar.value * 0.5)
            cardPowerBar.value += 25
            otherSprite.setKind(SpriteKind.prop)
            sprites.destroy(otherSprite)
        }
    }
})
function sethEncounter() {
    keystoneSprite = sprites.create(assets.image`keystoneItself`, SpriteKind.Player)
    keystoneSprite.y += -80
    spriteutils.onSpriteUpdateInterval(keystoneSprite, 100, function (sprite) {
        extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(1, ExtraEffectPresetShape.Twinkle), 100, 12, 1)
        extraEffects.createSpreadEffectOnAnchor(sprite, burstEffect, 100, 12, 1)
    })
    animation.runMovementAnimation(keystoneSprite, animation.animationPresets(animation.bobbing), 2800, true)
    platformer.moveSprite(mySprite, false, 0)
    npcTalking = true
    mySprite.vx = 0
    tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 5))
    multilights.toggleLighting(false)
    if (!blockSettings.exists("confrontation")) {
    pause(1200)
    generateText("I hurt you, Where have your wounds gone?", 150, mySprite.x - 25, mySprite.y - 30, 2800, false, true)
    pause(2900)
    generateText("The Keystone heals all wounds", 150, sethSprite.x + 35, mySprite.y - 55, 3000, true, true)
    pause(3100)
    generateText("You knew my name, You knew it was Seth.", 150, sethSprite.x + 35, mySprite.y - 55, 3200, true, true)
    pause(3300)
    generateText("I killed everyone who knew me by that name.", 150, sethSprite.x + 35, mySprite.y - 55, 3400, true, true)
    pause(3500)
    generateText("You think the ghost of your past has come to haunt you Seth?", 150, mySprite.x - 22, mySprite.y - 30, 3200, false, true)
    pause(3300)
    generateText("No, I am very much not dead.", 150, mySprite.x - 25, mySprite.y - 40, 2800, false, true)
    pause(2900)
    generateText("Then I'll finish the job.", 150, sethSprite.x + 35, mySprite.y - 45, 3000, true, true)
    pause(3100)
    generateText("Do so honorbly, obey our tribes rules.", 150, mySprite.x - 22, mySprite.y - 30, 3200, false, true)
    pause(3300)
    generateText("No member shall fight without first bearing the color of blood.", 150, mySprite.x - 22, mySprite.y - 30, 3200, false, true)
    pause(3300)  
    generateText("Very well.", 150, sethSprite.x + 35, mySprite.y - 45, 3000, true, true)
    pause(3100)
    }
    blockSettings.writeString("confrontation", "intense")
    color.startFade(color.White, color.originalPalette)
    sethSprite.setImage(assets.image`sethLeft`)
    pause(1000)
    for (let index = 0; index <= 9; index++) {
        tiles.setTileAt(tiles.getTileLocation(index + 5, 6), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(index + 5, 6), false)
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(14, ExtraEffectPresetShape.Spark), (index + 5) * 16, 96, 100, 12, 8)
    }
    pause(2500)
    sprites.destroy(keystoneSprite)
    sethSprite.vy = 300
    sethSprite.fy = 150
    pause(1500)
    tiles.setCurrentTilemap(tilemap`battleOfTribesmen`)
    mySprite.y += -256
    sethSprite.y += -256
    populateTiles()
    generateText("May the gods who abandoned us weep as I slay their last disciple.", 150, mySprite.x + 15, mySprite.y - 30, 3700, false, true)
    pause(3800)
    sethSprite.fy = 0
    generateText("There is no world the gods don't rule.", 190, sethSprite.x - 35, sethSprite.y - 45, 2100, true, true)
    pause(3100)
    startSethFight()
    sethSprite.setKind(SpriteKind.seth)

}
sprites.onCreated(SpriteKind.hurt, function (sprite) {
    if (level == 18 && sethDead) {
        sprites.destroy(sprite)
    }
})
function summonWisp(decay: Boolean, x: number, y: number) {
    enemySprite = sprites.create(assets.image`nullImage`, SpriteKind.basicEnemy)
    enemySprite.z = 1
    enemySprite.setPosition(x, y)
    multilights.addLightSource(enemySprite, 2, 5, 0)
    giveEnemyHp(enemySprite, 90)
    enemySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(enemySprite, assets.animation`wispAnim`, 150, true)
    spriteutils.onSpriteUpdateInterval(enemySprite, 100, function (sprite) {
        if (decay) {
            statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value += -3
            if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, sprite).value == 0) {
                extraEffects.createSpreadEffectOnAnchor(sprite, extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), 100)
                sprites.destroy(sprite)
            }
        }
        if (spriteutils.distanceBetween(mySprite, sprite) < 125) {
            sprite.follow(mySprite, 130, 55)
            sprite.setFlag(SpriteFlag.StayInScreen, true)
            sprite.fx = 0
            sprite.fy = 0
        } else {
            sprite.follow(mySprite, 0, 0)
            sprite.setFlag(SpriteFlag.StayInScreen, false)
            sprite.fx = 75
            sprite.fy = 75
        }
        if (sprite.overlapsWith(mySprite)) {
            sprite.follow(mySprite, 0, 0)
            sprite.vy = -100

        }
    })
}