import React, { useState } from 'react'
import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth'
import { auth, storage } from '../firebase'
import gallery from '../Assets/Image/gallery.png'
import { useNavigate } from 'react-router-dom';
import {
    ref,uploadBytesResumable,getDownloadURL,
} from 'firebase/storage'
import { async } from '@firebase/util'
const Registeration = () => {
    const [err, setErr] = useState(false);
    const regUser = async (e) => {
        e.preventDefault();
        debugger;
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        try {

            const res = createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                (error) => {
                    setErr(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async(DownloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL:DownloadURL,
                        })
                    });
                }
            );
        }
        catch {
            setErr(true);
        }

    }

    const navigate = useNavigate();
    const logins = () => {
        navigate('/home');
    }
    return (
        <div className='formContainer'>
            <div className='fromWrapper'>
                <span className='logo'>Chat</span>
                <span className='title'>Register</span>
                <form onSubmit={regUser}>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input style={{ display: "none" }} type="file" id='file' placeholder="display name" />
                    <label htmlFor='file'>
                        <img src={gallery} alt="image" />
                        <span >Add Avatar</span>
                    </label>
                    <button>SignUp</button>
                    {err&&<span>Something went wrong!</span>}
                </form>
                <p>Do you have an account? Login</p>
            </div>

        </div>
    )
}

export default Registeration
