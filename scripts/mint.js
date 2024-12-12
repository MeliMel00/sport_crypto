const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Adresse du contrat déployé (remplace avec l'adresse de ton contrat déployé)
  const myNFTAddress = "0xeFE95849631a399A0c2b8bBf860B350f49369374"; // Mets l'adresse du contrat déployé
  const MyNFT = await hre.ethers.getContractAt("MyNFT", myNFTAddress);

  // Exemple de mint de NFT pour un utilisateur
  const rarity = "Common";  // Change la rareté pour tester (Common, Rare, Legendary)
  const tx = await MyNFT.connect(deployer).mintNFT(rarity, {
    value: hre.ethers.utils.parseEther("0.0005"),  // Valeur en ETH en fonction de la rareté
  });

  await tx.wait();
  console.log("NFT minted!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
