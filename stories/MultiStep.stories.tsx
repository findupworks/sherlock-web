// import React, {useState} from 'react';
// import { ComponentMeta, ComponentStory } from '@storybook/react';

// import { MultiStep } from '../src';
// import { SlidePreviosButton,SlideNextButton } from '../src/components/MultiStep';

// export default {
//   /* 👇 The title prop is optional.
//   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//   * to learn how to generate automatic titles
//   */
//   title: 'Data Display/MultiStep',
//   component: MultiStep,
//   args: {
//     //👇 Now all Button stories will be primary.
//    type: 'stepCircle',
//    stepCurrent:1,
//    steps:[
//     { stepName:"Etapa 1" },
//     { stepName:"Etapa 2" },
//     { stepName:"Etapa 3" },
//     { stepName:"Etapa 4" },
//     { stepName:"Etapa 5" },
//   ]
//   },
//   argTypes: {
//     type: {
//       options: ['stepCircle', 'stepCircleCondensed', 'stepBar'],
//       control: 'select' ,

//     },

//   }
// } as ComponentMeta<typeof MultiStep>;

// //👇 We create a “template” of how args map to rendering
// const Template: ComponentStory<typeof MultiStep> = (args) => <MultiStep {...args} />;

// //👇 Each story then reuses that template
// export const stepCircle = Template.bind({});
// stepCircle.args = { type: 'stepCircle'};

// export const stepCircleCondensed = ()=>{
//   const [step,setStepCurrent] = useState(1);

//   const steps = [
//     {
//       stepName:"Etapa 1"
//     },
//     {
//       stepName:"Etapa 2"
//     },
//     {
//       stepName:"Etapa 3"
//     },
//     {
//       stepName:"Etapa 4"
//     },
//     {
//       stepName:"Etapa 5"
//     },
//     {
//       stepName:"Etapa 6"
//     },
//   ]

//   const next = ()=>{
//    step != steps.length && setStepCurrent(step + 1)

//   }

//   const previos = ()=>{

//    step != 1 &&  setStepCurrent(step - 1)

//   }

//   return (
//     <div style={{width:'40vw',height:'162.rem'}}>
//     <MultiStep steps={steps} stepCurrent={step} type="stepCircleCondensed">
//       <div style={{width:'100%',display:'flex',justifyContent:'space-between',margin:'2rem auto'}}>
//         {step != 1 ?
//         <SlidePreviosButton  onClick={previos} style={{background:'transparent',color:"#e2e8f0",border:'1px solid #e2e8f0',width:'8rem',padding:"0.5rem 1.25rem",borderRadius:'5px'}}>
//           Anterior
//         </SlidePreviosButton>:<button></button>
//        }
//         <SlideNextButton onClick={next} style={{background:'#4299e1',color:"white",width:'8rem',padding:"0.5rem 1.25rem",borderRadius:'5px'}}>
//          Próximo
//        </SlideNextButton>
//       </div>
//     </MultiStep>
//   </div>
//   )
// }
// export const stepBar = Template.bind({});
// stepBar.args = { type: 'stepBar' };

// export const ExampleStepCircle = ()=>{

//   const [step,setStepCurrent] = useState(1);

//   const steps = [
//     {
//       stepName:"Bem-vindo"
//     },
//     {
//       stepName:"Dados Pessoais"
//     },
//     {
//       stepName:"Endereço"
//     },
//     {
//       stepName:"Foto do Perfil"
//     },
//     {
//       stepName:"Senha"
//     },
//     {
//       stepName:"Cadastro Finalizado"
//     },
//   ]

//   const next = ()=>{
//     step != steps.length && setStepCurrent(step + 1)

//    }

//    const previos = ()=>{

//     step != 1 &&  setStepCurrent(step - 1)

//    }

//    const Content = ()=>{
//     const [image,setImage] = useState('')

