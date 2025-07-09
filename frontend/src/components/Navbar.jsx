import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [account, setAccount] = useState("");

    const connectWallet = async () =>{
        if (!window.ethereum) return alert("MetaMask not found");
        const [acc] = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(acc);
    }

    useEffect(() => {
        if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts) => setAccount(accounts[0] || ""));
        }
    }, []);

    const formatAddress = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

    return (
        <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
            <div className="space-x-6 hidden md:flex">
                <Link to="/" className="text-white hover:text-gray-500">Home</Link>
                <Link to="funder" className="text-white hover:text-gray-500">Funder</Link>
                <Link to="walletinteract" className="text-white hover:text-gray-500">Wallet Interact</Link>
            </div>

            <div className="hidden md:block">
                <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950 hover:text-blue-600 transition" onClick={connectWallet}>
                {account ? formatAddress(account) : "Connect Wallet"}
                </button>
            </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;