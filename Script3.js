document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const elements = {
        searchForm: document.getElementById('searchForm'),
        selectionBox: document.getElementById('selectionBox'),
        carList: document.getElementById('carList'),
        availableCarsHeader: document.getElementById('availableCarsHeader'),
        skipSearchButton: document.getElementById('skipSearchButton'),
        carName: document.getElementById('carName'),
        carImage: document.getElementById('carImage'),
        carDescription: document.getElementById('carDescription'),
        carDetails: document.getElementById('carDetails')
    };

    const carData = [
        { "id": 1, "name": "Toyota Corolla", "image": "image/car1.jpg", "description": "A reliable and fuel-efficient sedan with advanced safety features.", "type": "small", "price": "$220.74/day", "details": ["4 seats", "Compact size", "Fuel-efficient", "Advanced safety features"] },
        { "id": 2, "name": "Honda Civic", "image": "image/car2.jpg", "description": "A compact car with excellent performance and modern design.", "type": "small", "price": "$240.22/day", "details": ["4 seats", "Compact size", "Excellent performance", "Modern design"] },
        { "id": 3, "name": "Ford Explorer", "image": "image/car3.jpg", "description": "A spacious and powerful SUV perfect for family trips.", "type": "suv", "price": "$350.50/day", "details": ["7 seats", "Large size", "Powerful SUV", "Perfect for family trips"] },
        { "id": 4, "name": "BMW 5 Series", "image": "image/car4.jpg", "description": "A luxury sedan offering comfort and high-end features.", "type": "premium", "price": "$450.00/day", "details": ["5 seats", "Luxury sedan", "High-end features", "Comfortable ride"] },
        { "id": 5, "name": "Chevrolet Tahoe", "image": "image/car5.jpg", "description": "A large SUV with plenty of room and powerful performance.", "type": "suv", "price": "$380.75/day", "details": ["7 seats", "Large size", "Powerful performance", "Plenty of room"] },
        { "id": 6, "name": "Tesla Model 3", "image": "image/car6.jpg", "description": "An electric car with impressive range and cutting-edge technology.", "type": "premium", "price": "$330.60/day", "details": ["5 seats", "Electric car", "Impressive range", "Cutting-edge technology"] },
        { "id": 7, "name": "Nissan Altima", "image": "image/car7.jpg", "description": "A midsize sedan with a smooth ride and great fuel economy.", "type": "large", "price": "$250.30/day", "details": ["5 seats", "Midsize sedan", "Smooth ride", "Great fuel economy"] },
        { "id": 8, "name": "Jeep Wrangler", "image": "image/car8.jpg", "description": "An off-road SUV designed for adventure and rugged terrains.", "type": "suv", "price": "$360.40/day", "details": ["4 seats", "Off-road SUV", "Designed for adventure", "Rugged terrains"] },
        { "id": 9, "name": "Audi A4", "image": "image/car9.jpg", "description": "A premium compact car with sleek design and advanced features.", "type": "premium", "price": "$400.90/day", "details": ["5 seats", "Premium compact car", "Sleek design", "Advanced features"] },
        { "id": 10, "name": "Hyundai Elantra", "image": "image/car10.jpg", "description": "A compact sedan offering great value and reliability.", "type": "small", "price": "$210.45/day", "details": ["4 seats", "Compact sedan", "Great value", "Reliable"] }
    ];

    // Handle search form submission
    elements.searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        displayCarList();
    });

    // Handle skip search button click
    elements.skipSearchButton.addEventListener('click', function () {
        displayCarList();
    });

    function displayCarList() {
        elements.selectionBox.style.display = 'none';
        elements.availableCarsHeader.style.display = 'block';
        elements.carList.style.display = 'flex';
        populateCarList();
    }

    function populateCarList() {
        elements.carList.innerHTML = ''; // Clear any existing cars

        carData.forEach(car => {
            const carItem = document.createElement('div');
            carItem.className = 'car-item';
            carItem.innerHTML = `
                <img src="${car.image}" alt="${car.name}">
                <h3>${car.name}</h3>
                <ul class="car-features">
                    ${car.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
                <p class="price">${car.price}</p>
                <button class="reserveButton">Reserve</button>
            `;
            carItem.querySelector('.reserveButton').addEventListener('click', () => showCarDetails(car));
            elements.carList.appendChild(carItem);
        });
    }

    function showCarDetails(car) {
        elements.carName.textContent = car.name;
        elements.carImage.src = car.image;
        elements.carDescription.innerHTML = `
            <ul class="car-features">
                ${car.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        `;
        elements.carDetails.style.display = 'block';
    }
});
