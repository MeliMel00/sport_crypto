// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721Enumerable, Ownable {
    uint public constant MAX_SUPPLY = 8000;
    uint public nextTokenId;

    // Mapping des URIs spécifiques pour chaque NFT
    mapping(uint => string) public tokenURIs;

    constructor() ERC721("MyNFT", "MNFT") {}

    function mintNFT(string memory rarity) external payable {
        require(nextTokenId < MAX_SUPPLY, "All NFTs minted");

        uint cost = keccak256(abi.encodePacked(rarity)) == keccak256(abi.encodePacked("Common")) ? 0.0005 ether :
                    keccak256(abi.encodePacked(rarity)) == keccak256(abi.encodePacked("Rare")) ? 0.001 ether :
                    0.002 ether;
        require(msg.value == cost, "Incorrect ETH value sent");

        // Génération de l'URI pour chaque rareté
        string memory uri = generateTokenURI(rarity);
        tokenURIs[nextTokenId] = uri;  // Lien spécifique du token vers IPFS

        _safeMint(msg.sender, nextTokenId);
        nextTokenId++;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        return tokenURIs[tokenId];  // Renvoie l'URL spécifique des métadonnées
    }

    // Fonction pour générer l'URI des métadonnées spécifiques en fonction de la rareté
    function generateTokenURI(string memory rarity) internal pure returns (string memory) {
        if (keccak256(abi.encodePacked(rarity)) == keccak256(abi.encodePacked("Common"))) {
            return "https://bafybeiarwwvcgwy3dxttieck7z7igacwspmlyij65zbirroakh5s33aqsa.ipfs.w3s.link/1.json";
        } else if (keccak256(abi.encodePacked(rarity)) == keccak256(abi.encodePacked("Rare"))) {
            return "https://bafybeihg543m3yb3n6mrux2nryszuc4jlznju7nur2yjxlvziejbhjtti4.ipfs.w3s.link/2.json";
        } else if (keccak256(abi.encodePacked(rarity)) == keccak256(abi.encodePacked("Legendary"))) {
            return "https://bafybeifwbymnuggads4g72f6ma2f3oxt75fxhedityk2tmgqquwg5s4qnm.ipfs.w3s.link/3.json";
        }
        return "";
    }
}
