import { STORAGE_KEYS } from './constants';

const Loggedin = () => localStorage.getItem(STORAGE_KEYS.IS_LOGGED_IN) === 'true';

export default Loggedin;
