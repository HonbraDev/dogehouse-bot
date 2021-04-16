import { UUID } from "@dogehouse/kebab";
import { client } from "../wrappers/dogehouse";

const joinRoom = async () => {
  const potentialId = process.argv[2];
  let roomId: UUID;
  if (potentialId) roomId = potentialId;
  else roomId = (await client.query.getTopPublicRooms()).rooms[0].id;

  const info = await client.query.joinRoomAndGetInfo(roomId);

  if ("error" in info) throw info.error;
};

export default joinRoom;
