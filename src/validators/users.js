import { check, validationResult  } from 'express-validator';

export const validateCreateUser = [
    check('user')
        .exists()
        .withMessage('El campo USER debe estar presente.')
        .isLength({ min: 3, max: 20 })
        .withMessage('Tamaño: min 3 - max 20'),
    check('name')
        .exists()
        .withMessage('El campo NAME debe estar presente.')
        .isLength({ min: 3, max: 30 })
        .withMessage('Tamaño: min 3 - max 30'),
    check('phone')
        .exists()
        .withMessage('El campo PHONE debe estar presente.')
        .custom((value) => {
            const n = parseInt(value);
            if (n <= 999999 || n >= 3999999999) {
                throw new Error('Número de teléfono inválido.');
            }
            return true;
        }),
    check('email')
        .exists()
        .withMessage('El campo EMAIL debe estar presente.')
        .isEmail()
        .withMessage('De ser un email válido.'),
    check('password')
        .exists()
        .withMessage('El campo PASSWORD debe estar presente.')
        .isLength({ min: 5 })
        .withMessage('La contraseña debe contener 5+ caracteres')
        .matches(/\d/)
        .withMessage('La contraseña debe contener al menos un numero'),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (err) {
            res.status(403).send({ errors: err.array() });
        }
    }
];