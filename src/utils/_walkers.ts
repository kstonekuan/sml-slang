/*
acorn.Node differs from estree.Node, so we have this file to handle the `as any` type coercions.
 */

import * as walkers from 'acorn-walk'
export type FullWalkerCallback<TState> = (node: any, state: TState, type: string) => void

type FullAncestorWalkerCallback<TState> = (
  node: any,
  state: TState | any[],
  ancestors: any[],
  type: string
) => void
export type WalkerCallback<TState> = (node: any, state: TState, type?: string) => void

type SimpleWalkerFn<TState> = (node: any, state: TState) => void

export type AncestorWalkerFn<TState> = (
  node: any,
  state: TState | any[],
  ancestors: any[]
) => void

type RecursiveWalkerFn<TState> = (
  node: any,
  state: TState,
  callback: WalkerCallback<TState>
) => void

interface SimpleVisitors<TState> {
  [type: string]: SimpleWalkerFn<TState>
}

interface AncestorVisitors<TState> {
  [type: string]: AncestorWalkerFn<TState>
}

interface RecursiveVisitors<TState> {
  [type: string]: RecursiveWalkerFn<TState>
}

type FindPredicate = (type: string, node: any) => boolean

interface Found<TState> {
  node: any
  state: TState
}

export const simple: <TState>(
  node: any,
  visitors: SimpleVisitors<TState>,
  base?: RecursiveVisitors<TState>,
  state?: TState
) => void = walkers.simple as any

export const ancestor: <TState>(
  node: any,
  visitors: AncestorVisitors<TState>,
  base?: RecursiveVisitors<TState>,
  state?: TState
) => void = walkers.ancestor as any

export const recursive: <TState>(
  node: any,
  state: TState,
  functions: RecursiveVisitors<TState>,
  base?: RecursiveVisitors<TState>
) => void = walkers.recursive as any

export const full: <TState>(
  node: any,
  callback: FullWalkerCallback<TState>,
  base?: RecursiveVisitors<TState>,
  state?: TState
) => void = walkers.full as any

export const fullAncestor: <TState>(
  node: any,
  callback: FullAncestorWalkerCallback<TState>,
  base?: RecursiveVisitors<TState>,
  state?: TState
) => void = walkers.fullAncestor as any

export const make: <TState>(
  functions: RecursiveVisitors<TState>,
  base?: RecursiveVisitors<TState>
) => RecursiveVisitors<TState> = walkers.make as any

export const findNodeAt: <TState>(
  node: any,
  start: number | undefined,
  end: number | undefined,
  type?: FindPredicate,
  base?: RecursiveVisitors<TState>,
  state?: TState
) => Found<TState> | undefined = walkers.findNodeAt as any
export const findNodeAround: typeof findNodeAt = walkers.findNodeAround as any

export const findNodeAfter: typeof findNodeAt = walkers.findNodeAfter as any

export const base: AncestorVisitors<never> = walkers.base as any
