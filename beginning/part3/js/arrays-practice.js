//STEP 1
var favoriteMovies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Parasite"];
console.log(favoriteMovies[1]); // Displays "The Matrix"
document.write(favoriteMovies[1] + "<br>"); // Writes "The Matrix"

//STEP 2
var movies = new Array(5);
movies[0] = "Inception";
movies[1] = "The Matrix";
movies[2] = "Interstellar";
movies[3] = "The Dark Knight";
movies[4] = "Parasite";
console.log(movies[0]); // Displays "Inception"
document.write(movies[0] + "<br>"); // Writes "Inception"


//STEP 3
movies.splice(2, 0, "Pulp Fiction"); // Adds "Pulp Fiction" at the 3rd position
console.log(movies.length); // Displays 6
document.write("Array length: " + movies.length + "<br>"); // Writes "Array length: 6"


//STEP 4
movies.splice(2, 0, "Pulp Fiction"); // Adds "Pulp Fiction" at the 3rd position
console.log(movies.length); // Displays 6
document.write("Array length: " + movies.length + "<br>"); // Writes "Array length: 6"

//STEP 5
var movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Parasite", "Pulp Fiction", "Fight Club"];
for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
    document.write(movies[i] + "<br>"); // Writes each movie
}


//STEP 6
for (var index in movies) {
    console.log(movies[index]);
    document.write(movies[index] + "<br>"); // Writes each movie
}


//STEP 7
movies.sort();
for (var index in movies) {
    console.log(movies[index]);
    document.write(movies[index] + "<br>"); // Writes each movie
}


//STEP 8
var leastFavMovies = ["Movie A", "Movie B", "Movie C"];
document.write("Movies I like:<br>");
console.log("Movies I like:");
for (var index in movies) {
    console.log(movies[index]);
    document.write(movies[index] + "<br>"); // Writes each movie
}
document.write("Movies I regret watching:<br>");
console.log("Movies I regret watching:");
for (var index in leastFavMovies) {
    console.log(leastFavMovies[index]);
    document.write(leastFavMovies[index] + "<br>"); // Writes each least favorite movie
}


//STEP 9
var allMovies = movies.concat(leastFavMovies);
allMovies.sort().reverse();
console.log(allMovies);
document.write("All movies in reverse sorted order:<br>" + allMovies.join("<br>") + "<br>"); // Writes all movies in reverse sorted order


//STEP 10
console.log(allMovies[allMovies.length - 1]); // Displays the last item
document.write("The last movie in the array: " + allMovies[allMovies.length - 1] + "<br>"); // Writes the last item

