import { Message } from "@dogehouse/kebab";
import commandHandler from "./command";
import log from "../utils/log";
import simplifyMessage from "../wrappers/message";

const chatHandler = async (msg: Message) => {
  const smsg = simplifyMessage(msg);
  log(`${msg.username}: ${smsg.text}`);
  commandHandler(smsg);
};

export default chatHandler;
