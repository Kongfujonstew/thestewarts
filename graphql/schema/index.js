import { buildSchema } from 'graphql';
import types from './types';
import inputs from './inputs';
import queries from './queries';
import mutations from './mutations';

export default buildSchema(`${types}${inputs}${queries}${mutations}`);
