import { random_string, array_check } from "../test_common.js";

import { sayilari_cevir } from "./tip_donusumu.js";

const LENGTH_CONSTRAINT = 10;
const RANGE_CONSTRAINT = 1e5;
const UNCONVERTABLE_PERCENTAGE = 30;

export default function fuzz_test() {
    let number_array = [];
    let string_array = [];
    for (let i = 0; i < LENGTH_CONSTRAINT; i++) {
        if (Math.random()*100 < UNCONVERTABLE_PERCENTAGE) {
            number_array.push(0);
            string_array.push(random_string(5));
        } else {
            let new_number = Math.floor(Math.random()*RANGE_CONSTRAINT);
            number_array.push(new_number);
            string_array.push(String(new_number));
        }
    }
    let answer = sayilari_cevir(string_array);
    if (!array_check(answer, number_array)) {
        console.error("Trial Error");
        console.error("String Array:", string_array);
        console.error("Number Array:", string_array);
        console.error("Your answer:", answer);
        return false;
    }
    return true;
}
