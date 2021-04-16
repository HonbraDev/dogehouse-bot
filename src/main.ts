/* This is the main file. This defines the workflow of our bot. */
import { stringToToken } from "@dogehouse/kebab";
import chatHandler from "./utils/chatHandler";
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
    const info = await client.query.joinRoomAndGetInfo(
      "3eb52083-d3f1-4bbe-8bf6-1211ba62bb78"
    );

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

    client.subscribe.newChatMsg(({ msg }) => chatHandler(msg));
  } catch (e) {
    log(e);
  }
};

export default main();
