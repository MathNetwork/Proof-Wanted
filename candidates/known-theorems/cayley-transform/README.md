## Name

Cayley transform: Poincaré disk ↔ upper half-plane

## Type

known-theorem

## Area

Hyperbolic Geometry / Complex Analysis

## Mathematical Statement

The Cayley transform $V(z) = i\frac{1-z}{1+z}$ is a biholomorphism from the Poincaré disk $\mathbb{D} = \{z \in \mathbb{C} : |z| < 1\}$ to the upper half-plane $\mathbb{H}$, with inverse $V^{-1}(w) = \frac{w - i}{w + i}$.

## Source

- Ahlfors, L.V. *Complex Analysis*, Chapter 6
- Conway, J.B. *Functions of One Complex Variable II*, §14.1

## Status

Standard result in complex analysis. No known Lean formalization of this specific bijection.

## Why this is a good formalization target

Self-contained computation. Tests Lean's ability to handle complex arithmetic and subtype proofs (positivity of imaginary part, norm bound).

## Mathlib Infrastructure

- ✅ `UpperHalfPlane` — structure with field `coe : ℂ` and `coe_im_pos`
- ✅ `Complex.I` — the imaginary unit
- ✅ `Complex.norm` — `‖z‖` for complex numbers
- ❌ `PoincareDisk` — not in Mathlib; defined as `{z : ℂ // ‖z‖ < 1}`

## Proof Complexity Estimate

- **Estimated lines:** 150–300
- **Key steps:** Show $\mathrm{Im}(V(z)) > 0$ when $|z| < 1$; show $|V^{-1}(w)| < 1$ when $\mathrm{Im}(w) > 0$; verify both compositions are identity
- **Biggest obstacle:** Complex arithmetic in subtype proofs; division well-definedness

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork


## 1. Statement formalizability

The statement compiles. Definitions needed:

- `UpperHalfPlane`: `Mathlib.Analysis.Complex.UpperHalfPlane.Basic`. Structure with `coe : ℂ` and `coe_im_pos`.
- `Complex.I`: `Mathlib.Analysis.Complex.Basic`.
- `PoincareDisk`: NOT in Mathlib. Defined as `{z : ℂ // ‖z‖ < 1}` in Statement.lean (1 line). Adequate.

The constructor `UpperHalfPlane.mk` uses the `where` syntax with `coe := ...` and `coe_im_pos := by sorry`. The sorry in the constructor is for showing `Im(i(1-z)/(1+z)) > 0` when `‖z‖ < 1`.

## 2. Proof strategy

Step 1 (cayleyTransform well-defined): Show `Im(i(1-z)/(1+z)) > 0` when `|z| < 1`. Write `z = a + bi`, compute `i(1-z)/(1+z)`, extract imaginary part. This is a direct computation showing `Im = (1 - |z|^2) / |1 + z|^2 > 0`.

Step 2 (inverseCayley well-defined): Show `|(w - i)/(w + i)| < 1` when `Im(w) > 0`. Again a direct computation.

Step 3 (left inverse): Algebraic simplification of `inverseCayley (cayleyTransform z)`. Both compositions simplify to the identity by complex algebra.

Step 4 (right inverse): Same as step 3.

All steps are complex arithmetic. The `field_simp` and `ring` tactics should handle most of it, but division by complex numbers requires showing denominators are nonzero.

## 3. Estimated proof length

200-400 lines. The main overhead is:
- Showing denominators `1 + z` and `w + i` are nonzero (~30 lines each).
- Computing imaginary parts through division (~50 lines each for steps 1 and 2).
- Algebraic simplification for left/right inverse (~50 lines each).

## 4. Dependencies not in Mathlib

- `PoincareDisk` type: 1 line, in Statement.lean. Mathlib does not have a dedicated Poincare disk type.

## 5. Risks and blockers

Complex division in Lean requires showing the denominator is nonzero. For `1 + z` when `‖z‖ < 1`: since `‖z‖ < 1`, we have `z ≠ -1`, so `1 + z ≠ 0`. This needs `Complex.norm_neg_one = 1` or similar. For `w + i` when `Im(w) > 0`: since `Im(i) = 1 > 0` and `Im(w) > 0`, we have `Im(w + i) > 0`, so `w + i ≠ 0`.

The `Subtype.ext` lemma should handle proving equality of PoincareDisk/UpperHalfPlane elements.

## 6. Verdict

**Ready**. Statement compiles. Proof is direct complex arithmetic. Estimated 200-400 lines.
