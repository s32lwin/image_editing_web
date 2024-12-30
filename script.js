// DECLARATION
const fileInput = document.querySelector(".file-input"),
filtweOptions = document.querySelectorAll(".filter button"),
filterName = document.querySelector(".filter-info .name"),
filterValue = document.querySelector(".filter-info .value"),
filterslider = document.querySelector(".slider input"),
rotateOptions = document.querySelector(".rotate button"),
previewImg = document.querySelector(".preview-image"),
resetFilterBtn = document.querySelector(".rest fliter"),
chooseImgBtn = document.querySelector(".choose-image"),
saveImgbtm = document.querySelector(".save-img");

let brightness=100, saturation=100, inversion=0, grayscale=0;
let rotate=0, flipHorizontal=1, flipVertical=1;

const loadImage = () => {
    let file=fileInput.files[0];
    //console.log(file);
    if(!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", ()=> {
        document.querySelector(".container").classList.remove("disable");
    });
}

filtweOptions.forEach(Option => {
    Option.addEventListener("click", ()=>{
        document.querySelector(".filter .active").classList.remove("active");
        Option.classList.add("active");
        filterName.innerText =Option.ariaInvalid
    });
});

fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());
//chooseImgBtn.addEventListener("click", () => fileInput.click());