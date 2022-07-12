import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateInstrumentArgs } from "./args/AggregateInstrumentArgs";
import { Instrument } from "../../../models/Instrument";
import { AggregateInstrument } from "../../outputs/AggregateInstrument";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Instrument)
export class AggregateInstrumentResolver {
  @TypeGraphQL.Query(_returns => AggregateInstrument, {
    nullable: false
  })
  async aggregateInstrument(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInstrumentArgs): Promise<AggregateInstrument> {
    return getPrismaFromContext(ctx).instrument.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
