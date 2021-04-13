/* This is the logging funciton. This ensures we have both stdout and file logs. */
import { appendFile } from "fs/promises";

const log = async (message: string) => {
  /* We also want things like timestamps in our logs. */
  const now = new Date(),
    parsedMessage = `[${now.getDate()}.${
      now.getMonth() + 1
    }.${now.getFullYear()} @ ${now.getHours()}:${now.getMinutes()}.${now.getSeconds()}] ${message}`;

  console.log(parsedMessage);
  // TODO: Implement proper logging
};

export default log;
