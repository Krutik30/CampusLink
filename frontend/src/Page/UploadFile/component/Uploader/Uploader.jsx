import {useState} from 'react'
import './uploader.css'
import {MdCloudUpload, MdDelete} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'
import * as React from 'react';  
import Stack from '@mui/material/Stack';  
import Button from '@mui/material/Button';  
import { alignProperty } from '@mui/material/styles/cssUtils';
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
                <MdDelete 
                onClick={() => {
                    setaFileName("No selected File")
                    setImage(null)
                }}/>
            </span>
        </section>
        <div className='up-button'>
        <Button variant='contained' >Upload</Button>  
        </div>
        
        
    </main>
  )
}

export default Uploader