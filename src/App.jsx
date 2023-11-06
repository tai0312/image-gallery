import { useState } from "react";

export default function App() {
  const imagesobj = [
    {src:"images/pic1.jpg",alt:"Closeup of a human eye"},
    {src:"images/pic2.jpg",alt:"Rock that looks like a wave"},
    {src:"images/pic3.jpg",alt:"Purple and white pansies"},
    {src:"images/pic4.jpg",alt:"Section of wall from a pharoah's tomb"},
    {src:"images/pic5.jpg",alt:"Large moth on a leaf"}
  ];
  const [displayImg,setDisplayImg] = useState(imagesobj[0]);
  const [bgColor,setBgColor] = useState("Darken");
  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={displayImg.src}
          alt={displayImg.alt}
        />
        <div className="overlay" style={{'backgroundColor': bgColor == "Darken" ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)'}}></div>
        <button className="dark" 
        onClick={()=>{
          if(bgColor == "Darken"){
            setBgColor("Lighten");
          } else {
            setBgColor("Darken")
          }
        }}>{bgColor}</button>
      </div>
      <div className="thumb-bar">
        {imagesobj.map((url) => {
          return (
            <img key={url.src} src={url.src} alt={url.alt} 
            onClick={()=>{setDisplayImg(url)}}/>
          );
        })}
      </div>
    </>
  );
}