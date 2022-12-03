// items = document.getElementsByClassName('list-group-item');

// items[2].style.backgroundColor = 'green';

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
//        Task 5
//        items[i].style.backgroundColor = 'gray';
// }



// Task 5
// li = document.getElementsByTagName('li');
// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor = 'gray';
// }

// Task 6 querySelector
// li = document.querySelector('li:nth-child(2)');
// li.style.backgroundColor = 'green';

// li = document.querySelector('li:nth-child(3)');
// li.style.display = 'none';

// QuerySelectorALL
li = document.querySelectorAll('li');
li[1].style.color = 'green';

odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}