//     if(step == 1){
//       return (
//        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
//         <h1 style={{fontSize:'1.5rem',color:'#a0aec0',margin:'1rem 0px'}}>SEJÁ BEM VINDO,FAÇA SEU CADASTRO</h1>
//          <p style={{marginTop:'0.5rem',color:'#999999'}}>
//          Siga as etapas e faça seu cadastro.
//          </p>
//        </div>
//       )
//      }
//      if(step == 2){
//       return (
//        <div style={{display:'flex',flexDirection:'column',alignItems:'center',color:"#a0aec0"}}>
//         <h1 style={{fontSize:'1.5rem',color:'#a0aec0',margin:'1rem 0px'}}>Dados Pessoais</h1>
//         <label>
//            Nome<br />
//           <input type="text" style={{border:'1px solid #999999',padding:'0.4rem',borderRadius:'5px'}} />
//         </label>
//         <label style={{marginTop:'1rem'}}>
//            sobrenome<br />
//           <input type="text" style={{border:'1px solid #999999',padding:'0.4rem',borderRadius:'5px'}} />
//         </label>
//        </div>
//       )
//      }

//      if(step == 3){
//       return (
//        <div style={{display:'flex',flexDirection:'column',alignItems:'center',color:"#a0aec0"}}>
//          <h1 style={{fontSize:'1.5rem',color:'#a0aec0',margin:'1rem 0px'}}>Endereço</h1>
//          <label>
//            Estado<br />
//           <input type="text" style={{border:'1px solid #999999',padding:'0.4rem',borderRadius:'5px'}} />
//          </label>
//          <label style={{marginTop:'1rem'}}>
//            Cidade<br />
//           <input type="text" style={{border:'1px solid #999999',padding:'0.4rem',borderRadius:'5px'}} />
//          </label>
//        </div>
//       )
//      }
//      if(step == 4){

//       const changeImage  = (e:any)=>{
//         let img = e.target.files[0];
//         setImage(URL.createObjectURL(img))

//       }
//      return (
//       <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
//         <h1 style={{fontSize:'1.5rem',color:'#a0aec0',margin:'1rem 0px'}}>Foto do Perfil</h1>
//         {image.length > 0 ?
//         <img src={image} alt="" style={{width:'120px',height:'120px',borderRadius:'50%'}} />
//           :
//         <div style={{background:'#E8E9EB',width:'120px',height:'120px',borderRadius:'50%',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
//            <i className="fa-solid fa-user" style={{fontSize:'4rem',color:'#161616'}}></i>
//         </div>
//          }
//         <label className="custom-file-upload" style={{color:'#a0aec0',marginTop:'16px',cursor:'pointer'}}>
//             <input type="file" multiple onChange={changeImage} style={{display:'none'}} />
//             <i className="fa fa-cloud-upload" style={{marginRight:'4px'}} />
//              Foto
//         </label>
//       </div>
//      )
//     }
//     if(step == 5){
//       return (
//         <div style={{color:'#a0aec0'}}>
//           <h1 style={{fontSize:'1.5rem',margin:'1rem 0px'}}>Senha</h1>
//           <p style={{margin:'1rem 0px'}}>Crie uma senha segura, incluindo os seguintes critérios abaixo.</p>
//           <ul>
//             <li>
//               letras minúsculas
//             </li>
//             <li>
//               números
//             </li>
//             <li>
//                letras maiúsculas
//             </li>
//             <li>
//                caracteres especiais
//             </li>
//           </ul>
//           <input type="text" style={{width:'100%',padding:'0.5rem',borderRadius:'5px',border:'1px solid #999999',margin:'1rem 0px'}} />
//         </div>
//       )
//     }
//     if(step == 6){
//     return (
//       <div style={{textAlign:'center',color:'#a0aec0'}}>
//         <i className="fa fa-check" style={{fontSize:'5rem'}} />
//         <h1 style={{fontSize:'2rem'}}>Cadastro Finalizado</h1>
//       </div>
//     )
//     }
//     return (
//       <>
//       </>
//     )
//   }
// return (
//   <div style={{width:'40vw'}}>
//     <MultiStep stepCurrent={step} steps={steps} type="stepCircle" />
//     <Content />
//     <div style={{margin:'1rem 0'}}>
//       <button onClick={previos} style={{background:'transparent',color:"#e2e8f0",border:'1px solid #e2e8f0',width:'8rem',padding:"0.5rem 1.25rem",borderRadius:'5px',marginRight:'0.5rem'}}>
//          Anterior
//       </button>
//       <button  onClick={next} style={{background:'#4299e1',color:"white",width:'8rem',padding:"0.5rem 1.25rem",borderRadius:'5px'}}>
//         Próximo
//       </button>
//     </div>
//   </div>
// )

