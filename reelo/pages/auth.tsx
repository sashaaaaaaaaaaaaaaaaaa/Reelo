// import Input from "@/components/input";
// import { useCallback, useState } from "react";
// import axios from 'axios';
// import { signIn } from "next-auth/react";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub, FaDiscord } from "react-icons/fa";
//
// const Auth = () => {
//
//     const [email, setEmail] = useState("");
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");
//
//     const [variant, setVariant] = useState("login");
//     const toggleVariant = useCallback(() => {
//         setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
//     }, []);
//
//     const logIn = useCallback(async () => {
//         try {
//             const result = await signIn("credentials", {
//                 email,
//                 password,
//                 callbackUrl: '/profiles'
//             });
//
//         } catch (error) {
//             console.log(error);
//         }
//     }, [email, password]);
//
//     const register = useCallback(async () => {
//         try {
//             await axios.post('/api/register', {
//                 email,
//                 name,
//                 password
//             });
//             logIn();
//         } catch (error) {
//             console.log(error);
//         }
//     }, [email, name, password, logIn]);
//
//     return (
//         <div className="relative h-full w-full">
//             <img src="/images/hero.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover"/>
//             <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
//                 <div className="bg-black bg-opacity-40 px-10 py-10 lg:w-2/3 lg:max-w-md rounded-lg w-full">
//                     <nav className="flex justify-center mb-1">
//                         <img src="/images/logo.png" alt="Logo" className="h-28"/>
//                     </nav>
//                     <h2 className="text-sky-200 text-4xl mb-8 font-semibold">{variant === 'login' ? "Sign in" : 'Register'}</h2>
//                     <div className="flex flex-col gap-4">
//                         {variant === 'register' && (
//                             <Input
//                                 label="Username"
//                                 onChange={(ev: any) => setName(ev.target.value)}
//                                 id="name"
//                                 type="text"
//                                 value={name}
//                             />
//                         )}
//                         <Input
//                             label="Email"
//                             onChange={(ev: any) => setEmail(ev.target.value)}
//                             id="email"
//                             type="email"
//                             value={email}
//                         />
//                         <Input
//                             label="Password"
//                             onChange={(ev: any) => setPassword(ev.target.value)}
//                             id="password"
//                             type="password"
//                             value={password}
//                         />
//                     </div>
//                     <button
//                         onClick={variant === 'login' ? logIn : register}
//                         style={{
//                             backgroundImage: 'linear-gradient(to right, #83a4d4 0%, #b6fbff  51%, #83a4d4  100%)',
//                             textAlign: 'center',
//                             textTransform: 'uppercase',
//                             backgroundSize: '200% auto',
//                             color: 'white',
//                             borderRadius: '5px',
//                         }}
//                         className="py-3 rounded-full w-full mt-10 hover:bg-gradient-to-r hover:from-blue-300 hover:to-cyan-300 text-sky-950 transition">
//                         {variant === 'login' ? 'Login' : 'Sign up'}
//                     </button>
//                     <div className="flex flex-row items-center gap-5 mt-8 justify-center">
//                         <div
//                             onClick={() => signIn('google', {callbackUrl: '/profiles'})}
//                             className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
//                             <FcGoogle size={32}/>
//                         </div>
//                         <div
//                             onClick={() => signIn('github', {callbackUrl: '/profiles'})}
//                             className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
//                             <FaGithub size={32}/>
//                         </div>
//                         <div
//                             onClick={() => signIn('discord', {callbackUrl: '/'})}
//                             className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
//                             <FaDiscord size={32}/>
//                         </div>
//                     </div>
//                     <div className="text-sky-200 mt-6 flex items-center ml-6">
//                         <p>{variant === 'login' ? 'First time using Reelo?' : 'Already have an account?'}</p>
//                         <span onClick={toggleVariant} className="text-white ml-2 hover:underline cursor-pointer">
//                             {variant === 'login' ? 'Create an account' : "Login"}
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Auth;



