document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    var todoInput = document.getElementById('todo-input');
    var task = todoInput.value;
  
    if (task.trim() !== '') {
      var todoItem = document.createElement('li');
      todoItem.innerHTML = '<span class="task-text">' + task + '</span>' + '<span class="delete-btn">&#10005;</span>';
      document.getElementById('todo-list').appendChild(todoItem);
  
      todoInput.value = ''; // Clear input field
  
      // Add event listener to the delete button
      var deleteBtns = document.getElementsByClassName('delete-btn');
      for (var i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', function() {
          this.parentNode.remove();
        });
      }
  
      // Add event listener to toggle task completion
      var taskTexts = document.getElementsByClassName('task-text');
      for (var i = 0; i < taskTexts.length; i++) {
        taskTexts[i].addEventListener('click', function() {
          this.parentNode.classList.toggle('checked');
        });
      }
    }
  });
  