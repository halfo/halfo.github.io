---
layout: post
title: Macros Are Evil
category: Competitive_Programming
---

In Competitive programming, we see macros very often. They are easy to write, make things faster, more flexible etc. But many don't understand (including me) them properly and it's easy to write a bad macro. For example, the two most common macros,

{% highlight cpp %}
#define min(a, b) ((a) < (b) ? (a) : (b))
#define max(a, b) ((a) > (b) ? (a) : (b))
{% endhighlight %}

There is nothing wrong about them, unless someone writes `min (x (), y ())`, which is (read *seems*) fine except one of the functions is called twice. Now if he modifies something, like delete/insert in a container, in that function then it would be a disaster (and it happened to me once). Even innocent looking `min (--x, --y)` may cost your life (not really, just your time).

So it would be better a choice to use template class whenever its possible. Make them *inline* if you are really concerned about their speed.

```cpp
template <class T, class U> inline T max (T a, U b) { return a > b ? a : b; }

template <class T, class U> inline T min (T a, U b) { return a < b ? a : b; }
```

<br>

Another common thing is macro-defined constants, such as `#define SIZE 100`, which is fine. But the problem appears when someone defines macros like this,

{% highlight cpp %}
// I see this macro too often
#define INF 1 << 30

// here is the pitfall
int x = INF + 1;
{% endhighlight %}

Now, can you guess what would be the value of `x`?

<br>

It would better to use constant variable (lol) instead of such macro, unless one is pretty sure what he is doing. For further reading, see [this](https://gcc.gnu.org/onlinedocs/cpp/Macro-Pitfalls.html).