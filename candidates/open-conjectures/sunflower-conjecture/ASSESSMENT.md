# Formalization Assessment: Sunflower conjecture

## 1. Statement formalizability

The statement compiles. Definitions needed:

- `Finset` and `Finset.card`: `Mathlib.Data.Finset.Card`. Present.
- `Finset.inter` (`∩`): `Mathlib.Data.Finset.Basic`. Present.
- `IsSunflower`: NOT in Mathlib. Defined in Statement.lean as a 3-line definition. This is adequate for the conjecture statement. Note: the equational_theories project and LeanCamCombi have variants of sunflower definitions, but they are not in Mathlib proper.

The existential quantifier `∃ C : ℕ, 0 < C ∧ ...` with a universe-polymorphic inner quantifier over `{α : Type*}` compiles correctly. The `[DecidableEq α]` and `[Fintype α]` instances are needed for `Finset` operations.

## 2. Proof strategy

This is an open problem. The conjecture asks for C^k without logarithmic correction.

The Erdos-Rado sunflower lemma (with the weaker bound (k-1)^k * k!) has been formalized in the LeanCamCombi project. The proof proceeds by induction on k, with a greedy argument at each step.

The Alweiss-Lovett-Wu-Zhang improvement to (C log k)^k uses a probabilistic spread approximation argument. Formalizing this improvement is feasible but requires 1000+ lines.

Removing the log k factor entirely is open.

## 3. Estimated proof length

Statement only: 15 lines (done).
The weaker sunflower lemma: estimated 300-500 lines (already done in LeanCamCombi).
The ALWZ improvement: estimated 1000-2000 lines.
The conjecture itself: open.

## 4. Dependencies not in Mathlib

- Sunflower definition: 3 lines, already in Statement.lean.
- For the weaker lemma proof: nothing beyond basic Finset combinatorics.
- For ALWZ: probabilistic method tools, spread approximation. Not in Mathlib.

## 5. Risks and blockers

The definition of IsSunflower in Statement.lean uses `∀ A ∈ F, ∀ B ∈ F, A ≠ B → A ∩ B = Y`. This is correct but requires F to have at least 2 elements for the kernel Y to be uniquely determined. For 1-element families the definition is vacuously true, which is fine for the conjecture (we ask for S with 3 <= S.card).

## 6. Verdict

**Ready** (for the statement). The statement compiles, uses only basic Finset API. The sunflower lemma (weaker bound) has already been formalized elsewhere. The full conjecture is open.
