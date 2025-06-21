import { Account, constants, RpcProvider } from "starknet";
import { usePlayer } from "./hooks/dojo/usePlayer";

export const Game = () => {
  //  const { client } = useDojoSDK();
  const { getPlayer } = usePlayer();
  // const { handleNewAquarium } = useAquarium();

  const handleCall = async () => {
    try {
      const provider = new RpcProvider({
        nodeUrl: "http://localhost:5050",
      });

      const account0 = new Account(
        provider,
        "0x17cc6ca902ed4e8baa8463a7009ff18cc294fa85a94b4ce6ac30a9ebd6057c7",
        "0x14d6672dcb4b77ca36a887e9a11cd9d637d5012468175829e9c6e770c61642",
        undefined,
        constants.TRANSACTION_VERSION.V3
      );

      // const result = await handleNewAquarium(account0, account0.address, 10);
      const result = await getPlayer(account0.address);
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
