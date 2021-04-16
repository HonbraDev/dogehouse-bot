import chatHandler from "../handlers/chat";
import roomChangeHandler from "../handlers/room";
import { initQueue } from "../utils/queue";
import { init } from "../wrappers/dogehouse";

const initClient = async () => {
  const client = await init(
    process.env.DOGEHOUSE_TOKEN!,
    process.env.DOGEHOUSE_REFRESH_TOKEN!
  );

  initQueue();
  
  client.subscribe.newRoomDetails(roomChangeHandler);
  client.subscribe.newChatMsg(({ msg }) => chatHandler(msg));
};

export default initClient;
