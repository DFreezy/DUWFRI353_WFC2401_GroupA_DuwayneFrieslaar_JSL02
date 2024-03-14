const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();



const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value.trim(); // Trim whitespace
    const workoutList = document.querySelector('#workoutList');

    // Check if the workout input is not empty
    if (workoutInput !== '') {
        // Check if the workout routine already exists in the list
        if (!Array.from(workoutList.children).some(item => item.textContent === workoutInput)) {
            const newWorkout = document.createElement('li');
            newWorkout.textContent = workoutInput;
            workoutList.appendChild(newWorkout);
        } else {
            alert('Workout routine already exists!'); // Display alert if workout routine already exists
        }
    } else {
        alert('Please enter a valid workout routine!'); // Display alert if input is empty
    }
};
document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim(); // Trim whitespace
    const goalList = document.querySelector('#goalList');

    // Check if the goal input is not empty
    if (goalInput !== '') {
        // Check if the goal already exists in the list
        if (!Array.from(goalList.children).some(item => item.textContent === goalInput)) {
            const newGoal = document.createElement('li');
            newGoal.textContent = goalInput;
            goalList.appendChild(newGoal);
        } else {
            alert('Goal already exists!'); // Display alert if goal already exists
        }
    } else {
        alert('Please enter a valid goal!'); // Display alert if input is empty
    }
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
