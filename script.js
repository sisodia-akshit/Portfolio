
document.addEventListener("DOMContentLoaded", function (event) {
    var cursor = document.querySelector(".cursor");
    var logo = document.querySelector(".logo");
    var logoContainer = document.querySelector(".logoContainer");
    var links = document.querySelector(".headerLinks");
    const socialLink1 = document.getElementById('socialLink1');
    const socialLink2 = document.getElementById('socialLink2');
    const socialLink3 = document.getElementById('socialLink3');

    const name = document.querySelector(".name");
    const homeQ = document.querySelector(".homeQ");
    const aboutTop = document.querySelector(".aboutTop");
    const aboutMain = document.querySelector(".aboutMain");
    const project = document.querySelectorAll(".projectLeft");
    // const langLogo = document.querySelectorAll(".langLogo");


    var initCursor = false;

    logo.addEventListener('mouseover', () => {
        cursor.classList.add("cursor--logo");
        logo.setAttribute('style', 'background-color:rgb(230, 88, 60);')
    })
    logo.addEventListener("mouseout", function () {
        cursor.classList.remove("cursor--logo");
        logo.setAttribute('style', '')
    });
    logoContainer.addEventListener('mouseover', () => {
        cursor.classList.add("cursor--logo");
        logo.setAttribute('style', 'background-color:rgb(230, 88, 60);')
    })
    logoContainer.addEventListener("mouseout", function () {
        cursor.classList.remove("cursor--logo");
        logo.setAttribute('style', '')
    });

    links.addEventListener("mouseover", function () {
        cursor.classList.add("cursor--link");
        document.querySelector(".about").setAttribute('style', 'color:rgb(230, 88, 60);')
        document.querySelector(".skills").setAttribute('style', 'color:rgb(230, 88, 60);')
        document.querySelector(".projects").setAttribute('style', 'color:rgb(230, 88, 60);')

    });
    links.addEventListener("mouseout", function () {
        cursor.classList.remove("cursor--link");
        document.querySelector(".about").setAttribute('style', '')
        document.querySelector(".skills").setAttribute('style', '')
        document.querySelector(".projects").setAttribute('style', '')
    });

    //socialLink Hover move
    socialLink1.addEventListener('mousemove', (e) => {
        document.getElementById('github').setAttribute('style', `top:${e.clientY}px;left:${e.clientX}px;color:rgb(230, 88, 60);`)
    })
    socialLink1.addEventListener('mouseout', (e) => {
        document.getElementById('github').setAttribute('style', "")
    })
    socialLink2.addEventListener('mousemove', (e) => {
        document.getElementById('linkedin').setAttribute('style', `top:${e.clientY}px;left:${e.clientX}px;color:rgb(230, 88, 60);`)
    })
    socialLink2.addEventListener('mouseout', (e) => {
        document.getElementById('linkedin').setAttribute('style', "")
    })
    socialLink3.addEventListener('mousemove', (e) => {
        document.getElementById('instagram').setAttribute('style', `top:${e.clientY}px;left:${e.clientX}px;color:rgb(230, 88, 60);`)
    })
    socialLink3.addEventListener('mouseout', (e) => {
        document.getElementById('instagram').setAttribute('style', "")
    })

    // home 
    name.addEventListener('mousemove', (e) => {
        cursor.classList.add("cursor--home");
        name.setAttribute('style', `color:rgb(230, 88, 60);`)
    })
    name.addEventListener('mouseout', (e) => {
        cursor.classList.remove("cursor--home");
        name.setAttribute('style', "")
    })
    homeQ.addEventListener('mousemove', (e) => {
        cursor.classList.add("cursor--home");
        // homeQ.setAttribute('style',`color:rgb(230, 88, 60);`)
    })
    homeQ.addEventListener('mouseout', (e) => {
        cursor.classList.remove("cursor--home");
        // homeQ.setAttribute('style',"")
    })
    // about 
    aboutTop.addEventListener('mousemove', (e) => {
        cursor.classList.add("cursor--home");
        aboutTop.setAttribute('style', `color:rgb(230, 88, 60);`)
    })
    aboutTop.addEventListener('mouseout', (e) => {
        cursor.classList.remove("cursor--home");
        aboutTop.setAttribute('style', "")
    })
    aboutMain.addEventListener('mousemove', (e) => {
        cursor.classList.add("cursor--home");
        // homeQ.setAttribute('style',`color:rgb(230, 88, 60);`)
    })
    aboutMain.addEventListener('mouseout', (e) => {
        cursor.classList.remove("cursor--home");
        // homeQ.setAttribute('style',"")
    })

    for(let i = 0; i<project.length;i++){
        project[i].addEventListener('mousemove', (e) => {
            cursor.classList.add("cursor--logo");
            // homeQ.setAttribute('style',`color:rgb(230, 88, 60);`)
        })
        project[i].addEventListener('mouseout', (e) => {
            cursor.classList.remove("cursor--logo");
            // homeQ.setAttribute('style',"")
        })        
    }
    // for(let i = 0; i<langLogo.length;i++){
    //     langLogo[i].addEventListener('mousemove', (e) => {
    //         cursor.classList.add("cursor--logo");
    //         // homeQ.setAttribute('style',`color:rgb(230, 88, 60);`)
    //     })
    //     langLogo[i].addEventListener('mouseout', (e) => {
    //         cursor.classList.remove("cursor--logo");
    //         // homeQ.setAttribute('style',"")
    //     })        
    // }



    window.onmousemove = function (e) {
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        if (!initCursor) {
            // cursor.style.opacity = 1;
            TweenLite.to(cursor, 0.3, {
                opacity: 1
            });
            initCursor = true;
        }

        TweenLite.to(cursor, 0, {
            top: mouseY + "px",
            left: mouseX + "px"
        });
    };

    window.onmouseout = function (e) {
        TweenLite.to(cursor, 0.3, {
            opacity: 0
        });
        initCursor = false;
    };

});
