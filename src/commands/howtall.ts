import Command from "../typings/command";

const command: Command = {
  invoker: ".howtall",
  args: ["number"],
  callback: (msg, [height]: [number]) => {
    msg.reply(`You are ${height} cm tall.`);
  },
};

export default command;
