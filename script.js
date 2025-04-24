// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 1. Dynamic Text Content
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    
    // Array of sample texts to cycle through
    const textOptions = [
        'This text will change when you click the button below.',
        'JavaScript makes web pages interactive!',
        'DOM manipulation is powerful.',
        'You can dynamically update content without reloading the page.',
        'This is the last text in our rotation.'
    ];
    
    let currentTextIndex = 0;
    
    // Event listener for changing text
    changeTextBtn.addEventListener('click', function() {
        currentTextIndex = (currentTextIndex + 1) % textOptions.length;
        dynamicText.textContent = textOptions[currentTextIndex];
    });
    
    // 2. CSS Style Modification
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    const changeSizeBtn = document.getElementById('change-size-btn');
    
    // Array of colors to cycle through
    const colorOptions = [
        '#3498db', // Blue
        '#e74c3c', // Red
        '#2ecc71', // Green
        '#f39c12', // Orange
        '#9b59b6'  // Purple
    ];
    
    let currentColorIndex = 0;
    let isLarge = false;
    
    // Event listener for changing color
    changeColorBtn.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1) % colorOptions.length;
        colorBox.style.backgroundColor = colorOptions[currentColorIndex];
    });
    
    // Event listener for changing size
    changeSizeBtn.addEventListener('click', function() {
        if (isLarge) {
            colorBox.style.width = '100px';
            colorBox.style.height = '100px';
        } else {
            colorBox.style.width = '150px';
            colorBox.style.height = '150px';
        }
        isLarge = !isLarge;
    });
    
    // 3. Adding and Removing Elements
    const elementsContainer = document.getElementById('elements-container');
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    
    let elementCount = 0;
    
    // Event listener for adding elements
    addElementBtn.addEventListener('click', function() {
        elementCount++;
        
        // Create a new element
        const newElement = document.createElement('div');
        newElement.className = 'new-element';
        newElement.id = `element-${elementCount}`;
        newElement.textContent = `Element #${elementCount} - Click to highlight`;
        
        // Add click event to the new element
        newElement.addEventListener('click', function() {
            // Toggle a highlighted class
            this.style.backgroundColor = this.style.backgroundColor === 'yellow' ? '#f8f9fa' : 'yellow';
        });
        
        // Add the new element to the container
        elementsContainer.appendChild(newElement);
        
        // Enable the remove button if it was disabled
        if (elementCount > 0) {
            removeElementBtn.disabled = false;
        }
    });
    
    // Event listener for removing elements
    removeElementBtn.addEventListener('click', function() {
        if (elementCount > 0) {
            // Remove the last added element
            const elementToRemove = document.getElementById(`element-${elementCount}`);
            elementsContainer.removeChild(elementToRemove);
            elementCount--;
            
            // Disable the remove button if no elements are left
            if (elementCount === 0) {
                removeElementBtn.disabled = true;
            }
        }
    });
    
    // Initially disable the remove button since there are no elements
    removeElementBtn.disabled = true;
});
