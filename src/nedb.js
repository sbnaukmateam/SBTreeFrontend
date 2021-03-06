import Datastore from 'nedb';
import { promisifyAll } from './util';

promisifyAll(Datastore.prototype);

const ensureMultipleDefaultIndexes = (collection, fields) => Promise.all(
  fields.map(field => collection.ensureIndex({ [field]: 1 })),
);

const members = new Datastore();

export const db = { members };

export const ensureIndexes = async () => {
  await ensureMultipleDefaultIndexes(members, [
    'id', 'name', 'surname', 'nickName', 'avatar',
    'degrees.year', 'degrees.facultyId', 'degrees.specialityId', 'degrees.programId',
    'patronId', 'birthday', 'phones', 'profiles', 'emails',
    'positions.years', 'positions.name', 'interests',
  ]);
};
