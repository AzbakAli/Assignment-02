
const mobiles = {
    iphone: ["iPhone 7", "iPhone 8", "iPhone 8 Plus", "iPhone X", "iPhone 11"],
    xiomi: ["Redmi A2", "Redmi 10", "Redmi 11", "Redmi 12", "Redmi 13", "Redmi 13C"],
    realme: ["Realme Note 50", "Realme C67", "Realme C53", "Realme 9", "Realme 9i"],
    samsung: ["Galaxy S24", "Galaxy S51", "Galaxy Prime", "Galaxy S46", "Galaxy S77"]
};


const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');
const searchBtn = document.getElementById('search');
const resultsDiv = document.getElementById('results');

for (const brand in mobiles) {
    const option = document.createElement('option');
    option.value = brand;
    option.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
    brandSelect.appendChild(option);
}


brandSelect.addEventListener('change', function() {
    modelSelect.innerHTML = '<option value="">Select Model</option>';
    modelSelect.disabled = !this.value;
    searchBtn.disabled = true;
    
    if (this.value) {
        mobiles[this.value].forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
});

modelSelect.addEventListener('change', function() {
    searchBtn.disabled = !this.value;
});


searchBtn.addEventListener('click', function() {
    const brand = brandSelect.value;
    const model = modelSelect.value;
    
    if (brand && model) {
        resultsDiv.innerHTML = `
            <h3>Selected Phone:</h3>
            <p><strong>Brand:</strong> ${brand.charAt(0).toUpperCase() + brand.slice(1)}</p>
            <p><strong>Model:</strong> ${model}</p>
        `;
    }
});