import * as TypeGraphQL from "type-graphql";
import { EventSong } from "../../../models/EventSong";
import { InstrumentSong } from "../../../models/InstrumentSong";
import { Song } from "../../../models/Song";
import { SongTags } from "../../../models/SongTags";
import { SongEventsArgs } from "./args/SongEventsArgs";
import { SongInstrumentsArgs } from "./args/SongInstrumentsArgs";
import { SongTagsArgs } from "./args/SongTagsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Song)
export class SongRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [SongTags], {
    nullable: false
  })
  async tags(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongTagsArgs): Promise<SongTags[]> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).tags(args);
  }

  @TypeGraphQL.FieldResolver(_type => [EventSong], {
    nullable: false
  })
  async events(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongEventsArgs): Promise<EventSong[]> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).events(args);
  }

  @TypeGraphQL.FieldResolver(_type => [InstrumentSong], {
    nullable: false
  })
  async instruments(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongInstrumentsArgs): Promise<InstrumentSong[]> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).instruments(args);
  }
}
