import Entrada from "./Entrada";
import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id ?? null;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? <Entrada somenteLeitura texto="Código" valor={id}></Entrada> : null}
      <Entrada valorMudou={setNome} texto="Nome" valor={nome}></Entrada>
      <Entrada
        valorMudou={setIdade}
        texto="Idade"
        tipo="number"
        valor={idade}
      ></Entrada>
      <div className="mt-3 flex justify-end">
        <Botao
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
          className="mr-2"
          cor="blue"
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado} cor="gray">
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
