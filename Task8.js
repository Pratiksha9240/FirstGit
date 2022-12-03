form = document.getElementById('addForm');
itemList = document.getElementById('items');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();
    var t = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(t));

    editButton = document.createElement('button');
    editButton.className = 'btn btn-success btn-sm float-right edit';
    editButton.appendChild(document.createTextNode('Edit'));

    delButton = document.createElement('button');
    delButton.className = 'btn btn-danger btn-sm float-right delete';
    delButton.appendChild(document.createTextNode('delete'));


    li.appendChild(delButton);
    li.appendChild(editButton);

    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}