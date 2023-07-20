import type { Game } from "../game";
import type { GameScene } from "../scenes/gameScene";
import { GameObject } from "../types/gameObject";

import { type ObjectCategory } from "../../../../common/src/constants";
import type { SuroiBitStream } from "../../../../common/src/utils/suroiBitStream";
import { type ObjectType } from "../../../../common/src/utils/objectType";

export class Building extends GameObject {
    readonly images: {
        floor: Phaser.GameObjects.Image
        ceiling: Phaser.GameObjects.Image
    };

    constructor(game: Game, scene: GameScene, type: ObjectType<ObjectCategory.Building>, id: number) {
        super(game, scene, type, id);

        this.images = {
            floor: scene.add.image(0, 0, "main", `${type.idString}_floor.svg`),
            ceiling: scene.add.image(0, 0, "main", `${type.idString}_ceiling.svg`).setDepth(10).setAlpha(0.5) // temporary
        };

        this.container.add([this.images.floor]).setDepth(-1);
    }

    /* eslint-disable @typescript-eslint/no-empty-function */
    override deserializePartial(stream: SuroiBitStream): void {

    }

    override deserializeFull(stream: SuroiBitStream): void {
        this.position = stream.readPosition();

        this.rotation = stream.readObstacleRotation("limited");

        this.container.setRotation(this.rotation);
        this.images.ceiling.setPosition(this.container.x, this.container.y).setRotation(this.rotation);
    }

    destroy(): void {
        super.destroy();
    }
}
