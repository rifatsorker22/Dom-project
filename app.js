// onload handeler called
window.onload=()=>{

main();
}
// Rendom rgb color genaretor 
function main(){
    const root  = document.getElementById("root")
    const btn = document.getElementById("fuck")
    const output = document.getElementById('output')

    btn.addEventListener("click",function(){
     const rgbColor=rgbcolorGenaretor();
     root.style.backgroundColor=rgbColor
      output.value=rgbColor
    
})
 }
function rgbcolorGenaretor(){
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)

    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}


