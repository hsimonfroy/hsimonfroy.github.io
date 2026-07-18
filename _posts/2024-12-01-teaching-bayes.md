---
layout: post
title: Teaching Bayesian statistics
date: 2024-04-10
description: A reenactment of Bayes' billiard 
tags: teaching
thumbnail: assets/img/Bayes_billiard.png
---





* In his seminal paper *[An Essay towards solving a Problem in the Doctrine of Chances](https://www.jstor.org/stable/105741?origin=ads&seq=1)*, published posthumously by his friend Richard Price in 1763, **Thomas Bayes** introduced a thought experiment involving a **billard table** on which a first ball is thrown. The problem is to **infer the position** of this ball by subsequently throwing balls on the table, with the only information about whether they landed to its right or left, and in front or behind it.

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/Bayes_billiard.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

* The modeling of this problem involves the Beta distribution, which is supported on $[0,1]$, and is both a continuous generalization of Bernoulli distribution supported on $\left\lbrace 0,1 \right\rbrace$, and the uniform distribution supported on $[0,1]$.  

    $$\begin{align*}
    &\operatorname{\mathcal{B}\!eta}\left(1,1\right) \sim \mathcal{U}([0,1])\\
    &\operatorname{\mathcal{B}\!eta}\left(\frac{\theta}{T}, \frac{1-\theta}{T}\right) \xrightarrow[T \to +\infty]{d} \operatorname{\mathcal{B}\!er}(\theta)
    \end{align*}$$

* The following equality is the **Bayes formula**: On the left-hand side, the **prior** describe a priori knowledge about the first ball position $\theta$, while the **likelihood** describe the information gain with respect to the observation $x$ that a subsequent ball fell on its right or not. On the right-hand side, the **posterior** describe the updated information about the first ball position $\theta$, while the **evidence** describe how surprising it was to observe $x$.

    $$\begin{gather*}
    \mathrm{p}(x \mid \theta)\;\mathrm{p}(\theta) = \mathrm{p}(\theta \mid x)\;\mathrm{p}(x)\\
    \iff\\
    \underbrace{\operatorname{\mathcal{B}\!er} (x \mid \theta)}_{\text{likelihood}}\;\underbrace{\operatorname{\mathcal{B}\!eta}(\theta \mid \alpha_0, \beta_0)}_{\text{prior}} = \underbrace{\operatorname{\mathcal{B}\!eta}(\theta \mid \alpha_1, \beta_1)}_{\text{posterior}}\; \underbrace{\operatorname{\mathcal{B}\!er}\left(x \mid {\alpha_0}/({\alpha_0 + \beta_0})\right)}_{\text{evidence}}
    \end{gather*}$$

    with  

    $$\begin{align*}
    \alpha_1&:= x + \alpha_0 \\
    \beta_1&:= 1 -x + \beta_0\\
    \end{align*}$$


* This update of the prior into the posterior can then be implemented iteratively for each new ball thrown:

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include video.liquid path="assets/video/bayes_billiard_dpi300.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true loop=true%}
  </div>
</div>

* The more balls are thrown onto the table, the more information we get about the position of the first ball, ultimately pinpointing its exact location in the limit of infinitely many observations.


