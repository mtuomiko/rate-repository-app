import React from 'react';

import AuthStorage from '../utils/authStorage';

const AuthStorageContext = React.createContext<AuthStorage | undefined>(undefined);

export default AuthStorageContext;