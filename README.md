# To-Do React App

<img width="632" alt="Screenshot 2023-11-24 at 15 56 56" src="https://github.com/matea-nikolac/to-do-react-app/assets/62067357/e0826c15-eef5-4dab-8ddc-1c31d6aa5804">

## Description
This project is a basic To-Do list application created with React. It allows users to add tasks, mark them as completed, and hide/show completed tasks.

## Deployment link
https://clinquant-alfajores-358fe5.netlify.app/

## Technologies Used
* CSS
* HTML
* React
* JavaScript
* JSX
* Axios
* Bootstrap

## Features
- **Add New Tasks:** Use the "List Item" input to add new tasks to the to-do list.
- **Mark Tasks as Completed:** The Checkbox next to each task allows marking it as completed. Completed tasks are displayed with a strikethrough.

## Planning
Before commencing the coding process, a wireframe was designed to sketch what the to-do list would look like.

<img width="738" alt="Screenshot 2023-11-24 at 11 39 29" src="https://github.com/matea-nikolac/to-do-react-app/assets/62067357/a9e30e41-d26b-4590-bd27-45e5c25b9109">

## Components
The application is structured into the following components:

* Home: The main component rendering the overall structure of the app.
* AddTasks: Component responsible for adding new tasks to the list.
* DisplayTasks: Component for displaying the list of tasks.
* HideCheckedTasks: Component allowing users to hide or show completed tasks.

## Build Process

* The `Home.js` component includes all the other components, which are responsible for adding tasks, displaying tasks, and creating a dropdown for checked tasks.

### Adding Tasks

The `AddTasks` component facilitates the addition of new tasks to the to-do list. It includes an input field with a placeholder ("List Item") and supports the 'Enter' key for quick task entry.

### Displaying Tasks

The `DisplayTasks` component is responsible for rendering the to-do list. It dynamically displays tasks and checkboxes, allowing users to mark tasks as completed. The component receives the current list of tasks (`tasks`), an array of checked items (`checkedItems`), and a function (`handleCheckChange`) to handle the change of checked status for each task.

<img width="839" alt="Screenshot 2023-11-24 at 15 58 55" src="https://github.com/matea-nikolac/to-do-react-app/assets/62067357/1fccdddc-78c7-46c9-9bda-454434331bde">

### Hiding Checked Tasks

The `HideCheckedTasks` component enables users to hide or reveal completed tasks in the to-do list. It features a collapsible dropdown that shows the count of completed tasks. Users can toggle the visibility of completed tasks by clicking on the dropdown icon. The component utilizes Font Awesome icons for a sleek user interface. 

<img width="1081" alt="Screenshot 2023-11-24 at 15 59 35" src="https://github.com/matea-nikolac/to-do-react-app/assets/62067357/77c05a23-6123-4e95-861f-6b6a6555d2c6">

## Challenges

#### Managing Task Display

The primary challenge was creating separate divs for displaying unchecked and checked tasks. The solution involved passing the tasks state to both the `DisplayTasks` and `HideCheckedTasks` components. By filtering tasks based on the boolean value of `checkedItems[index]`, the desired separation was achieved.

#### Task Completion Logic

Implementing the logic for defining whether a task is checked or unchecked posed a challenge. The solution involved creating a function called `handleCheckChange`. This function toggles the boolean value of the corresponding task in the `checkedItems` array when a checkbox is clicked.

<img width="707" alt="Screenshot 2023-11-24 at 11 59 16" src="https://github.com/matea-nikolac/to-do-react-app/assets/62067357/db1d6e8f-99c6-4572-a55f-369be3f779a4">
