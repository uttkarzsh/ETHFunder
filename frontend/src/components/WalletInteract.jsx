import React, {useState,useEffect} from 'react';
import { ethers } from 'ethers';
import { getContract } from '../utils/contract.js';

const WalletInteract = () => {
    const [amount, setAmount] = useState("");
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("0");

    const sendETH = async () => {
        const contract = await getContract();
        const tx = await contract.sendETHtoUser(address, {
            value: ethers.parseEther(amount)
        });
        await tx.wait();
        alert(`Sent ${amount} ETH to ${address}`)
    }

    const getBal = async () => {
        const contract = await getContract();
        const bal = await contract.getUserBalance(address);
        setBalance(ethers.formatEther(bal));
    }

    return (
        <div className="bg-teal-400 h-screen flex flex-col justify-center items-center">
            <div className="border-2 border-gray-700 rounded flex-col justify-center items-center mb-5">
                Send Account Ether
                <div className="flex">
                <input className="h-8 m-2" type="text" placeholder="Address" value={address} onChange={(e)=> setAddress(e.target.value)}></input>
                <input className="h-8 m-2" type="text" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
                <button className="bg-emerald-600 text-black px-4 py-2 rounded h-8 w-32 items-center flex m-2" onClick={sendETH}> Fund </button></div>
            </div>
            <div className="border-2 border-gray-700 rounded flex-col justify-center items-center w-64 mt-5">
                Get Account Balance <br/>
                {balance}
                <div className="flex">
                <button className="bg-emerald-600 text-black px-4 py-2 rounded h-8 w-32 items-center flex m-2" onClick={getBal}> Balance </button>
            </div>
            
        </div>
        </div>
    )
}

export default WalletInteract