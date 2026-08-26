import { random_string, object_check } from "../test_common.js"
import { istatistik } from "./obje_istatistigi.js";

const LENGTH = Math.floor(Math.random()*100);
const STRING_PERCENTAGE = 30;
const NUMBER_PERCENTAGE = 50;
const OBJECT_PERCENTAGE = 20;

export default function fuzz_test4() {
    let object = [];
    let str = 0, num = 0, obj = 0;

    for (let i = 0; i < LENGTH; i++) {
        let rnd = Math.floor(Math.random()*100);

        if (rnd <= STRING_PERCENTAGE) {
            object.push([random_string(5), random_string(6)]);
            str++;
        } else if (rnd <= NUMBER_PERCENTAGE) {
            object.push([random_string(5), Math.floor(Math.random()*1000)]);
            num++;
        } else {
            object.push([random_string(5), {}]);
            obj++;
        }
    }

    let correct_answer = {
         field_sayisi: LENGTH,
         string_field_sayisi: str,
         number_field_sayisi: num,
         object_field_sayisi: obj,
    };

    let object_object = Object.fromEntries(object);
    let answer = istatistik(object_object);

    if (!object_check(correct_answer, answer)) {
        console.error("Trial Error");
        console.error("Correct Answer:", correct_answer);
        console.error("Your Answer:", answer);
        console.error("Input Object:", object_object);
        return false;
    }

    return true;
}
