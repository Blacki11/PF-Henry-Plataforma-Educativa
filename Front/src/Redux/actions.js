import {
    GET_STUDENTS,
    GET_PROFESORS,
    GET_MATERIAS,
    GET_MATERIAS_BY_ID,
    CLEAN_DETAIL,
    SET_USER_ROLE,
    CLEAR_USER_ROLE
} from "./actionsTypes"
import { profesors, students, materias } from "./Base de datos HC"


export const getStudents = () => {
    return {
        type: GET_STUDENTS,
        payload: students
    }
}

export const getProfesors = () => {
    return {
        type: GET_PROFESORS,
        payload: profesors
    }
}

export const getMaterias = () => {
    return {
        type: GET_MATERIAS,
        payload: materias
    }
}

export const getMateriasById = (id) => {
    return {
        type: GET_MATERIAS_BY_ID,
        payload: materias.filter(elem => elem.id === Number(id))
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
        payload: []
    }
}

export function clearUserRole() {
    return { type: CLEAR_USER_ROLE };
}

export const setUserRole = (role) => ({
    type: SET_USER_ROLE,
    payload: role,
});