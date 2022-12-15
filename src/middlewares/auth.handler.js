import { unauthorized } from '@hapi/boom';

export function checkApiKey(req, res, next){
	const apiKey = req.headers['api-key'];
	apiKey === 'ivan' ? next() : res.status(401).send(unauthorized('Invalid api-key').output.payload);
}