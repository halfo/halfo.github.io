---
layout: post
title: Manacher's Algorithm
category: Stringology
---


Manacher's algorithm is really a fun thing to learn. Though one needs to do a lot of kungfu to code it, but the algorithm itself doesn't support any modification (that I know of). So you can code it once and use it forever!

The most common implementation looks like [this](http://pastebin.com/zg146Gd4). Also, there's [another](https://github.com/halfo/competitive-programming/blob/master/String_Processing/manacher.cpp) way to implement it. I've tried to modify the first type of implementation by keeping it short and more flexible. Here's what it looks like after my attemts:

{% gist halfo/c1520ed76fc5c01631536b359264de3b Manachers_Algorithm.cpp %}

<br/>
Here, `p_lens[0]` contains information about even lenght-ed palindrome (as 0 is even) and `p_lens[1]` contains about the odd ones. You can always assign them to more meaningful names if you want to, say `*evens = p[0], *odds = p[1]`. Some generalized formulas:

$$
\begin{align}
center &=
\begin{cases}
i,  & \text{if $i$ is odd} \\[2ex]
between\;i-1\;and\;i, & \text{if $i$ is even}
\end{cases}
\\\\
length &= \text{2 * $p\_lens$[$type$][$i$] + $type$} \\
start &= \text{$i$ - $p\_lens$[$type$]$i$]}
\end{align}
$$

<br/>
That's all!. Thanks for reading. GL & HF.