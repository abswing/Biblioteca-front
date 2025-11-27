interface Livro {
    id: number;
    nome: string;
    autor: string;
    categoria: string;
}

interface CardLivroProps {
    livro: Livro;
}

export default function CardLivro ({ livro }: CardLivroProps) {

    return (
        <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
            <div className="w3-card">
                <div className="w3-container w3-center">
                    <h3 className="w3-blue">
                        {livro.nome}
                    </h3>
                    <h5>{livro.autor}</h5>
                    <h5>{livro.categoria}</h5>
                </div>
            </div>
        </div>
    )
}