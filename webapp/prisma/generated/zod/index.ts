import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const ShopScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','name','content','URL','type']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// SHOP SCHEMA
/////////////////////////////////////////

export const ShopSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  name: z.string().max(255, { message: "Please enter less than 255 characters" }),
  content: z.string().max(4000, { message: "Please enter less than 4000 characters" }).nullable(),
  URL: z.string().max(4000, { message: "Please enter less than 4000 characters" }).nullable(),
  type: z.string().max(100, { message: "Please enter less than 100 characters" }).array().max(100, { message: "Please enter less than 100 items" }),
})

export type Shop = z.infer<typeof ShopSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// SHOP
//------------------------------------------------------

export const ShopSelectSchema: z.ZodType<Prisma.ShopSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  content: z.boolean().optional(),
  URL: z.boolean().optional(),
  type: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ShopWhereInputSchema: z.ZodType<Prisma.ShopWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ShopWhereInputSchema),z.lazy(() => ShopWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ShopWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ShopWhereInputSchema),z.lazy(() => ShopWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  URL: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const ShopOrderByWithRelationInputSchema: z.ZodType<Prisma.ShopOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  content: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  URL: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ShopWhereUniqueInputSchema: z.ZodType<Prisma.ShopWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ShopWhereInputSchema),z.lazy(() => ShopWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ShopWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ShopWhereInputSchema),z.lazy(() => ShopWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string().max(255, { message: "Please enter less than 255 characters" }) ]).optional(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string().max(4000, { message: "Please enter less than 4000 characters" }) ]).optional().nullable(),
  URL: z.union([ z.lazy(() => StringNullableFilterSchema),z.string().max(4000, { message: "Please enter less than 4000 characters" }) ]).optional().nullable(),
  type: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict());

export const ShopOrderByWithAggregationInputSchema: z.ZodType<Prisma.ShopOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  content: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  URL: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ShopCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ShopAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ShopMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ShopMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ShopSumOrderByAggregateInputSchema).optional()
}).strict();

export const ShopScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ShopScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ShopScalarWhereWithAggregatesInputSchema),z.lazy(() => ShopScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ShopScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ShopScalarWhereWithAggregatesInputSchema),z.lazy(() => ShopScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  URL: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const ShopCreateInputSchema: z.ZodType<Prisma.ShopCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string().max(255, { message: "Please enter less than 255 characters" }),
  content: z.string().max(4000, { message: "Please enter less than 4000 characters" }).optional().nullable(),
  URL: z.string().max(4000, { message: "Please enter less than 4000 characters" }).optional().nullable(),
  type: z.union([ z.lazy(() => ShopCreatetypeInputSchema),z.string().max(100, { message: "Please enter less than 100 characters" }).array() ]).optional(),
}).strict();

export const ShopUncheckedCreateInputSchema: z.ZodType<Prisma.ShopUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string().max(255, { message: "Please enter less than 255 characters" }),
  content: z.string().max(4000, { message: "Please enter less than 4000 characters" }).optional().nullable(),
  URL: z.string().max(4000, { message: "Please enter less than 4000 characters" }).optional().nullable(),
  type: z.union([ z.lazy(() => ShopCreatetypeInputSchema),z.string().max(100, { message: "Please enter less than 100 characters" }).array() ]).optional(),
}).strict();

export const ShopUpdateInputSchema: z.ZodType<Prisma.ShopUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().max(255, { message: "Please enter less than 255 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string().max(4000, { message: "Please enter less than 4000 characters" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  URL: z.union([ z.string().max(4000, { message: "Please enter less than 4000 characters" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => ShopUpdatetypeInputSchema),z.string().max(100, { message: "Please enter less than 100 characters" }).array() ]).optional(),
}).strict();

export const ShopUncheckedUpdateInputSchema: z.ZodType<Prisma.ShopUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().max(255, { message: "Please enter less than 255 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string().max(4000, { message: "Please enter less than 4000 characters" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  URL: z.union([ z.string().max(4000, { message: "Please enter less than 4000 characters" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => ShopUpdatetypeInputSchema),z.string().max(100, { message: "Please enter less than 100 characters" }).array() ]).optional(),
}).strict();

export const ShopCreateManyInputSchema: z.ZodType<Prisma.ShopCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  name: z.string().max(255, { message: "Please enter less than 255 characters" }),
  content: z.string().max(4000, { message: "Please enter less than 4000 characters" }).optional().nullable(),
  URL: z.string().max(4000, { message: "Please enter less than 4000 characters" }).optional().nullable(),
  type: z.union([ z.lazy(() => ShopCreatetypeInputSchema),z.string().max(100, { message: "Please enter less than 100 characters" }).array() ]).optional(),
}).strict();

export const ShopUpdateManyMutationInputSchema: z.ZodType<Prisma.ShopUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().max(255, { message: "Please enter less than 255 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string().max(4000, { message: "Please enter less than 4000 characters" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  URL: z.union([ z.string().max(4000, { message: "Please enter less than 4000 characters" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => ShopUpdatetypeInputSchema),z.string().max(100, { message: "Please enter less than 100 characters" }).array() ]).optional(),
}).strict();

