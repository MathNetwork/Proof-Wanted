## Name

Maximum principle for harmonic functions (via maximum modulus principle)

## Type

known-theorem

## Area

PDE / Complex Analysis

## Mathematical Statement

**Weak maximum principle (general):** Let $\Omega \subset \mathbb{R}^n$ be bounded, connected, and open. If $u$ is continuous on $\overline{\Omega}$ and harmonic on $\Omega$, then $\max_{\overline{\Omega}} u = \max_{\partial\Omega} u$.

**Complex version (stated here):** If $f$ is holomorphic on a preconnected open set $U \subseteq \mathbb{C}$ and $|f|$ attains its maximum at an interior point $z_0 \in U$, then $|f|$ is constant on $U$.

In dimension 2, harmonic functions are locally real parts of holomorphic functions, so the complex maximum modulus principle implies the harmonic maximum principle.

## Source

- Ahlfors, L.V. *Complex Analysis*, §6.1
- Evans, L.C. *Partial Differential Equations*, §2.2 (Theorem 4)
- Mathlib: `Complex.norm_eqOn_of_isPreconnected_of_isMaxOn`

## Status

The complex version (maximum modulus principle) IS in Mathlib at `Mathlib.Analysis.Complex.AbsMax`. The real-variable harmonic version requires the Laplacian, which is NOT in Mathlib.

## Why this is a good formalization target

The complex version is already essentially proved in Mathlib. The real-variable generalization to $\mathbb{R}^n$ would require defining the Laplacian and harmonic functions, which would be valuable infrastructure.

## Mathlib Infrastructure

- ✅ `DifferentiableOn ℂ f U` — holomorphic functions
- ✅ `IsMaxOn` — maximum on a set
- ✅ `IsPreconnected` — connected sets
- ✅ `Complex.norm_eqOn_of_isPreconnected_of_isMaxOn` — key lemma in `AbsMax`
- ❌ Laplacian $\Delta u$ — not defined in Mathlib
- ❌ "Harmonic function" — no definition in Mathlib

## Proof Complexity Estimate

- **Estimated lines:** 50–100 (complex version, leveraging existing Mathlib results)
- **Key steps:** Direct application of `Complex.norm_eqOn_of_isPreconnected_of_isMaxOn`
- **Biggest obstacle:** For the general ℝⁿ version: defining harmonic functions and the Laplacian

## Lean 4 Statement

See `Statement.lean` in this folder. States the complex maximum modulus principle.

**Status:** ✅ verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
