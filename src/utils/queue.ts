import { MessageToken, stringToToken } from "@dogehouse/kebab";
import { client } from "../wrappers/dogehouse";

type QueueMessage = {
  content: MessageToken[] | string;
  whisperedTo?: string[];
};

type QueueInput = MessageToken[] | string;

let messageQueue: QueueMessage[] = [];

const initQueue = () => setInterval(() => onInterval(), 1001);

const addToQueue = (content: QueueInput, whisperedTo?: string[]) => {
  if (messageQueue.length > 0) messageQueue.push({ content, whisperedTo });
  else sendMessage({ content, whisperedTo });
};

const sendMessage = async (msg: QueueMessage) => {
  if (typeof msg.content === "string") msg.content = stringToToken(msg.content);
  client.mutation.sendRoomChatMsg(msg.content, msg.whisperedTo);
};

const onInterval = async () => {
  const currentMessage = messageQueue.shift();
  if (currentMessage) await sendMessage(currentMessage);
};

export { initQueue, addToQueue, QueueMessage, QueueInput };
