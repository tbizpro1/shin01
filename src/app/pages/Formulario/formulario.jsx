import React from "react";
import { useState } from "react";
import Register from "../Register/register";
import RegisterUm from "../RegisterUm/registerum";
import RegisterDois from "../RegisterDois/registerdois";
import RegisterTres from "../RegisterTres/registertres";
import RegisterQuatro from "../RegisterQuatro/registerquatro";
import { useForm } from "react-hook-form";
import Send from "../Send/send";

export default function Formulario() {
    const [passo, setPasso] = useState(1)
    const {register, handleSubmit, control} = useForm() // extrai propriedades

    // const calculateProgress = (currentStep: Number) => {
    //     switch (currentStep) {
    //         case 1:
    //             return 33;
    //         case 2: 
    //             return 66;
    //         case 3: 
    //             return 100;
    //         default: 
    //             return 0
    //     }
    // }

    const onSubmit = (data) => {
      console.log('dados do formulário: ', data)
    };

    const renderFormStep = () => {
        switch (passo) {
          case 1:
            console.log(passo)
            return  <Register setPasso={setPasso} register={register} />
          case 2: 
          console.log(passo)
            return  <RegisterUm setPasso={setPasso} register={register} />
          case 3: 
          console.log(passo)
            return  <RegisterDois setPasso={setPasso} register={register} />
          case 4: 
          console.log(passo)
            return  <RegisterTres setPasso={setPasso} register={register} control={control} />
          case 5: 
          console.log(passo)
            return  <RegisterQuatro setPasso={setPasso} register={register} />
          case 6: 
          console.log(passo)
            return  <Send setPasso={setPasso} register={register} onSubmit={handleSubmit(onSubmit)} />
          default:
            console.log(passo)
            return <Register setPasso={setPasso} register={register} />
          }
      }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}> {/* Associa o onSubmit ao form */}
            {renderFormStep()}
        </form>
        </>
    )
}