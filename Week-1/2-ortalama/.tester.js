import { ortalama_al } from "./ortalama.js";

const length = 1e5;
const range = 1e5;

export default function fuzz_test2() {
    let array = [];
    let sum = 0;
    for (let i = 0; i < length; i++) {
        let new_number = Math.floor(Math.random()*range);
        sum += new_number;
        array.push(new_number);
    }
    let answer = ortalama_al(array);
    if (answer !== (sum/length)) {
        console.error("Trial Error");
        console.error("Length:", length, "range:", range);
        console.error("Array:", array);
        console.error("Your answer:", answer);
        console.error("Correct Answer:", sum/length);
        return false;
    }
    return true;
}
