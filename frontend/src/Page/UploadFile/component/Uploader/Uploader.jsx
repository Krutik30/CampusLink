import {useState} from 'react'
import './uploader.css'
import React from 'react';  
import Button from '@mui/material/Button';  
function Uploader() {

    const [image, setImage] = useState(null)
    const [fileName, setaFileName] = useState("No selected file")
  return (
    // <div>Uploader</div>
    <main>
        <form 
        onClick={() => document.querySelector(".input-field").click()}
        >
            <input type="file" accept='image/*' className='input-field' hidden
            onChange={({target: {files}}) => {
                files[0] && setaFileName(files[0].name)
                if(files){
                    setImage(URL.createObjectURL(files[0]))
                }
            }}/>
            {image ?
            <img src={image} width={150} height={150} alt={fileName}/>
            :
            <>
            <MdCloudUpload color='#1475cf' size={60} />
            <p>Upload Files</p>
            </>
        }
        </form>

        <section className='upload-line'>
            <AiFillFileImage color='#1475cf'/>
            <span className='upload-content'>
                {fileName}
                <button 
                onClick={() => {
                    setaFileName("No selected File")
                    setImage(null)
                }}>delete</button>
            </span>
        </section>
        <div className='up-button'>
        <Button variant='contained' >Upload</Button>  
        </div>
        
        
    </main>
  )
}

export default Uploader