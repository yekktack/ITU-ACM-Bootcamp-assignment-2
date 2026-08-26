export function random_string(len) {
    let str = "";

    for (let i = 0; i < len; i++) {
        str += String.fromCharCode(
            Math.floor(
                'a'.charCodeAt() +
                Math.random() * ('z'.charCodeAt() - 'a'.charCodeAt())));
    }

    return str;
}

export function array_check(a1, a2) {
    return a1.every(
        (e, i) => {
            if (
                (Array.isArray(e) && !Array.isArray(a2[i]))
                || (!Array.isArray(e) && Array.isArray(a2[i]))) {
                return false;
            }
            if (Array.isArray(e) && !array_check(e, a2[i])) {
                return false;
            }
            return e == a2[i];
    });
}

export function object_check(obj1, obj2) {
    for (const p in obj1) {
        if (!Object.hasOwn(obj2, p))
            return false;
        if (obj1[p] !== obj2[p])
            return false;
    }
    return true;
}

export function tester(func) {
    let trial_count = Math.floor(Math.random()*100+50);

    for (let i = 0; i < trial_count; i++) {
        if (!func()) {
            return false;
        }
    }

    console.log(`Checked ${trial_count} times`);
    return true;
}
