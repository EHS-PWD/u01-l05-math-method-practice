
// Unit 01 - Lab 06: Math Methods Practice - Unit Tests

function assertEqual(actual, expected, message) {
    if (actual === expected || (isNaN(actual) && isNaN(expected))) {
        console.log(`✅ PASS: ${message}`);
    } else {
        console.error(`❌ FAIL: ${message}
   Expected: ${expected}, but got: ${actual}`);
    }
}

// Tests

assertEqual(Math.ceil(41.2), 42, "Ceiling of 41.2");
assertEqual(Math.floor(29.6), 29, "Floor of 29.6");
assertEqual(Math.round(-93.5), -94, "Round -93.5");
assertEqual(Math.max(90.5, 23, -12, 78, 7), 90.5, "Max of list");
assertEqual(Math.min(90.5, 23, -12, 78, 7), -12, "Min of list");
assertEqual(Math.pow(7, 4), 2401, "7 to the power of 4");
assertEqual(Math.pow(-3, 3), -27, "-3 to the power of 3");
assertEqual(Math.sqrt(81), 9, "Square root of 81");
assertEqual(Math.round(Math.sqrt(1000)), 32, "Rounded square root of 1000");
assertEqual(isNaN(Math.sqrt(-27)), true, "Square root of -27 should be NaN");

let rand = Math.floor(Math.random() * 6) + 6;
let inRange = rand >= 6 && rand <= 11;
assertEqual(inRange, true, "Random number between 6 and 11");
