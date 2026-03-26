# Formalization Assessment: Frankl's conjecture for semimodular lattices

## 1. Statement formalizability

The statement compiles. Definitions needed:

- `Lattice`, `BoundedOrder`: Lean core / `Mathlib.Order.Lattice`. Present.
- `IsUpperModularLattice`: `Mathlib.Order.ModularLattice`. Present. Uses `CovBy` (covering relation).
- `SupIrred` (sup-irreducible = join-irreducible): `Mathlib.Order.Irreducible`. Present.
- `Finset.univ.filter`, `Finset.card`, `Fintype.card`: `Mathlib.Data.Fintype.Card`, `Mathlib.Data.Finset.Basic`. Present.
- `DecidableEq L`, `DecidableRel (fun (a b : L) => a <= b)`: needed for `Finset.filter`. These are typeclass hypotheses in the statement.

All definitions are in Mathlib. The statement is clean.

## 2. Proof strategy

This is an open problem for upper semimodular lattices.

Known for modular lattices (Abe-Nakano 1998) and lower semimodular lattices (Reinhold 2000). The modular lattice proof uses the Jordan-Holder theorem (which gives a composition series) and counts join-irreducibles by level.

For modular lattices in Lean:
Step 1: Use `IsModularLattice` (subclass of `IsUpperModularLattice`). Present in Mathlib.
Step 2: Establish a composition series. `Mathlib.Order.JordanHolder` exists.
Step 3: Count join-irreducibles at each level. Needs combinatorial argument.

## 3. Estimated proof length

Statement: 10 lines (done).
Modular lattice case: estimated 500-1000 lines.
Upper semimodular case: open.

## 4. Dependencies not in Mathlib

For the modular case:
- Jordan-Holder theorem: `Mathlib.Order.JordanHolder`. Present.
- Counting join-irreducibles per level: not directly available. Needs ~50-100 lines of lemmas about `SupIrred` elements in modular lattices.

## 5. Risks and blockers

The `DecidableRel` hypothesis is needed for `Finset.filter` but may be annoying to carry through proofs. An alternative approach using `Finset.filter` with `Classical.dec` would avoid this.

The open status for upper semimodular lattices means no proof strategy exists for the full statement.

## 6. Verdict

**Feasible with work** (for the modular lattice special case). The statement compiles cleanly using existing Mathlib API. The upper semimodular case is open.
