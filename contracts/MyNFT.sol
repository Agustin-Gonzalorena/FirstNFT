// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyNFT {
    string public name = "Franco Colapinto";
    string public symbol = "COL";
    string private _tokenURI;

    address public owner;
    address private _nftOwner;
    uint256 private _tokenIdCounter = 1;
    bool private _minted = false;

    event Transfer(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can execute this");
        _;
    }

    constructor() {
        owner = msg.sender; // El dueño es la cuenta que deploya el contrato
    }

    function tokenURI(uint256 tokenId) public view returns (string memory) {
        require(_minted, "NFT has not been minted yet");
        require(tokenId == _tokenIdCounter, "Token does not exist");
        return _tokenURI;
    }

    function mintNFT(address to, string memory tokenURI_) public onlyOwner {
        require(!_minted, "NFT has already been minted");
        require(to != address(0), "Cannot mint to zero address");

        _tokenURI = tokenURI_;
        _nftOwner = to;
        _minted = true;

        emit Transfer(address(0), to, _tokenIdCounter);
    }

    function transferNFT(address to) public {
        require(msg.sender == _nftOwner, "You are not the owner of this NFT");
        require(to != address(0), "Cannot transfer to zero address");

        _nftOwner = to;
        emit Transfer(msg.sender, to, _tokenIdCounter);
    }

    function ownerOf(uint256 tokenId) public view returns (address) {
        require(tokenId == _tokenIdCounter, "Token does not exist");
        return _nftOwner;
    }
}
