document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('numero').value;
    
    if (nome && numero) {
        const tableBody = document.getElementById('contactTableBody');
        
        const newRow = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = nome;
        newRow.appendChild(nameCell);
        
        const numberCell = document.createElement('td');
        numberCell.textContent = numero;
        newRow.appendChild(numberCell);
        
        tableBody.appendChild(newRow);
        
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});