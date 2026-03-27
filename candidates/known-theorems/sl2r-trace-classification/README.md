## Name

Trace classification of SL(2,ℝ) elements

## Type

known-theorem

## Area

Hyperbolic Geometry

## Mathematical Statement

Every non-identity element $g \in \mathrm{SL}(2,\mathbb{R})$ is classified by its trace:

- **Elliptic** ($|\mathrm{tr}(g)| < 2$): $g$ has a unique fixed point in $\mathbb{H}$.
- **Parabolic** ($|\mathrm{tr}(g)| = 2$, $g \neq \pm I$): $g$ has a unique fixed point on $\partial\mathbb{H}$ and none in $\mathbb{H}$.
- **Hyperbolic** ($|\mathrm{tr}(g)| > 2$): $g$ has exactly two fixed points on $\partial\mathbb{H}$ and none in $\mathbb{H}$.

## Source

- Katok, S. *Fuchsian Groups* (Chicago Lectures in Mathematics), Chapter 2
- Beardon, A.F. *The Geometry of Discrete Groups*, §4.3

## Status

Standard result in hyperbolic geometry. No known formalization in Lean/Mathlib.

## Why this is a good formalization target

The classification is elementary and self-contained. All infrastructure (SL(2,ℝ), upper half-plane, Möbius action) exists in Mathlib.

## Mathlib Infrastructure

- ✅ `Matrix.SpecialLinearGroup (Fin 2) ℝ` — SL(2,ℝ)
- ✅ `UpperHalfPlane` — the type ℍ
- ✅ `Matrix.trace` — trace of a matrix
- ✅ Möbius action `g • z` via `Mathlib.Analysis.Complex.UpperHalfPlane.MoebiusAction`
- ⚠️ Boundary ∂ℍ — not directly modeled; parabolic/hyperbolic fixed points live on ℝ ∪ {∞}

## Proof Complexity Estimate

- **Estimated lines:** 200–400
- **Key steps:** Solve $gz = z$ as quadratic in $z$, analyze discriminant $\mathrm{tr}^2 - 4$
- **Biggest obstacle:** Working with the extended real line / projective line for boundary fixed points

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork


## 1. Statement formalizability

The statement compiles. All definitions are in Mathlib:

- `SL(2, ℝ)` (notation for `Matrix.SpecialLinearGroup (Fin 2) ℝ`): `Mathlib.LinearAlgebra.Matrix.SpecialLinearGroup`. Requires `open scoped MatrixGroups`.
- `Matrix.trace`: `Mathlib.LinearAlgebra.Matrix.Trace`. Returns `ℝ` for a `Matrix (Fin 2) (Fin 2) ℝ`.
- Coercion `(g : Matrix (Fin 2) (Fin 2) ℝ)` from `SL(2, ℝ)`: via `hasCoeToMatrix` in `Mathlib.LinearAlgebra.Matrix.SpecialLinearGroup`.
- `|·|` (absolute value on `ℝ`): in Lean core / `Mathlib.Algebra.Order.AbsoluteValue`.
- Mobius action `g • z`: `Mathlib.Analysis.Complex.UpperHalfPlane.MoebiusAction`. The `SMul` instance `SL(2, ℝ) → UpperHalfPlane → UpperHalfPlane` is there.
- `UpperHalfPlane`: `Mathlib.Analysis.Complex.UpperHalfPlane.Basic`. Structure with fields `coe : ℂ` and `coe_im_pos`.

Nothing is missing for the statement.

## 2. Proof strategy

Step 1: The fixed-point equation `g • z = z` reduces to `cz^2 + (d-a)z - b = 0` where g = [[a,b],[c,d]]. This is direct algebra using the Mobius action formula from `UpperHalfPlane.coe_specialLinearGroup_apply`.

Step 2: When c != 0, this is a quadratic in z. The discriminant is `(d-a)^2 + 4bc = (a+d)^2 - 4(ad-bc) = tr^2 - 4`, using `det g = 1` (from `SpecialLinearGroup.det_coe`).

Step 3: When |tr| < 2, the discriminant is negative. The quadratic has two conjugate complex roots, exactly one with positive imaginary part. This gives the unique fixed point in H.

Step 4: When |tr| > 2, the discriminant is positive. Both roots are real, so no fixed point in H (which requires im > 0).

Step 5: When |tr| = 2 and g != +-I, we have c != 0 and discriminant = 0, giving one real root. Or c = 0 and the action is z -> z + b/a, which has no fixed point.

Mathlib has the quadratic formula via `Polynomial.roots` for degree-2 polynomials, but it may be easier to work directly with the quadratic formula by hand.

## 3. Estimated proof length

500-800 lines. The main work is:
- Reducing the fixed-point equation to a quadratic (~100 lines).
- Case analysis on the discriminant sign (~100 lines).
- Showing that complex conjugate roots with positive imaginary part give exactly one fixed point (~200 lines).
- The c=0 case (translation action) (~50 lines).
- Handling the g=+-I edge cases (~50 lines).

Comparable to a medium Mathlib contribution.

## 4. Dependencies not in Mathlib

None. All needed API exists: SL(2,R), Mobius action, UpperHalfPlane, trace, absolute value, complex arithmetic.

## 5. Risks and blockers

The Mobius action formula in Mathlib uses `algebraMap R ℝ` which adds some coercion overhead. Working with the explicit 2x2 matrix entries (g 0 0, g 0 1, g 1 0, g 1 1) through coercions requires care.

The quadratic formula argument over ℂ might be more work than expected if done from scratch. Using `Polynomial.roots` for the degree-2 case is an alternative but may introduce unnecessary complexity.

## 6. Verdict

**Ready**. Statement compiles. All API exists. Proof strategy is clear. Estimated 500-800 lines.
