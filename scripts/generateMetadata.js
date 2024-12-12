const fs = require('fs');
const path = require('path');

// Dossier où sont stockés les fichiers JSON existants (1.json, 2.json, etc.)
const inputDir = './metadata'; // Change ceci selon le dossier où sont tes fichiers JSON

// Dossier où seront enregistrés les fichiers regroupés (common.json, rare.json, legendary.json)
const outputDir = './output_data'; // Change ceci selon ton dossier de sortie

// Crée un objet pour stocker les NFTs par rareté
const rarityGroups = {
  "Common": [],
  "Rare": [],
  "Legendary": []
};

// Fonction pour lire un fichier JSON et le parser
const readJsonFile = (filePath) => {
  const fileContent = fs.readFileSync(filePath);
  return JSON.parse(fileContent);
};

// Fonction pour regrouper les NFTs en fonction de leur rareté
const groupNFTsByRarity = () => {
  const files = fs.readdirSync(inputDir);

  files.forEach((file) => {
    // Vérifie si le fichier est un fichier JSON (1.json, 2.json, etc.)
    if (path.extname(file) === '.json') {
      const nftData = readJsonFile(path.join(inputDir, file));

      // Ajoute l'NFT au groupe correspondant en fonction de la rareté
      if (nftData.attributes && nftData.attributes.length > 0) {
        const rarity = nftData.attributes[0].value; // On assume que la rareté est le premier attribut
        if (rarityGroups[rarity]) {
          rarityGroups[rarity].push(nftData);
        }
      }
    }
  });
};

// Fonction pour sauvegarder les NFTs regroupés dans des fichiers JSON dédiés
const saveGroupedNFTs = () => {
  for (const rarity in rarityGroups) {
    const filePath = path.join(outputDir, `${rarity.toLowerCase()}.json`);
    fs.writeFileSync(filePath, JSON.stringify(rarityGroups[rarity], null, 2));
    console.log(`Fichier généré : ${filePath}`);
  }
};

// Crée le dossier de sortie si nécessaire
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Regroupe les NFTs et les sauvegarde dans des fichiers par rareté
groupNFTsByRarity();
saveGroupedNFTs();
