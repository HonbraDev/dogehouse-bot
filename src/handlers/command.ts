import { client } from "../wrappers/dogehouse";
import * as importedCommands from "../utils/importCommands";
import { SimpleMessage } from "../wrappers/message";

const commandHandler = async (msg: SimpleMessage) => {
  if (client.connection.user.id === msg.userId) return;
  Object.values(importedCommands).forEach((command) => {
    try {
      if (msg.text.startsWith(command.invoker)) {
        const argstring = msg.text.slice(command.invoker.length + 1);
        const args: (string | number)[] = argstring
          .split(" ")
          .map((text, index) => {
            const type = command.args[index];
            switch (type) {
              case "string": {
                if (!text) throw "Invalid string";
                return text;
              }
              case "number": {
                const possibleNumber = parseFloat(text);
                if (isNaN(possibleNumber)) throw "Invalid number.";
                return possibleNumber;
              }
            }
          })
          .filter(Boolean);
        if (command.args.length !== args.length) throw "Invalid input.";

        command.callback(msg, args);
      }
    } catch (e) {
      msg.reply(e);
    }
  });
};

export default commandHandler;
