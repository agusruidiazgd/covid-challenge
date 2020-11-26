import axios from 'axios';

const baseCountries = 'http://5e693ec6d426c00016b7ec9e.mockapi.io/CV1/countries';

export const getCountries = async () => {
    try {
        const res = await axios.get(baseCountries);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - getCountries: ${err}`);
    }
}