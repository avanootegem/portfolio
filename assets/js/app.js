const html = document.querySelector("html");
const blockName = document.getElementById("blockName");
const blockBtn = document.getElementById("blockBtn");
const blockSpecial = document.getElementById("blockSpeciality");
const navbar = document.querySelector("nav");

let main_blue = "rgb(40,140,200)";
setTimeout(() => {
    blockName.style.transition = "2s";
    blockName.style.transform = "translateX(100%)";


    setTimeout(() => {
        blockBtn.style.transition = "2s";
        blockBtn.style.transform = "translateY(100%)";

        setTimeout(() => {
            blockSpecial.style.transition = "2s";
            blockSpecial.style.transform = "translateY(100%)";

            const span1 = document.getElementById("trait1"),
                span2 = document.getElementById("trait2"),
                span3 = document.getElementById("trait3"),
                span4 = document.getElementById("trait4");

            setTimeout(() => {
                span1.style.transition = "1s";
                span1.style.transform = "translateX(0)";

                span2.style.transition = "1s";
                span2.style.transform = "translateY(0)";

                span3.style.transition = "1s";
                span3.style.transform = "translateX(0)";

                span4.style.transition = "1s";
                span4.style.transform = "translateY(0)";
            }, 1200);

            setTimeout(() => {
                const navChilds = navbar.childNodes;
                let i = 0;
                let iInterval = setInterval(() => {
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
                            let jInterval = setInterval(() => {
                                if (j % 2 === 1) {
                                    const li = ulChilds[j];
                                    li.style.transition = "1s";
                                    li.style.opacity = "1";
                                }
                                j++;

                                if (j >= ulChilds.length) {
                                    clearInterval(jInterval);
                                }
                            }, 200);
                            i++;
                            break;

                        default:
                            i++
                            break;
                    }

                    if (i >= navChilds.length) {
                        clearInterval(iInterval);
                    }
                }, 250);
                navbar.style.transition = "1s";
                navbar.style.borderRightColor = main_blue;
                moveTheBlock();
                setTimeout(() => {
                    html.style.overflowY = "scroll";
                }, 2000);
            }, 1000);
        }, 500);
    }, 1000);
}, 1000);




