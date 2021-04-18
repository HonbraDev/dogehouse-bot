import Command from "../typings/command";

const command: Command = {
  invoker: ".hello",
  args: [],
  callback: (msg) => {
    msg.reply(`Hi!`);
  },
};

export default command;
