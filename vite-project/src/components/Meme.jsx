import React from "react"

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState("")

  // Functions for eventlisteners
  // function handleonMouseEnter(){   
  //   console.log("MouseEnter")
  // }

  // function handleonMouseOver(){
  //   console.log("MouseOver")
  // }

   // Refactor state
const [meme, setMeme] = React.useState({
  text1: "", 
  text2: "", 
  randomImage: "http://i.imgflip.com/1bij.jpg"})
const [allMemeImges, setAllMemeImages] = React.useState([])

// Get meme by Api
React.useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
  .then(res => res.json())
  .then (data => setAllMemeImages(data.data.memes))
}, [])

// Using sync
// React.useEffect(async () => {
//   const res = await fetch("https://api.imgflip.com/get_memes")
//   const data = await res.json()
//   setAllMemeImages(data.data.memes)
// }, [])

  // Adding an image to the meme generator
  function getMemeImage() {
  const randomNumber = Math.floor(Math.random() * allMemeImges.length)
  const url = allMemeImges[randomNumber].url
  setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: url

  }))
  }

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme, 
      [name]: value
    }))

  }

  
    return(
        <>
        <main>
       <div className="forms">
         <input 
         type="text" 
         placeholder="text1"
         className="form"
         name="text1"
         value={meme.text1}
         onChange={handleChange}
         />

         <input 
         type="text" 
         placeholder="text2"
         className="form"
         name="text2"
         value={meme.text2}
         onChange={handleChange}
         />
         <button 
        //  onMouseOver={handleonMouseOver}
         className="button" 
         onClick={getMemeImage}>Get a new meme image 🤣
         </button>

         {/* <button 
         className="click-me" 
         onMouseOver={handleonMouseEnter}>
          Click me!!
         </button> */}
       </div>
       
       <div>
       <img 
       src={meme.randomImage} 
       className="meme-image" 
       name="randomImage"
       />
       <h2 className="meme-text top">{meme.text1}</h2>
       <h2 className="meme-text bottom">{meme.text2}</h2>
       </div>
       </main>
        </>
    )
}