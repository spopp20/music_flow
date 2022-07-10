import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateInstrumentSongArgs } from "./args/AggregateInstrumentSongArgs";
import { InstrumentSong } from "../../../models/InstrumentSong";
import { AggregateInstrumentSong } from "../../outputs/AggregateInstrumentSong";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => InstrumentSong)
export class AggregateInstrumentSongResolver {
  @TypeGraphQL.Query(_returns => AggregateInstrumentSong, {
    nullable: false
  })
  async aggregateInstrumentSong(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInstrumentSongArgs): Promise<AggregateInstrumentSong> {
    return getPrismaFromContext(ctx).instrumentSong.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
