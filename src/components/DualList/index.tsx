// import React,{useState} from 'react';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import '../../style/react-dual-listbox.css'
// import DualListBox from 'react-dual-listbox';

// export interface Options {
//     value:any
//     label:string
// }
// export interface IProps {
//     options:Array<Options>
//     onChange:(value)=> void
//     disabled?:boolean
//     titleOne?:string
//     titleTwo?:string
// }

// export const DualList: React.FC<IProps> = ({
//     options,
//     onChange,
//     disabled = false,
//     titleOne,
//     titleTwo,
//     ...props
//  }) => {

//     const [selected,setSelected] = useState([])

//     return (
//         <div className='w-96'>
//           <div className='flex justify-between mb-4'>
//             {titleOne && <h1 className='font-semibold text-sm text-dark'>{titleOne}</h1>}
//             {titleOne && <h1 className='font-semibold text-sm text-dark'>{titleTwo}</h1>}
//           </div>
//           <DualListBox
//             options={options}
//             selected={selected}
//             onChange={(value)=> {
//               setSelected(value)
//               onChange(value)
//             }}
//             disabled={disabled}
//           />
//         </div>

//     )
// }
