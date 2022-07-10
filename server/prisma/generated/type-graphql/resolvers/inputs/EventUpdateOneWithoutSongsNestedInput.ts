import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateOrConnectWithoutSongsInput } from "../inputs/EventCreateOrConnectWithoutSongsInput";
import { EventCreateWithoutSongsInput } from "../inputs/EventCreateWithoutSongsInput";
import { EventUpdateWithoutSongsInput } from "../inputs/EventUpdateWithoutSongsInput";
import { EventUpsertWithoutSongsInput } from "../inputs/EventUpsertWithoutSongsInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateOneWithoutSongsNestedInput", {
  isAbstract: true
})
export class EventUpdateOneWithoutSongsNestedInput {
  @TypeGraphQL.Field(_type => EventCreateWithoutSongsInput, {
    nullable: true
  })
  create?: EventCreateWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => EventCreateOrConnectWithoutSongsInput, {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => EventUpsertWithoutSongsInput, {
    nullable: true
  })
  upsert?: EventUpsertWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: true
  })
  connect?: EventWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateWithoutSongsInput, {
    nullable: true
  })
  update?: EventUpdateWithoutSongsInput | undefined;
}
