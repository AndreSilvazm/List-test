function updateItems() {

    //Getting DOM values
    const quantity = document.getElementById('quantity').value;
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    //Generating the list
    for (let i = 1; i <= quantity; i++) {

      const listItem = document.createElement('li'); 

      listItem.textContent = `Item ${i}`;

      itemList.appendChild(listItem);

    }

  }
  