let lights = ["green", "yellow", "red"];

window.onload = () => {
    go();
}

let light = (color) => {

    let lights = document.querySelectorAll("#lightBox span");
    lights.forEach(lightT => {
        if (lightT.classList.contains(color)) {
            lightT.classList.add("light");
        } else {
            lightT.classList.remove("light");
        }
    });
}


let go = () => {
    light("green");
    setTimeout(() => {
        // wait();
        light("yellow");
        setTimeout(() => {
            light("red");
            setTimeout(() => {
                go();
            }, 1000);
        }, 2000);
    }, 3000);
}

// let go = () => {
//     light("green");
//     setTimeout(() => {
//         wait();
//     }, 3000);
// }
// let wait = () => {
//     light("yellow");
//     setTimeout(() => {
//         stop();
//     }, 2000);
// }
// let stop = () => {
//     light("red");
//     setTimeout(() => {
//         go();
//     }, 1000);
// }