const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
const colorOption = Array.from(document.querySelectorAll(".color-option"));
const modeBtn = document.querySelector("#mode-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const fileInput = document.querySelector("#file");
const textInput = document.querySelector("#text");
const saveBtn = document.querySelector("#save-btn");
const serifBtn = document.querySelector("#serif-btn");
const sansSerifBtn = document.querySelector("#sans-serif-btn");
const impactBtn = document.querySelector("#impact-btn");
const fontRange = document.querySelector("#font-size")
const labelFontSize = document.querySelector("#font-size-label");
const labelPainterSize = document.querySelector("#painter-size-label");


canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let fontSize = 48;
let isPainting = false;
let isFilling = false;
let textFont = "serif"
let selectedButton = 0;

function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);

};

function onMouseDown(evnet){
    isPainting = true;
};

function onMouseUp(event){
    isPainting = false;
    ctx.beginPath();
};

function onLineWidthChange(event){
    ctx.lineWidth = lineWidth.value;
    labelPainterSize.innerText = `Painter Size : ${lineWidth.value}`
}

function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
};

function onColorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
};

function onModeClick(event){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
};

function onCanvasClick(event){
    if(isFilling){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
};

function onDestroyClick(event){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

function onEraserClick(event){
    ctx.strokeStyle = 'white';
    isFilling = false;
    modeBtn.innerText = "Fill";
}

function onFileChange(event){
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function(){
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        fileInput.value = null;
    }
}

function onDoubleClick(event){
    const text= textInput.value;
    if(text !== ""){
        ctx.save();
        ctx.lineWidth = 2;
        ctx.font = `${fontSize}px ${textFont}`
        ctx.strokeText(text, event.offsetX, event.offsetY);
        ctx.restore()
    }
}

function onSaveClick(event){
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDownload.png";
    a.click();
}

function onSerifClick(event){
    textFont = event.target.dataset['font'];
    selectedButton = 0;
}

function onSanSerifClick(event){
    textFont = event.target.dataset['font'];
    selectedButton = 1;
}

function onImpactClick(event){
    textFont = event.target.dataset['font'];
    selectedButton = 2;
}

function onFontChange(event){
    fontSize = event.target.value;
    labelFontSize.innerText = `Font Size : ${fontSize}`;
}

function onSelectBtn(){
    switch(selectedButton){
        case 0:
            serifBtn.style.backgroundColor = 'red';
            sansSerifBtn.style.backgroundColor = 'royalblue';
            impactBtn.style.backgroundColor = 'royalblue';
            break;
        case 1:
            serifBtn.style.backgroundColor = 'royalblue';
            sansSerifBtn.style.backgroundColor = 'red';
            impactBtn.style.backgroundColor = 'royalblue';
            break;
        case 2:
            serifBtn.style.backgroundColor = 'royalblue';
            sansSerifBtn.style.backgroundColor = 'royalblue';
            impactBtn.style.backgroundColor = 'red';
            break;    
    }
}

canvas,addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp);
canvas.addEventListener("click", onCanvasClick);


lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOption.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);

destroyBtn.addEventListener("click", onDestroyClick);

eraserBtn.addEventListener("click", onEraserClick);

fileInput.addEventListener("change", onFileChange);

saveBtn.addEventListener("click", onSaveClick);

serifBtn.addEventListener("click", onSerifClick);
serifBtn.addEventListener("click", onSelectBtn);

sansSerifBtn.addEventListener("click", onSanSerifClick);
sansSerifBtn.addEventListener("click", onSelectBtn);

impactBtn.addEventListener("click", onImpactClick);
impactBtn.addEventListener("click", onSelectBtn);

fontRange.addEventListener("change", onFontChange);
