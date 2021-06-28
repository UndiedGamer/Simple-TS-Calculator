import readline from 'readline'

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("What operation do you want to do: \nType 'add' or 'subtract' or 'divide' or 'multiply'\n", function (Input) {
	if (Input.toLowerCase() === "add" || Input.toLowerCase() === "a") {
		rl.question("Enter first number: ", function (num1) {
			rl.question("Enter second number: ", function (num2) {
				const sum = Number(num1) + Number(num2);
				console.log(`The sum of ${num1} and ${num2} is ${sum}`)
				process.exit(0);
			})
		})
	}
	else if (Input.toLowerCase() === 'subtract' || Input.toLowerCase() === 's') {
		rl.question("Enter first number: ", function (num1) {
			rl.question("Enter second number: ", function (num2) {
				const diff = Number(num1) - Number(num2);
				console.log(`The difference of ${num1} and ${num2} is ${diff}`)
				process.exit(0);
			})
		})
	}
	else if (Input.toLowerCase() === 'divide' || Input.toLowerCase() === 'd') {
		rl.question("Enter first number: ", function (num1) {
			rl.question("Enter second number: ", function (num2) {
				const quot = Number(num1) / Number(num2);
				const remain = Number(num1) % Number(num2);
				console.log(`The quotient of ${num1} and ${num2} is ${quot} and remainder is ${remain}`)
				process.exit(0);
			})
		})
	}
	else if (Input.toLowerCase() === 'multiply' || Input.toLowerCase() === 'm') {
		rl.question("Enter first number: ", function (num1) {
			rl.question("Enter second number: ", function (num2) {
				const prod = Number(num1) * Number(num2);
				console.log(`The product of ${num1} and ${num2} is ${prod}`)
				process.exit(0);
			})
		})
	}
})