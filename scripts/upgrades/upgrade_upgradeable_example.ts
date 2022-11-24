import {ethers, upgrades} from "hardhat"
import {getConfig} from "../config"

async function main() {
  // We get the contract to deploy
  const config = getConfig("local")
  console.log("upgrade example address: ", config.UPGRADEABLE_EXAMPLE_ADDRESS);
  const UpgradeableExample = await ethers.getContractFactory("UpgradeableExample");
  const upgradeExample = await upgrades.upgradeProxy(config.UPGRADEABLE_EXAMPLE_ADDRESS, UpgradeableExample);
  console.log("upgradeExample upgraded");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });