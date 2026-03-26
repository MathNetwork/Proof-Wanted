# Feasibility Summary

| Candidate | Type | Verdict | Compiles? | Est. lines | Key blocker |
|-----------|------|---------|:---------:|:----------:|-------------|
| Erdos-Straus | open | Ready | Yes | varies | Open problem |
| Sunflower | open | Ready | Yes | varies | Open problem |
| Chvatal | open | Feasible | Yes | varies | EKR extension for partial results |
| Davenport rank-two | open | Feasible | Yes | varies | DavenportConstant sorry; prime case feasible via EGZ |
| Frankl semimodular | open | Feasible | Yes | varies | Open for upper semimodular; modular case needs ~500 lines |
| Erdos matching | open | Significant | Yes | varies | Shifting/compression framework |
| Sensitivity (tight) | open | Feasible | Yes | varies | blockSensitivity definition (~20 lines) |
| Equational theories | open | Ready | Yes | 5-50/each | Individual implications are self-contained |
| SL(2,R) trace | known | Ready | Yes | 500-800 | None |
| SL(2,R) homogeneous | known | Ready | Yes | 200-400 | None |
| Cayley transform | known | Ready | Yes | 200-400 | None |
| Cantor set dimH | known | Feasible | Yes | 500-800 | Mass distribution principle (~100-200 lines) |
| Besicovitch covering | known | Significant | Yes | 1500-3000 | Geometric packing bound |
| Sard's theorem | known | Significant | Yes | 1500-3000 | Measure estimates on images |
| Coarea formula | known | Significant | Yes | 2000-4000 | Area formula, change-of-variables for Hausdorff measure |
| Azuma-Hoeffding | known | Feasible | Yes | 500-1000 | Hoeffding's lemma (~200 lines) |
| Kolmogorov 0-1 | known | Feasible | Yes | 200-400 | MeasurableSpace lattice management |
| Poincare inequality | known | Feasible | Yes | 400-800 | Fubini on EuclideanSpace |
| Lax-Milgram | known | Ready | Yes | 300-500 | None |
| Maximum modulus | known | Ready | Yes | 10-50 | Already in Mathlib |
| Rellich-Kondrachov | known | Blocked | Yes (fallback) | 2000-5000 | Sobolev spaces W^{1,p} not in Mathlib |
| Wasserstein metric | known | Significant | Yes | 800-1500 | Gluing lemma, disintegration |
| Kantorovich discrete | known | Feasible | Yes | 300-800 | LP duality (direct proof feasible) |
| Optimal coupling | known | Feasible | Yes | 800-1500 | Portmanteau theorem (~200-400 lines) |

## By verdict

**Ready** (statement compiles, proof strategy clear, deps in Mathlib, <= 800 lines):
SL(2,R) trace, SL(2,R) homogeneous, Cayley transform, Lax-Milgram, Maximum modulus, Erdos-Straus, Sunflower, Equational theories.

**Feasible with work** (needs 100-500 lines of new infrastructure):
Cantor set dimH, Azuma-Hoeffding, Kolmogorov 0-1, Poincare inequality, Kantorovich discrete, Optimal coupling, Chvatal, Davenport, Frankl semimodular, Sensitivity.

**Significant infrastructure needed** (500+ lines of new definitions before proof can begin):
Besicovitch covering, Sard's theorem, Coarea formula, Wasserstein metric, Erdos matching.

**Blocked** (key definitions fundamentally missing):
Rellich-Kondrachov (Sobolev spaces).
