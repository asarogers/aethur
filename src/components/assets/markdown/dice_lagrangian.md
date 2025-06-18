### Lagrangian Formulation

The dice is modeled as a 2D square with mass `m`, radius `R`, and moment of inertia:

$$
I = \frac{2}{3} m R^2
$$

The linear and rotational kinetic energies are:

$$
T = \frac{1}{2} m (\dot{x}^2 + \dot{y}^2) + \frac{1}{2} I (\omega_x^2 + \omega_y^2)
$$

Potential energy (with external force \( F_x \)):

$$
V = m g y - F_x x
$$

The Lagrangian becomes:

$$
\mathcal{L} = T - V
$$

---

### Euler–Lagrange Equation

We compute equations of motion via:

$$
\frac{d}{dt} \left( \frac{\partial \mathcal{L}}{\partial \dot{q}} \right) - \frac{\partial \mathcal{L}}{\partial q} = 0
$$

This gives symbolic second-order ODEs for both \( \ddot{x} \) and \( \ddot{y} \).
