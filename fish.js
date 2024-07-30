const list = document.getElementById('list');
const listItem = document.getElementById('list').children[1]; // Доступ ко второму элементу списка
   

list.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){ 
         if(listItem.className === 'checked')
            listItem.className = ''; 
         else{
            listItem.className = 'checked'
         }

    }
    
    
} );

