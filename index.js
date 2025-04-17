// let msg: "Hello" = "Hello";
// msg = "Hello World";

var port3000 = 3000;
var port3001 = 3001;

function startServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log(
            "Server started on ".concat(protocol, "://server:").concat(port)
        );
    } else {
        console.error("Invalid port");
    }
    return "Server started";
}

startServer("https", 3001);

function createAnimation(id, animName, timingFunc, duration, iterCount) {
    if (timingFunc === void 0) {
        timingFunc = "ease";
    }
    // const elem = document.getElementById(`#${id}`) as HTMLElement;
    // if (elem) {
    console.log(
        ""
            .concat(animName, " ")
            .concat(timingFunc, " ")
            .concat(duration, " ")
            .concat(iterCount)
    );
    // // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
    // }
}

createAnimation("id", "fade", "ease", 3, "infinite");