// }

// export const ExampleStepCircleCondesed  = ()=>{

//   const [step,setStepCurrent] = useState(1);

//   const steps = [
//     {
//       stepName:"Bem-vindo"
//     },
//     {
//       stepName:"Dados Pessoais"
//     },
//     {
//       stepName:"Endereço"
//     },
//     {
//       stepName:"Foto do Perfil"
//     },
//     {
//       stepName:"Senha"
//     },
//     {
//       stepName:"Cadastro Finalizado"
//     },
//   ]

//  const next = ()=>{
//   step != steps.length && setStepCurrent(step + 1)

//  }

//  const previos = ()=>{

//   step != 1 &&  setStepCurrent(step - 1)

//  }

//  const Content = ()=>{
//   const [image,setImage] = useState('')

//   if(step == 1){
//     return (
//      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
//       <h1 style={{fontSize:'1.5rem',color:'#a0aec0',margin:'1rem 0px'}}>SEJÁ BEM VINDO,FAÇA SEU CADASTRO</h1>
//        <p style={{marginTop:'0.5rem',color:'#999999'}}>
//        Siga as etapas e faça seu cadastro.
//        </p>
//      </div>
//     )
//    }
//    if(step == 2){
//     return (
//      <div style={{display:'flex',flexDirection:'column',alignItems:'center',color:"#a0aec0"}}>
//       <h1 style={{fontSize:'1.5rem',color:'#a0aec0',margin:'1rem 0px'}}>Dados Pessoais</h1>
//       <label>
//          Nome<br />
//         <input type="text" style={{border:'1px solid #999999',padding:'0.4rem',borderRadius:'5px'}} />
//       </label>
//       <label style={{marginTop:'1rem'}}>
//          sobrenome<br />
//         <input type="text" style={{border:'1px solid #999999',padding:'0.4rem',borderRadius:'5px'}} />
//       </label>
//      </div>
//     )
//    }

//    if(step == 3){
//     return (
//      <div style={{display:'flex',flexDirection:'column',alignItems:'center',color:"#a0aec0"}}>
//        <h1 style={{fontSize:'1.5rem',color:'#a0aec0',margin:'1rem 0px'}}>Endereço</h1>
//        <label>
//          Estado<br />
//         <input type="text" style={{border:'1px solid #999999',padding:'0.4rem',borderRadius:'5px'}} />
//        </label>
//        <label style={{marginTop:'1rem'}}>
//          Cidade<br />
//         <input type="text" style={{border:'1px solid #999999',padding:'0.4rem',borderRadius:'5px'}} />
//        </label>
//      </div>
//     )
//    }
//    if(step == 4){

//     const changeImage  = (e:any)=>{
//       let img = e.target.files[0];
//       setImage(URL.createObjectURL(img))

