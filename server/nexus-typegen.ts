/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Event: { // root type
    active: boolean; // Boolean!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description?: string | null; // String
    id: number; // Int!
    location?: string | null; // String
    name: string; // String!
    notes?: string | null; // String
    telephone?: string | null; // String
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    venue?: string | null; // String
  }
  Instrument: { // root type
    active: boolean; // Boolean!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description?: string | null; // String
    id: number; // Int!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: {};
  Query: {};
  Session: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    expiresAt: NexusGenScalars['DateTime']; // DateTime!
    hashedSessionToken?: string | null; // String
    id: number; // Int!
    privateData?: string | null; // String
    publicData?: string | null; // String
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId?: number | null; // Int
  }
  Song: { // root type
    active: boolean; // Boolean!
    alias?: string | null; // String
    arrangement?: string | null; // String
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    startKey?: string | null; // String
    startWords?: string | null; // String
    tags?: string | null; // String
    tempoCd?: number | null; // Int
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Token: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    hashedToken: string; // String!
    id: number; // Int!
    sentTo: string; // String!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: number; // Int!
  }
  User: { // root type
    active?: number | null; // Int
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    password?: string | null; // String
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Event: { // field return type
    active: boolean; // Boolean!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string | null; // String
    id: number; // Int!
    location: string | null; // String
    name: string; // String!
    notes: string | null; // String
    telephone: string | null; // String
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    venue: string | null; // String
  }
  Instrument: { // field return type
    active: boolean; // Boolean!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string | null; // String
    id: number; // Int!
    name: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: { // field return type
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
  }
  Query: { // field return type
    ok: boolean; // Boolean!
  }
  Session: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    expiresAt: NexusGenScalars['DateTime']; // DateTime!
    hashedSessionToken: string | null; // String
    id: number; // Int!
    privateData: string | null; // String
    publicData: string | null; // String
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: number | null; // Int
  }
  Song: { // field return type
    active: boolean; // Boolean!
    alias: string | null; // String
    arrangement: string | null; // String
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    startKey: string | null; // String
    startWords: string | null; // String
    tags: string | null; // String
    tempoCd: number | null; // Int
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Token: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    hashedToken: string; // String!
    id: number; // Int!
    sentTo: string; // String!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    userId: number; // Int!
  }
  User: { // field return type
    active: number | null; // Int
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    password: string | null; // String
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Event: { // field return type name
    active: 'Boolean'
    createdAt: 'DateTime'
    description: 'String'
    id: 'Int'
    location: 'String'
    name: 'String'
    notes: 'String'
    telephone: 'String'
    updatedAt: 'DateTime'
    venue: 'String'
  }
  Instrument: { // field return type name
    active: 'Boolean'
    createdAt: 'DateTime'
    description: 'String'
    id: 'Int'
    name: 'String'
    updatedAt: 'DateTime'
  }
  Mutation: { // field return type name
    login: 'AuthPayload'
    signup: 'AuthPayload'
  }
  Query: { // field return type name
    ok: 'Boolean'
  }
  Session: { // field return type name
    createdAt: 'DateTime'
    expiresAt: 'DateTime'
    hashedSessionToken: 'String'
    id: 'Int'
    privateData: 'String'
    publicData: 'String'
    updatedAt: 'DateTime'
    userId: 'Int'
  }
  Song: { // field return type name
    active: 'Boolean'
    alias: 'String'
    arrangement: 'String'
    createdAt: 'DateTime'
    id: 'Int'
    startKey: 'String'
    startWords: 'String'
    tags: 'String'
    tempoCd: 'Int'
    title: 'String'
    updatedAt: 'DateTime'
  }
  Token: { // field return type name
    createdAt: 'DateTime'
    hashedToken: 'String'
    id: 'Int'
    sentTo: 'String'
    title: 'String'
    updatedAt: 'DateTime'
    userId: 'Int'
  }
  User: { // field return type name
    active: 'Int'
    createdAt: 'DateTime'
    email: 'String'
    id: 'Int'
    name: 'String'
    password: 'String'
    updatedAt: 'DateTime'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}