import { SocketClient } from "@cognigy/socket-client";
import { environment } from "../configuration/environment";

export const createCognigyClient = () => {
  return new SocketClient(
    environment.ENDPOINT_BASE_URL,
    environment.ENDPOINT_URL_TOKEN,
    {
      forceWebsockets: true
    }
  );
};
