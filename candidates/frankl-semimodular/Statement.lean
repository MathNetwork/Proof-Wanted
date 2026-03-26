-- Frankl's conjecture for finite upper semimodular lattices
-- Status: ⚠️ draft

import Mathlib.Order.ModularLattice
import Mathlib.Order.Irreducible
import Mathlib.Order.Atoms
import Mathlib.Data.Fintype.Card

open Finset

theorem frankl_semimodular
    {L : Type*} [Lattice L] [BoundedOrder L] [Fintype L] [DecidableEq L]
    [DecidableRel (fun (a b : L) => a ≤ b)]
    [IsUpperModularLattice L] :
    ∃ j : L, SupIrred j ∧
      2 * (Finset.univ.filter (fun x => j ≤ x)).card ≤ Fintype.card L := by
  sorry
