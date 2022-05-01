import { objectType } from "nexus";

  export const Session = objectType({
      name: "Session",
      definition(t) {
          t.nonNull.int("id");
          t.nonNull.dateTime("expiresAt");
          t.nonNull.dateTime("createdAt");
          t.nonNull.dateTime("updatedAt");
          t.nullable.string("hashedSessionToken");
          t.nullable.int("userId");
          t.nullable.string("publicData");
          t.nullable.string("privateData");
      },
  });