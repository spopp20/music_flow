import { objectType } from 'nexus';

export const Event = objectType({
  name: 'Event',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
    t.nonNull.boolean('active');
    t.nullable.string('description');
    t.nullable.string('venue');
    t.nullable.string('location');
    t.nullable.string('notes');
    t.nullable.string('telephone');
    t.nonNull.dateTime('createdAt');
    t.nonNull.dateTime('updatedAt');
  }
});