// import Input from "@/components/input";
// import { useCallback, useState } from "react";
// import axios from 'axios';
// import { signIn } from "next-auth/react";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub, FaDiscord } from "react-icons/fa";
//
// const Auth = () => {
//
//     const [email, setEmail] = useState("");
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");
//
//     const [variant, setVariant] = useState("login");
//     const toggleVariant = useCallback(() => {
//         setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
//     }, []);
//
//     const logIn = useCallback(async () => {
//         try {
//             const result = await signIn("credentials", {
//                 email,
//                 password,
//                 callbackUrl: '/profiles'
//             });
//
//         } catch (error) {
//             console.log(error);
//         }
//     }, [email, password]);
//
//     const register = useCallback(async () => {
//         try {
//             await axios.post('/api/register', {
//                 email,
//                 name,
//                 password
//             });
//             logIn();
//         } catch (error) {
//             console.log(error);
//         }
//     }, [email, name, password, logIn]);
//
//     return (
//         <div className="relative h-full w-full">
//             <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
//                 <source src="/images/videos/hero.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
//                 <div className="bg-black bg-opacity-40 px-10 py-10 lg:w-2/3 lg:max-w-md rounded-lg w-full">
//                     <nav className="flex justify-center mb-1">
//                         <img src="/images/logo.png" alt="Logo" className="h-28"/>
//                     </nav>
//                     <h2 className="text-sky-200 text-4xl mb-8 font-semibold">{variant === 'login' ? "Sign in" : 'Register'}</h2>
//                     <div className="flex flex-col gap-4">
//                         {variant === 'register' && (
//                             <Input
//                                 label="Username"
//                                 onChange={(ev: any) => setName(ev.target.value)}
//                                 id="name"
//                                 type="text"
//                                 value={name}
//                             />
//                         )}
//                         <Input
//                             label="Email"
//                             onChange={(ev: any) => setEmail(ev.target.value)}
//                             id="email"
//                             type="email"
//                             value={email}
//                         />
//                         <Input
//                             label="Password"
//                             onChange={(ev: any) => setPassword(ev.target.value)}
//                             id="password"
//                             type="password"
//                             value={password}
//                         />
//                     </div>
//                     {/*<button*/}
//                     {/*    onClick={variant === 'login' ? logIn : register}*/}
//                     {/*    className="bg-gradient-to-r from-cyan-300 to-blue-300 py-3 text-gray-700 rounded-full w-full mt-10 hover:bg-gradient-to-r hover:from-blue-300 hover:to-cyan-300 transition">*/}
//                     {/*    {variant === 'login' ? 'Login' : 'Sign up'}*/}
//                     {/*</button>*/}
//
//                     <button
//                         onClick={variant === 'login' ? logIn : register}
//                         style={{
//
//                             backgroundImage: 'linear-gradient(to right, #83a4d4 0%, #b6fbff  51%, #83a4d4  100%)',
//                             textAlign: 'center',
//                             textTransform: 'uppercase',
//                             // transition: '0.5s',
//                             backgroundSize: '200% auto',
//                             color: 'white',
//                             borderRadius: '5px',
//                             // display: 'block'
//
//                         }}
//                         className="py-3 rounded-full w-full mt-10 hover:bg-gradient-to-r hover:from-blue-300 hover:to-cyan-300 text-sky-950 transition">
//                         {variant === 'login' ? 'Login' : 'Sign up'}
//                     </button>
//
//
//
//                     <div className="flex flex-row items-center gap-5 mt-8 justify-center">
//                         <div
//                             onClick={() => signIn('google', {callbackUrl: '/profiles'})}
//                             className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
//                             <FcGoogle size={32}/>
//                         </div>
//                         <div
//                             onClick={() => signIn('github', {callbackUrl: '/profiles'})}
//                             className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
//                             <FaGithub size={32}/>
//                         </div>
//                         <div
//                             onClick={() => signIn('discord', {callbackUrl: '/'})}
//                             className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
//                             <FaDiscord size={32}/>
//                         </div>
//                     </div>
//                     <div className="text-sky-200 mt-6 flex items-center ml-6">
//                         <p>{variant === 'login' ? 'First time using Reelo?' : 'Already have an account?'}</p>
//                         <span onClick={toggleVariant} className="text-white ml-2 hover:underline cursor-pointer">
//                             {variant === 'login' ? 'Create an account' : "Login"}
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Auth;



