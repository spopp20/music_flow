import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneInstrumentSongArgs } from "./args/CreateOneInstrumentSongArgs";
import { InstrumentSong } from "../../../models/InstrumentSong";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => InstrumentSong)
export class CreateOneInstrumentSongResolver {
  @TypeGraphQL.Mutation(_returns => InstrumentSong, {
    nullable: false
  })
  async createOneInstrumentSong(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneInstrumentSongArgs): Promise<InstrumentSong> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).instrumentSong.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
