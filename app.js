// adding a todo

const form = document.querySelector('.todo-form');  
const input = document.getElementById('todo');
const content = document.querySelector('ul');
const search = document.querySelector('#search');


  form.addEventListener('submit', e =>{
    e.preventDefault();
    let res = input.value.trim();
    console.log(res);
    if(res.length){
      let html=``;
      html+=`<ul>
      <li>${res}</li>
      </ul>`;
      content.innerHTML+=html;
      form.reset();
      localStorage.setItem('todo',res);
    }
  });


  //deleteing todos
  content.addEventListener('click', e=>{
 e.stopPropagation();
   e.target.remove();
  
  });

  const filteredTodos =  (searchedTerm)=>{
   Array.from(content.children)
   .filter((todo) => !todo.textContent.includes(searchedTerm))
   .forEach((todo) => todo.classList.add('remove'));

   Array.from(content.children)
   .filter(todo=> todo.textContent.includes(searchedTerm))
   .forEach(todo=> todo.classList.remove('remove'));
  }

  //searching todo
 search.addEventListener('keyup', (e)=>{
  const searchedTerm = search.value;
  // console.log(searchedTerm);
  filteredTodos(searchedTerm);
 });




