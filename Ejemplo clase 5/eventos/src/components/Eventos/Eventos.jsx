import React, { useState } from 'react';

const EventosReact = () => {
    const [mensaje, setMensaje] = useState('');
    //El state dragging lo utilizaremos solo para dar un estilo en este caso, si estamos moviendo un elemento, que se ponga mas oscuro mientras lo hacemos como hacen todas las paginas
    const [dragging, setDragging] = useState(false);

    const handleChange = (event) => {
        setMensaje(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Formulario enviado con mensaje: ' + mensaje);
    };


    const handleDragStart = (event) => {
        event.dataTransfer.setData('text/plain', 'Texto que coloco gracias al dragStart!!'); // Establecer el tipo y los datos que se están arrastrando
        console.log("Empezaste a arrastrar el elemento")
        setDragging(true);
    };

    const handleDragEnd = () => {
        setDragging(false);
        console.log("Terminaste de arrastrar el elemento")
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        console.log('Elemento soltado. Datos: ', data);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };


    return (

        <div>
            <div>
                <button onClick={() => console.log("CLICK")} onDoubleClick={() => console.log("DOUBLE CLICK")}>Evento Click</button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Mensaje:
                    <input type="text" value={mensaje} onChange={handleChange} />
                </label>
                <button type="submit">Enviar</button>
            </form>



            <h2>Evento copiar, pegar y cortar</h2>
            <div onCopy={() => alert('Texto copiado')} onCut={() => alert('Texto cortado')} onPaste={() => alert('Texto pegado')}>
                <textarea cols="30" rows="10"></textarea>
            </div>

            <div style={{ border: '1px solid black', height: '100px', overflow: 'auto' }} onScroll={() => console.log('Scrolleando')} >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur ab magni nesciunt, ipsum earum a debitis. Accusantium odit doloribus provident incidunt, itaque dolores asperiores officiis, reiciendis optio perferendis voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aspernatur inventore, veniam minus voluptatum enim minima molestiae dicta, assumenda eaque maxime consequatur. Quasi, est? Unde vero eveniet quod consequuntur autem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus dolorem exercitationem veniam repellendus. Reprehenderit saepe ut deleniti, magnam nulla adipisci veritatis eligendi. Labore in porro perferendis nemo unde iusto obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi minus culpa eos id impedit vel eligendi nesciunt deserunt, hic nihil totam nobis voluptas accusantium quo laborum repudiandae at nulla voluptatem.                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur ab magni nesciunt, ipsum earum a debitis. Accusantium odit doloribus provident incidunt, itaque dolores asperiores officiis, reiciendis optio perferendis voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aspernatur inventore, veniam minus voluptatum enim minima molestiae dicta, assumenda eaque maxime consequatur. Quasi, est? Unde vero eveniet quod consequuntur autem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus dolorem exercitationem veniam repellendus. Reprehenderit saepe ut deleniti, magnam nulla adipisci veritatis eligendi. Labore in porro perferendis nemo unde iusto obcaecati? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi minus culpa eos id impedit vel eligendi nesciunt deserunt, hic nihil totam nobis voluptas accusantium quo laborum repudiandae at nulla voluptatem.

            </div>
            <div>
                <h2>Arrastra y suelta el texto</h2>
                <div
                    /* Cuando el usuario empieza a arrastrar el elemento hacia otro lado*/
                    onDragStart={handleDragStart}
                    /* Cuando el usuario termina de arrastrar el elemento */
                    onDragEnd={handleDragEnd}
                    /* Cuando el usuario suelta un texto sobre el elemento que tenemos */
                    onDrop={handleDrop}
                    /* Al colocar onDragOver y poner el event.preventDefault() evitamos el comportamiento por defecto de la pagina que no nos deja arrastrar dentro de la misma*/
                    onDragOver={handleDragOver}
                    draggable // Hacer el elemento arrastrable
                    /* El opacity es donde uso el state dragging, si es true lo hago un poco mas transparente, sino lo muestro al 100% */
                    style={{ border: '1px dashed #ccc', padding: '10px', cursor: 'move', opacity: dragging ? 0.5 : 1 }}
                >
                    Drag me!
                </div>
            </div>
        </div>

    );
};

export default EventosReact;
