// Question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
}

// Question 2

let heading = document.querySelector("H3");

heading.innerHTML = "Updated Heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.className += "subheading";

// Question 5

let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) { // looping through all the elements in "paragraphs"
    paragraphs[i].style.color = "red";
}

// Question 6

let resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function catLooper(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

catLooper(cats);

// Question 8

function createCats(cats) {

    let catsInWaiting = [];

    for (let i = 0; i < cats.length; i++) {
        if (cats[i].age) {
            catsInWaiting[i] = `<div><h5>${cats[i].name}</h5><p>${cats[i].age}</p></div>`
        } else {
            catsInWaiting[i] = `<div><h5>${cats[i].name}</h5><p>Age unknown</p></div>`
        }
    }
    return catsInWaiting;
}

for (let i =0; i < cats.length; i++) {
    document.querySelector(".cat-container").innerHTML += createCats(cats)[i];
}
