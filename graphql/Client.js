import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import * as SecureStore from "expo-secure-store";
import Constants from "expo-constants";

const { manifest } = Constants;

const api =
  typeof manifest?.packagerOpts === `object` && manifest?.packagerOpts.dev
    ? manifest?.debuggerHost?.split(`:`)?.shift()?.concat(`:8000`)
    : `api.example.com`;

console.log(api)

const httpLink = createHttpLink({
  uri: `http://${api}/graphql`,
});

async function getValueFor(key) {
  console.log("token fetched");
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    return null;
  }
}

const authLink = setContext(async (req, { headers }) => {
  // console.log(headers);

  const token = await getValueFor("token");

  console.log(token);
  // const token = AsyncStorage.getItem("token");
  const option = {
    headers: {
      ...headers,
      Cookie: `token=${token}`,
      // authorization: token,
    },
  };
  console.log(option.headers);
  return option;
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  // link: httpLink,
});
