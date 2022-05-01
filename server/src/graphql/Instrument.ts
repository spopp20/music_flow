import { objectType } from "nexus";

export const Instrument = objectType({
    name: "Instrument",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("name");
        t.nonNull.boolean("active");
        t.nullable.string("description");
        t.nonNull.dateTime("createdAt");
        t.nonNull.dateTime("updatedAt");
    },
});
