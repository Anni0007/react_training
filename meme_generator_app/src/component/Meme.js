import { useEffect, useState } from "react"
// import memesData from "../memeData.js"

export default function Meme() {
    const [meme,setMeme] = useState({
        topText: "",
        bottomText:"",
        memeImage:"https://static.india.com/wp-content/uploads/2019/11/gdp-growth-rate-dip-memes-main.jpg?impolicy=Medium_Widthonly&w=700&h=467%20widht="

    })
    const [allMemeImage, setAllMemeImage] = useState([])

    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data =>setAllMemeImage(data.data.memes))
            console.log("data1", allMemeImage)

        // async function getmeme(){ 
        //     const res =  await fetch("https://api.imgflip.com/get_memes")
        //     const data = await res.json() 
        //     setAllMemeImage(data.data.memes)
        // } 
        // getmeme()
    },[])

    function getMemeImage() {
        const memesArray = allMemeImage
        const getRandomNumber  = Math.floor(Math.random() * memesArray.length )
        const url = memesArray[getRandomNumber].url
        setMeme(prevState => ({
                ...prevState,
                memeImage:url
            })
        )
    }

    function changeText(event) {
        const {name, value} = event.target
        setMeme(prevState=>({
            ...prevState,
            [name]: value
            })
        )
    }

    return (
        <main>
            <div className="form">
                <input type="text" 
                    className="input-box"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={changeText}
                    />
                <input type="text"
                    className="input-box" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={changeText}
                    />    
                <button className="form-button"
                     onClick={getMemeImage}>Get a new meme Image
                </button>
            </div>
            <div className="meme">
                <img src={meme.memeImage} className="meme-image"></img>
                <h2 className="top-text">{meme.topText}</h2>
                <h2 className="bottom-text">{meme.bottomText}</h2>
            </div>
        </main>
    )
} 