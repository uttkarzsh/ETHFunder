//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ETHFunder{

    address public owner;
    mapping(address=>uint256) public funders;

    event Deposited(address indexed sender, uint256 amount);
    event Withdrawn(uint256 amount);

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner{
        require(msg.sender == owner, "Not the owner");
        _;
    }

    function sendETHtoContract() public payable {
        funders[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }
    
    function getContractBalance() public onlyOwner view returns(uint256){
        return address(this).balance;
    }

    function getMyDeposit() public view returns(uint256) {
        return funders[msg.sender];
    }

    function withdraw() public onlyOwner{
        uint256 amount = getContractBalance();
        payable(owner).transfer(amount);
        emit Withdrawn(amount);

    }

    function getUserBalance(address user) public view returns(uint256){
        return user.balance;
    }
    
    function sendETHtoUser(address payable _to) public payable {
        (bool sent,) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }

    fallback() external payable {
        funders[msg.sender] += msg.value;
    }

    receive() external payable {
        funders[msg.sender] += msg.value;
    }
}