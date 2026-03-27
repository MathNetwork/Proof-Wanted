## Name

Davenport constant of ℤ_n ⊕ ℤ_n

## Type

open-conjecture

## Area

Additive Combinatorics / Algebraic Number Theory

## Mathematical Statement

The **Davenport constant** $D(G)$ of a finite abelian group $G$ is the smallest integer $d$ such that every multiset of $d$ elements from $G$ contains a non-empty zero-sum subsequence.

**Conjecture:** $D(\mathbb{Z}_n \oplus \mathbb{Z}_n) = 2n - 1$.

The lower bound $D(\mathbb{Z}_n \oplus \mathbb{Z}_n) \geq 2n - 1$ is easy (take $n-1$ copies of $(1,0)$ and $n-1$ copies of $(0,1)$). The upper bound is the content of the conjecture.

## Source

- Gao, W. and Geroldinger, A. "Zero-sum problems in finite abelian groups: a survey." *Expositiones Mathematicae* 24 (2006), 337–369
- Davenport, H. (1966, unpublished; related to Erdős–Ginzburg–Ziv theorem)
- Geroldinger, A. and Halter-Koch, F. *Non-Unique Factorizations*, Chapter 5

## Status

Known for:
- $n$ prime (Erdős–Ginzburg–Ziv theorem implies $D(\mathbb{Z}_p \oplus \mathbb{Z}_p) = 2p - 1$)
- $n = p^k$ for prime $p$ (Reiher, 2007 for $p$ prime; partial results for prime powers)
- General $n$: **OPEN**

## Why this is a good formalization target

Clean combinatorial statement. The Erdős–Ginzburg–Ziv theorem is already partially available in Mathlib. Formalizing the Davenport constant would create useful infrastructure for zero-sum theory.

## Mathlib Infrastructure

- ✅ `ZMod n` — integers modulo $n$
- ✅ `Multiset` — multisets with `sum`, `card`, `≤` (submultiset)
- ✅ `Fintype (ZMod n × ZMod n)` — finite type (requires `NeZero n`)
- ⚠️ `Combinatorics.Additive.ErdosGinzburgZiv` — EGZ theorem exists but Davenport constant not defined
- ❌ `DavenportConstant` — not in Mathlib; defined via `Nat.find`

## Proof Complexity Estimate

- **Estimated lines:** Unknown (open in general)
- **Key steps:** For prime $n$: reduce to EGZ; for general $n$: unknown
- **Biggest obstacle:** This is open for general $n$; even the prime case requires substantial combinatorics

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork


## 1. Statement formalizability

The statement compiles. Definitions needed:

- `ZMod n`: `Mathlib.Data.ZMod.Basic`. Present.
- `Multiset` with `sum`, `card`, `≤` (submultiset): `Mathlib.Data.Multiset.Basic`. Present.
- `Fintype (ZMod n x ZMod n)`: requires `NeZero n`, constructed in Statement.lean from `0 < n`. This works.
- `DavenportConstant`: NOT in Mathlib. Defined in Statement.lean via `Nat.find`. The definition uses `open Classical` to avoid `DecidablePred` issues. The `sorry` in the existence proof (`Fintype.card G + 1` works by pigeonhole) would need to be filled for the definition to be fully valid.

The `@DavenportConstant` call in the theorem uses explicit instance construction. This is ugly but functional.

## 2. Proof strategy

This is partially open. Known for n prime (follows from the Erdos-Ginzburg-Ziv theorem).

For n prime:
Step 1: Lower bound 2n-1 is easy: take n-1 copies of (1,0) and n-1 copies of (0,1).
Step 2: Upper bound uses EGZ. Mathlib has `Combinatorics.Additive.ErdosGinzburgZiv` with the EGZ theorem.
Step 3: Reduce the problem over Z_p x Z_p to two applications of EGZ.

For general n: open.

## 3. Estimated proof length

Statement + DavenportConstant definition: 20 lines (done, modulo the sorry in the existence proof).
Filling the existence proof (pigeonhole): 30-50 lines.
Lower bound for general n: 20-30 lines.
Upper bound for n prime: 200-400 lines, using EGZ from Mathlib.
General n: open.

## 4. Dependencies not in Mathlib

- `DavenportConstant` definition: defined in Statement.lean (5 lines + sorry).
- The existence proof for the Nat.find argument: needs pigeonhole on ZMod n x ZMod n. Mathlib has `Fintype.exists_ne_map_eq_of_card_lt` which is essentially pigeonhole.
- EGZ theorem: `Mathlib.Combinatorics.Additive.ErdosGinzburgZiv`. Present.

## 5. Risks and blockers

The DavenportConstant definition uses `Nat.find` with a sorry for the existence witness. This sorry must be filled before the definition is usable. The pigeonhole argument is standard but needs some work with Multiset API.

The `@DavenportConstant ... (by haveI : NeZero n := ...; infer_instance)` pattern for the Fintype instance is awkward. A cleaner approach would add `[NeZero n]` as a hypothesis.

## 6. Verdict

**Feasible with work**. The statement compiles. The definition needs its sorry filled (~30 lines). The prime case is feasible using Mathlib's EGZ. The general case is open.
