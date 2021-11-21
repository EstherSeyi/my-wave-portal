import useConnectWallet from "../../common/custom-hooks/use-connect-wallet";

const ConnectWalletButton = ({ top }: { top?: boolean }) => {
  const { currentAccount, handleConnectWallet, walletIsConnected } =
    useConnectWallet();

  return !walletIsConnected ? (
    <button
      className={`p-2 mt-8 bg-black rounded text-white ${
        top ? "sm:hidden block" : "hidden sm:block"
      }`}
      onClick={handleConnectWallet}
    >
      Connect Metamask
    </button>
  ) : (
    <div
      className={`p-2 mt-8 bg-black rounded text-white truncate max-w-[250px] ${
        top ? "sm:hidden block" : "hidden sm:block"
      }`}
    >
      {currentAccount}
    </div>
  );
};

export default ConnectWalletButton;
