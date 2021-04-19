import { SimpleMessage } from "../wrappers/message";

type CommandProps = "string" | "number" | "user";

type Command = {
  invoker: string;
  args: CommandProps[];
  callback: (msg: SimpleMessage, props: any) => any;
};

export default Command;
export { CommandProps };
