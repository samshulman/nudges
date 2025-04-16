function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function getRandomInRange(min, max, decimals = 2) {
    return Number((Math.random() * (max - min) + min).toFixed(decimals));
}

function generateRandomProducts() {
    const names = shuffleArray([
        "Alpha Pencil", "Beta Pencil", "Delta Pencil", "Epsilon Pencil",
    ]);

    // Generate better rating (high)
    const betterRating = getRandomInRange(4.5, 5.0, 1);

    // Generate distinct worse ratings (low)
    let worseRating1 = getRandomInRange(3.0, 4.4, 1);
    let worseRating2;
    do {
        worseRating2 = getRandomInRange(3.0, 4.4, 1);
    } while (Math.abs(worseRating2 - worseRating1) < 0.1);

    // Generate prices
    const cheapPriceLower = Number(getRandomInRange(10, 13).toFixed(2));    // For no-button item
    
    const priceDiff1 = 0.01;
    const priceDiff2 = 0.05;
    const priceDiff3 = 0.10;
    const priceDiff4 = 0.50;
    const priceDiff5 = 1.00;
    const priceDiff6 = 2.00;
    const priceDiff7 = 3.00;

    const cheapPriceHigher = Number((cheapPriceLower + priceDiff1).toFixed(2));   // For with-button item
    
    const dominatedPrice1 = Number(getRandomInRange(17, 20).toFixed(2));
    const dominatedPrice2 = Number(getRandomInRange(17, 20).toFixed(2));

    const products = [
        {
            id: 1,
            name: names[0],
            price: cheapPriceHigher,
            rating: betterRating,
            // showButton: true, // with nudge 
            showButton: false, // control without nudge
            image: "/nudges/images/pencil-high.png"
        },
        {
            id: 2,
            name: names[1],
            price: cheapPriceLower,
            rating: betterRating,
            showButton: false,
            image: "/nudges/images/pencil-high.png"
        },
        {
            id: 3,
            name: names[2],
            price: dominatedPrice1,
            rating: worseRating1,
            showButton: false,
            image: "/nudges/images/pencil-high.png"
        },
        {
            id: 4,
            name: names[3],
            price: dominatedPrice2,
            rating: worseRating2,
            showButton: false,
            image: "/nudges/images/pencil-high.png"
        }
    ];

    return shuffleArray(products);
}

const productsCausal = generateRandomProducts();

export default productsCausal;
