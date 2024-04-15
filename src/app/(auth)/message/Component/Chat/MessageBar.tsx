
import EmojiPicker from 'emoji-picker-react'
import React, { useEffect, useRef, useState } from 'react'
import { BsEmojiSmile } from 'react-icons/bs'
import { FaMicrophone } from 'react-icons/fa'
import { ImAttachment } from 'react-icons/im'
import { MdPhotoCamera, MdSend } from 'react-icons/md'

import dynamic from 'next/dynamic'
import PhotoPicker from '../PhotoPicker'


const CaptureAudio  =dynamic(()=>import('../CaptureAudio'),{
    ssr:false
});


const MessageBar = () => {
  
    interface EmojiData {
    emoji: string;
    // other properties...
}
    const [message, setMessage] = useState("")
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [showAudioRecorder, setShowAudioRecorder] = useState(false)
    const [grabPhoto, setGrabPhoto] = useState(false)
    const emojiPickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutSideClick = (event: MouseEvent) => {
            if (event.target instanceof HTMLElement && event.target.id !== "emoji-open") {
                if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
                    setShowEmojiPicker(false);
                }
            }
        };

        document.addEventListener("click", handleOutSideClick);

        return () => {
            document.removeEventListener("click", handleOutSideClick);
        };
    }, []);
    // useEffect(()=>{
    //     if(grabPhoto){
    //         const data=document.getElementById("photo-picker");
    //         data?.click();
    //         document.body.onfocus=(e)=>{
    //             setTimeout(()=>{
    //                 setGrabPhoto(false)
    //             },1000)
    //         };
    //     }
    // },[grabPhoto])

    const handleEmojiModal = () => {
    
        setShowEmojiPicker(!showEmojiPicker)
    }
//  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
//     alert("working")
//     const fileInput = e.target as HTMLInputElement;
//     const files = fileInput.files;

//     if (files && files.length > 0) {
//       const selectedFile = files[0]
//     }
//   };
   

const handleEmojiClick = (emoji:EmojiData) => {
    setMessage(prevMessage => prevMessage += emoji.emoji);
}

    const sendMessage = async () => {
        setMessage('');
        alert(message);
       
    }
    const photoPickerChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        alert("working");
    }
    
    return (
        <div className='bg-panel-header-background  h-20  px-4 flex items-center gap-6 relative '>
            {
                !showAudioRecorder && (
                    <>
                        <div className='flex gap-6'>
                            <BsEmojiSmile className='text-panel-header-icon cursor-pointer text-xl'
                                title='Emoji'
                                id='emoji-open'
                                onClick={handleEmojiModal}
                            />
                            
                            {showEmojiPicker && <div className='
                            
                            
                                  bottom-24 left-16 z-40 relative

                            '
                            ref={emojiPickerRef}>
                                <EmojiPicker onEmojiClick={handleEmojiClick} /></div>}


                            <ImAttachment className='text-panel-header-icon cursor-pointer text-xl'
                                title='Attach File'
                                onClick={()=>setGrabPhoto(true)}
                            />
                             {/* <label className="photo-picker">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <MdPhotoCamera className="text-panel-header-icon cursor-pointer text-xl" />
    </label> */}
                        </div>
                        <div className='w-full  rounded-lg h-10 flex  items-center'>
                            <input type="text"
                                id="message"
                                placeholder='Type a message'
                                required
                                className='bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full
                             '
                                onChange={e => setMessage(e.target.value)}
                                value={message} />
                        </div>
                        <div className=' flex w-10 items-center  justify-center '>
                            <button>
                                {message.length ? (
                                    <MdSend className='text-panel-header-icon cursor-pointer text-xl'
                                        title='Send Message'
                                        onClick={sendMessage}
                                    />
                                ) : (
                                    <FaMicrophone className='text-panel-header-icon cursor-pointer text-xl'
                                        title="Record"
                                        onClick={() => setShowAudioRecorder(true)}
                                    />
                                )}
                            </button>
                        </div>
                    </>
                )}
                {/* {grabPhoto && <PhotoPicker onChange={photoPickerChange} />} */}
            
            {showAudioRecorder && <CaptureAudio hide={setShowAudioRecorder} />}
        </div>
    )
}

export default MessageBar



