var socialIcons = document.querySelectorAll('.social-bar div'); // for social icons scaling on hover

/*
========================================================
Loop through each .social-bar div to toggle .scale on hover functionality
========================================================
*/
for (var i = 0; i < socialIcons.length; i++) {
        // Add .scale on hover
        socialIcons[i].addEventListener("mouseover", function(){
                this.classList.add("scale");
        });

        // Remove .scale off hover
        socialIcons[i].addEventListener("mouseout", function(){
                this.classList.remove("scale");
        });
}
