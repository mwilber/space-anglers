import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
	constructor() {
		super({
			key: 'GameScene'
		});

		this.playerThrust = 1000;
	}

	preload() {
		//this.load.image('background', 'assets/images/background.png');
		this.load.spritesheet('ship', 
			'assets/sprites/ship.png',
			{ frameWidth: 195, frameHeight: 175 }
		);
	}

	create() {
		// Add the background image
		// this.add.image(400, 300, 'background');

		// Add a game controller with devault arrow keys
		this.cursors = this.input.keyboard.createCursorKeys();

		this.player         = this.createPlayer();
	}

	update() {

		if (this.cursors.left.isDown){
			this.player.setAccelerationX(-this.playerThrust);
		}else if (this.cursors.right.isDown){
			this.player.setAccelerationX(this.playerThrust);
		}else{
			this.player.setAccelerationX(0);
		}

		if (this.cursors.up.isDown && this.player.body.touching.down){
			this.player.setVelocityY(-750);
		}

	}

	createPlayer() {
		let player = this.physics.add.sprite(400, 450, 'ship');

		player.setBounce(0.2);
		player.setCollideWorldBounds(true);
		// player.setMass(5000);
		player.setGravity(0, -1000);
		// player.body.useDamping = true;
		// player.setDrag(1);
		player.body.drag.set(this.playerThrust);
		//player.body.maxVelocity.set(200);

		
		return player;
	}
	
}