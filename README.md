
<h1 align="center">ETHFunder 💸 </h1>

A simple decentralized application (dApp) built with **Solidity**, **Foundry**, **ReactJS**, **TailwindCSS**, and **ethers.js** that allows:

- Users to fund a smart contract with ETH
- The contract owner to withdraw funds
- Sending ETH to any user address
- Viewing ETH balances of users and the contract

---

## 🧱 Smart Contract

The smart contract `ETHFunder.sol` includes:

- `sendETHtoContract()` – allows any address to fund the contract (tracked in `funders` mapping)
- `getContractBalance()` – returns contract balance (owner only)
- `getMyDeposit()` – view how much you've deposited
- `withdraw()` – owner-only withdrawal of full balance
- `sendETHtoUser(address)` – send ETH to another wallet
- `getUserBalance(address)` – returns current ETH balance of any user
- `fallback()` & `receive()` – handle direct ETH transfers to contract
- Emits `Deposited` and `Withdrawn` events for transparency

---

## ⚙️ Tech Stack

| Layer        | Tech Used           |
|--------------|---------------------|
| Smart Contract | Solidity, Foundry |
| Frontend     | React.js, TailwindCSS |
| Web3 Library | ethers.js        |

---

## 🚀 Features

- ✅ Connect wallet via MetaMask
- ✅ Fund the contract directly with ETH
- ✅ Owner can withdraw ETH
- ✅ View contract balance
- ✅ Send ETH to any address
- ✅ View ETH balance of any wallet

---

## 🚧 Future Improvements

- **Display List of Funders to the Owner**  
  Allow the contract owner to view a list of all addresses that have funded the contract, along with their contributed amounts.

- **Improve Transaction Feedback**  
  Show status indicators such as "Pending...", "Confirmed", or error messages during ETH transfers and withdrawals for better UX.