import axios from "axios"

const URI = "http://localhost:3000/retiradas";

 async function listar() {
    const response = await axios.get(URI);
    return response.data;
}

async function inserir(retirada: any) {
    const response = await axios.post(URI, retirada);
    return response.data;
}

async function buscarPorId(id: string) {
    const response = await axios.get(`${URI}/${id}`);
    return response.data;
}

async function atualizar(id: string, retirada: any) {
    const response = await axios.put(`${URI}/${id}`, retirada);
    return response.data;
}

async function deletar(id: string) {
    const response = await axios.delete(`${URI}/${id}`);
    return response.data;
}

export default {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}