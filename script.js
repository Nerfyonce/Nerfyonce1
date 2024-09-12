document.getElementById('generateBtn').addEventListener('click', function() {
    // Get the card code from the input
    const cardCode = document.getElementById('cardCodeInput').value;

    // Check if the input is not empty
    if (!cardCode) {
        document.getElementById('output').innerHTML = 'Please enter a card code.';
        return;
    }

    // Set up the API endpoint and authorization
    const apiUrl = `https://api.teeg.cloud/vouchers/campaigns/862WHYF/cards/${cardCode}?tz=GBDMRT9SM6`;
    const token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzI2MTY0MDMzLCJuYmYiOjE3MjYxNjMxMzMsImlwQWRkcmVzcyI6IjE4MC4yNDguMTYuMTE5IiwiaXBhZGRyIjoiMTgwLjI0OC4xNi4xMTkiLCJvaWQiOiIwN2JkZmNlYy0wNmQ0LTQwYmMtOTAzMC1lZjEyMTVkYWFhMzYiLCJzdWIiOiIwN2JkZmNlYy0wNmQ0LTQwYmMtOTAzMC1lZjEyMTVkYWFhMzYiLCJwaG9uZSI6Iis2MjgyMTMxMTA2NjA3IiwidGlkIjoiYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwIiwibm9uY2UiOiI2MmIyMmVhYS0wZmYxLTRkMmItOTBjMi0wZWJhMGU2MjNkZDUiLCJzY3AiOiJhbGwtYXBpcyIsImF6cCI6ImNhMGU0ODY4LTE3N2ItNDlkMi04YzYzLWYxMDQ0ZTNlZGM2MyIsInZlciI6IjEuMCIsImlhdCI6MTcyNjE2MzEzM30.LP4DshlRmcKbX29n9xP405Sz1ngDKRCMAHcxVQ-vpAx_sFEgxep7iDV-0y6VEPvMHsZdb_oq5H5pCUTZINdtHfh9NUkEZr6EEUIisa7nRgwnI2NKnwWBWjjGNvf418rcITtQQI6wxnHyLuDWUjyMIW17EZFd-_8GkLU56CtzEidDLp0W_7J2m---bCUxD98r-xMcUBVqg2VAL-7xjvYfawzkmCSA8S1n70T0JqEaXPG3UfbCmuJN0xoHc_09KxAZGqS2EPiA_ZWl40N3OF4F76Q0-hIFDG6-7GMZ-1WPz4hW1Q4sCgt_RS1WowAgb_aUEybsoCa7XyFzepJAIAjpNg'

    // Make the GET request to the API
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Display the generated voucher details
        document.getElementById('output').innerHTML = `
            <strong>Voucher Generated:</strong><br>
            Campaign: ${data.campaign}<br>
            Card Number: ${data.cardNumber}<br>
            Status: ${data.status}
        `;
    })
    .catch(error => {
        // Handle any errors
        document.getElementById('output').innerHTML = 'An error occurred. Please try again.';
        console.error('Error:', error);
    });
});