//     }
//    return (
//     <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
//       <h1 style={{fontSize:'1.5rem',color:'#a0aec0',margin:'1rem 0px'}}>Foto do Perfil</h1>
//       {image.length > 0 ?
//       <img src={image} alt="" style={{width:'120px',height:'120px',borderRadius:'50%'}} />
//         :
//       <div style={{background:'#E8E9EB',width:'120px',height:'120px',borderRadius:'50%',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
//          <i className="fa-solid fa-user" style={{fontSize:'4rem',color:'#161616'}}></i>
//       </div>
//        }
//       <label className="custom-file-upload" style={{color:'#a0aec0',marginTop:'16px',cursor:'pointer'}}>
//           <input type="file" multiple onChange={changeImage} style={{display:'none'}} />
//           <i className="fa fa-cloud-upload" style={{marginRight:'4px'}} />
//           Foto
//       </label>
//     </div>
//    )
//   }
//   if(step == 5){
//     return (
//       <div style={{color:'#a0aec0'}}>
//         <h1 style={{fontSize:'1.5rem',margin:'1rem 0px'}}>Senha</h1>
//         <p style={{margin:'1rem 0px'}}>Crie uma senha segura, incluindo os seguintes critérios abaixo.</p>
//         <ul>
//           <li>
//             letras minúsculas
//           </li>
//           <li>
//             números
//           </li>
//           <li>
//              letras maiúsculas
//           </li>
//           <li>
//              caracteres especiais
//           </li>
//         </ul>
//         <input type="text" style={{width:'100%',padding:'0.5rem',borderRadius:'5px',border:'1px solid #999999',margin:'1rem 0px'}} />
//       </div>
//     )
//   }
//   if(step == 6){
//   return (
//     <div style={{textAlign:'center',color:'#a0aec0'}}>
//       <i className="fa fa-check" style={{fontSize:'5rem'}} />
//       <h1 style={{fontSize:'2rem'}}>Cadastro Finalizado</h1>
//     </div>
//   )
//   }
//   return (
//     <>
//     </>
//   )
// }

//  return (
//   <div style={{width:'40vw',height:'162.rem'}}>
//     <MultiStep steps={steps} stepCurrent={step} type="stepCircleCondensed">
//       <div style={{margin:'2rem 0px'}}>
//          <Content />
//       </div>
//       <div style={{width:'100%',display:'flex',justifyContent:'space-between',margin:'2rem auto'}}>
//         {step != 1 ?
//         <SlidePreviosButton  onClick={previos} style={{background:'transparent',color:"#e2e8f0",border:'1px solid #e2e8f0',width:'8rem',padding:"0.5rem 1.25rem",borderRadius:'5px'}}>
//           Anterior
//         </SlidePreviosButton>:<button></button>
//        }
//         <SlideNextButton onClick={next} style={{background:'#4299e1',color:"white",width:'8rem',padding:"0.5rem 1.25rem",borderRadius:'5px'}}>
//          Próximo
//        </SlideNextButton>
//       </div>
//     </MultiStep>
//   </div>

//  )
// }

// export const ExampleStepBar = ()=>{

//   const [step,setStepCurrent] = useState(1);

//   const steps = [
//     {
//       stepName:"Bem-vindo"
//     },
//     {
//       stepName:"Dados Pessoais"
//     },
//     {
//       stepName:"Endereço"
//     },
//     {
//       stepName:"Foto do Perfil"
//     },
//     {
//       stepName:"Senha"
//     },
//     {
//       stepName:"Cadastro Finalizado"
//     },
//   ]

//   const next = ()=>{
//     step != steps.length && setStepCurrent(step + 1)

//    }

//    const previos = ()=>{

//     step != 1 &&  setStepCurrent(step - 1)

//    }

// const Content = ()=>{
//   const [image,setImage] = useState('')

//   if(step == 1){
//     return (
//      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
//       <h1 style={{fontSize:'1.5rem',color:'#a0aec0',margin:'1rem 0px'}}>SEJÁ BEM VINDO,FAÇA SEU CADASTRO</h1>
//        <p style={{marginTop:'0.5rem',color:'#999999'}}>
//        Siga as etapas e faça seu cadastro.
//        </p>
//      </div>
//     )
//    }
//    if(step == 2){
//     return (
//      <div style={{display:'flex',flexDirection:'column',alignItems:'center',color:"#a0aec0"}}>
//       <h1 style={{fontSize:'1.5rem',color:'#a0aec0',margin:'1rem 0px'}}>Dados Pessoais</h1>
//       <label>
//          Nome<br />
//         <input type="text" style={{border:'1px solid #999999',padding:'0.4rem',borderRadius:'5px'}} />
//       </label>
//       <label style={{marginTop:'1rem'}}>
//          sobrenome<br />
//         <input type="text" style={{border:'1px solid #999999',padding:'0.4rem',borderRadius:'5px'}} />
//       </label>
//      </div>
//     )
//    }

