document.getElementById('displayItemsBtn').addEventListener('click', function() {
    var itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.innerHTML = ''; 
  
    var items = ['Water', 'Food', 'Clothes', 'Skin care', 'Drugs'];
    var list = document.createElement('ul');
    list.className = 'list-group';
  
    for (var i = 0; i < items.length; i++) {
      var listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      if (i % 2 === 0) {
        listItem.className += ' list-group-item-success'; 
      }
      listItem.textContent = items[i];
      list.appendChild(listItem);
    }
  
    itemsContainer.appendChild(list);
});
