import { type SuroiBitStream } from "../../../../common/src/utils/suroiBitStream";
import { type Player } from "../objects/player";
import { type PacketType } from "../../../../common/src/constants";

export abstract class SendingPacket {
    allocBytes: number;
    type: PacketType;
    player: Player;

    protected constructor(player: Player) {
        this.player = player;
    }

    serialize(stream: SuroiBitStream): void {
        stream.writePacketType(this.type);
    }
}