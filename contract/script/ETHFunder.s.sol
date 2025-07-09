// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console} from "./../lib/forge-std/src/Script.sol";
import {ETHFunder} from "../src/ETHFunder.sol";

contract CounterScript is Script {
    ETHFunder public ethfunder;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        ethfunder = new ETHFunder();

        vm.stopBroadcast();
    }
}
