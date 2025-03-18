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

function generateStrategicProducts() {
    // Define possible names
    const names = shuffleArray([
        "Alpha Pencil", "Beta Pencil", "Gamma Pencil", "Delta Pencil", 
        "Epsilon Pencil", "Zeta Pencil", "Eta Pencil", "Theta Pencil", 
        "Iota Pencil", "Kappa Pencil", "Lambda Pencil", "Mu Pencil"
    ]);

    // Define price distributions (mean, standard deviation)
    const priceCategories = {
        high: { mean: 15, stdDev: 0.5, min: 14, max: 16 },
        medium: { mean: 10, stdDev: 0.5, min: 9, max: 11 },
        low: { mean: 5, stdDev: 0.5, min: 4, max: 6 }
    };

    // Define rating distributions (mean, standard deviation)
    const ratingCategories = {
        high: { mean: 4.55, stdDev: 0.1, min: 4.2, max: 4.9 },
        medium: { mean: 3.55, stdDev: 0.1, min: 3.2, max: 3.9 },
        low: { mean: 2.55, stdDev: 0.1, min: 2.2, max: 2.9 }
    };

    // High quality image for all pencils
    const imageUrl = "/nudges/images/pencil-high.png";

    let products = [];
    let nameIndex = 0;

    // Generate products for each category (low, medium, high)
    ['low', 'medium', 'high'].forEach(category => {
        // Generate 3 random products for the category
        for (let i = 0; i < 3; i++) {
            const price = gaussianRandom(
                priceCategories[category].mean,
                priceCategories[category].stdDev,
                priceCategories[category].min,
                priceCategories[category].max
            );

            const rating = gaussianRandom(
                ratingCategories[category].mean,
                ratingCategories[category].stdDev,
                ratingCategories[category].min,
                ratingCategories[category].max
            );

            products.push({
                id: products.length + 1,
                name: names[nameIndex++],
                price: Number(price.toFixed(2)),
                rating: Number(rating.toFixed(1)),
                image: imageUrl,
                category: category
            });
        }

        // Add one dominated product for the category
        const dominatedPrice = Math.max(...products.filter(p => p.category === category).map(p => p.price)) + 0.5; // higher price
        const dominatedRating = Math.min(...products.filter(p => p.category === category).map(p => p.rating)) - 0.2; // lower rating

        products.push({
            id: products.length + 1,
            name: names[nameIndex++],
            price: Number(dominatedPrice.toFixed(2)),
            rating: Number(dominatedRating.toFixed(1)),
            image: imageUrl,
            category: category
        });
    });

    return shuffleArray(products);
}

// Generate the strategic products
const products = generateStrategicProducts();
// console.log(products);

export default products;
