init();

async function init() {

  // if there is no workout plan data to work from only give the user the option to create a new workout plan.

  // if there is a workout plan in the database, allow the user to continue/update the last workout submitted.

  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}