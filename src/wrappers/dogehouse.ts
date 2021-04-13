/* This wrapper allows us to call the library in any file */
import { raw, wrap, Wrapper } from "@dogehouse/kebab";
const { connect } = raw;

// @ts-expect-error
let client: Wrapper = null;

const init = async (token: string, refreshToken: string) =>
  (client = wrap(await connect(token, refreshToken, {})));

export { client, init };
