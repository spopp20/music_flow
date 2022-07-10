import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsAvgAggregate } from "../outputs/SongTagsAvgAggregate";
import { SongTagsCountAggregate } from "../outputs/SongTagsCountAggregate";
import { SongTagsMaxAggregate } from "../outputs/SongTagsMaxAggregate";
import { SongTagsMinAggregate } from "../outputs/SongTagsMinAggregate";
import { SongTagsSumAggregate } from "../outputs/SongTagsSumAggregate";

@TypeGraphQL.ObjectType("AggregateSongTags", {
  isAbstract: true
})
export class AggregateSongTags {
  @TypeGraphQL.Field(_type => SongTagsCountAggregate, {
    nullable: true
  })
  _count!: SongTagsCountAggregate | null;

  @TypeGraphQL.Field(_type => SongTagsAvgAggregate, {
    nullable: true
  })
  _avg!: SongTagsAvgAggregate | null;

  @TypeGraphQL.Field(_type => SongTagsSumAggregate, {
    nullable: true
  })
  _sum!: SongTagsSumAggregate | null;

  @TypeGraphQL.Field(_type => SongTagsMinAggregate, {
    nullable: true
  })
  _min!: SongTagsMinAggregate | null;

  @TypeGraphQL.Field(_type => SongTagsMaxAggregate, {
    nullable: true
  })
  _max!: SongTagsMaxAggregate | null;
}
