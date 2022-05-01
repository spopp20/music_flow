import { objectType } from "nexus";

export const User = objectType({
    name: "User",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("name");
        t.nonNull.string("email");
        t.nonNull.boolean("active");
        t.nonNull.dateTime("createdAt");
        t.nonNull.dateTime("updatedAt");
        t.nullable.string("hashedPassword");
    },
});
