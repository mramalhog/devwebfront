import { createContext, useContext } from "react";

const Contexto = createContext({} as ContextoProps);

export default function App() {

  return (
    <Provedor>
      <A />
    </Provedor>
  );
}

function A(){
  return (
    <>
      <p>A</p>
      <B />
    </>
  );
}

function B(){
  return (
    <>
      <p>B</p>
      <C />
    </>
  );
}

function C(){
  //const {nro} = useContext(Contexto);
  const {nro} = useIsso();
  return (
    <>
      <p>C {nro}</p>
    </>
  );
}

interface ContextoProps{
  nro: number;
}

function Provedor ({children}:any){
  const nro = 20;

  return (
    <Contexto.Provider value={{nro}}>
      {children}
    </Contexto.Provider>
  );
}

function useIsso(){
  return useContext(Contexto);
}