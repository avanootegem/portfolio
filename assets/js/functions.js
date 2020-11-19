function moveTheBlock() {
    const span1 = document.getElementById("trait1"),
        span2 = document.getElementById("trait2"),
        span3 = document.getElementById("trait3"),
        span4 = document.getElementById("trait4");

    console.log(span1);
    let posBlock = 0;
    let moveBlock = setInterval(() => {
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