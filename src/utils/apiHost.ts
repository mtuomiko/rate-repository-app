import { Platform } from "react-native";

// For WSL2 dev environment. Native clients need the real local IP, web 
// client can access WSL with its localhost since running on the same 
// machine.
const apiHost = Platform.select({
  web: 'localhost',
  default: '192.168.1.189',
});

export default apiHost;