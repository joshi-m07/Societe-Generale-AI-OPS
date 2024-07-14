document.addEventListener('DOMContentLoaded', function () {
    const assetList = document.getElementById('asset-list');
    const suggestionsList = document.getElementById('suggestions-list');

    // Mock data (replace with actual API calls)
    const assets = [
        { id: 1, name: 'Server 1', status: 'Active' },
        { id: 2, name: 'Workstation 1', status: 'Maintenance Required' },
        { id: 3, name: 'Printer 1', status: 'Active' }
    ];

    const maintenanceSuggestions = [
        "Update firmware for Server 1",
        "Replace toner cartridge for Printer 1"
    ];

    // Populate asset list
    assets.forEach(asset => {
        const assetItem = document.createElement('div');
        assetItem.classList.add('asset-item');
        assetItem.innerHTML = `
            <h2>${asset.name}</h2>
            <p>Status: ${asset.status}</p>
        `;
        assetList.appendChild(assetItem);
    });

    // Populate maintenance suggestions
    maintenanceSuggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.textContent = suggestion;
        suggestionsList.appendChild(listItem);
    });
});

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    });

    const result = await response.json();
    alert(result.message);
});


