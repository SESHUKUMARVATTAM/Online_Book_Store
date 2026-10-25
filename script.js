
function generateRoadmap() {
    let goal = document.querySelector('input[name="goal"]:checked');
    let level = document.querySelector('input[name="level"]:checked');
    let budget = document.querySelector('input[name="budget"]:checked');
    let result = document.getElementById("result");

    if (!goal || !level || !budget) {
        result.innerHTML = "<p>Please select all the options.</p>";
        return;
    }

    let books = [];

    if (goal.value === "programming") {
        books = ["Python Crash Course", "Automate the Boring Stuff with Python"];
    } else if (goal.value === "web") {
        books = ["HTML and CSS", "JavaScript: The Definitive Guide"];
    } else if (goal.value === "ai") {
        books = ["Hands-On Machine Learning", "Deep Learning"];
    } else if (goal.value === "dsa") {
        books = ["Data Structures and Algorithms", "Cracking the Coding Interview"];
    } else if (goal.value === "academic") {
        books = ["Data Structures Using Python", "Computer Organization"];
    }

    let output = "<h2>Your AI Book Roadmap</h2>";
    output += "<p><b>Goal:</b> " + goal.value + "</p>";
    output += "<p><b>Level:</b> " + level.value + "</p>";
    output += "<p><b>Budget:</b> " + budget.value + "</p>";
    output += "<h3>Recommended Books</h3>";

    for (let i = 0; i < books.length; i++) {
        output += `
            <div class="book">
                <b>Step ${i + 1}:</b> ${books[i]}
                <br><br>
                <button onclick="alert('Book added to purchase list!')">
                    🛒 Purchase Book
                </button>
            </div>
        `;
    }

    output += `
        <p><b>AI Suggestion:</b>
        Follow the books in the given order to build
        your skills step by step.</p>
    `;

    result.innerHTML = output;
}


// Login validation
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-box form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.querySelector(
                'input[name="uname"]'
            ).value.trim();

            let password = document.querySelector(
                'input[name="pwd"]'
            ).value;

            if (username === "Hema" && password === "12345") {
                alert("Login successful! Welcome, " + username + "!");
                window.location.href = "Home.html";
            } else {
                alert("Invalid username or password!");
            }
        });
    }
});
