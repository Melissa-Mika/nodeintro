import chalk from 'chalk';
import axios from 'axios';

console.log(chalk.blue('Hello world!'));
import scripts from './scripts.js';
import {configs} from '.scripts.js';

scripts();
configs();

import {config} from 'dotenv';
import {console} from 'console';
config()
console.log(process.env.API_KEY);

let api_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=cd68dac4dd30c317aa425410192f2177&language=en-US&page=1")
.then (res.data)

