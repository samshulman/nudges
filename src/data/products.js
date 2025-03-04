// const products = [
// 	{ id: 1, name: "Alpha Pencil", price: 12.29, showBuyNow: false, rating: 2.2, image:"/nudges/images/pencil1.png" },
// 	{ id: 2, name: "Beta Pencil", price: 13.99, showBuyNow: false, rating: 3.2, image:"/nudges/images/pencil2.png"  },
// 	{ id: 3, name: "Gamma Pencil", price: 14.49, showBuyNow: false, rating: 2.8, image:"/nudges/images/pencil3.png"  },
// 	{ id: 4, name: "Delta Pencil", price: 10.99, showBuyNow: false, rating: 1.9, image:"/nudges/images/pencil1.png"  },
// 	{ id: 5, name: "Epsilon Pencil", price: 16.29, showBuyNow: false, rating: 3.5, image:"/nudges/images/pencil2.png"  },
// 	{ id: 6, name: "Zeta Pencil", price: 15.29, showBuyNow: false, rating: 3.2, image:"/nudges/images/pencil3.png"  },
// 	{ id: 7, name: "Eta Pencil", price: 12.99, showBuyNow: false, rating: 2.9, image:"/nudges/images/pencil1.png"  },
// 	{ id: 8, name: "Theta Pencil", price: 13.49, showBuyNow: false, rating: 2.7, image:"/nudges/images/pencil2.png"  },
// 	{ id: 9, name: "Iota Pencil", price: 10.99, showBuyNow: false, rating: 2.6, image:"/nudges/images/pencil3.png"  },
// 	{ id: 10, name: "Kappa Pencil", price: 11.29, showBuyNow: false, rating: 2.4, image:"/nudges/images/pencil1.png"  },
// 	{ id: 11, name: "Lambda Pencil", price: 12.99, showBuyNow: true, rating: 4.7, image:"/nudges/images/pencil2.png"  },
// 	{ id: 12, name: "Mu Pencil", price: 10.99, showBuyNow: false, rating: 4.9, image:"/nudges/images/pencil3.png"  }
//   ];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function generateRandomProducts() {
    // Define possible names
    const names = shuffleArray([
        "Alpha Pencil", "Beta Pencil", "Gamma Pencil", "Delta Pencil", 
        "Epsilon Pencil", "Zeta Pencil", "Eta Pencil", "Theta Pencil", 
        "Iota Pencil", "Kappa Pencil", "Lambda Pencil", "Mu Pencil"
    ]);

    // Define price ranges
    const priceCategories = {
        high: [13.99, 14.49, 15.29, 16.29, 16.99],
        medium: [10.99, 11.29, 12.29, 12.99, 13.49],
        low: [7.99, 8.49, 8.99, 9.49, 9.99]
    };

    // Define rating categories
    const ratingCategories = {
        high: [4.0, 4.2, 4.5, 4.7, 4.9],
        medium: [3.0, 3.2, 3.5, 3.7, 3.9],
        low: [2.0, 2.2, 2.5, 2.7, 2.9]
    };

    // Define image quality options
    const imageOptions = {
        high: ["/nudges/images/pencil-high.png"],
		medium: ["/nudges/images/pencil-med.png"],
        low: ["/nudges/images/pencil-low.png"],
        none: [null]
    };

    let products = [];

    for (let i = 0; i < 12; i++) {
        // Randomize attributes for each product
        const priceLevel = getRandomItem(Object.keys(priceCategories));
        const ratingLevel = getRandomItem(Object.keys(ratingCategories));
        const imageLevel = getRandomItem(Object.keys(imageOptions));

        products.push({
            id: i + 1,
            name: names[i], // Names are shuffled earlier
            price: getRandomItem(priceCategories[priceLevel]),
            showBuyNow: Math.random() < 0.5, // 50% chance of "Buy Now" button
            rating: getRandomItem(ratingCategories[ratingLevel]),
            image: getRandomItem(imageOptions[imageLevel])
        });
    }

    return shuffleArray(products); // Randomize final order
}

// Run the function to generate randomized products
const products = generateRandomProducts();
console.log(products);
  
export default products;
  