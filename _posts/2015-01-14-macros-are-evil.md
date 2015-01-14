---
layout: post
title: Macros Are Evil
category: Competitive_Programming
---

In Competitive programming, we see macros so often. They are easy to write, make things faster, more flexible etc. But many doesn't understand (including me) them properly and it's easy to write a bad macro. For example, the two most common macros,

{% highlight cpp %}
#define min(a, b) ((a) < (b) ? (a) : (b))
#define max(a, b) ((a) > (b) ? (a) : (b))
{% endhighlight %}

There is nothing wrong about them, unless someone writes `min (x, some_function ())`, which is (read *seems*) fine except `some_function ()` is called twice. Now if he modifies something, like delete/insert in a container, in that function then it would be a disaster (and it happened to me once). Even innocent looking `min (x, --y);` may cost your life (not really, just your time).

So it would be better a choice to use template class whenever you can. Make them *inline* if you are really concerned about their speed.

```cpp
template <class T, class U> inline T max (T &a, U &b) { return a > b ? a : b; }

template <class T, class U> inline T min (T &a, U &b) { return a < b ? a : b; }
```

<br>
<br>
*(more to come...)*