## Name

ℍ as a homogeneous space: SL(2,ℝ)/SO(2)

## Type

known-theorem

## Area

Hyperbolic Geometry

## Mathematical Statement

1. **Transitivity:** $\mathrm{SL}(2,\mathbb{R})$ acts transitively on $\mathbb{H}$: for every $z \in \mathbb{H}$, there exists $g \in \mathrm{SL}(2,\mathbb{R})$ with $g \cdot i = z$.

2. **Stabilizer:** The stabilizer of $i \in \mathbb{H}$ is $\mathrm{SO}(2)$: $g \cdot i = i$ if and only if $g$ is a rotation matrix $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$.

Hence $\mathbb{H} \cong \mathrm{SL}(2,\mathbb{R})/\mathrm{SO}(2)$.

## Source

- Helgason, S. *Differential Geometry, Lie Groups, and Symmetric Spaces*, Chapter IV
- Iwaniec, H. *Spectral Methods of Automorphic Forms*, §2.1

## Status

Standard result. No known Lean formalization.

## Why this is a good formalization target

Builds directly on the Möbius action infrastructure already in Mathlib. The proof is a concrete computation.

## Mathlib Infrastructure

- ✅ `UpperHalfPlane.I` — the point $i \in \mathbb{H}$
- ✅ Möbius action `g • z`
- ✅ `Real.cos`, `Real.sin` — trigonometric functions
- ✅ `!![a, b; c, d]` matrix notation

## Proof Complexity Estimate

- **Estimated lines:** 100–200
- **Key steps:** Construct explicit $g$ sending $i$ to $z = x + iy$ via $g = \begin{pmatrix} \sqrt{y} & x/\sqrt{y} \\ 0 & 1/\sqrt{y} \end{pmatrix}$; solve $g \cdot i = i$ to get rotation form
- **Biggest obstacle:** Verifying determinant conditions for constructed matrices

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork


## 1. Statement formalizability

The statement compiles. All definitions are in Mathlib:

- `UpperHalfPlane.I`: the point i in H. `Mathlib.Analysis.Complex.UpperHalfPlane.Basic`.
- `SL(2, ℝ)` and `g • z`: same as sl2r-trace-classification.
- `Real.cos`, `Real.sin`: `Mathlib.Analysis.SpecialFunctions.Trigonometric.Basic`.
- Matrix notation `!![a, b; c, d]`: `Mathlib.Data.Matrix.Notation`.

## 2. Proof strategy

Transitivity:
Step 1: Given z = x + iy with y > 0, construct g = !![sqrt(y), x/sqrt(y); 0, 1/sqrt(y)].
Step 2: Verify det g = 1 (so g is in SL(2,R)). This is sqrt(y) * (1/sqrt(y)) - (x/sqrt(y)) * 0 = 1.
Step 3: Compute g • i using the Mobius action formula and verify it equals z.

Stabilizer:
Step 1: Solve g • i = i. This gives ai + b = i(ci + d), i.e., b = -c and a = d.
Step 2: Combined with ad - bc = 1, get a^2 + c^2 = 1.
Step 3: Parametrize as a = cos(theta), c = sin(theta).

All steps are direct computation. The main difficulty is managing the complex arithmetic and coercions.

## 3. Estimated proof length

200-400 lines. The transitivity proof is a construction (~100 lines including det verification). The stabilizer characterization is algebraic manipulation (~150 lines).

## 4. Dependencies not in Mathlib

None. `Real.sqrt` is in `Mathlib.Analysis.SpecialFunctions.Pow.Real`. The matrix `!![a, b; c, d]` notation works for constructing elements of SL(2,R) (need to verify `det = 1`).

## 5. Risks and blockers

Constructing an explicit SL(2,R) element requires proving its determinant is 1. This means constructing `⟨!![sqrt y, x/sqrt y; 0, 1/sqrt y], det_proof⟩ : SL(2, ℝ)`. The `det_proof` is a computation that `ring` or `field_simp` should handle, but dealing with `sqrt` (which is noncomputable and requires `0 < y`) adds overhead.

## 6. Verdict

**Ready**. Statement compiles. Proof is direct construction. Estimated 200-400 lines.
