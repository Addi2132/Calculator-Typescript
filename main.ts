import inquirer from "inquirer";

const calculator = async () => {
    let calculatorInput = await inquirer.prompt([
        {
            type: "number",
            name: "fnumber",
            message: "Please enter the first number...",
        },
        {
            type: "number",
            name: "lnumber",
            message: "Please enter the second number...",
        },
        {
            type: "list",
            name: "operator",
            message: "Which operations do you want to perform?",
            choices: [
                {
                    name: "addition (+)",
                    value: "add",
                },
                {
                    name: "subtract (-)",
                    value: "sub",
                },
                {
                    name: "multiply (*)",
                    value: "mult",
                },
                {
                    name: "divide (/)",
                    value: "div",
                },
            ],
        },
    ]);

    if (calculatorInput.operator === "add") {
        console.log(calculatorInput.fnumber + calculatorInput.lnumber);
    } else if (calculatorInput.operator === "sub") {
        console.log(calculatorInput.fnumber - calculatorInput.lnumber);
    } else if (calculatorInput.operator === "mult") {
        console.log(calculatorInput.fnumber * calculatorInput.lnumber);
    } else if (calculatorInput.operator === "div") {
        console.log(calculatorInput.fnumber / calculatorInput.lnumber);
    } else {
        console.log("Invalid operator");
    }
};

const runCalculator = async () => {
    let continueInput;
    do {
        await calculator();
        continueInput = await inquirer.prompt([
            {
                type: "confirm",
                name: "continue",
                message: "Do you want to perform another calculation?",
            },
        ]);
        if (!continueInput.continue) {
            console.log("Goodbye!");
        }
    } while (continueInput.continue);
};

runCalculator();

