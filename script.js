var ele = document.getElementById('list');
var addElement = document.getElementById('plus-icon');
var itemCount = document.getElementById('item-count');
var count = 0;
var id = 0;


function addElemenetFunction()
{
    var item = document.createElement('li');
    var text = document.getElementById('input-form');
    var value = '<span>' +' ' + text.value +' ' +'</span>' + '<i class="fas fa-times cross-icon" onclick="removeItem(event)" id="' + id+'"></i>';
    var parentId = 'a' + id;
    item.innerHTML = value;
    item.classList.add("item-height");
    item.setAttribute("id",parentId);
    ele.appendChild(item);
    var value = (++count) + " task left";
    console.log(value);
    itemCount.innerText = count + " task left";
    id++;

}

addElement.addEventListener('click',addElemenetFunction);

function removeItem(event)
{
    console.log("removed");
    var item = document.getElementById(event.srcElement.id);
    var id = item.parentNode.id;
    var item2 = document.getElementById(id);
    ele.removeChild(item2);
    count--;
    itemCount.innerText = count + " task left";
}