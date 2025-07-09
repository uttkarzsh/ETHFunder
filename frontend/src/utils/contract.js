import {ethers} from "ethers";
import abi from "./ETHFunderABI.json";

const CONTRACT_ADDRESS="0x1a35644d1ee5C9d3149E5E5C63c6776379642EAe";

export const getContract = async () => {
  if (!window.ethereum) throw new Error("MetaMask not detected");

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
  return contract;
};