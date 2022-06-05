import { objectType } from 'nexus';

export const Song = objectType({
  name: 'Song',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('title');
    t.nonNull.boolean('active');
    t.nonNull.dateTime('createdAt');
    t.nonNull.dateTime('updatedAt');
    t.nullable.string('alias');
    t.nullable.string('startKey');
    t.nullable.int('tempoCd');
    t.nullable.string('startWords');
    t.nullable.string('arrangement');
    t.nullable.string('tags');
  }
});
