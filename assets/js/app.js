const blockName = document.getElementById("blockName");
const navbar = document.querySelector("nav");

let main_blue = "rgb(40,140,200)";
setTimeout(() => {
    blockName.style.transition = "2s";
    blockName.style.transform = "translateX(100%)";

    setTimeout(() => {
        const navChilds = navbar.childNodes;
        let i = 0;
        setInterval(() => {
            const element = navChilds[i];
            switch (i) {
                case 1:
                    element.style.transition = "1s";
                    element.style.opacity = "1";
                    i++;
                    break;

                case 3:
                    const ulChilds = element.childNodes;
                    let j = 0;
                    setInterval(() => {
                        if (j % 2 === 1) {
                            const li = ulChilds[j];
                            li.style.transition = "1s";
                            li.style.opacity = "1";
                        }
                        j ++;

                        if (j >= ulChilds.length) {
                            clearInterval();
                        }
                    }, 200);
                    i++;
                    break;

                default:
                    i++
                    break;
            }

            if (i >= navChilds.length) {
                clearInterval();
            }
        }, 500);
        navbar.style.transition = "1s";
        navbar.style.borderRightColor = main_blue;
    }, 1000);
}, 1000);