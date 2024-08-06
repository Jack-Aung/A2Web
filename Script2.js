document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const elements = {
        cancelReservationButton: document.getElementById('cancelReservationButton'),
        cancelReservationForm: document.getElementById('cancelReservationForm'),
        cancelPage: document.getElementById('cancelPage'),
        mainContent: document.getElementById('mainContent'),
        cancelAcknowledgement: document.getElementById('cancelAcknowledgement'),
        payBillButton: document.getElementById('payBillButton'),
        payBillForm: document.getElementById('payBillForm'),
        payBillPage: document.getElementById('payBillPage'),
        payBillAcknowledgement: document.getElementById('payBillAcknowledgement')
    };

    // Handle cancel reservation button click
    elements.cancelReservationButton.addEventListener('click', function () {
        elements.mainContent.style.display = 'none';
        elements.cancelPage.style.display = 'block';
        elements.cancelReservationForm.style.display = 'block';
        elements.cancelAcknowledgement.style.display = 'none';
    });

    // Handle cancel reservation form submission
    elements.cancelReservationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        elements.cancelReservationForm.style.display = 'none';
        elements.cancelAcknowledgement.style.display = 'block';
        setTimeout(() => {
            elements.cancelPage.style.display = 'none';
            elements.mainContent.style.display = 'block';
            resetMainContent();
        }, 3000);
    });

    // Handle pay bill button click
    elements.payBillButton.addEventListener('click', function () {
        elements.mainContent.style.display = 'none';
        elements.payBillPage.style.display = 'block';
        elements.payBillForm.style.display = 'block';
        elements.payBillAcknowledgement.style.display = 'none';
    });

    // Handle pay bill form submission
    elements.payBillForm.addEventListener('submit', function (event) {
        event.preventDefault();
        elements.payBillForm.style.display = 'none';
        elements.payBillAcknowledgement.style.display = 'block';
        setTimeout(() => {
            elements.payBillPage.style.display = 'none';
            elements.mainContent.style.display = 'block';
            resetMainContent();
        }, 3000);
    });

    // Reset main content to original state
    function resetMainContent() {
        const carDetails = document.getElementById('carDetails');
        const reservationForm = document.getElementById('reservationForm');
        const reservationComplete = document.getElementById('reservationComplete');
        const carList = document.getElementById('carList');
        const availableCarsHeader = document.getElementById('availableCarsHeader');
        const selectionBox = document.getElementById('selectionBox');

        carDetails.style.display = 'none';
        reservationForm.style.display = 'none';
        reservationComplete.style.display = 'none';
        carList.style.display = 'none';
        availableCarsHeader.style.display = 'none';
        selectionBox.style.display = 'block';
    }
});
