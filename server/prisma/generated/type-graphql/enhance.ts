import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Event: crudResolvers.EventCrudResolver,
  EventSong: crudResolvers.EventSongCrudResolver,
  Instrument: crudResolvers.InstrumentCrudResolver,
  InstrumentSong: crudResolvers.InstrumentSongCrudResolver,
  Session: crudResolvers.SessionCrudResolver,
  Song: crudResolvers.SongCrudResolver,
  SongTags: crudResolvers.SongTagsCrudResolver,
  Tag: crudResolvers.TagCrudResolver,
  Token: crudResolvers.TokenCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Profile: crudResolvers.ProfileCrudResolver
};
const actionResolversMap = {
  Event: {
    aggregateEvent: actionResolvers.AggregateEventResolver,
    createManyEvent: actionResolvers.CreateManyEventResolver,
    createOneEvent: actionResolvers.CreateOneEventResolver,
    deleteManyEvent: actionResolvers.DeleteManyEventResolver,
    deleteOneEvent: actionResolvers.DeleteOneEventResolver,
    findFirstEvent: actionResolvers.FindFirstEventResolver,
    events: actionResolvers.FindManyEventResolver,
    event: actionResolvers.FindUniqueEventResolver,
    groupByEvent: actionResolvers.GroupByEventResolver,
    updateManyEvent: actionResolvers.UpdateManyEventResolver,
    updateOneEvent: actionResolvers.UpdateOneEventResolver,
    upsertOneEvent: actionResolvers.UpsertOneEventResolver
  },
  EventSong: {
    aggregateEventSong: actionResolvers.AggregateEventSongResolver,
    createManyEventSong: actionResolvers.CreateManyEventSongResolver,
    createOneEventSong: actionResolvers.CreateOneEventSongResolver,
    deleteManyEventSong: actionResolvers.DeleteManyEventSongResolver,
    deleteOneEventSong: actionResolvers.DeleteOneEventSongResolver,
    findFirstEventSong: actionResolvers.FindFirstEventSongResolver,
    eventSongs: actionResolvers.FindManyEventSongResolver,
    eventSong: actionResolvers.FindUniqueEventSongResolver,
    groupByEventSong: actionResolvers.GroupByEventSongResolver,
    updateManyEventSong: actionResolvers.UpdateManyEventSongResolver,
    updateOneEventSong: actionResolvers.UpdateOneEventSongResolver,
    upsertOneEventSong: actionResolvers.UpsertOneEventSongResolver
  },
  Instrument: {
    aggregateInstrument: actionResolvers.AggregateInstrumentResolver,
    createManyInstrument: actionResolvers.CreateManyInstrumentResolver,
    createOneInstrument: actionResolvers.CreateOneInstrumentResolver,
    deleteManyInstrument: actionResolvers.DeleteManyInstrumentResolver,
    deleteOneInstrument: actionResolvers.DeleteOneInstrumentResolver,
    findFirstInstrument: actionResolvers.FindFirstInstrumentResolver,
    instruments: actionResolvers.FindManyInstrumentResolver,
    instrument: actionResolvers.FindUniqueInstrumentResolver,
    groupByInstrument: actionResolvers.GroupByInstrumentResolver,
    updateManyInstrument: actionResolvers.UpdateManyInstrumentResolver,
    updateOneInstrument: actionResolvers.UpdateOneInstrumentResolver,
    upsertOneInstrument: actionResolvers.UpsertOneInstrumentResolver
  },
  InstrumentSong: {
    aggregateInstrumentSong: actionResolvers.AggregateInstrumentSongResolver,
    createManyInstrumentSong: actionResolvers.CreateManyInstrumentSongResolver,
    createOneInstrumentSong: actionResolvers.CreateOneInstrumentSongResolver,
    deleteManyInstrumentSong: actionResolvers.DeleteManyInstrumentSongResolver,
    deleteOneInstrumentSong: actionResolvers.DeleteOneInstrumentSongResolver,
    findFirstInstrumentSong: actionResolvers.FindFirstInstrumentSongResolver,
    instrumentSongs: actionResolvers.FindManyInstrumentSongResolver,
    instrumentSong: actionResolvers.FindUniqueInstrumentSongResolver,
    groupByInstrumentSong: actionResolvers.GroupByInstrumentSongResolver,
    updateManyInstrumentSong: actionResolvers.UpdateManyInstrumentSongResolver,
    updateOneInstrumentSong: actionResolvers.UpdateOneInstrumentSongResolver,
    upsertOneInstrumentSong: actionResolvers.UpsertOneInstrumentSongResolver
  },
  Session: {
    aggregateSession: actionResolvers.AggregateSessionResolver,
    createManySession: actionResolvers.CreateManySessionResolver,
    createOneSession: actionResolvers.CreateOneSessionResolver,
    deleteManySession: actionResolvers.DeleteManySessionResolver,
    deleteOneSession: actionResolvers.DeleteOneSessionResolver,
    findFirstSession: actionResolvers.FindFirstSessionResolver,
    sessions: actionResolvers.FindManySessionResolver,
    session: actionResolvers.FindUniqueSessionResolver,
    groupBySession: actionResolvers.GroupBySessionResolver,
    updateManySession: actionResolvers.UpdateManySessionResolver,
    updateOneSession: actionResolvers.UpdateOneSessionResolver,
    upsertOneSession: actionResolvers.UpsertOneSessionResolver
  },
  Song: {
    aggregateSong: actionResolvers.AggregateSongResolver,
    createManySong: actionResolvers.CreateManySongResolver,
    createOneSong: actionResolvers.CreateOneSongResolver,
    deleteManySong: actionResolvers.DeleteManySongResolver,
    deleteOneSong: actionResolvers.DeleteOneSongResolver,
    findFirstSong: actionResolvers.FindFirstSongResolver,
    songs: actionResolvers.FindManySongResolver,
    song: actionResolvers.FindUniqueSongResolver,
    groupBySong: actionResolvers.GroupBySongResolver,
    updateManySong: actionResolvers.UpdateManySongResolver,
    updateOneSong: actionResolvers.UpdateOneSongResolver,
    upsertOneSong: actionResolvers.UpsertOneSongResolver
  },
  SongTags: {
    aggregateSongTags: actionResolvers.AggregateSongTagsResolver,
    createManySongTags: actionResolvers.CreateManySongTagsResolver,
    createOneSongTags: actionResolvers.CreateOneSongTagsResolver,
    deleteManySongTags: actionResolvers.DeleteManySongTagsResolver,
    deleteOneSongTags: actionResolvers.DeleteOneSongTagsResolver,
    findFirstSongTags: actionResolvers.FindFirstSongTagsResolver,
    findManySongTags: actionResolvers.FindManySongTagsResolver,
    findUniqueSongTags: actionResolvers.FindUniqueSongTagsResolver,
    groupBySongTags: actionResolvers.GroupBySongTagsResolver,
    updateManySongTags: actionResolvers.UpdateManySongTagsResolver,
    updateOneSongTags: actionResolvers.UpdateOneSongTagsResolver,
    upsertOneSongTags: actionResolvers.UpsertOneSongTagsResolver
  },
  Tag: {
    aggregateTag: actionResolvers.AggregateTagResolver,
    createManyTag: actionResolvers.CreateManyTagResolver,
    createOneTag: actionResolvers.CreateOneTagResolver,
    deleteManyTag: actionResolvers.DeleteManyTagResolver,
    deleteOneTag: actionResolvers.DeleteOneTagResolver,
    findFirstTag: actionResolvers.FindFirstTagResolver,
    tags: actionResolvers.FindManyTagResolver,
    tag: actionResolvers.FindUniqueTagResolver,
    groupByTag: actionResolvers.GroupByTagResolver,
    updateManyTag: actionResolvers.UpdateManyTagResolver,
    updateOneTag: actionResolvers.UpdateOneTagResolver,
    upsertOneTag: actionResolvers.UpsertOneTagResolver
  },
  Token: {
    aggregateToken: actionResolvers.AggregateTokenResolver,
    createManyToken: actionResolvers.CreateManyTokenResolver,
    createOneToken: actionResolvers.CreateOneTokenResolver,
    deleteManyToken: actionResolvers.DeleteManyTokenResolver,
    deleteOneToken: actionResolvers.DeleteOneTokenResolver,
    findFirstToken: actionResolvers.FindFirstTokenResolver,
    tokens: actionResolvers.FindManyTokenResolver,
    token: actionResolvers.FindUniqueTokenResolver,
    groupByToken: actionResolvers.GroupByTokenResolver,
    updateManyToken: actionResolvers.UpdateManyTokenResolver,
    updateOneToken: actionResolvers.UpdateOneTokenResolver,
    upsertOneToken: actionResolvers.UpsertOneTokenResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Profile: {
    aggregateProfile: actionResolvers.AggregateProfileResolver,
    createManyProfile: actionResolvers.CreateManyProfileResolver,
    createOneProfile: actionResolvers.CreateOneProfileResolver,
    deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
    deleteOneProfile: actionResolvers.DeleteOneProfileResolver,
    findFirstProfile: actionResolvers.FindFirstProfileResolver,
    profiles: actionResolvers.FindManyProfileResolver,
    profile: actionResolvers.FindUniqueProfileResolver,
    groupByProfile: actionResolvers.GroupByProfileResolver,
    updateManyProfile: actionResolvers.UpdateManyProfileResolver,
    updateOneProfile: actionResolvers.UpdateOneProfileResolver,
    upsertOneProfile: actionResolvers.UpsertOneProfileResolver
  }
};
const crudResolversInfo = {
  Event: ["aggregateEvent", "createManyEvent", "createOneEvent", "deleteManyEvent", "deleteOneEvent", "findFirstEvent", "events", "event", "groupByEvent", "updateManyEvent", "updateOneEvent", "upsertOneEvent"],
  EventSong: ["aggregateEventSong", "createManyEventSong", "createOneEventSong", "deleteManyEventSong", "deleteOneEventSong", "findFirstEventSong", "eventSongs", "eventSong", "groupByEventSong", "updateManyEventSong", "updateOneEventSong", "upsertOneEventSong"],
  Instrument: ["aggregateInstrument", "createManyInstrument", "createOneInstrument", "deleteManyInstrument", "deleteOneInstrument", "findFirstInstrument", "instruments", "instrument", "groupByInstrument", "updateManyInstrument", "updateOneInstrument", "upsertOneInstrument"],
  InstrumentSong: ["aggregateInstrumentSong", "createManyInstrumentSong", "createOneInstrumentSong", "deleteManyInstrumentSong", "deleteOneInstrumentSong", "findFirstInstrumentSong", "instrumentSongs", "instrumentSong", "groupByInstrumentSong", "updateManyInstrumentSong", "updateOneInstrumentSong", "upsertOneInstrumentSong"],
  Session: ["aggregateSession", "createManySession", "createOneSession", "deleteManySession", "deleteOneSession", "findFirstSession", "sessions", "session", "groupBySession", "updateManySession", "updateOneSession", "upsertOneSession"],
  Song: ["aggregateSong", "createManySong", "createOneSong", "deleteManySong", "deleteOneSong", "findFirstSong", "songs", "song", "groupBySong", "updateManySong", "updateOneSong", "upsertOneSong"],
  SongTags: ["aggregateSongTags", "createManySongTags", "createOneSongTags", "deleteManySongTags", "deleteOneSongTags", "findFirstSongTags", "findManySongTags", "findUniqueSongTags", "groupBySongTags", "updateManySongTags", "updateOneSongTags", "upsertOneSongTags"],
  Tag: ["aggregateTag", "createManyTag", "createOneTag", "deleteManyTag", "deleteOneTag", "findFirstTag", "tags", "tag", "groupByTag", "updateManyTag", "updateOneTag", "upsertOneTag"],
  Token: ["aggregateToken", "createManyToken", "createOneToken", "deleteManyToken", "deleteOneToken", "findFirstToken", "tokens", "token", "groupByToken", "updateManyToken", "updateOneToken", "upsertOneToken"],
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Profile: ["aggregateProfile", "createManyProfile", "createOneProfile", "deleteManyProfile", "deleteOneProfile", "findFirstProfile", "profiles", "profile", "groupByProfile", "updateManyProfile", "updateOneProfile", "upsertOneProfile"]
};
const argsInfo = {
  AggregateEventArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEventArgs: ["data", "skipDuplicates"],
  CreateOneEventArgs: ["data"],
  DeleteManyEventArgs: ["where"],
  DeleteOneEventArgs: ["where"],
  FindFirstEventArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEventArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEventArgs: ["where"],
  GroupByEventArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEventArgs: ["data", "where"],
  UpdateOneEventArgs: ["data", "where"],
  UpsertOneEventArgs: ["where", "create", "update"],
  AggregateEventSongArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEventSongArgs: ["data", "skipDuplicates"],
  CreateOneEventSongArgs: ["data"],
  DeleteManyEventSongArgs: ["where"],
  DeleteOneEventSongArgs: ["where"],
  FindFirstEventSongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEventSongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEventSongArgs: ["where"],
  GroupByEventSongArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEventSongArgs: ["data", "where"],
  UpdateOneEventSongArgs: ["data", "where"],
  UpsertOneEventSongArgs: ["where", "create", "update"],
  AggregateInstrumentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyInstrumentArgs: ["data", "skipDuplicates"],
  CreateOneInstrumentArgs: ["data"],
  DeleteManyInstrumentArgs: ["where"],
  DeleteOneInstrumentArgs: ["where"],
  FindFirstInstrumentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyInstrumentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueInstrumentArgs: ["where"],
  GroupByInstrumentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyInstrumentArgs: ["data", "where"],
  UpdateOneInstrumentArgs: ["data", "where"],
  UpsertOneInstrumentArgs: ["where", "create", "update"],
  AggregateInstrumentSongArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyInstrumentSongArgs: ["data", "skipDuplicates"],
  CreateOneInstrumentSongArgs: ["data"],
  DeleteManyInstrumentSongArgs: ["where"],
  DeleteOneInstrumentSongArgs: ["where"],
  FindFirstInstrumentSongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyInstrumentSongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueInstrumentSongArgs: ["where"],
  GroupByInstrumentSongArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyInstrumentSongArgs: ["data", "where"],
  UpdateOneInstrumentSongArgs: ["data", "where"],
  UpsertOneInstrumentSongArgs: ["where", "create", "update"],
  AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySessionArgs: ["data", "skipDuplicates"],
  CreateOneSessionArgs: ["data"],
  DeleteManySessionArgs: ["where"],
  DeleteOneSessionArgs: ["where"],
  FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSessionArgs: ["where"],
  GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySessionArgs: ["data", "where"],
  UpdateOneSessionArgs: ["data", "where"],
  UpsertOneSessionArgs: ["where", "create", "update"],
  AggregateSongArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySongArgs: ["data", "skipDuplicates"],
  CreateOneSongArgs: ["data"],
  DeleteManySongArgs: ["where"],
  DeleteOneSongArgs: ["where"],
  FindFirstSongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSongArgs: ["where"],
  GroupBySongArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySongArgs: ["data", "where"],
  UpdateOneSongArgs: ["data", "where"],
  UpsertOneSongArgs: ["where", "create", "update"],
  AggregateSongTagsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySongTagsArgs: ["data", "skipDuplicates"],
  CreateOneSongTagsArgs: ["data"],
  DeleteManySongTagsArgs: ["where"],
  DeleteOneSongTagsArgs: ["where"],
  FindFirstSongTagsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySongTagsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSongTagsArgs: ["where"],
  GroupBySongTagsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySongTagsArgs: ["data", "where"],
  UpdateOneSongTagsArgs: ["data", "where"],
  UpsertOneSongTagsArgs: ["where", "create", "update"],
  AggregateTagArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTagArgs: ["data", "skipDuplicates"],
  CreateOneTagArgs: ["data"],
  DeleteManyTagArgs: ["where"],
  DeleteOneTagArgs: ["where"],
  FindFirstTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTagArgs: ["where"],
  GroupByTagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTagArgs: ["data", "where"],
  UpdateOneTagArgs: ["data", "where"],
  UpsertOneTagArgs: ["where", "create", "update"],
  AggregateTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTokenArgs: ["data", "skipDuplicates"],
  CreateOneTokenArgs: ["data"],
  DeleteManyTokenArgs: ["where"],
  DeleteOneTokenArgs: ["where"],
  FindFirstTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTokenArgs: ["where"],
  GroupByTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTokenArgs: ["data", "where"],
  UpdateOneTokenArgs: ["data", "where"],
  UpsertOneTokenArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProfileArgs: ["data", "skipDuplicates"],
  CreateOneProfileArgs: ["data"],
  DeleteManyProfileArgs: ["where"],
  DeleteOneProfileArgs: ["where"],
  FindFirstProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProfileArgs: ["where"],
  GroupByProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProfileArgs: ["data", "where"],
  UpdateOneProfileArgs: ["data", "where"],
  UpsertOneProfileArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Event: relationResolvers.EventRelationsResolver,
  EventSong: relationResolvers.EventSongRelationsResolver,
  Instrument: relationResolvers.InstrumentRelationsResolver,
  InstrumentSong: relationResolvers.InstrumentSongRelationsResolver,
  Session: relationResolvers.SessionRelationsResolver,
  Song: relationResolvers.SongRelationsResolver,
  SongTags: relationResolvers.SongTagsRelationsResolver,
  Tag: relationResolvers.TagRelationsResolver,
  Token: relationResolvers.TokenRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Profile: relationResolvers.ProfileRelationsResolver
};
const relationResolversInfo = {
  Event: ["songs"],
  EventSong: ["event", "song"],
  Instrument: ["songs"],
  InstrumentSong: ["instruments", "songs"],
  Session: ["user"],
  Song: ["tags", "events", "instruments"],
  SongTags: ["song", "tag"],
  Tag: ["songs"],
  Token: ["user"],
  User: ["profile", "sessions", "tokens"],
  Profile: ["user"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Event: ["id", "name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt"],
  EventSong: ["id", "createdAt", "eventId", "songId"],
  Instrument: ["id", "name", "active", "description", "createdAt", "updatedAt"],
  InstrumentSong: ["id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instrumentId", "songId"],
  Session: ["id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "userId"],
  Song: ["id", "title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt"],
  SongTags: ["id", "createdAt", "songId", "tagId"],
  Tag: ["id", "name"],
  Token: ["id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "userId"],
  User: ["id", "createdAt", "updatedAt", "email", "name", "active", "role", "password"],
  Profile: ["id", "bio", "createdAt", "updatedAt", "userId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateEvent: ["_count", "_avg", "_sum", "_min", "_max"],
  EventGroupBy: ["id", "name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateEventSong: ["_count", "_avg", "_sum", "_min", "_max"],
  EventSongGroupBy: ["id", "createdAt", "eventId", "songId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateInstrument: ["_count", "_avg", "_sum", "_min", "_max"],
  InstrumentGroupBy: ["id", "name", "active", "description", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateInstrumentSong: ["_count", "_avg", "_sum", "_min", "_max"],
  InstrumentSongGroupBy: ["id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instrumentId", "songId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSession: ["_count", "_avg", "_sum", "_min", "_max"],
  SessionGroupBy: ["id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSong: ["_count", "_avg", "_sum", "_min", "_max"],
  SongGroupBy: ["id", "title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSongTags: ["_count", "_avg", "_sum", "_min", "_max"],
  SongTagsGroupBy: ["id", "createdAt", "songId", "tagId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTag: ["_count", "_avg", "_sum", "_min", "_max"],
  TagGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateToken: ["_count", "_avg", "_sum", "_min", "_max"],
  TokenGroupBy: ["id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "updatedAt", "email", "name", "active", "role", "password", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProfile: ["_count", "_avg", "_sum", "_min", "_max"],
  ProfileGroupBy: ["id", "bio", "createdAt", "updatedAt", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  EventCount: ["songs"],
  EventCountAggregate: ["id", "name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt", "_all"],
  EventAvgAggregate: ["id", "active"],
  EventSumAggregate: ["id", "active"],
  EventMinAggregate: ["id", "name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt"],
  EventMaxAggregate: ["id", "name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt"],
  EventSongCountAggregate: ["id", "createdAt", "eventId", "songId", "_all"],
  EventSongAvgAggregate: ["id", "eventId", "songId"],
  EventSongSumAggregate: ["id", "eventId", "songId"],
  EventSongMinAggregate: ["id", "createdAt", "eventId", "songId"],
  EventSongMaxAggregate: ["id", "createdAt", "eventId", "songId"],
  InstrumentCount: ["songs"],
  InstrumentCountAggregate: ["id", "name", "active", "description", "createdAt", "updatedAt", "_all"],
  InstrumentAvgAggregate: ["id", "active"],
  InstrumentSumAggregate: ["id", "active"],
  InstrumentMinAggregate: ["id", "name", "active", "description", "createdAt", "updatedAt"],
  InstrumentMaxAggregate: ["id", "name", "active", "description", "createdAt", "updatedAt"],
  InstrumentSongCountAggregate: ["id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instrumentId", "songId", "_all"],
  InstrumentSongAvgAggregate: ["id", "instrumentId", "songId"],
  InstrumentSongSumAggregate: ["id", "instrumentId", "songId"],
  InstrumentSongMinAggregate: ["id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instrumentId", "songId"],
  InstrumentSongMaxAggregate: ["id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instrumentId", "songId"],
  SessionCountAggregate: ["id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "userId", "_all"],
  SessionAvgAggregate: ["id", "userId"],
  SessionSumAggregate: ["id", "userId"],
  SessionMinAggregate: ["id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "userId"],
  SessionMaxAggregate: ["id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "userId"],
  SongCount: ["tags", "events", "instruments"],
  SongCountAggregate: ["id", "title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt", "_all"],
  SongAvgAggregate: ["id", "active", "tempoCd"],
  SongSumAggregate: ["id", "active", "tempoCd"],
  SongMinAggregate: ["id", "title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt"],
  SongMaxAggregate: ["id", "title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt"],
  SongTagsCountAggregate: ["id", "createdAt", "songId", "tagId", "_all"],
  SongTagsAvgAggregate: ["id", "songId", "tagId"],
  SongTagsSumAggregate: ["id", "songId", "tagId"],
  SongTagsMinAggregate: ["id", "createdAt", "songId", "tagId"],
  SongTagsMaxAggregate: ["id", "createdAt", "songId", "tagId"],
  TagCount: ["songs"],
  TagCountAggregate: ["id", "name", "_all"],
  TagAvgAggregate: ["id"],
  TagSumAggregate: ["id"],
  TagMinAggregate: ["id", "name"],
  TagMaxAggregate: ["id", "name"],
  TokenCountAggregate: ["id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "userId", "_all"],
  TokenAvgAggregate: ["id", "userId"],
  TokenSumAggregate: ["id", "userId"],
  TokenMinAggregate: ["id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "userId"],
  TokenMaxAggregate: ["id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "userId"],
  UserCount: ["sessions", "tokens"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "email", "name", "active", "role", "password", "_all"],
  UserAvgAggregate: ["id", "active"],
  UserSumAggregate: ["id", "active"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "email", "name", "active", "role", "password"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "email", "name", "active", "role", "password"],
  ProfileCountAggregate: ["id", "bio", "createdAt", "updatedAt", "userId", "_all"],
  ProfileAvgAggregate: ["id", "userId"],
  ProfileSumAggregate: ["id", "userId"],
  ProfileMinAggregate: ["id", "bio", "createdAt", "updatedAt", "userId"],
  ProfileMaxAggregate: ["id", "bio", "createdAt", "updatedAt", "userId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  EventWhereInput: ["AND", "OR", "NOT", "id", "name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt", "songs"],
  EventOrderByWithRelationInput: ["id", "name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt", "songs"],
  EventWhereUniqueInput: ["id"],
  EventOrderByWithAggregationInput: ["id", "name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  EventScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt"],
  EventSongWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "event", "eventId", "song", "songId"],
  EventSongOrderByWithRelationInput: ["id", "createdAt", "event", "eventId", "song", "songId"],
  EventSongWhereUniqueInput: ["id"],
  EventSongOrderByWithAggregationInput: ["id", "createdAt", "eventId", "songId", "_count", "_avg", "_max", "_min", "_sum"],
  EventSongScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "eventId", "songId"],
  InstrumentWhereInput: ["AND", "OR", "NOT", "id", "name", "active", "description", "createdAt", "updatedAt", "songs"],
  InstrumentOrderByWithRelationInput: ["id", "name", "active", "description", "createdAt", "updatedAt", "songs"],
  InstrumentWhereUniqueInput: ["id"],
  InstrumentOrderByWithAggregationInput: ["id", "name", "active", "description", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  InstrumentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "active", "description", "createdAt", "updatedAt"],
  InstrumentSongWhereInput: ["AND", "OR", "NOT", "id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instruments", "instrumentId", "songs", "songId"],
  InstrumentSongOrderByWithRelationInput: ["id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instruments", "instrumentId", "songs", "songId"],
  InstrumentSongWhereUniqueInput: ["id"],
  InstrumentSongOrderByWithAggregationInput: ["id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instrumentId", "songId", "_count", "_avg", "_max", "_min", "_sum"],
  InstrumentSongScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instrumentId", "songId"],
  SessionWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "user", "userId"],
  SessionOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "user", "userId"],
  SessionWhereUniqueInput: ["id", "handle"],
  SessionOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "userId"],
  SongWhereInput: ["AND", "OR", "NOT", "id", "title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt", "tags", "events", "instruments"],
  SongOrderByWithRelationInput: ["id", "title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt", "tags", "events", "instruments"],
  SongWhereUniqueInput: ["id"],
  SongOrderByWithAggregationInput: ["id", "title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  SongScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt"],
  SongTagsWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "song", "songId", "tag", "tagId"],
  SongTagsOrderByWithRelationInput: ["id", "createdAt", "song", "songId", "tag", "tagId"],
  SongTagsWhereUniqueInput: ["id"],
  SongTagsOrderByWithAggregationInput: ["id", "createdAt", "songId", "tagId", "_count", "_avg", "_max", "_min", "_sum"],
  SongTagsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "songId", "tagId"],
  TagWhereInput: ["AND", "OR", "NOT", "id", "name", "songs"],
  TagOrderByWithRelationInput: ["id", "name", "songs"],
  TagWhereUniqueInput: ["id", "name"],
  TagOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  TagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  TokenWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "user", "userId"],
  TokenOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "user", "userId"],
  TokenWhereUniqueInput: ["id", "hashedToken_type"],
  TokenOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  TokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "userId"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "name", "active", "role", "password", "profile", "sessions", "tokens"],
  UserOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "email", "name", "active", "role", "password", "profile", "sessions", "tokens"],
  UserWhereUniqueInput: ["id", "email", "email_active"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "email", "name", "active", "role", "password", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "name", "active", "role", "password"],
  ProfileWhereInput: ["AND", "OR", "NOT", "id", "bio", "createdAt", "updatedAt", "user", "userId"],
  ProfileOrderByWithRelationInput: ["id", "bio", "createdAt", "updatedAt", "user", "userId"],
  ProfileWhereUniqueInput: ["id", "userId"],
  ProfileOrderByWithAggregationInput: ["id", "bio", "createdAt", "updatedAt", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "bio", "createdAt", "updatedAt", "userId"],
  EventCreateInput: ["name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt", "songs"],
  EventUpdateInput: ["name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt", "songs"],
  EventCreateManyInput: ["id", "name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt"],
  EventUpdateManyMutationInput: ["name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt"],
  EventSongCreateInput: ["createdAt", "event", "song"],
  EventSongUpdateInput: ["createdAt", "event", "song"],
  EventSongCreateManyInput: ["id", "createdAt", "eventId", "songId"],
  EventSongUpdateManyMutationInput: ["createdAt"],
  InstrumentCreateInput: ["name", "active", "description", "createdAt", "updatedAt", "songs"],
  InstrumentUpdateInput: ["name", "active", "description", "createdAt", "updatedAt", "songs"],
  InstrumentCreateManyInput: ["id", "name", "active", "description", "createdAt", "updatedAt"],
  InstrumentUpdateManyMutationInput: ["name", "active", "description", "createdAt", "updatedAt"],
  InstrumentSongCreateInput: ["notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instruments", "songs"],
  InstrumentSongUpdateInput: ["notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instruments", "songs"],
  InstrumentSongCreateManyInput: ["id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instrumentId", "songId"],
  InstrumentSongUpdateManyMutationInput: ["notes", "words", "mimeType", "file", "createdAt", "updatedAt"],
  SessionCreateInput: ["createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "user"],
  SessionUpdateInput: ["createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "user"],
  SessionCreateManyInput: ["id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "userId"],
  SessionUpdateManyMutationInput: ["createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData"],
  SongCreateInput: ["title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt", "tags", "events", "instruments"],
  SongUpdateInput: ["title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt", "tags", "events", "instruments"],
  SongCreateManyInput: ["id", "title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt"],
  SongUpdateManyMutationInput: ["title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt"],
  SongTagsCreateInput: ["createdAt", "song", "tag"],
  SongTagsUpdateInput: ["createdAt", "song", "tag"],
  SongTagsCreateManyInput: ["id", "createdAt", "songId", "tagId"],
  SongTagsUpdateManyMutationInput: ["createdAt"],
  TagCreateInput: ["name", "songs"],
  TagUpdateInput: ["name", "songs"],
  TagCreateManyInput: ["id", "name"],
  TagUpdateManyMutationInput: ["name"],
  TokenCreateInput: ["createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "user"],
  TokenUpdateInput: ["createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "user"],
  TokenCreateManyInput: ["id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "userId"],
  TokenUpdateManyMutationInput: ["createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo"],
  UserCreateInput: ["createdAt", "updatedAt", "email", "name", "active", "role", "password", "profile", "sessions", "tokens"],
  UserUpdateInput: ["createdAt", "updatedAt", "email", "name", "active", "role", "password", "profile", "sessions", "tokens"],
  UserCreateManyInput: ["id", "createdAt", "updatedAt", "email", "name", "active", "role", "password"],
  UserUpdateManyMutationInput: ["createdAt", "updatedAt", "email", "name", "active", "role", "password"],
  ProfileCreateInput: ["bio", "createdAt", "updatedAt", "user"],
  ProfileUpdateInput: ["bio", "createdAt", "updatedAt", "user"],
  ProfileCreateManyInput: ["id", "bio", "createdAt", "updatedAt", "userId"],
  ProfileUpdateManyMutationInput: ["bio", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EventSongListRelationFilter: ["every", "some", "none"],
  EventSongOrderByRelationAggregateInput: ["_count"],
  EventCountOrderByAggregateInput: ["id", "name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt"],
  EventAvgOrderByAggregateInput: ["id", "active"],
  EventMaxOrderByAggregateInput: ["id", "name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt"],
  EventMinOrderByAggregateInput: ["id", "name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt"],
  EventSumOrderByAggregateInput: ["id", "active"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EventRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SongRelationFilter: ["is", "isNot"],
  EventSongCountOrderByAggregateInput: ["id", "createdAt", "eventId", "songId"],
  EventSongAvgOrderByAggregateInput: ["id", "eventId", "songId"],
  EventSongMaxOrderByAggregateInput: ["id", "createdAt", "eventId", "songId"],
  EventSongMinOrderByAggregateInput: ["id", "createdAt", "eventId", "songId"],
  EventSongSumOrderByAggregateInput: ["id", "eventId", "songId"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  InstrumentSongListRelationFilter: ["every", "some", "none"],
  InstrumentSongOrderByRelationAggregateInput: ["_count"],
  InstrumentCountOrderByAggregateInput: ["id", "name", "active", "description", "createdAt", "updatedAt"],
  InstrumentAvgOrderByAggregateInput: ["id", "active"],
  InstrumentMaxOrderByAggregateInput: ["id", "name", "active", "description", "createdAt", "updatedAt"],
  InstrumentMinOrderByAggregateInput: ["id", "name", "active", "description", "createdAt", "updatedAt"],
  InstrumentSumOrderByAggregateInput: ["id", "active"],
  InstrumentRelationFilter: ["is", "isNot"],
  InstrumentSongCountOrderByAggregateInput: ["id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instrumentId", "songId"],
  InstrumentSongAvgOrderByAggregateInput: ["id", "instrumentId", "songId"],
  InstrumentSongMaxOrderByAggregateInput: ["id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instrumentId", "songId"],
  InstrumentSongMinOrderByAggregateInput: ["id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instrumentId", "songId"],
  InstrumentSongSumOrderByAggregateInput: ["id", "instrumentId", "songId"],
  UserRelationFilter: ["is", "isNot"],
  SessionCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "userId"],
  SessionAvgOrderByAggregateInput: ["id", "userId"],
  SessionMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "userId"],
  SessionMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "userId"],
  SessionSumOrderByAggregateInput: ["id", "userId"],
  SongTagsListRelationFilter: ["every", "some", "none"],
  SongTagsOrderByRelationAggregateInput: ["_count"],
  SongCountOrderByAggregateInput: ["id", "title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt"],
  SongAvgOrderByAggregateInput: ["id", "active", "tempoCd"],
  SongMaxOrderByAggregateInput: ["id", "title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt"],
  SongMinOrderByAggregateInput: ["id", "title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt"],
  SongSumOrderByAggregateInput: ["id", "active", "tempoCd"],
  TagRelationFilter: ["is", "isNot"],
  SongTagsCountOrderByAggregateInput: ["id", "createdAt", "songId", "tagId"],
  SongTagsAvgOrderByAggregateInput: ["id", "songId", "tagId"],
  SongTagsMaxOrderByAggregateInput: ["id", "createdAt", "songId", "tagId"],
  SongTagsMinOrderByAggregateInput: ["id", "createdAt", "songId", "tagId"],
  SongTagsSumOrderByAggregateInput: ["id", "songId", "tagId"],
  TagCountOrderByAggregateInput: ["id", "name"],
  TagAvgOrderByAggregateInput: ["id"],
  TagMaxOrderByAggregateInput: ["id", "name"],
  TagMinOrderByAggregateInput: ["id", "name"],
  TagSumOrderByAggregateInput: ["id"],
  EnumToken_typeFilter: ["equals", "in", "notIn", "not"],
  TokenHashedTokenTypeCompoundUniqueInput: ["hashedToken", "type"],
  TokenCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "userId"],
  TokenAvgOrderByAggregateInput: ["id", "userId"],
  TokenMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "userId"],
  TokenMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "userId"],
  TokenSumOrderByAggregateInput: ["id", "userId"],
  EnumToken_typeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumUser_roleFilter: ["equals", "in", "notIn", "not"],
  ProfileRelationFilter: ["is", "isNot"],
  SessionListRelationFilter: ["every", "some", "none"],
  TokenListRelationFilter: ["every", "some", "none"],
  SessionOrderByRelationAggregateInput: ["_count"],
  TokenOrderByRelationAggregateInput: ["_count"],
  UserEmailActiveCompoundUniqueInput: ["email", "active"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "name", "active", "role", "password"],
  UserAvgOrderByAggregateInput: ["id", "active"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "name", "active", "role", "password"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "name", "active", "role", "password"],
  UserSumOrderByAggregateInput: ["id", "active"],
  EnumUser_roleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ProfileCountOrderByAggregateInput: ["id", "bio", "createdAt", "updatedAt", "userId"],
  ProfileAvgOrderByAggregateInput: ["id", "userId"],
  ProfileMaxOrderByAggregateInput: ["id", "bio", "createdAt", "updatedAt", "userId"],
  ProfileMinOrderByAggregateInput: ["id", "bio", "createdAt", "updatedAt", "userId"],
  ProfileSumOrderByAggregateInput: ["id", "userId"],
  EventSongCreateNestedManyWithoutEventInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  EventSongUpdateManyWithoutEventNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  EventCreateNestedOneWithoutSongsInput: ["create", "connectOrCreate", "connect"],
  SongCreateNestedOneWithoutEventsInput: ["create", "connectOrCreate", "connect"],
  EventUpdateOneWithoutSongsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SongUpdateOneWithoutEventsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  InstrumentSongCreateNestedManyWithoutInstrumentsInput: ["create", "connectOrCreate", "createMany", "connect"],
  InstrumentSongUpdateManyWithoutInstrumentsNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InstrumentCreateNestedOneWithoutSongsInput: ["create", "connectOrCreate", "connect"],
  SongCreateNestedOneWithoutInstrumentsInput: ["create", "connectOrCreate", "connect"],
  InstrumentUpdateOneWithoutSongsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SongUpdateOneWithoutInstrumentsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutSessionsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SongTagsCreateNestedManyWithoutSongInput: ["create", "connectOrCreate", "createMany", "connect"],
  EventSongCreateNestedManyWithoutSongInput: ["create", "connectOrCreate", "createMany", "connect"],
  InstrumentSongCreateNestedManyWithoutSongsInput: ["create", "connectOrCreate", "createMany", "connect"],
  SongTagsUpdateManyWithoutSongNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  EventSongUpdateManyWithoutSongNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  InstrumentSongUpdateManyWithoutSongsNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SongCreateNestedOneWithoutTagsInput: ["create", "connectOrCreate", "connect"],
  TagCreateNestedOneWithoutSongsInput: ["create", "connectOrCreate", "connect"],
  SongUpdateOneWithoutTagsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TagUpdateOneWithoutSongsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SongTagsCreateNestedManyWithoutTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  SongTagsUpdateManyWithoutTagNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutTokensInput: ["create", "connectOrCreate", "connect"],
  EnumToken_typeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneWithoutTokensNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  TokenCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumUser_roleFieldUpdateOperationsInput: ["set"],
  ProfileUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SessionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TokenUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutProfileNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumToken_typeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumToken_typeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumUser_roleFilter: ["equals", "in", "notIn", "not"],
  NestedEnumUser_roleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EventSongCreateWithoutEventInput: ["createdAt", "song"],
  EventSongCreateOrConnectWithoutEventInput: ["where", "create"],
  EventSongCreateManyEventInputEnvelope: ["data", "skipDuplicates"],
  EventSongUpsertWithWhereUniqueWithoutEventInput: ["where", "update", "create"],
  EventSongUpdateWithWhereUniqueWithoutEventInput: ["where", "data"],
  EventSongUpdateManyWithWhereWithoutEventInput: ["where", "data"],
  EventSongScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "eventId", "songId"],
  EventCreateWithoutSongsInput: ["name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt"],
  EventCreateOrConnectWithoutSongsInput: ["where", "create"],
  SongCreateWithoutEventsInput: ["title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt", "tags", "instruments"],
  SongCreateOrConnectWithoutEventsInput: ["where", "create"],
  EventUpsertWithoutSongsInput: ["update", "create"],
  EventUpdateWithoutSongsInput: ["name", "active", "description", "venue", "location", "notes", "telephone", "startDateTime", "createdAt", "updatedAt"],
  SongUpsertWithoutEventsInput: ["update", "create"],
  SongUpdateWithoutEventsInput: ["title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt", "tags", "instruments"],
  InstrumentSongCreateWithoutInstrumentsInput: ["notes", "words", "mimeType", "file", "createdAt", "updatedAt", "songs"],
  InstrumentSongCreateOrConnectWithoutInstrumentsInput: ["where", "create"],
  InstrumentSongCreateManyInstrumentsInputEnvelope: ["data", "skipDuplicates"],
  InstrumentSongUpsertWithWhereUniqueWithoutInstrumentsInput: ["where", "update", "create"],
  InstrumentSongUpdateWithWhereUniqueWithoutInstrumentsInput: ["where", "data"],
  InstrumentSongUpdateManyWithWhereWithoutInstrumentsInput: ["where", "data"],
  InstrumentSongScalarWhereInput: ["AND", "OR", "NOT", "id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instrumentId", "songId"],
  InstrumentCreateWithoutSongsInput: ["name", "active", "description", "createdAt", "updatedAt"],
  InstrumentCreateOrConnectWithoutSongsInput: ["where", "create"],
  SongCreateWithoutInstrumentsInput: ["title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt", "tags", "events"],
  SongCreateOrConnectWithoutInstrumentsInput: ["where", "create"],
  InstrumentUpsertWithoutSongsInput: ["update", "create"],
  InstrumentUpdateWithoutSongsInput: ["name", "active", "description", "createdAt", "updatedAt"],
  SongUpsertWithoutInstrumentsInput: ["update", "create"],
  SongUpdateWithoutInstrumentsInput: ["title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt", "tags", "events"],
  UserCreateWithoutSessionsInput: ["createdAt", "updatedAt", "email", "name", "active", "role", "password", "profile", "tokens"],
  UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
  UserUpsertWithoutSessionsInput: ["update", "create"],
  UserUpdateWithoutSessionsInput: ["createdAt", "updatedAt", "email", "name", "active", "role", "password", "profile", "tokens"],
  SongTagsCreateWithoutSongInput: ["createdAt", "tag"],
  SongTagsCreateOrConnectWithoutSongInput: ["where", "create"],
  SongTagsCreateManySongInputEnvelope: ["data", "skipDuplicates"],
  EventSongCreateWithoutSongInput: ["createdAt", "event"],
  EventSongCreateOrConnectWithoutSongInput: ["where", "create"],
  EventSongCreateManySongInputEnvelope: ["data", "skipDuplicates"],
  InstrumentSongCreateWithoutSongsInput: ["notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instruments"],
  InstrumentSongCreateOrConnectWithoutSongsInput: ["where", "create"],
  InstrumentSongCreateManySongsInputEnvelope: ["data", "skipDuplicates"],
  SongTagsUpsertWithWhereUniqueWithoutSongInput: ["where", "update", "create"],
  SongTagsUpdateWithWhereUniqueWithoutSongInput: ["where", "data"],
  SongTagsUpdateManyWithWhereWithoutSongInput: ["where", "data"],
  SongTagsScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "songId", "tagId"],
  EventSongUpsertWithWhereUniqueWithoutSongInput: ["where", "update", "create"],
  EventSongUpdateWithWhereUniqueWithoutSongInput: ["where", "data"],
  EventSongUpdateManyWithWhereWithoutSongInput: ["where", "data"],
  InstrumentSongUpsertWithWhereUniqueWithoutSongsInput: ["where", "update", "create"],
  InstrumentSongUpdateWithWhereUniqueWithoutSongsInput: ["where", "data"],
  InstrumentSongUpdateManyWithWhereWithoutSongsInput: ["where", "data"],
  SongCreateWithoutTagsInput: ["title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt", "events", "instruments"],
  SongCreateOrConnectWithoutTagsInput: ["where", "create"],
  TagCreateWithoutSongsInput: ["name"],
  TagCreateOrConnectWithoutSongsInput: ["where", "create"],
  SongUpsertWithoutTagsInput: ["update", "create"],
  SongUpdateWithoutTagsInput: ["title", "active", "alias", "startKey", "tempoCd", "startWords", "arrangement", "createdAt", "updatedAt", "events", "instruments"],
  TagUpsertWithoutSongsInput: ["update", "create"],
  TagUpdateWithoutSongsInput: ["name"],
  SongTagsCreateWithoutTagInput: ["createdAt", "song"],
  SongTagsCreateOrConnectWithoutTagInput: ["where", "create"],
  SongTagsCreateManyTagInputEnvelope: ["data", "skipDuplicates"],
  SongTagsUpsertWithWhereUniqueWithoutTagInput: ["where", "update", "create"],
  SongTagsUpdateWithWhereUniqueWithoutTagInput: ["where", "data"],
  SongTagsUpdateManyWithWhereWithoutTagInput: ["where", "data"],
  UserCreateWithoutTokensInput: ["createdAt", "updatedAt", "email", "name", "active", "role", "password", "profile", "sessions"],
  UserCreateOrConnectWithoutTokensInput: ["where", "create"],
  UserUpsertWithoutTokensInput: ["update", "create"],
  UserUpdateWithoutTokensInput: ["createdAt", "updatedAt", "email", "name", "active", "role", "password", "profile", "sessions"],
  ProfileCreateWithoutUserInput: ["bio", "createdAt", "updatedAt"],
  ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  SessionCreateWithoutUserInput: ["createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData"],
  SessionCreateOrConnectWithoutUserInput: ["where", "create"],
  SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  TokenCreateWithoutUserInput: ["createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo"],
  TokenCreateOrConnectWithoutUserInput: ["where", "create"],
  TokenCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ProfileUpsertWithoutUserInput: ["update", "create"],
  ProfileUpdateWithoutUserInput: ["bio", "createdAt", "updatedAt"],
  SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData", "userId"],
  TokenUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  TokenUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  TokenUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  TokenScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo", "userId"],
  UserCreateWithoutProfileInput: ["createdAt", "updatedAt", "email", "name", "active", "role", "password", "sessions", "tokens"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["createdAt", "updatedAt", "email", "name", "active", "role", "password", "sessions", "tokens"],
  EventSongCreateManyEventInput: ["id", "createdAt", "songId"],
  EventSongUpdateWithoutEventInput: ["createdAt", "song"],
  InstrumentSongCreateManyInstrumentsInput: ["id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "songId"],
  InstrumentSongUpdateWithoutInstrumentsInput: ["notes", "words", "mimeType", "file", "createdAt", "updatedAt", "songs"],
  SongTagsCreateManySongInput: ["id", "createdAt", "tagId"],
  EventSongCreateManySongInput: ["id", "createdAt", "eventId"],
  InstrumentSongCreateManySongsInput: ["id", "notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instrumentId"],
  SongTagsUpdateWithoutSongInput: ["createdAt", "tag"],
  EventSongUpdateWithoutSongInput: ["createdAt", "event"],
  InstrumentSongUpdateWithoutSongsInput: ["notes", "words", "mimeType", "file", "createdAt", "updatedAt", "instruments"],
  SongTagsCreateManyTagInput: ["id", "createdAt", "songId"],
  SongTagsUpdateWithoutTagInput: ["createdAt", "song"],
  SessionCreateManyUserInput: ["id", "createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData"],
  TokenCreateManyUserInput: ["id", "createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo"],
  SessionUpdateWithoutUserInput: ["createdAt", "updatedAt", "expiresAt", "handle", "hashedSessionToken", "antiCSRFToken", "publicData", "privateData"],
  TokenUpdateWithoutUserInput: ["createdAt", "updatedAt", "hashedToken", "type", "expiresAt", "sentTo"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

