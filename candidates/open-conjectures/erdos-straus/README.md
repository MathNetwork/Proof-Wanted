## Name

Erdos-Straus conjecture

## Summary

Every fraction 4/n with n >= 2 can be written as a sum of three unit fractions.

## Type

open-conjecture

## Area

Number Theory

## Mathematical Statement

For every integer $n \geq 2$, the equation

$$\frac{4}{n} = \frac{1}{x} + \frac{1}{y} + \frac{1}{z}$$

has a solution in positive integers $x, y, z$.

## Source

- Erdos, P. and Straus, E.G. (1948, unpublished)
- Guy, R.K. *Unsolved Problems in Number Theory*, Problem D11

## Status

Verified computationally for $n \leq 10^{17}$. No general proof.

## Why this is a good formalization target

Statement is trivial to formalize -- just natural number arithmetic. The cleared-denominator form $4xyz = n(yz + xz + xy)$ avoids fractions entirely. Would be a clean open problem in Lean with minimal infrastructure needs.

## Mathlib Infrastructure

- Natural number arithmetic -- in Mathlib
- No other dependencies needed

## Proof Complexity Estimate

- **Estimated lines:** Unknown (open problem)
- **Key steps:** Unknown -- partial results use modular arithmetic case analysis
- **Biggest obstacle:** This is an open problem

## Lean 4 Statement

See `Statement.lean` in this folder.

**Status:** draft -- verified against Mathlib (2026-03-26)

## Contributor

MathNetwork
