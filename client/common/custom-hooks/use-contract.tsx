import { ethers } from "ethers";

export const useContract = (contractAddress, abi) => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const waveportalContract = new ethers.Contract(
      contractAddress,
      abi,
      signer
    );

    return { waveportalContract };
  }
};
