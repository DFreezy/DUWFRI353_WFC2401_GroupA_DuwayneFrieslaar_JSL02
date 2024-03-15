const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();
//This is is welcome message



const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value.trim().toUpperCase(); // Trim whitespace and convert to uppercase
    const workoutList = document.querySelector('#workoutList');

    // Check if the workout input is not empty
    if (workoutInput !== '') {
        // Check if the workout routine already exists in the list
        if (!Array.from(workoutList.children).some(item => item.textContent.toUpperCase() === workoutInput)) {
            //Also turn any input into upper case so it doesn't duplicate by mistake because of capital letters
            const newWorkout = document.createElement('li');
            newWorkout.textContent = workoutInput;
            workoutList.appendChild(newWorkout);
           /*Here we check if the entry has already been entered by placing and array around the workoutList children
            .some checks if the input matches the condition, and creating new li elements along the way, and appending it to
            it's parent element, and generating the appropriate text content if the above condition is met*/

        } else {
            alert('Workout routine already exists!');
        }
    } else {
        alert('Please enter a valid workout routine!');
    }
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);




const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim().toUpperCase(); // Trim whitespace and convert to uppercase
    const goalList = document.querySelector('#goalList');

    // Check if the goal input is not empty
    if (goalInput !== '') {
        // Check if the goal already exists in the list
        if (!Array.from(goalList.children).some(item => item.textContent.toUpperCase() === goalInput)) {
            const newGoal = document.createElement('li');
            newGoal.textContent = goalInput;
            goalList.appendChild(newGoal);
            /*This line checks if the workout routine already exists in the list.
Array.from(workoutList.children) converts the list of workout items (children of the workoutList element) into an array.
.some() method checks if any item in the array meets the condition specified by the callback function. In this case, it checks if any item's text content matches the workoutInput.
If no matching workout routine is found, the condition !Array.from(...).some(...) evaluates to true, indicating that the input is not a duplicate.*/
        } else {
            alert('Goal already exists!');
        }
    } else {
        alert('Please enter a valid goal!');
    }
};


// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0; //This line is setting the starting ammount of water  
document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
const updateWaterIntake = (change) => {
    // Calculate the new water intake
    const newWaterIntake = waterIntake + change;
    
    // Ensure water intake doesn't go below 0
    waterIntake = Math.max(newWaterIntake, 0);
    
    // Update the water intake display
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));
//This part is checking the water intake, and listening for click, then increasing or decreasing the ammount of water

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};
//Here is where I grabbed the progress id's from the DOM, and displayed it on the interface.

updateProgressCharts();
//Here I am calling the function

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};
/*In this line I declared a function called 'toggleTheme' which doesn't accept any perimeter, and points to the following code to be executed
which is activating a dark theme, and a light theme*/
document.querySelector('#themeToggle').addEventListener('click', toggleTheme);
/*Here the querySelector is grabbing the 'themeToggle' id, 
and the adEventListener function is listening for the click to executed the theme change*/

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
/*Here is where the meal plan is entered, and generates an alert to the user to show them that the plan has been submitted
successfully, and also declaring the function called submitMealPlan*/
