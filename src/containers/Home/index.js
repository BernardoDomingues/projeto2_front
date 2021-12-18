import Home from './Home'
import { MoviesProvider } from "providers/movies";

const index = () => <MoviesProvider><Home /></MoviesProvider>

export default index;
