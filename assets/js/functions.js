function moveTheBlock() {
    const span1 = document.getElementById("trait1"),
        span2 = document.getElementById("trait2"),
        span3 = document.getElementById("trait3"),
        span4 = document.getElementById("trait4");

    let posBlock = 0;
    setInterval(() => {
            if(posBlock % 2 === 0) {
                span1.style.transform = "translateX(-"+((2/3)*100+"%)");
                span2.style.transform = "translateY("+((2/3)*100+"%)");
                span3.style.transform = "translateX("+((2/3)*100+"%)");
                span4.style.transform = "translateY(-"+((2/3)*100+"%)");
                posBlock ++;
            } else {
                span1.style.transform = "translateX(0%)";
                span2.style.transform = "translateY(0%)";
                span3.style.transform = "translateX(0%)";
                span4.style.transform = "translateY(0%)";
                posBlock ++;
            }
    }, 2000);
}

function createProject(array) {
    let turn = 0;
    const project = document.getElementById("project");
    const theProject = document.getElementById("theProject")
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const blockProject = document.createElement("div");
        blockProject.classList.add("projet", "projet"+(i+1));
        theProject.appendChild(blockProject);

        const lien = document.createElement("a");
        lien.href = element[1];
        blockProject.appendChild(lien);

        const explication = document.createElement("p");
        explication.classList.add("explication");
        explication.append(element[0]);
        blockProject.appendChild(explication);

        lien.style.backgroundImage = element[2];
        if((i+1)% 3 === 1) {
            turn ++;
        }
        project.style.height = (50*(turn))+"vh";
    }
}

function addProject(text, href, src) {
    let array = [text, href, src];
    arrayProject.push(array);
}