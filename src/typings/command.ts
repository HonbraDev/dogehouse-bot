import { SimpleMessage } from "../wrappers/message";

type Command = {
  invoker: string;
  callback: (msg: SimpleMessage) => any;
};

export default Command;
