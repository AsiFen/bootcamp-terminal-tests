export default function greet(name) {
    if (typeof name === "string" && name !== "") {
        return "Hello, " + name
    }
    else if (typeof name == "number") {
        return "That is an integer, enter name please."
    }

    else {
        return "Please enter a name."
    }
}

console.log(greet(123));