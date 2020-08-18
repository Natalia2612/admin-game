import { createStore } from "redux"

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Juan Carlitos",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        },
        {
            id: 2,
            nombre: "Beto Torres",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        },
        {
            id: 3,
            nombre: "Alejo Roman",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        },
        {
            id: 4,
            nombre: "Juan Perez",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        },
        {
            id: 5,
            nombre: "Alvaro Jose",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        },
        {
            id: 6,
            nombre: "Alexys Weber",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        },
        {
            id: 7,
            nombre: "Harold Rodriguez",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        },
        {
            id: 8,
            nombre: "Harold Saens",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        },
        {
            id: 9,
            nombre: "Harold Vilte",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        },
        {
            id: 10,
            nombre: "Andrés Torres",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        },
        {
            id: 11,
            nombre: "Ricardo Quintero",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        },
        {
            id: 12,
            nombre: "Deivis Maxis",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        },
        {
            id: 13,
            nombre: "Percy Turich",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        },
        {
            id: 14,
            nombre: "David Lozano",
            foto: "https://i.pinimg.com/originals/8c/bf/38/8cbf38ed5a8dbac4f8f5dd90bb7882d1.png"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {

    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "AGREGAR_SUPLENTE" ) {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if ( action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)