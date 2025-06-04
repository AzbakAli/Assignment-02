const mobiles = {
    iphone: {
        iphone7: {
            processor: "Snapdragon 8 Gen 2",
            memory: { ram: 12, storage: 512 },
            camera: { rear: { main: 200, ultrawide: 12, telephoto: 10, telephotoPeriscope: 10 }, front: 10 },
            brand: "iphone",
            battery: 5000,
            operatingSystem: "Android 13",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
        },
        iphone8: {
            processor: "Snapdragon 12 Gen 5",
            memory: { ram: 8, storage: 256 },
            brand: "iphone",
            camera: { rear: { main: 180, ultrawide: 15, telephoto: 10, telephotoPeriscope: 20 }, front: 12 },
            battery: 8000,
            operatingSystem: "iphone 8",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
        },
        iphone8plus: {
            processor: "Snapdragon 5 Gen 6",
            memory: { ram: 8, storage: 128 },
            brand: "iphone",
            camera: { rear: { main: 160, ultrawide: 18, telephoto: 10, telephotoPeriscope: 8 }, front: 16 },
            battery: 5000,
            operatingSystem: "iphone 8",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
        },
        iphoneX: {
            processor: "Snapdragon 5 Gen 4",
            memory: { ram: 8, storage: 256 },
            brand: "iphone",
            camera: { rear: { main: 130, ultrawide: 16, telephoto: 10, telephotoPeriscope: 18 }, front: 14 },
            battery: 6000,
            operatingSystem: "iphone X",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
        },
        iphone11: {
            processor: "Snapdragon 7 Gen 9",
            memory: { ram: 16, storage: 512 },
            camera: { rear: { main: 150, ultrawide: 24, telephoto: 16, telephotoPeriscope: 10 }, front: 20 },
            brand: "iphone",
            battery: 10000,
            operatingSystem: "iphone 11",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
        }
    },
    xiomi: {
        redmiA2: {
            modelName: "Mi 12 Pro",
            display: { size: 6.73, resolution: "3200 x 1440", panelType: "AMOLED", refreshRate: 120 },
            brand: "xiomi",
            processor: "Snapdragon 8 Gen 1",
            memory: { ram: 8, storage: 256 },
            camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
            battery: 4600,
            operatingSystem: "Android 12",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"]
        },
        redmi10: {
            modelName: "Mi 8 Pro",
            display: { size: 5.73, resolution: "3000 x 1320", panelType: "AMOLED", refreshRate: 100 },
            brand: "xiomi",
            processor: "Snapdragon 7 Gen 5",
            memory: { ram: 12, storage: 256 },
            camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
            battery: 5000,
            operatingSystem: "Android 11",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"]
        },
        redmi11: {
            modelName: "Mi 14 Pro",
            display: { size: 6.0, resolution: "3000 x 1240", panelType: "AMOLED", refreshRate: 150 },
            brand: "xiomi",
            processor: "Snapdragon 8 Gen 4",
            memory: { ram: 12, storage: 512 },
            camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
            battery: 8000,
            operatingSystem: "Android 12",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"]
        },
        redmi12: {
            modelName: "Mi 12 Pro",
            display: { size: 7.4, resolution: "3200 x 1440", panelType: "AMOLED", refreshRate: 180 },
            brand: "xiomi",
            processor: "Snapdragon 12 Gen 1",
            memory: { ram: 12, storage: 512 },
            camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
            battery: 8000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"]
        },
        redmi13: {
            modelName: "Mi 14 Pro",
            display: { size: 8.03, resolution: "4200 x 1540", panelType: "AMOLED", refreshRate: 100 },
            brand: "xiomi",
            processor: "Snapdragon 8 Gen 6",
            memory: { ram: 12, storage: 256 },
            camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
            battery: 10000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"]
        },
        redmi13C: {
            modelName: "Mi 14 Pro",
            display: { size: 8.43, resolution: "4200 x 1340", panelType: "AMOLED", refreshRate: 100 },
            processor: "Snapdragon 9 Gen 5",
            memory: { ram: 12, storage: 512 },
            brand: "xiomi",
            camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
            battery: 10000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"]
        }
    },
    realme: {
        realmiNote50: {
            brand: "Realme",
            model: "hypothetical model",
            display: { size: "6.5 inches", resolution: "FHD+ (1080 x 2400 pixels)", type: "AMOLED" },
            processor: "Qualcomm Snapdragon 8 Gen 1",
            memory: { ram: "8GB", storage: "128GB" },
            camera: { rear: { resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)" }, front: { resolution: "16MP" } },
            battery: { capacity: "5000mAh", fastCharging: "65W" },
            operatingSystem: "Android 12",
            specialFeatures: ["In-display fingerprint sensor", "3.5mm headphone jack"]
        },
        realmiC67: {
            brand: "Realme",
            model: "hypothetical model",
            display: { size: "6.7 inches", resolution: "FHD+ (1280 x 2100 pixels)", type: "AMOLED" },
            processor: "Qualcomm Snapdragon 6 Gen 4",
            memory: { ram: "8GB", storage: "256GB" },
            camera: { rear: { resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)" }, front: { resolution: "14MP" } },
            battery: { capacity: "5000mAh", fastCharging: "65W" },
            operatingSystem: "Android 11",
            specialFeatures: ["In-display fingerprint sensor", "3.5mm headphone jack"]
        },
        realmiC53: {
            brand: "Realme",
            model: "hypothetical model",
            display: { size: "7.1 inches", resolution: "FHD+ (1180 x 2500 pixels)", type: "AMOLED" },
            processor: "Qualcomm Snapdragon 8 Gen 6",
            memory: { ram: "12GB", storage: "128GB" },
            camera: { rear: { resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)" }, front: { resolution: "18MP" } },
            battery: { capacity: "8000mAh", fastCharging: "65W" },
            operatingSystem: "Android 12",
            specialFeatures: ["In-display fingerprint sensor", "3.5mm headphone jack"]
        },
        realmi9: {
            brand: "Realme",
            model: "hypothetical model",
            display: { size: "7.2 inches", resolution: "FHD+ (1180 x 2200 pixels)", type: "AMOLED" },
            processor: "Qualcomm Snapdragon 9 Gen 6",
            memory: { ram: "12GB", storage: "256GB" },
            camera: { rear: { resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)" }, front: { resolution: "24MP" } },
            battery: { capacity: "10000mAh", fastCharging: "75W" },
            operatingSystem: "Android 12",
            specialFeatures: ["In-display fingerprint sensor", "3.5mm headphone jack"]
        },
        realmi9i: {
            brand: "Realme",
            model: "hypothetical model",
            display: { size: "6.9 inches", resolution: "FHD+ (1480 x 2400 pixels)", type: "AMOLED" },
            processor: "Qualcomm Snapdragon 8 Gen 1",
            memory: { ram: "12GB", storage: "512GB" },
            camera: { rear: { resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)" }, front: { resolution: "16MP" } },
            battery: { capacity: "2000mAh", fastCharging: "70W" },
            operatingSystem: "Android 13",
            specialFeatures: ["In-display fingerprint sensor", "3.5mm headphone jack"]
        }
    },
    samsung: {
        samsung_Galaxy_S24: {
            brand: "Samsung",
            model: "Galaxy S24 Ultra",
            displaySize: 6.8,
            displayResolution: "3088x1440",
            displayType: "AMOLED",
            processor: "Snapdragon 8 Gen 2",
            memory: { ram: 12, storage: 512 },
            rearCamera: { megapixel: 108, features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"] },
            frontCamera: { megapixel: 40 },
            batteryCapacity: 5000,
            fastCharging: "45W Super Fast Charging",
            operatingSystem: "Android 14",
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false
        },
        samsung_Galaxy_S51: {
            brand: "Samsung",
            model: "Galaxy S51 Pro",
            displaySize: 7.2,
            displayResolution: "3088x1440",
            displayType: "AMOLED",
            processor: "Snapdragon 9 Gen 4",
            memory: { ram: 8, storage: 128 },
            rearCamera: { megapixel: 112, features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"] },
            frontCamera: { megapixel: 40 },
            batteryCapacity: 8000,
            fastCharging: "45W Super Fast Charging",
            operatingSystem: "Android 11",
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false
        },
        samsung_Galaxy_Prime: {
            brand: "Samsung",
            model: "Galaxy Prime Ultra",
            displaySize: 7.4,
            displayResolution: "3088x1440",
            displayType: "AMOLED",
            processor: "Snapdragon 8 Gen 10",
            memory: { ram: 4, storage: 64 },
            rearCamera: { megapixel: 108, features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"] },
            frontCamera: { megapixel: 40 },
            batteryCapacity: 5000,
            fastCharging: "45W Super Fast Charging",
            operatingSystem: "Android 13",
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false
        },
        samsung_Galaxy_S46: {
            brand: "Samsung",
            model: "Galaxy S46 Ultra",
            displaySize: 5.11,
            displayResolution: "3088x1440",
            displayType: "AMOLED",
            processor: "Snapdragon 8 Gen 2",
            memory: { ram: 6, storage: 64 },
            rearCamera: { megapixel: 108, features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"] },
            frontCamera: { megapixel: 40 },
            batteryCapacity: 20000,
            fastCharging: "65W Super Fast Charging",
            operatingSystem: "Android 14",
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false
        },
        samsung_Galaxy_S77: {
            brand: "Samsung",
            model: "Galaxy S77 Ultra",
            displaySize: 8.5,
            displayResolution: "3088x1440",
            displayType: "AMOLED",
            processor: "Snapdragon 12 Gen 24",
            memory: { ram: 12, storage: 512 },
            rearCamera: { megapixel: 158, features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"] },
            frontCamera: { megapixel: 40 },
            batteryCapacity: 20000,
            fastCharging: "85W Super Fast Charging",
            operatingSystem: "Android 14",
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: true
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const brandSelect = document.getElementById('brandSelect');
    const modelSelect = document.getElementById('modelSelect');
    const searchBtn = document.getElementById('searchBtn');
    const resultDiv = document.getElementById('result');


    Object.keys(mobiles).forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
        brandSelect.appendChild(option);
    });

  
    brandSelect.addEventListener('change', () => {
        const selectedBrand = brandSelect.value;
        modelSelect.innerHTML = '<option value="">Select Model</option>';
        modelSelect.disabled = !selectedBrand;
        searchBtn.disabled = true;

        if (selectedBrand) {
            Object.keys(mobiles[selectedBrand]).forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = mobiles[selectedBrand][model].modelName || model;
                modelSelect.appendChild(option);
            });
            modelSelect.disabled = false;
        }
    });

  
    modelSelect.addEventListener('change', () => {
        searchBtn.disabled = !modelSelect.value;
    });


    searchBtn.addEventListener('click', () => {
        const brand = brandSelect.value;
        const model = modelSelect.value;
        if (brand && model) {
            const mobileData = mobiles[brand][model];
            resultDiv.innerHTML = formatMobileData(mobileData);
        }
    });

  
    function formatMobileData(data) {
        let output = `<p><strong>Brand:</strong> ${data.brand}</p>`;
        if (data.model) output += `<p><strong>Model:</strong> ${data.model}</p>`;
        if (data.modelName) output += `<p><strong>Model Name:</strong> ${data.modelName}</p>`;
        if (data.processor) output += `<p><strong>Processor:</strong> ${data.processor}</p>`;
        if (data.memory) {
            output += `<p><strong>Memory:</strong> RAM: ${data.memory.ram}${typeof data.memory.ram === 'string' ? '' : 'GB'}, Storage: ${data.memory.storage}${typeof data.memory.storage === 'string' ? '' : 'GB'}</p>`;
        }
        if (data.camera) {
            if (data.camera.rear) {
                output += `<p><strong>Rear Camera:</strong> `;
                if (typeof data.camera.rear === 'string') {
                    output += data.camera.rear;
                } else if (data.camera.rear.resolution) {
                    output += data.camera.rear.resolution;
                } else {
                    output += Object.entries(data.camera.rear).map(([key, value]) => `${key}: ${value}MP`).join(', ');
                }
                output += `</p>`;
            }
            if (data.camera.front) {
                output += `<p><strong>Front Camera:</strong> ${typeof data.camera.front === 'object' ? data.camera.front.resolution : data.camera.front}MP</p>`;
            }
        }
        if (data.battery) {
            if (typeof data.battery === 'object') {
                output += `<p><strong>Battery:</strong> ${data.battery.capacity}, Fast Charging: ${data.battery.fastCharging}</p>`;
            } else {
                output += `<p><strong>Battery:</strong> ${data.battery}mAh</p>`;
            }
        }
        if (data.batteryCapacity) output += `<p><strong>Battery Capacity:</strong> ${data.batteryCapacity}mAh</p>`;
        if (data.fastCharging) output += `<p><strong>Fast Charging:</strong> ${data.fastCharging}</p>`;
        if (data.display) {
            output += `<p><strong>Display:</strong> Size: ${data.display.size}, Resolution: ${data.display.resolution}, Type: ${data.display.type || data.display.panelType}`;
            if (data.display.refreshRate) output += `, Refresh Rate: ${data.display.refreshRate}Hz`;
            output += `</p>`;
        }
        if (data.displaySize) output += `<p><strong>Display Size:</strong> ${data.displaySize} inches</p>`;
        if (data.displayResolution) output += `<p><strong>Display Resolution:</strong> ${data.displayResolution}</p>`;
        if (data.displayType) output += `<p><strong>Display Type:</strong> ${data.displayType}</p>`;
        if (data.operatingSystem) output += `<p><strong>Operating System:</strong> ${data.operatingSystem}</p>`;
        if (data.specialFeatures) output += `<p><strong>Special Features:</strong> ${data.specialFeatures.join(', ')}</p>`;
        if (data.fingerprintSensor) output += `<p><strong>Fingerprint Sensor:</strong> ${data.fingerprintSensor ? 'Yes' : 'No'}</p>`;
        if (data.waterResistance) output += `<p><strong>Water Resistance:</strong> ${data.waterResistance}</p>`;
        if (data.expandableStorage !== undefined) output += `<p><strong>Expandable Storage:</strong> ${data.expandableStorage ? 'Yes' : 'No'}</p>`;
        return output;
    }
});