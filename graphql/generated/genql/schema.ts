import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    String: string,
    ID: string,
    DateTime: any,
    Boolean: boolean,
}

export interface Customer {
    createdAt?: Scalars['DateTime']
    dateOfBirth: Scalars['DateTime']
    firstName: Scalars['String']
    id: Scalars['ID']
    lastName: Scalars['String']
    licenseDate?: Scalars['DateTime']
    licenseImageUrl?: Scalars['String']
    licenseNumber?: Scalars['String']
    placeOfBirth: Scalars['String']
    updatedAt?: Scalars['DateTime']
    __typename: 'Customer'
}

export interface Mutation {
    createCustomer?: Customer
    __typename: 'Mutation'
}

export interface Query {
    getCustomers?: (Customer | undefined)[]
    __typename: 'Query'
}

export type SortOrder = 'asc' | 'desc'

export interface CustomerRequest{
    createdAt?: boolean | number
    dateOfBirth?: boolean | number
    firstName?: boolean | number
    id?: boolean | number
    lastName?: boolean | number
    licenseDate?: boolean | number
    licenseImageUrl?: boolean | number
    licenseNumber?: boolean | number
    placeOfBirth?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationRequest{
    createCustomer?: [{dateOfBirth: Scalars['String'],firstName: Scalars['String'],lastName: Scalars['String'],licenseDate?: (Scalars['String'] | null),licenseImageUrl?: (Scalars['String'] | null),licenseNumber?: (Scalars['String'] | null),placeOfBirth: Scalars['String']},CustomerRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    getCustomers?: [{sortBy?: (SortOrder | null)},CustomerRequest] | CustomerRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Customer_possibleTypes = ['Customer']
export const isCustomer = (obj?: { __typename?: any } | null): obj is Customer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomer"')
  return Customer_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}


export interface CustomerPromiseChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    dateOfBirth: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Promise<Scalars['DateTime']>}),
    firstName: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    lastName: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    licenseDate: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>}),
    licenseImageUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    licenseNumber: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    placeOfBirth: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Promise<(Scalars['DateTime'] | undefined)>})
}

export interface CustomerObservableChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    dateOfBirth: ({get: (request?: boolean|number, defaultValue?: Scalars['DateTime']) => Observable<Scalars['DateTime']>}),
    firstName: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    lastName: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    licenseDate: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>}),
    licenseImageUrl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    licenseNumber: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    placeOfBirth: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: (Scalars['DateTime'] | undefined)) => Observable<(Scalars['DateTime'] | undefined)>})
}

export interface MutationPromiseChain{
    createCustomer: ((args: {dateOfBirth: Scalars['String'],firstName: Scalars['String'],lastName: Scalars['String'],licenseDate?: (Scalars['String'] | null),licenseImageUrl?: (Scalars['String'] | null),licenseNumber?: (Scalars['String'] | null),placeOfBirth: Scalars['String']}) => CustomerPromiseChain & {get: <R extends CustomerRequest>(request: R, defaultValue?: (FieldsSelection<Customer, R> | undefined)) => Promise<(FieldsSelection<Customer, R> | undefined)>})
}

export interface MutationObservableChain{
    createCustomer: ((args: {dateOfBirth: Scalars['String'],firstName: Scalars['String'],lastName: Scalars['String'],licenseDate?: (Scalars['String'] | null),licenseImageUrl?: (Scalars['String'] | null),licenseNumber?: (Scalars['String'] | null),placeOfBirth: Scalars['String']}) => CustomerObservableChain & {get: <R extends CustomerRequest>(request: R, defaultValue?: (FieldsSelection<Customer, R> | undefined)) => Observable<(FieldsSelection<Customer, R> | undefined)>})
}

export interface QueryPromiseChain{
    getCustomers: ((args?: {sortBy?: (SortOrder | null)}) => {get: <R extends CustomerRequest>(request: R, defaultValue?: ((FieldsSelection<Customer, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<Customer, R> | undefined)[] | undefined)>})&({get: <R extends CustomerRequest>(request: R, defaultValue?: ((FieldsSelection<Customer, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<Customer, R> | undefined)[] | undefined)>})
}

export interface QueryObservableChain{
    getCustomers: ((args?: {sortBy?: (SortOrder | null)}) => {get: <R extends CustomerRequest>(request: R, defaultValue?: ((FieldsSelection<Customer, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<Customer, R> | undefined)[] | undefined)>})&({get: <R extends CustomerRequest>(request: R, defaultValue?: ((FieldsSelection<Customer, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<Customer, R> | undefined)[] | undefined)>})
}