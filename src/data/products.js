function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// Box-Muller transform to generate Gaussian random numbers with bounds
function gaussianRandom(mean, standardDeviation, min = -Infinity, max = Infinity) {
    let result;
    do {
        let u = 0, v = 0;
        while(u === 0) u = Math.random();
        while(v === 0) v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        result = mean + z * standardDeviation;
    } while (result < min || result > max);
    return result;
}

function generateRandomProducts() {
    // Define possible names
    const names = shuffleArray([
        "Alpha Pencil", "Beta Pencil", "Gamma Pencil", "Delta Pencil", 
        "Epsilon Pencil", "Zeta Pencil", "Eta Pencil", "Theta Pencil", 
        "Iota Pencil", "Kappa Pencil", "Lambda Pencil", "Mu Pencil"
    ]);

    // Define price distributions (mean, standard deviation)
    const priceCategories = {
        high: { mean: 15, stdDev: 1 },
        medium: { mean: 12, stdDev: 1 },
        low: { mean: 9, stdDev: 1 }
    };

    // Define rating distributions (mean, standard deviation)
    const ratingCategories = {
        high: { mean: 4.5, stdDev: 0.2 },
        medium: { mean: 3.5, stdDev: 0.2 },
        low: { mean: 2.5, stdDev: 0.2 }
    };

    // Define image quality options
    const imageOptions = {
        high: ["/nudges/images/pencil-high.png"],
        medium: ["/nudges/images/pencil-med.png"],
        low: ["/nudges/images/pencil-low.png"],
    };

    let products = [];

    for (let i = 0; i < 12; i++) {
        // Randomize attributes for each product
        const priceLevel = getRandomItem(Object.keys(priceCategories));
        const ratingLevel = getRandomItem(Object.keys(ratingCategories));
        const imageLevel = getRandomItem(Object.keys(imageOptions));

        // Generate price and rating using Gaussian distribution
        let price = gaussianRandom(
            priceCategories[priceLevel].mean,
            priceCategories[priceLevel].stdDev,
            5,  // min price
            20  // max price
        );
        let rating = gaussianRandom(
            ratingCategories[ratingLevel].mean,
            ratingCategories[ratingLevel].stdDev,
            0,  // min rating
            5   // max rating
        );

        // Round to appropriate decimal places
        price = Number(price.toFixed(2));
        rating = Number(rating.toFixed(1));

        products.push({
            id: i + 1,
            name: names[i],
            price: price,
            showButton: Math.random() < 0.5,
            rating: rating,
            image: getRandomItem(imageOptions[imageLevel])
        });
    }

    return shuffleArray(products);
}

// Run the function to generate randomized products
const products = generateRandomProducts();
// console.log(products);
  
export default products;
  