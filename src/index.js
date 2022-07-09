document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')

  form.addEventListener('submit', makeTask) 

  function makeTask(e) {
    e.preventDefault()
     

    let newTaskDiscription = document.querySelector('#new-task-description')
    let newTask = document.createElement('li')

    newTask.innerText = newTaskDiscription.value
    appendTask(newTask)
    }
    function appendTask(task) {
    document.querySelector('#tasks').appendChild(task)
    }
  })




// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
// a text field (type="text") and a submit button (type="submit").

// document.querySelector('form'). addEventListener('submit', (e) => {