// import Input from "@/components/input";
// import { useCallback, useState } from "react";
// import axios from 'axios';
// import { signIn } from "next-auth/react";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub, FaDiscord } from "react-icons/fa";
//
// const Auth = () => {
//     const [email, setEmail] = useState("");
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");
//
//     const [variant, setVariant] = useState("login");
//     const toggleVariant = useCallback(() => {
//         setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
//     }, []);
//
//     const logIn = useCallback(async () => {
//         try {
//             const result = await signIn("credentials", {
//                 email,
//                 password,
//                 callbackUrl: '/profiles'
//             });
//
//         } catch (error) {
//             console.log(error);
//         }
//     }, [email, password]);
//
//     const register = useCallback(async () => {
//         try {
//             await axios.post('/api/register', {
//                 email,
//                 name,
//                 password
//             });
//             logIn();
//         } catch (error) {
//             console.log(error);
//         }
//     }, [email, name, password, logIn]);
//
//     return (
//         <div className="relative h-full w-full">
//             <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
//                 <source src="/images/videos/hero.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
//                 <div className="bg-black bg-opacity-40 px-10 py-10 lg:w-2/3 lg:max-w-4xl rounded-lg w-full flex flex-col lg:flex-row">
//                     <div className="hidden lg:flex flex-col justify-center items-start pr-10 text-sky-200 w-1/3">
//                         <h2 className="text-2xl mb-4 font-semibold">Welcome to Reelo</h2>
//                         <p className="text-sm mb-4">Discover and explore vintage movies and detailed movie information. Sign up to create your own list, rate movies, and stay updated with the latest releases.</p>
//                         {/*<img src="/images/movie-collage.jpg" alt="Movie Collage" className="rounded-lg shadow-lg w-full" />*/}
//                     </div>
//                     <div className="flex-1 mt-6 lg:mt-0">
//                         <nav className="flex justify-center mb-1">
//                             <img src="/images/logo.png" alt="Logo" className="h-24" />
//                         </nav>
//                         <h2 className="text-sky-200 text-3xl mb-8 font-semibold">{variant === 'login' ? "Sign in" : 'Register'}</h2>
//                         <div className="flex flex-col gap-4">
//                             {variant === 'register' && (
//                                 <Input
//                                     label="Username"
//                                     onChange={(ev: any) => setName(ev.target.value)}
//                                     id="name"
//                                     type="text"
//                                     value={name}
//
//                                 />
//                             )}
//                             <Input
//                                 label="Email"
//                                 onChange={(ev: any) => setEmail(ev.target.value)}
//                                 id="email"
//                                 type="email"
//                                 value={email}
//                             />
//                             <Input
//                                 label="Password"
//                                 onChange={(ev: any) => setPassword(ev.target.value)}
//                                 id="password"
//                                 type="password"
//                                 value={password}
//                             />
//                         </div>
//                         <button
//                             onClick={variant === 'login' ? logIn : register}
//                             style={{
//                                 backgroundImage: 'linear-gradient(to right, #83a4d4 0%, #b6fbff  51%, #83a4d4  100%)',
//                                 textAlign: 'center',
//                                 textTransform: 'uppercase',
//                                 backgroundSize: '200% auto',
//                                 color: 'white',
//                                 borderRadius: '5px',
//                             }}
//                             className="py-3 rounded-full w-full mt-10 hover:bg-gradient-to-r hover:from-blue-300 hover:to-cyan-300 text-sky-950 transition"
//                         >
//                             {variant === 'login' ? 'Login' : 'Sign up'}
//                         </button>
//                         <div className="flex flex-row items-center gap-5 mt-8 justify-center">
//                             <div
//                                 onClick={() => signIn('google', { callbackUrl: '/profiles' })}
//                                 className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
//                             >
//                                 <FcGoogle size={32} />
//                             </div>
//                             <div
//                                 onClick={() => signIn('github', { callbackUrl: '/profiles' })}
//                                 className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
//                             >
//                                 <FaGithub size={32} />
//                             </div>
//                             <div
//                                 onClick={() => signIn('discord', { callbackUrl: '/' })}
//                                 className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
//                             >
//                                 <FaDiscord size={32} />
//                             </div>
//                         </div>
//                         <div className="text-sky-200 mt-6 flex items-center ml-6">
//                             <p>{variant === 'login' ? 'First time using Reelo?' : 'Already have an account?'}</p>
//                             <span onClick={toggleVariant} className="text-white ml-2 hover:underline cursor-pointer">
//                                 {variant === 'login' ? 'Create an account' : "Login"}
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Auth;



