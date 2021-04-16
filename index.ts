/* This is the default execution file. */
require("dotenv").config();

import initClient from "./src/startup/initClient";
import joinRoom from "./src/startup/joinRoom";
import sayHello from "./src/startup/sayHello";

initClient().then(joinRoom).then(sayHello);
