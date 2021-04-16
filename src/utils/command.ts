import { SimpleMessageType } from "./SimpleMessage";

type CommandProps = {
  invoker: string;
  callback: (msg: SimpleMessageType) => any | Promise<any>;
};

class Command {
  invoker: CommandProps["invoker"];
  callback: CommandProps["callback"];

  constructor({ callback, invoker }: CommandProps) {
    this.callback = callback;
    this.invoker = invoker;
  }
}

export default Command;
export { CommandProps };
