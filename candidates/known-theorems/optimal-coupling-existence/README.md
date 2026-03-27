## Name

Existence of optimal couplings

## Summary

The Kantorovich optimal transport problem has a minimizer when the spaces are compact and the cost is lower semicontinuous.

## Type

known-theorem

## Area

Optimal Transport / Measure Theory

## Mathematical Statement

Let $X, Y$ be compact metric spaces, $c: X \times Y \to [0, \infty]$ a lower semicontinuous cost function, and $\mu \in \mathcal{P}(X)$, $\nu \in \mathcal{P}(Y)$ probability measures. Then the Kantorovich problem

$$\inf_{\gamma \in \Gamma(\mu,\nu)} \int_{X \times Y} c(x,y) \, d\gamma(x,y)$$

admits a minimizer. That is, there exists an optimal coupling $\bar{\gamma} \in \Gamma(\mu,\nu)$.

## Source

- Villani, C. *Optimal Transport: Old and New*, Theorem 4.1
- Figalli, A. and Glaudo, F. *An Invitation to Optimal Transport, Wasserstein Distances, and Gradient Flows*, Theorem 2.1

## Status

The proof uses: (1) $\Gamma(\mu,\nu)$ is tight (by tightness of marginals on compact spaces), (2) $\Gamma(\mu,\nu)$ is closed under weak-* convergence, (3) the cost functional is lsc under weak-* convergence. Then apply the direct method of calculus of variations.

## Why this is a good formalization target

Uses fundamental measure theory (weak convergence, tightness, lsc functionals) that Mathlib is building toward. The Levy-Prokhorov metric and `ProbabilityMeasure` with weak-* topology are already in Mathlib.

## Mathlib Infrastructure

- `MeasureTheory.IsProbabilityMeasure` -- in Mathlib
- Weak-* topology on probability measures -- in Mathlib
- `LowerSemicontinuous` -- in Mathlib
- `Measure.map` (pushforward) -- in Mathlib
- Compact spaces, `IsCompact` -- in Mathlib
- Integration w.r.t. product measure -- in Mathlib
- Tightness of measures -- may need definition
- Coupling definition -- needs definition

## Proof Complexity Estimate

- **Estimated lines:** 600-1000
- **Key steps:** Show coupling set is compact in weak-* topology; show cost functional is lsc; apply direct method
- **Biggest obstacle:** Prokhorov's theorem (tightness <-> relative compactness) may not be in Mathlib

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** draft -- verified against Mathlib (2026-03-26)

## Contributor

MathNetwork


## 1. Statement formalizability

The statement compiles. Definitions:

- `PseudoMetricSpace X`, `CompactSpace X`, `BorelSpace X`: all in Mathlib.
- `IsProbabilityMeasure μ`: present.
- `LowerSemicontinuous c`: `Mathlib.Topology.Semicontinuity.Basic`. Defined as `∀ x, ∀ᶠ y in nhds x, c x ≤ c y` (or equivalent).
- `∫⁻ xy, c xy ∂γ`: lintegral. `Mathlib.MeasureTheory.Integral.Lebesgue.Basic`.
- `Measure.map Prod.fst`: present.

Custom definitions: `IsCouplingOf`, `couplingsOf`, `transportCostMeasure`. All 2-3 lines.

## 2. Proof strategy

Step 1: Show `couplingsOf μ ν` is nonempty. The product measure `μ.prod ν` is a coupling. Mathlib has `Measure.prod` and `Measure.map_fst_prod`, `Measure.map_snd_prod` showing its marginals.

Step 2: Show `couplingsOf μ ν` is tight (compact in the weak-* topology). On compact spaces, all probability measures are tight (Prokhorov's theorem). Mathlib has `ProbabilityMeasure` with the weak-* topology.

Step 3: Show `couplingsOf μ ν` is closed in the weak-* topology. The marginal constraints are continuous with respect to weak convergence, so the coupling set is closed.

Step 4: Show the cost functional `γ ↦ ∫⁻ c dγ` is lower semicontinuous under weak convergence. This uses `LowerSemicontinuous c` and the Portmanteau theorem.

Step 5: A lower semicontinuous function on a compact set attains its minimum. Apply `IsCompact.exists_isMinOn`.

Mathlib has: `ProbabilityMeasure` with weak topology, `Measure.prod`, basic Portmanteau results (partially), `IsCompact.exists_isMinOn`.

## 3. Estimated proof length

800-1500 lines. The main work is:
- Prokhorov theorem (tightness = relative compactness): partially in Mathlib for `ProbabilityMeasure` on compact spaces.
- Portmanteau theorem (lsc integration under weak convergence): partially in Mathlib.
- Closedness of coupling set: ~100 lines.
- Applying IsCompact.exists_isMinOn: ~20 lines.

## 4. Dependencies not in Mathlib

- Full Portmanteau theorem: partially in Mathlib. The direction "weak convergence implies lsc integrals converge" may need development.
- Tightness on compact spaces: compact metric spaces have the property that all measures are tight. This should follow from CompactSpace but may need explicit proof.
- Weak convergence topology on `Measure X`: Mathlib has `ProbabilityMeasure` with its topology, but the connection to `Measure X` requires some glue.

## 5. Risks and blockers

The main risk is the interface between `Measure X` (used in the statement) and `ProbabilityMeasure X` (which has the weak topology in Mathlib). The statement uses `Measure X` with `[IsProbabilityMeasure]` rather than `ProbabilityMeasure X`. Converting between these may require boilerplate.

The Portmanteau theorem for lsc functions is the key analytical ingredient. If it's not fully in Mathlib, it needs 200-400 lines of development.

## 6. Verdict

**Feasible with work**. Statement compiles. The proof strategy uses compactness + lsc, all conceptually available in Mathlib. The Portmanteau theorem and some weak convergence glue may need 200-400 lines of new infrastructure. Estimated 800-1500 lines total.
