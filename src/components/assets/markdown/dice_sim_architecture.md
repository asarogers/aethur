### Time Integration

We apply a classic 4th-order Runge–Kutta (RK4) method:

$$
\begin{aligned}
k_1 &= \Delta t \cdot f(x_t) \\
k_2 &= \Delta t \cdot f(x_t + \frac{1}{2} k_1) \\
k_3 &= \Delta t \cdot f(x_t + \frac{1}{2} k_2) \\
k_4 &= \Delta t \cdot f(x_t + k_3) \\
x_{t + \Delta t} &= x_t + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)
\end{aligned}
$$

The system checks for impact conditions on each timestep. When triggered, post-impact velocities are applied immediately before continuing integration.
