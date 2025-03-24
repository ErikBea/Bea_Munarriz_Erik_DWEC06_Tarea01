//Elemento person, que contiene todos los tados de esta y un boton para se eliminado de la lista
export function Person({image, name, email, phone, clickEvent})
{
    return(
        <article className="person">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
          <button type='button' className='delete-btn' onClick={clickEvent}>
            <img src='/src/trash.png' />
          </button>
        </article>
    );
}