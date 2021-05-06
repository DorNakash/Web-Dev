window.onload = function () {
    const barsData = {"java-bar": 85, "cpp-bar": 70, "assembly-bar": 55, "python-bar": 35}

// Get the modal
    var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }


    /*hover progress bar */
    const progressBars = document.getElementsByClassName("progress");
    for (let i = 0; i < progressBars.length; i++) {
        progressBars[i].addEventListener("mouseover", barsFiller);
    }

    function barsFiller() {
        let barId = this.children[0].id;
        for (let i = 0; i < barsData[barId]; i++) {
            this.children[0].style.width = i.toString() + "%";
            setTimeout(null, 7000);
        }
    }

    /* make sure the text area isn't above 200 */
    document.getElementById('text-area').oninput = countChars;
    const charCounter = document.getElementById('current_chars');

    function countChars() {
        const currentLength = this.value.length;
        charCounter.innerText = currentLength.toString();

    }
        /* return to top on click */
        let returnToTopBtn = document.getElementById("return-to-top-on-click").addEventListener('click', backToTop);

        function backToTop() {
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }


}