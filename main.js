let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let dateOfBirth = document.getElementById('dob');
let genderMale = document.getElementById('genderMale');
let genderFemale = document.getElementById('genderFemale');
let genderOther = document.getElementById('genderOther');
let education = document.getElementById('education');
let pHouse = document.getElementById('pHouse');
let pCar = document.getElementById('pCar');
let pShop = document.getElementById('pShop');
let pPlot = document.getElementById('pPlot');
let pBusiness = document.getElementById('pBusiness');

let submitButton = document.getElementById('submitButton');
let resetButton = document.getElementById('resetButton');
let autoFillButton = document.getElementById('autoFillButton');

let table = document.getElementById('table');
let dump = document.getElementById('dump');

main();

function main() {
    submitButton.onclick = () => {

        let row = table.insertRow();

        row.insertCell().innerText = firstName.value;
        row.insertCell().innerText = lastName.value;
        row.insertCell().innerText = dateOfBirth.value;
        row.insertCell().innerText = getGender();
        row.insertCell().innerText = education.value;
        row.insertCell().innerText = getPossessions();
        row.style.border = '1px solid black';

        for (let cell of row.cells) {
            cell.style.border = '1px solid black';
            cell.style.padding = '5px';
        }
    
    }

    
    autoFillButton.addEventListener('click', () => {
        firstName.value = 'Shayan';
        lastName.value = 'Ahmed Khan';
        dateOfBirth.value = '1894-01-01';
        genderMale.checked = true;
        education.value = 'Graduation';
        pHouse.checked = true;
        pCar.checked = true;
        pShop.checked = false;
        pPlot.checked = false;
        pBusiness.checked = true;
    })
}

function getPossessions() {
    let possessionsList = [];
    
    if (pHouse.checked) possessionsList.push('House');
    if (pCar.checked) possessionsList.push('Car'); 
    if (pShop.checked) possessionsList.push('Shop');
    if (pPlot.checked) possessionsList.push('Plot');
    if (pBusiness.checked) possessionsList.push('Business');
    
    return possessionsList.join(', ');
}

function getGender() {
    
    if (genderMale.checked) return 'Male';
    else if (genderFemale.checked) return 'Female';
    else if (genderOther.checked) return 'Other';
}
