import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEventSongArgs } from "./args/AggregateEventSongArgs";
import { EventSong } from "../../../models/EventSong";
import { AggregateEventSong } from "../../outputs/AggregateEventSong";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EventSong)
export class AggregateEventSongResolver {
  @TypeGraphQL.Query(_returns => AggregateEventSong, {
    nullable: false
  })
  async aggregateEventSong(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEventSongArgs): Promise<AggregateEventSong> {
    return getPrismaFromContext(ctx).eventSong.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
