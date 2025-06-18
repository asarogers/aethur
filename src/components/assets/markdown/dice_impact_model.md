### Collision Constraints

Impacts occur when square vertices cross boundary thresholds (e.g., \( y = 0 \), \( x = \pm 6 \)):

$$
\phi(q) = 0 \quad \text{(impact surface)}
$$

To solve for post-impact velocities \( \dot{q}^+ \), we use:

$$
\begin{aligned}
\frac{\partial \mathcal{L}}{\partial \dot{q}}^+ - \frac{\partial \mathcal{L}}{\partial \dot{q}} &= \lambda \frac{\partial \phi}{\partial q} \\
H(q, \dot{q}^+) - H(q, \dot{q}) &= \text{impact condition}
\end{aligned}
$$

The solution is symbolic and implemented using SymPy's `solve()` and `lambdify()`.
