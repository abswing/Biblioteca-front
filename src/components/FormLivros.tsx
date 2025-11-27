import { useState, type ChangeEvent, type FormEvent } from "react";
import LivroApiService from "../service/LivroApiService";

export default function FormLivros() {
    const [nome, setNome] = useState("");
    const [autor, setAutor] = useState("");
    const [categoria, setCategoria] = useState("");

    function cadastrarLivro(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();        
        LivroApiService.inserir({
            nome: nome,
            autor: autor,
            categoria: categoria
        }).then(() => {
            alert(`Livro ${nome} adicionado com sucesso!`);
            setNome('');
            setAutor('');
            setCategoria('');
        }).catch((err) => {
            console.error(err);
            alert('Erro ao adicionar o livro. Veja o console para mais detalhes.');
        })
    }

    return (
        <form onSubmit={cadastrarLivro}>
            <label>Nome:</label>
            <input type="text" name="titulo" value={nome}
                onChange={(ev: ChangeEvent<HTMLInputElement>) => setNome(ev.target.value)} />
            <br />
            <label>Autor:</label>
            <input type="text" name="autor" value={autor}
                onChange={(ev: ChangeEvent<HTMLInputElement>) => setAutor(ev.target.value)} />
            <br />
            <label>Categoria:</label>
            <input type="text" name="categoria" value={categoria}
                onChange={(ev: ChangeEvent<HTMLInputElement>) => setCategoria(ev.target.value)} />
            <br />
            <input type="submit" value="Salvar" />
        </form>
    )

}