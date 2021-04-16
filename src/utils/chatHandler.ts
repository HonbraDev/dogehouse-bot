import { Message, tokensToString } from "@dogehouse/kebab";
import commandHandler from "./commandHandler";
import log from "./log";
import simplifyMessage from "./SimpleMessage";

const chatHandler = async (msg: Message) => {
  const smsg = simplifyMessage(msg);
  log(`${msg.username}: ${smsg.text}`);
  commandHandler(smsg);
};

export default chatHandler;
