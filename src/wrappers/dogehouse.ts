import { raw, wrap, Wrapper } from "@dogehouse/kebab";
import log from "../utils/log";
const { connect } = raw;

let client: Wrapper;

const init = async (token: string, refreshToken: string) =>
  (client = wrap(
    await connect(token, refreshToken, {
      onConnectionTaken: () =>
        log("Connection taken. Did you use the same token twice?"),
    })
  ));

export { client, init };
