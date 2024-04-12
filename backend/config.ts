'use strict';

import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const {

    PORT,
    DATABASE_URL
} = process.env;

assert(PORT, 'PORT is Required');

const config = {
    port: PORT,
    database_url: DATABASE_URL
}

export default config;