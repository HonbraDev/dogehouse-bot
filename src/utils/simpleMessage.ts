import { Message, tokensToString } from "@dogehouse/kebab";
import { addToQueue, QueueInput } from "./queue";

type SimpleMessageType = SimpleMessage & Message;

class SimpleMessage {
  reply: (content: QueueInput) => Promise<void>;
  text: string;

  constructor(msg: Message) {
    this.reply = async (content) => addToQueue(content, [msg.userId]);
    this.text = tokensToString(msg.tokens);
  }
}

const simplifyMessage = (msg: Message): SimpleMessageType => ({
  ...new SimpleMessage(msg),
  ...msg,
});

export default simplifyMessage;
export { SimpleMessage, SimpleMessageType };
