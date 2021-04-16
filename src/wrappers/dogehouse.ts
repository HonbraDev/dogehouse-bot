/* This wrapper allows us to call the library in any file */
import { raw, wrap, Wrapper } from "@dogehouse/kebab";
const { connect } = raw;

let client: Wrapper;

const init = async (token: string, refreshToken: string) =>
  (client = wrap(
    await connect(token, refreshToken, {
      onConnectionTaken: () => console.log("Get hacked mate"),
    })
  ));

export { client, init };
