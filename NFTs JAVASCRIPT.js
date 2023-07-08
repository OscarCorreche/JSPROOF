let nftArray = []; 

function mintNFT(brand, collection, name, description) {
  
  let nft = {
    brand: brand,
    collection: collection,
    name: name,
    description: description
  };

  nftArray.push(nft); 
}

mintNFT("Nike", "Air Max Collection", "Nike Air Max", "A line of shoes produced by Nike");
mintNFT("Vans", "Old Skool Collection", "Vans Old Skool", "The Old Skool Shoes collection is a unique addition to Vans");

console.log(nftArray); 
