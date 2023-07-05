const NFTs = [
  {
    name: "Dolce & Gabbana",
    size: "L",
    properties: "Leather",
    color: "Black",
    brand: "Dolce & Gabbana"
  },
  {
    name: "Gucci",
    size: "XL",
    properties: "Canvas",
    color: "Brown",
    brand: "Gucci"
  },
  {
    name: "Brioni",
    size: "XXL",
    properties: "Crocodile",
    color: "Black",
    brand: "Brioni"
  }
];

function mintNFT(nft) {
  NFTs.push(nft);
  return nft;
}

function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log(NFTs[i]);
  }
  console.log("------------------");
}

function getTotalSupply() {
  console.log(`Total Supply: ${NFTs.length}`);
  console.log("------------------");
}

// Call your functions below this line

listNFTs();

const nft = mintNFT({
  name: "Valentino",
  size: "L",
  properties: "Leather",
  color: "Brown",
  brand: "Valentino"
});

listNFTs();

const nft2 = mintNFT({
  name: "Miu Miu",
  size: "XL",
  properties: "Leather",
  color: "Black",
  brand: "Miu Miu"
});

const nft3 = mintNFT({
  name: "Chanel",
  size: "M",
  properties: "Canvas",
  color: "Black",
  brand: "Chanel"
});

listNFTs();

getTotalSupply();
