import * as importedCommands from "./commandImporter";
import { SimpleMessageType } from "./SimpleMessage";

const commandHandler = async (msg: SimpleMessageType) => {
  Object.values(importedCommands).forEach((command) => {
    if (msg.text.startsWith(command.invoker)) command.callback(msg);
  });
};

export default commandHandler;
