let todolist=[
    /*{
        item:'JS complete',
        duedate : '02/03/2024'
    },
    {
        item:'Go to library',
        duedate : '02/03/2024'
    }*/
];

displayItems();

function add_to_todo(){
    let inputElement = document.querySelector('#add_input');
    let dateElement = document.querySelector('#add_date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    todolist.push({item:todoItem, duedate:todoDate});

    inputElement.value='';
    dateElement.value='';

    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo_container');
    let newHtml='';

    for(let i=0;i<todolist.length;i++)
    {
        //let item=todolist[i].item;
        //let duedate=todolist[i].duedate;
        let {item,duedate} = todolist[i];
        
        newHtml += `        
           <span>${item}</span>
           <span>${duedate}</span>
           <button class="delete_button" onclick="todolist.splice(${i},1); displayItems();">Delete</button>
        `;
    }

    containerElement.innerHTML = newHtml;
}