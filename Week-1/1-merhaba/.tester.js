import { strict as assert } from 'node:assert';

import {karsilama, isim} from "./merhaba.js";

export default function test1() {
    assert(typeof(karsilama) == "string");
    assert(karsilama !== "");

    assert(typeof(isim) == "string");
    assert(isim !== "");

    if (karsilama === "..." || isim === "...")
        return false;

    console.log(karsilama, isim);

    return true;
}
