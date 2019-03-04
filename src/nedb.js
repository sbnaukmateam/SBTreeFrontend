import Datastore from 'nedb';
import { promisifyAll } from './util';

const ensureMultipleDefaultIndexes = (collection, fields) => Promise.all(
  fields.map(field => collection.ensureIndex({ [field]: 1 })),
);

const members = promisifyAll(new Datastore());

export const db = { members };

export const ensureIndexes = async () => {
  await ensureMultipleDefaultIndexes(members, [
    'id', 'name', 'surname', 'nickName', 'avatar',
    'degrees.year', 'degrees.faculty', 'degrees.speciality', 'degrees.program',
    'patronId', 'birthday', 'phones', 'profiles', 'emails',
    'positions.years', 'positions.name', 'interests',
  ]);
};
