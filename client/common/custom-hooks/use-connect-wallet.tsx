import { useState, useEffect } from "react";

const useConnectWallet = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [walletIsConnected, setWalletIsConnected] = useState(false);

  const handleConnectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please get the Metamask browser extension");
        return;
      }

      ethereum.request({
        method: "eth_requestAccounts",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Please get the Metamask browser extension");
      }

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        setWalletIsConnected(true);
        setCurrentAccount(accounts[0]);
      } else {
        setWalletIsConnected(false);
        setCurrentAccount(null);
      }
    } catch (error) {
      console.log(error);
      // Toast({
      //   message: error instanceof Error ? error.message : "Process Failed",
      //   type: "error",
      // });
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [walletIsConnected]);

  useEffect(() => {
    (() => {
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", async (accounts: string[]) => {
          if (accounts.length > 0) {
            setWalletIsConnected(true);
            setCurrentAccount(accounts[0]);
          } else {
            setWalletIsConnected(false);
            setCurrentAccount(null);
          }
        });
      }
    })();
  }, []);

  return {
    currentAccount,
    walletIsConnected,
    handleConnectWallet,
  };
};

export default useConnectWallet;
