---
layout: post
title: Macros Are Evil
category: CPP
---

<div class="message">
This blog is greatly inspired from <a href="http://community.topcoder.com/tc?module=MemberProfile&cr=8357090">misof's</a> comments on <a href="http://www.quora.com/Michal-Fori%C5%A1ek">Quora</a>.
</div>

In competitive programming, we see macros very often. They are easy to write, make things faster, more flexible etc. But many don't understand (including me) them properly and it's easy to write a bad macro. For example, the two most common macros,

{% highlight cpp %}
#define min(a, b) ((a) < (b) ? (a) : (b))
#define max(a, b) ((a) > (b) ? (a) : (b))
{% endhighlight %}

There is nothing wrong about them, unless someone writes `min (x (), y ())`, which is (read *seems*) fine except one of the functions is called twice. Now if he modifies something, like delete/insert in a container, in that function then it would be a disaster (and it happened to me once). Even innocent looking `min (--x, --y)` may cost your life (not really, just your time).

So intead of macro, functions template can be used here. Make them *inline* if you are really concerned about their speed.

{% highlight cpp %}
template<class T, class U> T max(T a, U b) { return a > b ? a : b; }
template<class T, class U> T min(T a, U b) { return a < b ? a : b; }
{% endhighlight %}

Another common thing is macro-defined constants, such as `#define SIZE 100`, which is fine. But the problem appears when someone defines macros like this,

{% highlight cpp %}
// Y U No use constant variables!!
#define INF 1 << 30

// here is the pitfall
int x = INF + 1;
{% endhighlight %}

Now, guess the value of `x` (hint: overflow)!

<br>

Macros are obviously powerful. But there are too many pitfalls. So it would be better not to use them unless one is pretty sure what he is doing.