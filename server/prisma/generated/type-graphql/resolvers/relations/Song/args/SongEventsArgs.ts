import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventSongOrderByWithRelationInput } from "../../../inputs/EventSongOrderByWithRelationInput";
import { EventSongWhereInput } from "../../../inputs/EventSongWhereInput";
import { EventSongWhereUniqueInput } from "../../../inputs/EventSongWhereUniqueInput";
import { EventSongScalarFieldEnum } from "../../../../enums/EventSongScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class SongEventsArgs {
  @TypeGraphQL.Field(_type => EventSongWhereInput, {
    nullable: true
  })
  where?: EventSongWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EventSongOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EventSongOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EventSongWhereUniqueInput, {
    nullable: true
  })
  cursor?: EventSongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EventSongScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "eventId" | "songId"> | undefined;
}
