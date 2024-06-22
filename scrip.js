//ANIMACION HEADER STICKY

window.addEventListener("scroll",
        (scroll)=>{

        const header = this.document.querySelector("header",); 
        const nav = this.document.querySelector("nav");
        const boton = this.document.querySelector("button");

        header.classList.toggle("sticky", this.window.scrollY > 5 );
        nav.classList.toggle("nav-scroll", this.window.scrollY > 5);
        boton.classList.toggle("btn-scroll", this.window.scrollY > 5);

        document.querySelectorAll('a').forEach((link) => {
            link.classList.toggle("link-scroll", window.scrollY > 5);
        });

    }
); 

//ANIMACION SECTIONS

window.addEventListener("scroll",
    (scroll)=>{
        document.querySelectorAll('#star').forEach((star) => {
            star.classList.toggle("trans", window.scrollY > 100);
        });
        
        document.querySelectorAll('#star-two').forEach((star2) => {
            star2.classList.toggle("transform", window.scrollY > 200);
        });

        document.querySelectorAll('#star-three').forEach((star3) => {
            star3.classList.toggle("transform-2", window.scrollY > 200);
        })
    }
); 