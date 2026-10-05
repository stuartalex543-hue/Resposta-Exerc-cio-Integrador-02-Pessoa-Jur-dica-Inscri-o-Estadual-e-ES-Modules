// objetos/IE.mjs

import PJ from '../pessoas/PJ.mjs';


// ======================================================
// 1. CLASSE IEclss
// ======================================================

class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    constructor(numero, estado, dataRegistro) {
        this.#numero = '';
        this.#estado = '';
        this.#dataRegistro = null;
        this.#pj = null;

        this.setNumero(numero);
        this.setEstado(estado);
        this.setDataRegistro(dataRegistro);
    }

    setNumero(numero) {
        if (
            typeof numero === 'string' &&
            numero.trim() !== ''
        ) {
            this.#numero = numero.trim();
            return true;
        }

        return false;
    }

    getNumero() {
        return this.#numero;
    }

    setEstado(estado) {
        if (
            typeof estado === 'string' &&
            estado.trim() !== ''
        ) {
            this.#estado = estado.trim();
            return true;
        }

        return false;
    }

    getEstado() {
        return this.#estado;
    }

    setDataRegistro(data) {
        if (data instanceof Date && !isNaN(data.getTime())) {
            this.#dataRegistro = data;
            return true;
        }

        return false;
    }

    getDataRegistro() {
        return this.#dataRegistro;
    }

    setPJ(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
            return true;
        }

        return false;
    }

    getPJ() {
        return this.#pj;
    }
}


// ======================================================
// 2. FUNÇÃO FÁBRICA IEfunc()
// ======================================================

function IEfunc(numero, estado, dataRegistro) {

    let numeroInterno = '';
    let estadoInterno = '';
    let dataRegistroInterna = null;
    let pjInterno = null;

    function setNumero(numero) {
        if (
            typeof numero === 'string' &&
            numero.trim() !== ''
        ) {
            numeroInterno = numero.trim();
            return true;
        }

        return false;
    }

    function getNumero() {
        return numeroInterno;
    }

    function setEstado(estado) {
        if (
            typeof estado === 'string' &&
            estado.trim() !== ''
        ) {
            estadoInterno = estado.trim();
            return true;
        }

        return false;
    }

    function getEstado() {
        return estadoInterno;
    }

    function setDataRegistro(data) {
        if (data instanceof Date && !isNaN(data.getTime())) {
            dataRegistroInterna = data;
            return true;
        }

        return false;
    }

    function getDataRegistro() {
        return dataRegistroInterna;
    }

    function setPJ(pj) {
        if (pj instanceof PJ) {
            pjInterno = pj;
            return true;
        }

        return false;
    }

    function getPJ() {
        return pjInterno;
    }

    setNumero(numero);
    setEstado(estado);
    setDataRegistro(dataRegistro);

    return {
        setNumero,
        getNumero,
        setEstado,
        getEstado,
        setDataRegistro,
        getDataRegistro,
        setPJ,
        getPJ
    };
}


// ======================================================
// 3. OBJETO LITERAL IEjson
// ======================================================

const IEjson = {
    numero: '',
    estado: '',
    dataRegistro: null,
    pj: null,

    setNumero(numero) {
        if (
            typeof numero === 'string' &&
            numero.trim() !== ''
        ) {
            this.numero = numero.trim();
            return true;
        }

        return false;
    },

    getNumero() {
        return this.numero;
    },

    setEstado(estado) {
        if (
            typeof estado === 'string' &&
            estado.trim() !== ''
        ) {
            this.estado = estado.trim();
            return true;
        }

        return false;
    },

    getEstado() {
        return this.estado;
    },

    setDataRegistro(data) {
        if (data instanceof Date && !isNaN(data.getTime())) {
            this.dataRegistro = data;
            return true;
        }

        return false;
    },

    getDataRegistro() {
        return this.dataRegistro;
    },

    setPJ(pj) {
        if (pj instanceof PJ) {
            this.pj = pj;
            return true;
        }

        return false;
    },

    getPJ() {
        return this.pj;
    }
};


// ======================================================
// EXPORTAÇÕES
// ======================================================

// Exportação padrão
export default IEclss;

// Exportações nomeadas
export {
    IEfunc,
    IEjson
};