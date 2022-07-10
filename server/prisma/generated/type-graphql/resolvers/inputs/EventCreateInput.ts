import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongCreateNestedManyWithoutEventInput } from "../inputs/EventSongCreateNestedManyWithoutEventInput";

@TypeGraphQL.InputType("EventCreateInput", {
  isAbstract: true
})
export class EventCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  active!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  venue?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  telephone?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDateTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => EventSongCreateNestedManyWithoutEventInput, {
    nullable: true
  })
  songs?: EventSongCreateNestedManyWithoutEventInput | undefined;
}
