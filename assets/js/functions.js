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
    const project = document.getElementById("project");
    const theProject = document.getElementById("theProject")
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const blockProject = document.createElement("div");
        blockProject.classList.add("projet", "projet"+(i+1));
        theProject.appendChild(blockProject);

        const explication = document.createElement("div");
        explication.classList.add("explication");
        explication.append(element[0]);
        blockProject.appendChild(explication);

        const lien = document.createElement("a");
        lien.href = element[1];
        blockProject.appendChild(lien);

        const image = document.createElement("img");
        image.src = element[2];
        image.alt = element[3];
        lien.appendChild(image)
        
        project.style.height = (40*(i+1))+"vh";
    }
}

function addProject(text, href, src, name) {
    let array = [text, href, src, name];
    arrayProject.push(array);
}