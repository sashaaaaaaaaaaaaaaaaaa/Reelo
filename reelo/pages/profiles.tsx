// import { NextPageContext } from "next";
// import { getSession } from "next-auth/react";
// import useCurrentUser from "@/hooks/useCurrentUser";
// import { useRouter } from "next/router";
//
//
//
// export async function getServerSideProps(context: NextPageContext) {
//     const session = await getSession(context);
//     if (!session) {
//         return {
//             redirect: {
//                 destination: '/auth',
//                 permanent: false,
//             }
//         }
//     }
//     return {
//         props: {}
//     }
// }
//
// const Profiles = () => {
//     const router = useRouter();
//     const { data: user } = useCurrentUser();
//
//     return (
//         <div className="relative flex items-center h-full justify-center p-6 bg-black">
//             <video autoPlay muted loop className="absolute inset-0 object-cover w-full h-full opacity-50">
//                 <source src="/images/videos/hero.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//
//             {/* Container for the profile selection elements */}
//             <div className="relative z-20 flex flex-col items-center p-10 rounded-lg shadow-2xl bg-black bg-opacity-20 hover:bg-opacity-40 ">
//                 {/* Header */}
//                 <h1 className="text-4xl md:text-5xl font-bold text-sky-200 text-center mb-10">Welcome to Reelo </h1>
//
//                 {/* Profile icon container */}
//                 <div onClick={() => router.push('/')} className="flex flex-col items-center">
//                     <div onClick={() => { }} className="group flex flex-col items-center">
//                         <div className="w-40 h-40 rounded-full flex items-center justify-center border-8 border-transparent group-hover:cursor-pointer group-hover:border-indigo-500 overflow-hidden transition-all duration-300">
//                             <img src="/images/default-black.png" alt="Profile"  />
//                         </div>
//                         <div className="mt-6 text-xl text-gray-400 group-hover:text-blue-500 transition-all duration-300">{user?.name}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default Profiles;





import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}

const Profiles = () => {
    const router = useRouter();
    const { data: user } = useCurrentUser();

    return (
        <div className="relative flex items-center h-full justify-center p-6 bg-black">
            <img src="/images/hero.jpg" alt="Background" className="absolute inset-0 object-cover w-full h-full opacity-50" />

            {/* Container for the profile selection elements */}
            <div className="relative z-20 flex flex-col items-center p-10 rounded-lg shadow-2xl bg-black bg-opacity-20 hover:bg-opacity-40">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-sky-200 text-center mb-10">Welcome to Reelo </h1>

                {/* Profile icon container */}
                <div onClick={() => router.push('/')} className="flex flex-col items-center">
                    <div onClick={() => { }} className="group flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full flex items-center justify-center border-8 border-transparent group-hover:cursor-pointer group-hover:border-indigo-500 overflow-hidden transition-all duration-300">
                            <img src="/images/default-black.png" alt="Profile" />
                        </div>
                        <div className="mt-6 text-xl text-gray-400 group-hover:text-blue-500 transition-all duration-300">{user?.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profiles;