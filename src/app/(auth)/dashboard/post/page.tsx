"use client"
import Image from 'next/image'
import { useState, ChangeEvent } from 'react'  
import ReactPlayer from 'react-player'

export default function Home() {
  const [files, setFiles] = useState<FileList | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {  
    const files = e.target.files;
    setFiles(files);
  }

  // Function to check if a file is an image
  const isImage = (file: File) => file.type.startsWith('image');

  // Function to check if a file is a video
  const isVideo = (file: File) => file.type.startsWith('video');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 ">
      <h1 className="text-4xl font-bold">Create Post</h1>
      <input type="file" onChange={handleFileChange} multiple />
      <div className="flex flex-col items-center justify-center">
        {
          files && Array.from(files).map((file, index) => {
            return (
              <div key={index} className="flex flex-col items-center justify-center mt-5">
                <div className="flex flex-col items-center justify-center">
                  {isImage(file) && (
                    <Image src={URL.createObjectURL(file)} width={500} height={500} alt='Uploaded Media' />
                  )}
                  {isVideo(file) && (
                    <ReactPlayer url={URL.createObjectURL(file)} controls={true} />
                  )}
                </div>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}



