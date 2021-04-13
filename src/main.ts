/* This is the main file. This defines the workflow of our bot. */
import { stringToToken } from "@dogehouse/kebab";
import log from "./utils/log";
import { init } from "./wrappers/dogehouse";

const main = async () => {
  try {
    const client = await init(
      process.env.DOGEHOUSE_TOKEN!,
      process.env.DOGEHOUSE_REFRESH_TOKEN!
    );

    /* Now we define what we actually want to do.
     * Normally you would want to join the largest
     * room and say a welcome message. */

    /* first we fetch the rooms */
    const { rooms } = await client.query.getTopPublicRooms();

    /* then we get the first room */
    const room = rooms[0];

    /* now we join the room */
    const info = await client.query.joinRoomAndGetInfo(room.id);

    /* handle errors and make the code simpler */
    if ("error" in info) throw info.error;

    /* make logs */
    log(
      `Joined ${info.room.name} (${info.room.numPeopleInside} participant${
        info.room.numPeopleInside > 1 ? "s" : ""
      })`
    );

    /* and say hello */
    client.mutation.sendRoomChatMsg(
      stringToToken("Hello! 👋 I am your new bot.")
    );
  } catch (e) {
    log(e);
  }
};

export default main();
