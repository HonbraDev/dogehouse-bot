import { client } from "../wrappers/dogehouse";
import * as importedCommands from "../utils/importCommands";
import { SimpleMessage } from "../wrappers/message";
import { UserWithFollowInfo } from "@dogehouse/kebab";

const commandHandler = async (msg: SimpleMessage) => {
  if (client.connection.user.id === msg.userId) return;
  Object.values(importedCommands).forEach(async (command) => {
    try {
      if (msg.text.startsWith(command.invoker)) {
        const argstring = msg.text.slice(command.invoker.length + 1);
        const args: (string | number | UserWithFollowInfo)[] = (
          await Promise.all(
            argstring.split(" ").map(async (text, index) => {
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
                case "user": {
                  if (text.startsWith("@")) text = text.slice(1);
                  const user = await client.query.getUserProfile(text);
                  if (!user) throw "Invalid user.";
                  return user;
                }
              }
            })
          )
        ).filter(Boolean);
        if (command.args.length !== args.length) throw "Invalid input.";

        command.callback(msg, args);
      }
    } catch (e) {
      msg.reply(e);
    }
  });
};

export default commandHandler;
