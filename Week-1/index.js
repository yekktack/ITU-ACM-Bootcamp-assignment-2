import {tester} from "./test_common.js";

import test1 from "./1-merhaba/.tester.js";
import fuzz_test2 from "./2-ortalama/.tester.js";
import fuzz_test3 from "./3-tip-donusumleri/.tester.js";
import fuzz_test4 from "./4-obje-istatistigi/.tester.js";
import test5 from "./5-promise/.tester.js";
import fuzz_test6 from "./6-kutuphane/.tester.ts";

(async () => {
if (!test1()) {
    console.error("Test 1 geçmedi");
    return;
}
console.log("==== Test 1 geçti ====");

if (!tester(fuzz_test2)) {
    console.error("Test 2 geçmedi");
    return;
}
console.log("==== Test 2 geçti ====");

if (!tester(fuzz_test3)) {
    console.error("Test 3 geçmedi");
    return;
}
console.log("==== Test 3 geçti ====");

if (!tester(fuzz_test4)) {
    console.error("Test 4 geçmedi");
    return;
}
console.log("==== Test 4 geçti ====");

await test5().catch(()=>console.error("Test 5 geçmedi"));
console.log("==== Test 5 geçti ====");

if (!tester(fuzz_test6)) {
    console.error("Test 6 geçmedi");
    return;
}
console.log("==== Test 6 geçti ====");

})();
