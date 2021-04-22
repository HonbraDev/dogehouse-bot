import { NewRoomDetailsResponse } from "@dogehouse/kebab";
import log from "../utils/log";

const roomChangeHandler = async (room: NewRoomDetailsResponse) =>
  log(`New room: ${room.name}`);

export default roomChangeHandler;
