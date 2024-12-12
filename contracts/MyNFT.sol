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
            return "https://bafybeiht42rdj7iurza5j72koodolporuybdlztf34steksqxidkivp75a.ipfs.w3s.link";
        } else if (keccak256(abi.encodePacked(rarity)) == keccak256(abi.encodePacked("Rare"))) {
            return "https://bafybeihyjvbp6vlxp5qtglxwqfe4qrcwvyc7ugbeyiqbjv3kio3y4owm5q.ipfs.w3s.link";
        } else if (keccak256(abi.encodePacked(rarity)) == keccak256(abi.encodePacked("Legendary"))) {
            return "https://bafybeicm7mjwblk4tprvw23cdkaaceanb33xs3f5txhn3qs7fvx2ernwf4.ipfs.w3s.link";
        }
        return "";
    }
}
