import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueInstrumentSongArgs } from "./args/FindUniqueInstrumentSongArgs";
import { InstrumentSong } from "../../../models/InstrumentSong";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => InstrumentSong)
export class FindUniqueInstrumentSongResolver {
  @TypeGraphQL.Query(_returns => InstrumentSong, {
    nullable: true
  })
  async instrumentSong(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueInstrumentSongArgs): Promise<InstrumentSong | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).instrumentSong.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
