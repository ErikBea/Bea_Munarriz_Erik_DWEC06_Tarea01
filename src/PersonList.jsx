import { useEffect, useState } from "react"; //Componentes de react que voya utilizar
import { Person } from "./Person"; //Importo Person

//Contendio de la página (Lista de empleados o boton de contratar)
export function PersonList() {
    //Lista de personas
    const [persons, setPersons] = useState([]);

    //Funcion asincrona que obtiene una lista aleatoria de personas (5-10) y lo almacena en el useState
    const fetchPersons = async () => {
        const random = Math.floor(Math.random() * 6) + 5;
        const response = await fetch(
            "https://randomuser.me/api/?results=" + random
        );
        const json = await response.json();

        setPersons(json["results"]);
    };

    //Carga una vez al iniciarse el obtener empleados, luego carga el contenido por alterar useState
    useEffect(() => {
        fetchPersons();
    }, []);

    //Funcion del boton del empleado para eliminarlo, asigno el correo como identificador
    function removePerson(email) {
        //Creo una nueva lista sin ese elemento y se actualiza el elemento
        const newPersons = persons.filter((person) => person.email !== email);
        setPersons(newPersons);
    }

    //Lista de personas
    let personsHTML = [];
    //Creo un elemento Person por cada elemento del json y le paso la funcion de eliminarse a si mismo
    persons.forEach((person) => {
        //El email es la clave porque es el único valor único que he encontrado (el id en algunos casos no existe por lo tanto no es posible)
        personsHTML.push(<Person key={person["email"]} image={person["picture"]["medium"]} name={person["name"]["first"] + " " + person["name"]["last"]} 
            email={person["email"]} phone={person["phone"]} clickEvent={() => removePerson(person["email"])} />);
    });

    //Regreso un contenido u otro segun el contexto.
    //Si no hay empleados muestro el mensaje de que no hay, y si los hay mustro la cantidad
    //Luego muestro la lista de empleados y en caso de ser 0 un botn para volver a ejecutar la cuncion de fetchPersons
    return (
        <>
            <h3>{persons.length == 0 ? "No hay más empledos en la empresa" : `Tenemos una plantilla de ${persons.length} trabajadores`}</h3>
            {personsHTML}
            {persons.length == 0 ? <button className="contratar" onClick={fetchPersons}>Contratar</button> : <></>}
        </>
    );
}
