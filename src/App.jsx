import ReactDOM from "react-dom/client" //Importo reactdom para mostrar app en el HTML
import { PersonList } from "./PersonList.jsx" //PersonList que contiene la lista de personas
import "./index.css" //Estilos para la hoja

//JSX que se va a mostrar en el index.html
export function App(){
    return(
    <main>
        <section className="container">
            <PersonList />
        </section>
    </main>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root")); //Asigno el elemento con ID root para ReactDOM
root.render(<App />); //Muestro el contenido en el root