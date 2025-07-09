import React, {useState, useEffect} from 'react';
import { ethers } from 'ethers';
import { getContract } from '../utils/contract.js';

const Funder = () => {
    const [amount, setAmount] = useState("");
    const [balance, setBalance] = useState("0");

    const fundContract = async () => {
        const contract = await getContract();
        const tx = await contract.sendETHtoContract({
            value : ethers.parseEther(amount)
        });
        await tx.wait();
        alert("Deposited");
    }

    const getBalance = async () => {
        const contract = await getContract();
        const bal = await contract.getContractBalance();
        setBalance(ethers.formatEther(bal));
    }

    const withdrawEth = async () => {
        const contract = await getContract();
        const tx = await contract.withdraw();
        await tx.wait();
    }

  return (
    <div className="bg-teal-400 h-screen flex flex-col justify-center items-center">
        <div className="border-2 border-gray-700 rounded flex-col justify-center items-center mb-5">
            Fund Contract
            <div className="flex">
            <input className="h-8 m-2" type="text" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            <button className="bg-emerald-600 text-black px-4 py-2 rounded h-8 w-32 items-center flex m-2" onClick={fundContract}> Fund </button></div>
        </div>
        <div className="border-2 border-gray-700 rounded flex-col justify-center items-center mt-5 w-64">
            Get Contract Balance<br/> {balance}
            <div className="flex">
            <button className="bg-emerald-600 text-black px-4 py-2 rounded h-8 w-32 items-center flex m-2" onClick={getBalance}> Balance </button>
            <button className="bg-emerald-600 text-black px-4 py-2 rounded h-8 w-32 items-center flex m-2" onClick={withdrawEth}> Withdraw </button></div>
        </div>
    </div>

  )
}

export default Funder