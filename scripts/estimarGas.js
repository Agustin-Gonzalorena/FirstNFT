const { ethers } = require("hardhat");

async function main() {
  const Contract = await ethers.getContractFactory("MyNFT");

  // Crear la transacción de despliegue sin ejecutarla
  const deployTransaction = Contract.getDeployTransaction();

  // Estimar el gas necesario para desplegar
  const gasEstimate = await ethers.provider.estimateGas(deployTransaction);

  console.log(`Estimación de gas: ${gasEstimate.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
