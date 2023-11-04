import { unauthorized, forbidden } from '@hapi/boom';
import { API_KEY } from '../config.js';

export function checkApiKey(req, res, next){
    const apiKey = req.headers['api-key'];
    apiKey === API_KEY 
        ? next() 
        : res.status(401).send(unauthorized('Invalid api-key').output.payload);
}

export function checkRole(req, res, next){
    req.user.admin
        ? next()
        : res.status(403).send(forbidden('Administrator permissions are required').output.payload);
}