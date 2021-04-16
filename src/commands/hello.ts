import Command from "../utils/command";

const hello = new Command({
  invoker: ".hello",
  callback: (msg) => {
    msg.reply("Hi!");
  },
});

export default hello;
