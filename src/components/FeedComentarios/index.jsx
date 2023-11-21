import styles from './styles.module.css'

export default function FeedComentarios() {

    const attSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className={styles.container}>
            <h2>Seção de Comentários</h2>

            <div className={styles.boxComentarios}>
                <form action={attSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />

                    <label htmlFor="comentario">Comentario:</label>
                    <textarea name="comentario" id="comentario" cols="30" rows="7"></textarea>

                    <button type='submit'>Enviar comentário</button>
                </form>

                <hr />

                <p>Seja o primeiro a comentar!</p>
            </div>
        </div>
    )
}