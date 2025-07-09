import React from 'react'

const Funder = () => {
  return (
    <div className="bg-teal-400 h-screen flex flex-col justify-center items-center">
        <div className="border-2 border-gray-700 rounded flex-col justify-center items-center mb-5">
            Fund Contract
            <div className="flex">
            <input className="h-8 m-2" type='number' ></input>
            <button className="bg-emerald-600 text-black px-4 py-2 rounded h-8 w-32 items-center flex m-2"> Fund </button></div>
        </div>
        <div className="border-2 border-gray-700 rounded flex-col justify-center items-center mt-5 w-64">
            Get Contract Balance<br/> amount
            <div className="flex">
            <button className="bg-emerald-600 text-black px-4 py-2 rounded h-8 w-32 items-center flex m-2"> Balance </button>
            <button className="bg-emerald-600 text-black px-4 py-2 rounded h-8 w-32 items-center flex m-2"> Withdraw </button></div>
        </div>
    </div>

  )
}

export default Funder