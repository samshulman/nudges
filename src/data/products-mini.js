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
        "Alpha Pencil", "Beta Pencil", "Delta Pencil",  "Epsilon Pencil",
    ]);

    // Set to 1 to ensure only one product has button
    const numButtons = 1;
    
    // Create array of boolean values for buttons
    const buyNowButtons = new Array(4).fill(false);
    for (let i = 0; i < numButtons; i++) {
        buyNowButtons[i] = true;
    }
    // Shuffle the buttons
    shuffleArray(buyNowButtons);

    let products = [];

    for (let i = 0; i < 4; i++) {
        // Generate random price between 10 and 20
        const price = Number((Math.random() * 10 + 10).toFixed(2));
        
        // Generate random rating between 3 and 5
        const rating = Number((Math.random() * 2 + 3).toFixed(1));

        products.push({
            id: i + 1,
            name: names[i],
            price: price,
            showButton: buyNowButtons[i],
            rating: rating,
            image: "/nudges/images/pencil-high.png"
        });
    }

    return shuffleArray(products);
}

// Run the function to generate randomized products
const products = generateRandomProducts();
console.log(products);
  
export default products;
  