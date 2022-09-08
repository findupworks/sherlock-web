import React, {useState} from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Table } from '../src';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Table',
  component: Table,

  args: {
    //👇 Now all Button stories will be primary.
   thead:[
    {th:"Name"},
    {
      th:"Document Type",
      orderBy:true,onClickOrderBy:()=> alert('ordernando')},
    {th:"Size"},
    {th:"Status"},
    {th:"Modified Date"},
    {th:"Create Date",itemsMenuAction:[{label:'Item 2',},{label:'Item 2'}],onClickGeneral:(value)=> alert(value)},
   ],
   tbody:[
    {
     trKey:0,
     tr:[
      {
        td:{text:"Text Cell",variant:'icon',icon:'user'}
      },
      {
       td:{text:"Text Cell",variant:'checkbox'},
      },
      {
        td:{text:"553 KB",variant:'progressbar',progressbar:80},
      },
      {
        td:{text:"LABEL TEXT ",variant:'text'},
      },
      {
        td:{text:"20 Seconds Ago",variant:'textSticker'},
      },
      {
        td:{text:"26 Seconds Ago",variant:'label'},
      },  
      ]
    },
    {
      trKey:1,
      tr:[
       {
         td:{text:"Text Cell",variant:'button',onClick:()=> alert("CLICADO")},
       },
       {
         td:{text:"Text Cell",variant:'sticker'},
       },
       {
         td:{text:"553 KB",variant:'toggle'},
       },
       {
         td:{text:"LABEL TEXT ",variant:'input'},
       },
       {
         td:{text:"20 Seconds Ago",variant:'badge'},
       },
       {
         td:{
          text:"26 Seconds Ago",
          variant:'action',  
          itemsMenuAction: [
            {label: 'Opção 1'}, 
            {label: 'Opção 2'},
            {label: 'Opção 3',onClickActionRight:()=> alert('clicado'),}
          ],
          onClickDelete:(value)=> alert(value)
        },
       }
       ]
     },    
   ]
  },
  argTypes: {}
} as ComponentMeta<typeof Table>;


//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;


