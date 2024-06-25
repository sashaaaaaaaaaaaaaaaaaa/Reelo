// import React from "react";
// interface InputProps{
//     id: string;
//     onChange: any;
//     value: string;
//     label: string;
//     type: string;
// }
// const Input: React.FC<InputProps> = ({
//                                          id,
//                                          onChange,
//                                          label,
//                                          value,
//                                          type
//                                      }) => {
//     return(
//         <div className={"relative"}>
//             <input
//                 value={value}
//                 type={type}
//                 onChange={onChange}
//                 id={id}
//                 className={
//                     "block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-black opacity-50 appearance-none focus:outline-none focus:ring-0 peer"
//                 }
//                 placeholder=" "
//             />
//
//             <label className={"absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"} htmlFor={"id"}>{label}</label>
//         </div>
//
//     )
// }
// export default Input;



import React from "react";

interface InputProps {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type: string;
}

const Input: React.FC<InputProps> = ({
                                         id,
                                         onChange,
                                         label,
                                         value,
                                         type
                                     }) => {
    return (
        <div className={"relative"}>
            <input
                value={value}
                type={type}
                onChange={onChange}
                id={id}
                autoComplete={type === 'password' ? 'new-password' : type === 'email' ? 'email' : 'off'}
                className={
                    "block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-black opacity-50 appearance-none focus:outline-none focus:ring-0 peer"
                }
                placeholder=" "
            />
            <label
                className={
                    "absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                }
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
