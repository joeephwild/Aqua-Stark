import { useDojoSDK } from "@dojoengine/sdk/react";
import { Account, constants, RpcProvider } from "starknet";

export const Game = () => {
  const { client } = useDojoSDK();
  console.log("sdk", client);

  const stringToFelt = (str: string) => {
    // For short strings, convert directly to a single felt
    if (str.length <= 31) {
      const hexString = str
        .split("")
        .reduce((memo, c) => memo + c.charCodeAt(0).toString(16), "");
      return BigInt("0x" + hexString);
    }

    // For longer strings, split into multiple felts (though this shouldn't be needed for usernames)
    const size = Math.ceil(str.length / 31);
    const arr = Array(size);

    let offset = 0;
    for (let i = 0; i < size; i++) {
      const substr = str.substring(offset, offset + 31).split("");
      const ss = substr.reduce(
        (memo, c) => memo + c.charCodeAt(0).toString(16),
        ""
      );
      arr[i] = BigInt("0x" + ss);
      offset += 31;
    }
    return arr;
  };

  const handleCall = async () => {
    try {
      if (!client || !client.AquaStark) return alert("No client found");

      const provider = new RpcProvider({
        nodeUrl: "http://localhost:5050",
      });

      const account0 = new Account(
        provider,
        "0x13d9ee239f33fea4f8785b9e3870ade909e20a9599ae7cd62c1c292b73af1b7",
        "0x1c9053c053edf324aec366a34c6901b1095b07af69495bffec7d7fe21effb1b",
        undefined,
        constants.TRANSACTION_VERSION.V3
      );
      // const usernameFelt = stringToFelt("joe");
      const result = await client.AquaStark.getPlayer(account0.address);
      console.log("result", result);
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <div className="flex-1 min-h-screen items-center justify-center bg-black text-white">
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={handleCall}
      >
        Get Aquarium
      </button>
    </div>
  );
};
