const btn = document.querySelector('.submit-button');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');
const item5 = document.querySelector('.item5');7
const modal = document.querySelector('.container-thankyou');
const selected = document.querySelector('.selected');

let previousItem = null; // Track the previously clicked item

// Add a click event listener to each item
item1.addEventListener("click", () => { 
    applyStyles(item1);
});

item2.addEventListener("click", () => { 
    applyStyles(item2);
});

item3.addEventListener("click", () => { 
    applyStyles(item3);
});

item4.addEventListener("click", () => { 
    applyStyles(item4);
});

item5.addEventListener("click", () => { 
    applyStyles(item5);
});

// Function to apply styles to the clicked item and remove styles from the previous item
function applyStyles(item) {
    if (previousItem) {
        // Remove styles from the previous item
        previousItem.style.backgroundColor = '';
        previousItem.style.color = '';
    }

    // Apply styles to the clicked item
    item.style.backgroundColor = 'hsl(25, 97%, 53%)';
    item.style.color = 'white';

    previousItem = item; // Update the previously clicked item
    const itemNumber = item.textContent.trim(); // Extract the number from the item
    console.log(itemNumber);
    selected.textContent=`You selected ${itemNumber} out of 5`;
    btn.addEventListener("click", () => { 
        modal.style.zIndex = '3';
    });
}
