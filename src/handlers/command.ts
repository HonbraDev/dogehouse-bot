import { client } from "../wrappers/dogehouse";
import * as importedCommands from "../utils/importCommands";
import { SimpleMessage } from "../wrappers/message";

const commandHandler = async (msg: SimpleMessage) => {
  if (client.connection.user.id === msg.userId) return;
  Object.values(importedCommands).forEach((command) => {
    if (msg.text.startsWith(command.invoker)) command.callback(msg);
  });
};

export default commandHandler;
