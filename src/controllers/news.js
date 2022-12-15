import News from '../models/News.js';
import {
    existNews,
    validateProps,
} from '../utils/validations.js';

const controller = {
    list: async (req, res) => {
        const rows = await News.find();
        res.status(200).json(rows);
    },
    get: async (req, res) => {
        const id = req.params.id;
        const exist = await existNews(id);

        if (!exist) {
            res.status(500).json({
                error: `El reporte con id ${id} no existe.`,
            });
        }

        const news = await News.findById(id);
        res.status(200).json(news);
    },
    create: async (req, res) => {
        const isValid = validateProps(req.body);

        if (isValid.res) {
            const newNews = new News(req.body);
            const insert = await newNews.save();

            res.status(200).json(insert);
        } else {
            res.status(500).json({
                error: isValid.error,
            });
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        const isValid = validateProps(req.body);

        if (!isValid.res) {
            res.status(500).json({
                error: isValid.error,
            });
            return;
        }

        const exist = await existNews(id);
        if (!exist) {
            res.status(500).json({
                error: 'El reporte no existe.',
            });
            return;
        }

        const update = await News.findByIdAndUpdate(id, req.body);
        res.status(200).json(update);
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const exist = await existNews(id);
        if (!exist) {
            res.status(500).json({
                error: `El reporte con id ${id} no existe.`,
            });
        }
        const response = await News.findByIdAndDelete(id);
        res.status(200).json(response);
    },
};


export default controller;