//👇 Each story then reuses that template
export const Introdução = ()=>{
  return(
    <main>
      <h1 style={{fontWeight:'bold',fontSize:'20px'}}>
         Olá,seja bem vindo a uma breve explicação sobre o componente Table.
      </h1>
      <h2 style={{marginTop:'8px'}}>
        O Componente Table recebe cerca de 3 propriedades,São elas
      </h2>
      <ul style={{listStyle:'outside',margin:'8px 0px 0px 24px'}}>
       <li>
          <span style={{fontWeight:'bold'}}>Thead</span> (obrigátoria) <span style={{color:'red'}}>*</span> 
          <div>
            <p>
              Essa propriedade é referente ao cabeçalho da tabela.
              Você irá passar um array de objetos para essa propriedade. 
              Onde nesse objeto você será possível passar 4 propriedades. 
              São elas:
            </p>
            <ul style={{listStyle:'circle',margin:'8px 0px 0px 24px'}}>
              <li>
              <span style={{fontWeight:'bold'}}>th</span> (obrigátoria)
                <span style={{color:'red'}}>*</span> 
                <p>Com essa propriedade você define uma célula cabeçalho do grupo de células de sua tabela. </p>
              </li>
              <li>
              <span style={{fontWeight:'bold'}}>onClickOrderBy</span> (Opcional) 
                <p>
                  Você precisa ordernar os elementos da sua tabela? 
                  declare essa propriedade e passe uma uma função como seu valor e faça sua ordenação de elemento.
                </p>
              </li>
              <li>
                <span style={{fontWeight:'bold'}}>itemsMenuAction</span> (Opcional)   
                você precisa executar ações de forma gerais na tabela ? 
                use essa propriedade passando para ela um array de objetos e você criará um Dropdown. 
                Nesse Objeto é possível você declarar duas propriedade,são elas.
                <ul  style={{listStyle:'circle',margin:'8px 0px 0px 24px'}}>
                  <li>
                   <span style={{fontWeight:'bold'}}>label</span>  
                    <p>Adicione Essa propriedade,por meio dela você irá colocar um titulo na opção de ação</p>
                  </li>
                  <li>
                  <span style={{fontWeight:'bold'}}>onClickActionRight</span>
                   <p>Adicione uma função como valor dessa propriedade,e por meio dela você irá poderá executar uma ação</p>
                  </li>  
                </ul>  
              </li>
             </ul>
          </div>
       </li>
       <li >
        <span style={{fontWeight:'bold'}}>Tbody </span> (obrigátoria) <span style={{color:'red'}}>*</span> 
         <p>
           Essa propriedade é usada para agrupar o conteúdo do corpo em uma tabela HTML.
           Nela você irá passar um array de objetos,aonde nesse objeto irá conter a propriedade.
           <ul style={{listStyle:'circle',margin:'8px 0px 0px 24px'}}>
            <li>
              <span style={{fontWeight:'bold'}}> tr</span>(obrigátoria)
              <span style={{color:'red'}}>*</span> 
              <p>
                A propriedade  (tr) define uma linha em uma tabela HTML.
                nessa propriedade você irá passar um array de objetos,aonde nesse objeto irá conter a propriedade.
                <ul style={{listStyle:'circle',margin:'8px 0px 0px 24px'}}>
                  <li>
                   <span style={{fontWeight:'bold'}}>td</span>(obrigátoria)
                   <span style={{color:'red'}}>*</span> 
                    <p>
                      A propriedade (td) define uma célula de dados padrão em uma tabela.
                      Nesse propriedade será possível passar um objeto,veja abaixo quais propriedades será possível passar.
                      <ul style={{listStyle:'circle',margin:'8px 0px 0px 24px'}}>
                        <li>
                           <span style={{fontWeight:'bold'}}>variant</span>(obrigátoria)
                           <span style={{color:'red'}}>*</span> 
                           <p>Propriedade que define o tipo daquela celula,sãos essas as variações:</p>
                           <ul style={{listStyle:'circle',margin:'8px 0px 0px 24px'}}>
                            <li>
                              <span style={{fontWeight:'bold'}}>blank:</span>Célula em branco
                            </li>
                            <li>
                             <span style={{fontWeight:'bold'}}> checkbox:</span>Célula com um checkbox
                             <p>
                                Quando selecionar esse tipo de variant,adicione também as propriedades,
                                checked:(opcional),onChange,e value
                              </p>
                             </li>
                             <li>
                               <span style={{fontWeight:'bold'}}> progressbar:</span>Célula com uma barra de progresso
                               <p>
                                Adicione uma propriedade chamada progressbar.  <br />
                                Adicione um número como progresso.
                              </p>
                            </li>
                            <li>
                             <span style={{fontWeight:'bold'}}>text:</span>Célula com texto
                             <p>Adicione a propriedade (text) e escreva o texto que quiser</p> 
                            </li> 
                           <li>
                             <span style={{fontWeight:'bold'}}> textSticker:</span>Célular com  um componente Sticker e um texto abaixo
                             <p>
                               Obs:Vá Documentação do component Sticker e veja mais sobre esse componente. <br />
                              Adicione a propriedade text.
                            </p> 
                           </li>

                         <li>
                           <span style={{fontWeight:'bold'}}> label:</span>Célula com um marcador de texto com cor.
                           <p>
                             Acesse o componente Label e veja mais sobre. <br />
                              Adicione a propriedade text
                           </p>
                        </li>
                        <li>
                           <span style={{fontWeight:'bold'}}> button:</span>Célula com um botão.
                           <p>
                             Adicione a propiedade onClick e adicione uma ação a este botão,
                             bem como adicone a propriedade text para adicionar uma label a esse botão
                      
                           </p>
                        </li>
                        <li>
                           <span style={{fontWeight:'bold'}}> sticker:</span>Célula com um Sticker.
                           <p>
                             obs:Acesse a aba de Sticker,e veja mais sobre esse componente.
                           </p>
                        </li>
                        <li>
                           <span style={{fontWeight:'bold'}}> action:</span>Célula com um algumas ações.
                           <p>
                             Adicione também as propriedades 
                             (onClickInfo)- opcional(passe uma função,e execute alguma ação),<br />
                             (onClickCopy)- opcional(passe uma função,e execute alguma ação),<br />
                             (onClickDelete)- opcional(passe uma função,e execute alguma ação),<br />
                             itemsMenuAction-opcional,<br/> 
                             use essa propriedade passando para ela um array de objetos e você criará um Dropdown. 
                             Nesse Objeto é possível você declarar duas propriedade,são elas.
                           </p>
                        </li>
                        <li>
                           <span style={{fontWeight:'bold'}}> input:</span>Célula com um input.
                           <p>
                             Adicione as propriedades de onChange e value.
                           </p>
                        </li>
                        <li>
                           <span style={{fontWeight:'bold'}}> toggle:</span>Célula com um um switch.
                           <p>
                             Adicione as propriedades value e onChange.
                           </p>
                        </li>
                        <li>
                           <span style={{fontWeight:'bold'}}> badge:</span>Célula com um Badge
                           <p>
                             obs:Acesse a aba de Badge,e veja mais sobre esse componente. <br />
                             Adicione a propriedade text.
                           </p>
                        </li>
                        <li>
                           <span style={{fontWeight:'bold'}}> icon:</span>Célula com um icone
                           <p>
                              Adicione o nome a propriedade (icon) <br />
                               Icones do FontAwsome, passar somente o nome.
                           </p>
                          </li>
                         </ul>
                        </li>    
                      </ul>
                    </p>
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <span style={{fontWeight:'bold'}}> trKey</span>(obrigátoria)
              <span style={{color:'red'}}>*</span> 
              <p>
                 Passe um  valor único como valor dessa propriedade;
              </p>
            </li>
           </ul>
         </p>
       </li>
       <li>
        <span style={{fontWeight:'bold'}}>onChangeItemsSelected</span> (obrigátoria) <span style={{color:'red'}}>*</span> 
        <p>
          Passe uma função com argumento como valor para essa propriedade,e recupere todos os items selecionados da tabela.
        </p>
      </li>
      </ul>
    </main>
  )
}


//👇 Each story then reuses that template
export const Default = Template.bind({});


