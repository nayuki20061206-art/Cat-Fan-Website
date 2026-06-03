function checkAnswer(answer) {

    let result =
        document.getElementById("result");

    if (answer === "D") {

        result.textContent =
            "Correct! Johnny is 11 years old!";

    }

    else {

        result.textContent =
            "Incorrect. Try Again!";
    }
}
