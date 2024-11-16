function call_for_name(name, surname) {
    if (surname === void 0) { surname = ""; }
    return "".concat(name, " ").concat(surname);
}
function main() {
    var my_name = call_for_name("Iglésio");
    console.log("Hi! My name is ".concat(my_name));
}
main();
