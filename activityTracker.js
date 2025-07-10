// 1. Create Your Weekly Data
const myWeek = [
    { day: "Monday", activity: "Jogging", category: "physical", hoursSpent: 1, enjoyment: 8, timeOfDay: "morning" },
    { day: "Tuesday", activity: "Painting", category: "creative", hoursSpent: 2, enjoyment: 9, timeOfDay: "afternoon" },
    { day: "Wednesday", activity: "Reading", category: "creative", hoursSpent: 1.5, enjoyment: 7, timeOfDay: "evening" },
    { day: "Thursday", activity: "Yoga", category: "physical", hoursSpent: 1, enjoyment: 6, timeOfDay: "morning" },
    { day: "Friday", activity: "Socializing", category: "social", hoursSpent: 3, enjoyment: 10, timeOfDay: "evening" },
    { day: "Saturday", activity: "Hiking", category: "physical", hoursSpent: 4, enjoyment: 9, timeOfDay: "afternoon" },
    { day: "Sunday", activity: "Cooking", category: "creative", hoursSpent: 2, enjoyment: 8, timeOfDay: "afternoon" },
];

// 2. Make Predictions
// Highest enjoyment: socializing
// Dominant category: physical
// Patterns: more activities in the afternoon

// 3. Write Analysis Functions
// Calculates total hours spent on physical activity
const totalPhysicalHours = myWeek
    .filter(activity => activity.category === "physical")
    .reduce((total, activity) => total + activity.hoursSpent, 0);
console.log("Total hours spent on physical activities:", totalPhysicalHours);

// Calculates average enjoyment by time of day
const averageEnjoymentByTime = (time) => {
    const filteredActivities = myWeek.filter(activity => activity.timeOfDay === time);
    const totalEnjoyment = filteredActivities.reduce((total, activity) => total + activity.enjoyment, 0);
    return filteredActivities.length > 0 ? totalEnjoyment / filteredActivities.length : 0;
};
console.log("Average enjoyment in the morning:", averageEnjoymentByTime("morning").toFixed(1));
console.log("Average enjoyment in the afternoon:", averageEnjoymentByTime("afternoon").toFixed(1));
console.log("Average enjoyment in the evening:", averageEnjoymentByTime("evening").toFixed(1));



// 4. Create a Custom Higher-Order Function
function filterByCondition(testFn) {
    return myWeek.filter(testFn);
}
// Example usage of higher-order func
const lowHoursHighEnjoymentActs = filterByCondition(act => act.hoursSpent <= 1 && act.enjoyment >= 8);
console.log("Filtered activities (low hours, high enjoyment):", lowHoursHighEnjoymentActs);