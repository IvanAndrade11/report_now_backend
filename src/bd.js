import { DB_USER, DB_PASSWORD, DB_CLUSTER, DB_NAME } from "./config.js";

import mongoose from 'mongoose';

export const bd = mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.tsyrii4.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

