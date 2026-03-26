# Formalization Assessment: Erdos-Straus conjecture

## 1. Statement formalizability

The statement compiles. It uses only `ℕ` arithmetic: `4 * x * y * z = n * (y * z + x * z + x * y)`. This is the cleared-denominator version of 4/n = 1/x + 1/y + 1/z.

Definitions needed:
- `ℕ`, `≤`, `∃`, `∧`, `0 <`, multiplication, addition. All in Lean core.
- No Mathlib needed beyond `Mathlib.Data.Nat.Basic`.

The statement is a one-liner. There is nothing to get wrong.

## 2. Proof strategy

This is an open problem. No general proof exists. Verified for n up to 10^17 by computation.

Partial results use modular arithmetic: for specific residues of n mod 4, mod 12, etc., explicit decompositions exist. A formalization of partial results would proceed by:

Step 1: Case split on n mod some modulus M (e.g., M = 4 or M = 12 or M = 840).
Step 2: For each residue class, exhibit explicit x, y, z in terms of n.
Step 3: Verify the identity 4xyz = n(yz + xz + xy) by ring.

Lean's `omega`, `ring`, and `decide` tactics handle each case easily.

## 3. Estimated proof length

For a partial result covering specific residue classes: 50-200 lines, depending on how many cases are handled. Each case is approximately 5 lines (introduce witnesses, verify by `ring`).

A full proof does not exist.

## 4. Dependencies not in Mathlib

None. The statement and any partial proofs use only natural number arithmetic.

## 5. Risks and blockers

This is an open problem. No proof exists for the general case. Formalizing partial results (specific residue classes) is straightforward but not the full conjecture.

## 6. Verdict

**Ready** (for the statement). The statement compiles trivially. Partial results for specific residue classes are also ready to formalize. The full conjecture is mathematically open.
