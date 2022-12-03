form = document.getElementById('addForm');
itemList = document.getElementById('items');
filter = document.getElementById('filter');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterElements);

function addItem(e){
    e.preventDefault();
    var t = document.getElementById('item').value;
    var d = document.getElementById('description').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';

    var des = document.createElement('div');

    li.appendChild(document.createTextNode(t));
    des.appendChild(document.createTextNode(' '+d));

    editButton = document.createElement('button');
    editButton.className = 'btn btn-success btn-sm float-right edit';
    editButton.appendChild(document.createTextNode('Edit'));

    delButton = document.createElement('button');
    delButton.className = 'btn btn-danger btn-sm float-right delete';
    delButton.appendChild(document.createTextNode('delete'));


    li.appendChild(delButton);
    li.appendChild(editButton);
    li.appendChild(des);
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}


function filterElements(e){
    var text = e.target.value.toLowerCase();

    liList = itemList.getElementsByTagName('li');

    Array.from(liList).forEach(function(li){
        var name = li.textContent;

        if(name.toLowerCase().indexOf(text) != -1){
            li.style.display = 'block';
        }
        else{
            li.style.display = 'none';
        }
    })
}