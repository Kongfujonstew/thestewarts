import { graphql } from '../api';

export const loadAdminData = () => graphql(`{ loadAdminData { songs { id title } } }`);
