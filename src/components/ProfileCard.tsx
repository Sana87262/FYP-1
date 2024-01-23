import Image from 'next/image'
import { iProfile } from '../services/data';

//Import the profile interface from data.js




export const ProfileCard = (props: iProfile) => {

    const { name, email, username, photo } = props;

    return (
      
        
        <div className="profile__card rounded-[15px] border border-solid">

            <Image src={photo} alt={username} className="h-[200px]" height={1000} width={400} />


            <div className=" bg-slate-300 p-5">

                <h2 className="">Name: {name}</h2>

                <p>Email: {email}</p>

                <p>follow @{username}</p>


            </div>

        </div>
    )
}





