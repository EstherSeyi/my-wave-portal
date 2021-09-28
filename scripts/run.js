const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();

  //This will actually compile our contract and generate the necessary files we need to work with our contract under the artifacts directory.
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");

  //What's happening here is Hardhat will create a local Ethereum network for us, but just for this contract. Then, after the script completes it'll destroy that local network. So, every time you run the contract, it'll be a fresh blockchain.
  const waveContract = await waveContractFactory.deploy();

  //wait for the contract to be deployed
  await waveContract.deployed();

  //once it's deployed waveContract.address will basically give us the address of the deployed contract.
  console.log(`Contract has been deployed to: ${waveContract.address}`);
  console.log(`Contract has been deployed by: ${owner.address}`);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  let waving = await waveContract.wave();
  waving.wait();

  waveCount = await waveContract.getTotalWaves();

  waving = await waveContract.connect(randomPerson).wave();
  waving.wait();

  waveCount = await waveContract.getTotalWaves();

  let choseFavColor = await waveContract
    .connect(randomPerson)
    .tellFavoriteColor("red");
  choseFavColor.wait();

  await waveContract.connect(randomPerson).getFavoriteColor();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
