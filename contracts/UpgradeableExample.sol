// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract UpgradeableExample is Initializable, OwnableUpgradeable {

    address public guardian;

    function initialize(address _guardian) public initializer {
        __Ownable_init_unchained();
        guardian = _guardian;
    }

    function setGuardian(address _guardian) public onlyOwner {
        guardian = _guardian;
    }
}