import Input from "@/components/input";
import { useCallback, useState } from "react";
import axios from 'axios';
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaDiscord } from "react-icons/fa";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [variant, setVariant] = useState("login");
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const logIn = useCallback(async () => {
        try {
            const result = await signIn("credentials", {
                email,
                password,
                callbackUrl: '/profiles'
            });
        } catch (error) {
            console.log(error);
        }
    }, [email, password]);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            });
            logIn();
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, logIn]);

    return (
        <div className="relative h-full w-full">
            <img src="/images/hero.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <div className="bg-black bg-opacity-40 px-10 py-10 lg:w-2/3 lg:max-w-md rounded-lg w-full">
                    <nav className="flex justify-center mb-1">
                        <img src="/images/logo.png" alt="Logo" className="h-28"/>
                    </nav>
                    <h2 className="text-sky-200 text-4xl mb-8 font-semibold">{variant === 'login' ? "Sign in" : 'Register'}</h2>
                    <div className="flex flex-col gap-4">
                        {variant === 'register' && (
                            <Input
                                label="Username"
                                onChange={(ev: any) => setName(ev.target.value)}
                                id="name"
                                type="text"
                                value={name}
                            />
                        )}
                        <Input
                            label="Email"
                            onChange={(ev: any) => setEmail(ev.target.value)}
                            id="email"
                            type="email"
                            value={email}
                        />
                        <Input
                            label="Password"
                            onChange={(ev: any) => setPassword(ev.target.value)}
                            id="password"
                            type="password"
                            value={password}
                        />
                    </div>
                    <button
                        onClick={variant === 'login' ? logIn : register}
                        style={{
                            backgroundImage: 'linear-gradient(to right, #83a4d4 0%, #b6fbff  51%, #83a4d4  100%)',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            backgroundSize: '200% auto',
                            color: 'white',
                            borderRadius: '5px',
                        }}
                        className="py-3 rounded-full w-full mt-10 hover:bg-gradient-to-r hover:from-blue-300 hover:to-cyan-300 text-sky-950 transition">
                        {variant === 'login' ? 'Login' : 'Sign up'}
                    </button>
                    <div className="flex flex-row items-center gap-5 mt-8 justify-center">
                        <div
                            onClick={() => signIn('google', {callbackUrl: '/profiles'})}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                            <FcGoogle size={32}/>
                        </div>
                        <div
                            onClick={() => signIn('github', {callbackUrl: '/profiles'})}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                            <FaGithub size={32}/>
                        </div>
                        <div
                            onClick={() => signIn('discord', {callbackUrl: '/'})}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                            <FaDiscord size={32}/>
                        </div>
                    </div>
                    <div className="text-sky-200 mt-6 flex items-center ml-6">
                        <p>{variant === 'login' ? 'First time using Reelo?' : 'Already have an account?'}</p>
                        <span onClick={toggleVariant} className="text-white ml-2 hover:underline cursor-pointer">
                            {variant === 'login' ? 'Create an account' : "Login"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
