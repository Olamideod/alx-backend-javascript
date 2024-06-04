// 100-main.js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };

try {
  queryAPI(endpoint);
  console.log(weakMap.get(endpoint)); // Should log 1

  queryAPI(endpoint);
  console.log(weakMap.get(endpoint)); // Should log 2

  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint); // Should throw an error here
} catch (error) {
  console.error(error.message); // Should log "Endpoint load is high"
}
