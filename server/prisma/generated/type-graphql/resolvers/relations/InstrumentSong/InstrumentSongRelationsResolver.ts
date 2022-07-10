import * as TypeGraphQL from "type-graphql";
import { Instrument } from "../../../models/Instrument";
import { InstrumentSong } from "../../../models/InstrumentSong";
import { Song } from "../../../models/Song";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => InstrumentSong)
export class InstrumentSongRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Instrument, {
    nullable: true
  })
  async instruments(@TypeGraphQL.Root() instrumentSong: InstrumentSong, @TypeGraphQL.Ctx() ctx: any): Promise<Instrument | null> {
    return getPrismaFromContext(ctx).instrumentSong.findUnique({
      where: {
        id: instrumentSong.id,
      },
    }).instruments({});
  }

  @TypeGraphQL.FieldResolver(_type => Song, {
    nullable: true
  })
  async songs(@TypeGraphQL.Root() instrumentSong: InstrumentSong, @TypeGraphQL.Ctx() ctx: any): Promise<Song | null> {
    return getPrismaFromContext(ctx).instrumentSong.findUnique({
      where: {
        id: instrumentSong.id,
      },
    }).songs({});
  }
}
