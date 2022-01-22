// /graphql/schema.ts
import {
  asNexusMethod,
  makeSchema,
  objectType,
  queryType,
  mutationType,
  enumType,
  arg,
  nonNull,
  stringArg,
  idArg,
} from "nexus";
import { DateTimeResolver } from "graphql-scalars";
import * as path from "path";

const DateTime = asNexusMethod(DateTimeResolver, "DateTime");

const Customer = objectType({
  name: "Customer",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
    t.nonNull.field("dateOfBirth", { type: "DateTime" });
    t.nonNull.string("placeOfBirth");
    t.string("licenseNumber");
    t.field("licenseDate", { type: "DateTime" });
    t.string("licenseImageUrl");
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
  },
});

const SortOrder = enumType({
  name: "SortOrder",
  members: ["asc", "desc"],
});

const Query = queryType({
  definition(t) {
    t.list.field("getCustomers", {
      type: "Customer",
      args: {
        sortBy: arg({ type: "SortOrder" }),
      },
      resolve: async (_, args, ctx) => {
        return ctx.db.customer.findMany({
          orderBy: { createdAt: args.sortBy || undefined },
        });
      },
    });
  },
});

const Mutation = mutationType({
  definition(t) {
    t.field("createCustomer", {
      type: "Customer",
      args: {
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
        dateOfBirth: nonNull(stringArg()),
        placeOfBirth: nonNull(stringArg()),
        licenseNumber: stringArg(),
        licenseDate: stringArg(),
        licenseImageUrl: stringArg(),
      },
      resolve: (_, args, ctx) => {
        try {
          return ctx.db.customer.create({
            data: {
              firstName: args.firstName,
              lastName: args.lastName,
              dateOfBirth: args.dateOfBirth,
              placeOfBirth: args.placeOfBirth,
              licenseNumber: args.licenseNumber || undefined,
              licenseDate: args.licenseDate || undefined,
              licenseImageUrl: args.licenseImageUrl || undefined,
            },
          });
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });
  },
});

export const schema = makeSchema({
  types: [Query, Mutation, DateTime, Customer, SortOrder],
  outputs: {
    schema: path.join(process.cwd(), "graphql/schema.graphql"),
    typegen: path.join(process.cwd(), "graphql/generated/nexus.d.ts"),
  },
  contextType: {
    module: path.join(process.cwd(), "graphql/context.ts"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "db",
      },
    ],
  },
});