//    if(step == 3){
//     return (
//      <div style={{display:'flex',flexDirection:'column',alignItems:'center',color:"#a0aec0"}}>
//        <h1 style={{fontSize:'1.5rem',color:'#a0aec0',margin:'1rem 0px'}}>Endereço</h1>
//        <label>
//          Estado<br />
//         <input type="text" style={{border:'1px solid #999999',padding:'0.4rem',borderRadius:'5px'}} />
//        </label>
//        <label style={{marginTop:'1rem'}}>
//          Cidade<br />
//         <input type="text" style={{border:'1px solid #999999',padding:'0.4rem',borderRadius:'5px'}} />
//        </label>
//      </div>
//     )
//    }
//    if(step == 4){

//     const changeImage  = (e:any)=>{
//       let img = e.target.files[0];
//       setImage(URL.createObjectURL(img))

//     }
//    return (
//     <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
//       <h1 style={{fontSize:'1.5rem',color:'#a0aec0',margin:'1rem 0px'}}>Foto do Perfil</h1>
//       {image.length > 0 ?
//       <img src={image} alt="" style={{width:'120px',height:'120px',borderRadius:'50%'}} />
//         :
//       <div style={{background:'#E8E9EB',width:'120px',height:'120px',borderRadius:'50%',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
//          <i className="fa-solid fa-user" style={{fontSize:'4rem',color:'#161616'}}></i>
//       </div>
//        }
//       <label className="custom-file-upload" style={{color:'#a0aec0',marginTop:'16px',cursor:'pointer'}}>
//           <input type="file" multiple onChange={changeImage} style={{display:'none'}} />
//           <i className="fa fa-cloud-upload" style={{marginRight:'4px'}} />
//           Foto
//       </label>
//     </div>
//    )
//   }
//   if(step == 5){
//     return (
//       <div style={{color:'#a0aec0'}}>
//         <h1 style={{fontSize:'1.5rem',margin:'1rem 0px'}}>Senha</h1>
//         <p style={{margin:'1rem 0px'}}>Crie uma senha segura, incluindo os seguintes critérios abaixo.</p>
//         <ul>
//           <li>
//             letras minúsculas
//           </li>
//           <li>
//             números
//           </li>
//           <li>
//              letras maiúsculas
//           </li>
//           <li>
//              caracteres especiais
//           </li>
//         </ul>
//         <input type="text" style={{width:'100%',padding:'0.5rem',borderRadius:'5px',border:'1px solid #999999',margin:'1rem 0px'}} />
//       </div>
//     )
//   }
//   if(step == 6){
//   return (
//     <div style={{textAlign:'center',color:'#a0aec0'}}>
//       <i className="fa fa-check" style={{fontSize:'5rem'}} />
//       <h1 style={{fontSize:'2rem'}}>Cadastro Finalizado</h1>
//     </div>
//   )
//   }
//   return (
//     <>
//     </>
//   )
// }
// return (
//   <div style={{width:'40vw'}}>
//     <Content />
//     <div style={{margin:'1rem 0'}}>
//       <button onClick={previos} style={{background:'transparent',color:"#e2e8f0",border:'1px solid #e2e8f0',width:'8rem',padding:"0.5rem 1.25rem",borderRadius:'5px',marginRight:'0.5rem'}}>
//          Anterior
//       </button>
//       <button  onClick={next} style={{background:'#4299e1',color:"white",width:'8rem',padding:"0.5rem 1.25rem",borderRadius:'5px'}}>
//         Próximo
//       </button>
//     </div>
//     <MultiStep stepCurrent={step} steps={steps} type="stepBar" />
//   </div>
// )

// }
