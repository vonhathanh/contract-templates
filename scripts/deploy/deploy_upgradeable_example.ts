import {ethers, upgrades} from "hardhat"
import {getConfig} from "../config";

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');
  
    // We get the contract to deploy
    const config = getConfig("local");
    const UpgradeableExample = await ethers.getContractFactory("UpgradeableExample");
    const example = await upgrades.deployProxy(UpgradeableExample, [config.LOCK_ADDRESS]);

    console.log("UpgradeableExample deploy to: ", example.address);
    console.log("guardian address: ", await example.guardian());

    await example.setGuardian(config.USDT_ADDRESS)
    console.log("guardian address after changed: ", await example.guardian());
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });