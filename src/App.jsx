import { useState } from 'react'

export default function App() {
  
  const [comentarios, setComentarios] = useState([])
  const [autor, setAutor] = useState('')
  const [conteudo, setConteudo] = useState('')

  const attEnvio = (e) => {
    e.preventDefault()
    
    const novoComentario = {
      id: Math.floor(Math.random() * 100000),
      autor: autor,
      conteudo: conteudo,
      criadoEm: new Date()
    }

    setComentarios(state => [novoComentario, ...state])
    setAutor('')
    setConteudo('')
  }
  
  return (
    <div id="app">
      <h2>Seção de Comentários</h2>

      <form onSubmit={attEnvio}>
        <label htmlFor="autor">Email:</label>
        <input type="text" id="autor" value={autor} onChange={(e) => setAutor(e.target.value)} required />

        <label htmlFor="conteudo">Comentário:</label>
        <textarea id="conteudo" cols="30" rows="6" value={conteudo} onChange={(e) => setConteudo(e.target.value)}></textarea>

        <button>Enviar comentário</button>
      </form>

      <hr />

      <section id="comentarios">
        {comentarios.length > 0 ? (
          comentarios.map((comentario) => (
            <div key={comentario.id}>
              <h3>{comentario.autor}</h3>
              <span>Em {comentario.criadoEm.toLocaleString()}</span>
              <p>{comentario.conteudo}</p>
            </div>
          ))) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </section>
    </div>
  )
}