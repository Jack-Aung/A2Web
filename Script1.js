document.addEventListener('DOMContentLoaded', function () {
    // Car data
    const carData = [
        {
            "id": 1,
            "name": "Toyota Corolla",
            "image": "image/car1.jpg",
            "description": "A reliable and fuel-efficient sedan with advanced safety features.",
            "type": "small",
            "price": "$220.74/day",
            "details": ["4 seats", "Compact size", "Fuel-efficient", "Advanced safety features"]
        },
        {
            "id": 2,
            "name": "Honda Civic",
            "image": "image/car2.jpg",
            "description": "A compact car with excellent performance and modern design.",
            "type": "small",
            "price": "$240.22/day",
            "details": ["4 seats", "Compact size", "Excellent performance", "Modern design"]
        },
        {
            "id": 3,
            "name": "Ford Explorer",
            "image": "image/car3.jpg",
            "description": "A spacious and powerful SUV perfect for family trips.",
            "type": "suv",
            "price": "$350.50/day",
            "details": ["7 seats", "Large size", "Powerful SUV", "Perfect for family trips"]
        },
        {
            "id": 4,
            "name": "BMW 5 Series",
            "image": "image/car4.jpg",
            "description": "A luxury sedan offering comfort and high-end features.",
            "type": "premium",
            "price": "$450.00/day",
            "details": ["5 seats", "Luxury sedan", "High-end features", "Comfortable ride"]
        },
        {
            "id": 5,
            "name": "Chevrolet Tahoe",
            "image": "image/car5.jpg",
            "description": "A large SUV with plenty of room and powerful performance.",
            "type": "suv",
            "price": "$380.75/day",
            "details": ["7 seats", "Large size", "Powerful performance", "Plenty of room"]
        },
        {
            "id": 6,
            "name": "Tesla Model 3",
            "image": "image/car6.jpg",
            "description": "An electric car with impressive range and cutting-edge technology.",
            "type": "premium",
            "price": "$330.60/day",
            "details": ["5 seats", "Electric car", "Impressive range", "Cutting-edge technology"]
        },
        {
            "id": 7,
            "name": "Nissan Altima",
            "image": "image/car7.jpg",
            "description": "A midsize sedan with a smooth ride and great fuel economy.",
            "type": "large",
            "price": "$250.30/day",
            "details": ["5 seats", "Midsize sedan", "Smooth ride", "Great fuel economy"]
        },
        {
            "id": 8,
            "name": "Jeep Wrangler",
            "image": "image/car8.jpg",
            "description": "An off-road SUV designed for adventure and rugged terrains.",
            "type": "suv",
            "price": "$360.40/day",
            "details": ["4 seats", "Off-road SUV", "Designed for adventure", "Rugged terrains"]
        },
        {
            "id": 9,
            "name": "Audi A4",
            "image": "image/car9.jpg",
            "description": "A premium compact car with sleek design and advanced features.",
            "type": "premium",
            "price": "$400.90/day",
            "details": ["5 seats", "Premium compact car", "Sleek design", "Advanced features"]
        },
        {
            "id": 10,
            "name": "Hyundai Elantra",
            "image": "image/car10.jpg",
            "description": "A compact sedan offering great value and reliability.",
            "type": "small",
            "price": "$210.45/day",
            "details": ["4 seats", "Compact sedan", "Great value", "Reliable"]
        }
    ];

    // Elements
    const elements = {
        carList: document.getElementById('carList'),
        carDetails: document.getElementById('carDetails'),
        carName: document.getElementById('carName'),
        carImage: document.getElementById('carImage'),
        carDescription: document.getElementById('carDescription'),
        reservationForm: document.getElementById('reservationForm'),
        reservationComplete: document.getElementById('reservationComplete'),
        reserveButton: document.getElementById('reserveButton'),
        referenceNumberSpan: document.getElementById('referenceNumber'),
        mainContent: document.getElementById('mainContent'),
        loginForm: document.getElementById('loginForm'),
        welcomePage: document.getElementById('welcomePage'),
        getStartedButton: document.getElementById('getStartedButton'),
        logoutButton: document.getElementById('logoutButton'),
        usernameDisplay: document.getElementById('usernameDisplay'),
        cancelSidebar: document.getElementById('cancelSidebar'),
        cancelPage: document.getElementById('cancelPage'),
        selectionBox: document.getElementById('selectionBox'),
        availableCarsHeader: document.getElementById('availableCarsHeader'),
        carTypeSelection: document.getElementById('carTypeSelection'),
        carTypeButtons: document.querySelectorAll('.carTypeButton')
    };

    let currentUsername = '';

    // Handle login form submission
    elements.loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        let valid = true;

        if (!username) {
            document.getElementById('usernameError').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('usernameError').style.display = 'none';
        }

        if (!password) {
            document.getElementById('passwordError').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('passwordError').style.display = 'none';
        }

        if (valid) {
            currentUsername = username;
            elements.usernameDisplay.textContent = `Welcome, ${username}`;
            elements.loginForm.style.display = 'none';
            elements.welcomePage.style.display = 'block';
            document.getElementById('userMenu').style.display = 'flex';
        }
    });

    // Handle get started button click
    elements.getStartedButton.addEventListener('click', function () {
        elements.welcomePage.style.display = 'none';
        elements.mainContent.style.display = 'block';
        elements.selectionBox.style.display = 'block';
        elements.carTypeSelection.style.display = 'none';
        elements.cancelSidebar.style.display = 'block';
        resetMainContent();
    });

    // Handle logout button click
    elements.logoutButton.addEventListener('click', function () {
        document.getElementById('userMenu').style.display = 'none';
        elements.mainContent.style.display = 'none';
        elements.welcomePage.style.display = 'none';
        elements.loginForm.style.display = 'block';
        elements.cancelSidebar.style.display = 'none';
        elements.cancelPage.style.display = 'none';
        elements.selectionBox.style.display = 'none';
        elements.carTypeSelection.style.display = 'none';
        elements.availableCarsHeader.style.display = 'none';
        elements.carList.style.display = 'none';
        resetMainContent();
    });

    // Populate car items
    elements.carTypeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const carType = this.dataset.type;
            populateCarList(carType);
        });
    });

    function populateCarList(type) {
        elements.carList.innerHTML = ''; // Clear any existing cars
        const filteredCars = carData.filter(car => car.type === type);

        if (filteredCars.length > 0) {
            filteredCars.forEach(car => {
                const carItem = document.createElement('div');
                carItem.className = 'car-item';
                carItem.innerHTML = `
                    <div class="car-info">
                        <img src="${car.image}" alt="${car.name}">
                        <div class="car-details">
                            <h3>${car.name}</h3>
                            <ul class="car-features">
                                ${car.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                            <p class="price">${car.price}</p>
                            <button class="reserveButton">Reserve</button>
                        </div>
                    </div>
                `;
                carItem.querySelector('.reserveButton').addEventListener('click', () => showCarDetails(car));
                elements.carList.appendChild(carItem);
            });
        } else {
            const noCarMessage = document.createElement('div');
            noCarMessage.className = 'no-car-message';
            noCarMessage.textContent = 'No cars available for the selected type.';
            elements.carList.appendChild(noCarMessage);
        }

        elements.availableCarsHeader.style.display = 'block';
        elements.carList.style.display = 'flex';
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
        elements.reservationForm.style.display = 'none';
        elements.reservationComplete.style.display = 'none';
        elements.cancelPage.style.display = 'none';
    }

    // Handle reserve button click
    elements.reserveButton.addEventListener('click', () => {
        elements.carDetails.style.display = 'none';
        elements.reservationForm.style.display = 'block';
    });

    // Handle reservation form submission
    elements.reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        elements.reservationForm.style.display = 'none';
        elements.reservationComplete.style.display = 'block';
        const referenceNumber = generateReferenceNumber();
        elements.referenceNumberSpan.textContent = referenceNumber;
    });

    // Generate random 5-digit alphanumeric reference number
    function generateReferenceNumber() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    // Reset main content to original state
    function resetMainContent() {
        elements.carDetails.style.display = 'none';
        elements.reservationForm.style.display = 'none';
        elements.reservationComplete.style.display = 'none';
        elements.carList.style.display = 'none';
        elements.availableCarsHeader.style.display = 'none';
        elements.selectionBox.style.display = 'block';
        elements.carTypeSelection.style.display = 'none';
    }
});
