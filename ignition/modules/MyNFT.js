const { ethers } = require("hardhat");

async function main() {
  // Obtenemos el primer firmante (deployers)
  const [deployer] = await ethers.getSigners();

  console.log("Desplegando contrato con la cuenta:", deployer.address);

  // Obtener la fábrica del contrato
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // Desplegar el contrato
  const myNFT = await MyNFT.deploy();

  // Esperar a que el contrato sea desplegado
  const address = await myNFT.getAddress();

  console.log("Contrato MyNFT desplegado a:", address);

  // Mintear el NFT con la URI
  const tokenURI = "ipfs://QmWF6bdFmz9S2MbWGh7nRnrN1d1SuDP9WRnHWUSDugr2ue";
  await myNFT.mintNFT(deployer.address, tokenURI, { gasLimit: 99898 });

  console.log("NFT minteado a la dirección:", deployer.address);
}

// Manejar posibles errores
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
