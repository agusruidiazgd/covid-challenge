import axios from 'axios';

const baseCountries = 'http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries';
const baseInfected = 'http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/infected';

export const getCountries = async () => {
    try {
        const res = await axios.get(baseCountries);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - getCountries: ${err}`);
    }
}

export const getInfected = async () => {
    try {
        const res = await axios.get(baseInfected);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - getInfected: ${err}`);
    }
}