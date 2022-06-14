async function main() {
    const MemeNFT = await ethers.getContractFactory("MemeNFT");
    // Start deployment, returning a promise that resolves to a contract object
    const options = { gasPrice : 30000000000, gasLimit : 3000000 };
    const memeNFT = await MemeNFT.deploy();
    await memeNFT.deployed();
    console.log("Contract deployed to address:", memeNFT.address);
  };
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    });