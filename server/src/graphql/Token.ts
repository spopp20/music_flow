import { objectType } from "nexus";

  export const Token = objectType({
      name: "Token",
      definition(t) {
          t.nonNull.int("id");
          t.nonNull.string("title");
          t.nonNull.string("hashedToken");
          t.nonNull.string("sentTo");
          t.nonNull.int("userId");
          t.nonNull.dateTime("createdAt");
          t.nonNull.dateTime("updatedAt");
      },
  });