export const ShopUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ShopUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string().max(255, { message: "Please enter less than 255 characters" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string().max(4000, { message: "Please enter less than 4000 characters" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  URL: z.union([ z.string().max(4000, { message: "Please enter less than 4000 characters" }),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => ShopUpdatetypeInputSchema),z.string().max(100, { message: "Please enter less than 100 characters" }).array() ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const ShopCountOrderByAggregateInputSchema: z.ZodType<Prisma.ShopCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  URL: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ShopAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ShopAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ShopMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ShopMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  URL: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ShopMinOrderByAggregateInputSchema: z.ZodType<Prisma.ShopMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  URL: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ShopSumOrderByAggregateInputSchema: z.ZodType<Prisma.ShopSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const ShopCreatetypeInputSchema: z.ZodType<Prisma.ShopCreatetypeInput> = z.object({
  set: z.string().array()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const ShopUpdatetypeInputSchema: z.ZodType<Prisma.ShopUpdatetypeInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ShopFindFirstArgsSchema: z.ZodType<Prisma.ShopFindFirstArgs> = z.object({
  select: ShopSelectSchema.optional(),
  where: ShopWhereInputSchema.optional(),
  orderBy: z.union([ ShopOrderByWithRelationInputSchema.array(),ShopOrderByWithRelationInputSchema ]).optional(),
  cursor: ShopWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ShopScalarFieldEnumSchema,ShopScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ShopFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ShopFindFirstOrThrowArgs> = z.object({
  select: ShopSelectSchema.optional(),
  where: ShopWhereInputSchema.optional(),
  orderBy: z.union([ ShopOrderByWithRelationInputSchema.array(),ShopOrderByWithRelationInputSchema ]).optional(),
  cursor: ShopWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ShopScalarFieldEnumSchema,ShopScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ShopFindManyArgsSchema: z.ZodType<Prisma.ShopFindManyArgs> = z.object({
  select: ShopSelectSchema.optional(),
  where: ShopWhereInputSchema.optional(),
  orderBy: z.union([ ShopOrderByWithRelationInputSchema.array(),ShopOrderByWithRelationInputSchema ]).optional(),
  cursor: ShopWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ShopScalarFieldEnumSchema,ShopScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ShopAggregateArgsSchema: z.ZodType<Prisma.ShopAggregateArgs> = z.object({
  where: ShopWhereInputSchema.optional(),
  orderBy: z.union([ ShopOrderByWithRelationInputSchema.array(),ShopOrderByWithRelationInputSchema ]).optional(),
  cursor: ShopWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ShopGroupByArgsSchema: z.ZodType<Prisma.ShopGroupByArgs> = z.object({
  where: ShopWhereInputSchema.optional(),
  orderBy: z.union([ ShopOrderByWithAggregationInputSchema.array(),ShopOrderByWithAggregationInputSchema ]).optional(),
  by: ShopScalarFieldEnumSchema.array(),
  having: ShopScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ShopFindUniqueArgsSchema: z.ZodType<Prisma.ShopFindUniqueArgs> = z.object({
  select: ShopSelectSchema.optional(),
  where: ShopWhereUniqueInputSchema,
}).strict() ;

export const ShopFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ShopFindUniqueOrThrowArgs> = z.object({
  select: ShopSelectSchema.optional(),
  where: ShopWhereUniqueInputSchema,
}).strict() ;

export const ShopCreateArgsSchema: z.ZodType<Prisma.ShopCreateArgs> = z.object({
  select: ShopSelectSchema.optional(),
  data: z.union([ ShopCreateInputSchema,ShopUncheckedCreateInputSchema ]),
}).strict() ;

export const ShopUpsertArgsSchema: z.ZodType<Prisma.ShopUpsertArgs> = z.object({
  select: ShopSelectSchema.optional(),
  where: ShopWhereUniqueInputSchema,
  create: z.union([ ShopCreateInputSchema,ShopUncheckedCreateInputSchema ]),
  update: z.union([ ShopUpdateInputSchema,ShopUncheckedUpdateInputSchema ]),
}).strict() ;

export const ShopCreateManyArgsSchema: z.ZodType<Prisma.ShopCreateManyArgs> = z.object({
  data: z.union([ ShopCreateManyInputSchema,ShopCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ShopDeleteArgsSchema: z.ZodType<Prisma.ShopDeleteArgs> = z.object({
  select: ShopSelectSchema.optional(),
  where: ShopWhereUniqueInputSchema,
}).strict() ;

export const ShopUpdateArgsSchema: z.ZodType<Prisma.ShopUpdateArgs> = z.object({
  select: ShopSelectSchema.optional(),
  data: z.union([ ShopUpdateInputSchema,ShopUncheckedUpdateInputSchema ]),
  where: ShopWhereUniqueInputSchema,
}).strict() ;

export const ShopUpdateManyArgsSchema: z.ZodType<Prisma.ShopUpdateManyArgs> = z.object({
  data: z.union([ ShopUpdateManyMutationInputSchema,ShopUncheckedUpdateManyInputSchema ]),
  where: ShopWhereInputSchema.optional(),
}).strict() ;

export const ShopDeleteManyArgsSchema: z.ZodType<Prisma.ShopDeleteManyArgs> = z.object({
  where: ShopWhereInputSchema.optional(),
}).strict() ;