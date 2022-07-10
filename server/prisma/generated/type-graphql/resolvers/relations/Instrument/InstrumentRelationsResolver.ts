import * as TypeGraphQL from "type-graphql";
import { Instrument } from "../../../models/Instrument";
import { InstrumentSong } from "../../../models/InstrumentSong";
import { InstrumentSongsArgs } from "./args/InstrumentSongsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Instrument)
export class InstrumentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [InstrumentSong], {
    nullable: false
  })
  async songs(@TypeGraphQL.Root() instrument: Instrument, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: InstrumentSongsArgs): Promise<InstrumentSong[]> {
    return getPrismaFromContext(ctx).instrument.findUnique({
      where: {
        id: instrument.id,
      },
    }).songs(args);
  }
}
