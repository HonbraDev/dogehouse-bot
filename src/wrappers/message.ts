import { Message, tokensToString } from "@dogehouse/kebab";
import { addToQueue, QueueInput } from "../utils/queue";

const simplifyMessage = (msg: Message) => ({
  reply: (content: QueueInput) => addToQueue(content, [msg.userId]),
  text: tokensToString(msg.tokens),
  ...msg,
});

type SimpleMessage = ReturnType<typeof simplifyMessage>;

export default simplifyMessage;
export { SimpleMessage };
