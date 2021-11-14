let toDo=" To Do",  done = "Done", inProgress='In Progress';



const list = [
    {
        id:1,
        name:'create a post',
        status:toDo,
        priority:'low'
    },
    {
        id:2,
        name:'test',
        status: done,
        priority: 'high'
    }
];

function addTask(taskName){

   
    const maxId = list[list.length-1].id+1;

    list.push({id:maxId, name: taskName, status:toDo, priority:'high'});

    
}


function deleteTask(taskName) {

    for (let i=0; i<list.length; i++){

        if(list[i].name === taskName){

            list.splice(i,1);
            break;
        }
    }
}

function changeStatus(taskName, newStatus) {


    let foundObj= list.find(item => item.name === taskName);
    foundObj.status = newStatus;

    if(newStatus===done){

        foundObj.priority='very low';

     }else if(newStatus=== toDo){

        foundObj.priority='high';

     }else if(newStatus === inProgress){

        foundObj.priority='middle';
     }
    
}

function showlist(){

   console.log(done+":");
   loop(done);

   console.log(inProgress+':');
   loop(inProgress);

   console.log(toDo+":");
   loop(toDo);

}

function loop(checkStatus){

    let count=0;

    for(let i=0; i<list.length; i++){

        if(list[i].status===checkStatus){

            console.log(`     ${list[i].name} ${list[i].priority} priority`);

            count++;
        }
    }
    if(count===0) console.log("    "+" -");
}
console.log(list);

addTask('drink a beer in bar');
changeStatus('test', toDo);
deleteTask('test');
addTask('sleep in the bed');

showlist();

console.log(list);
 