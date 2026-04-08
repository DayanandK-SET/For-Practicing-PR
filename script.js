let count = 0;

function showGreeting() {
    const name = document.getElementById("nameInput").value;
    const greeting = document.getElementById("greeting");

    if (name.trim() === "") {
        greeting.innerText = "Please enter a name!";
    } else {
        greeting.innerText = "Hello, " + name + " 👋";
    }
}

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function updateCounter() {
    document.getElementById("count").innerText = count;
}