---
title: "Homelab Saga Part 1: Why I homelab"
date: "2024-06-22"
tags: ["kubernetes", "homelab", "nostalgia"]
---

<script>
  import Image from '$lib/components/Image.svelte';
</script>

I was originally planning to write about my current homelab setup, and my
progress and plans for migrating to a kubernetes cluster. But the section on
_why_ ballooned out of control. So here it is as a standalone post, and a
starting point for the series of posts that will follow on the more technical
side of my homelab.

While the internet may feel eternal, its contents are ephemeral. Over the years,
much of what I grew up enjoying on the internet has gradually faded out of
existence. Companies get acquired or go out of business, creators lose interest
or pass away, and fan content is prone to be shutdown by rights holders.
Whatever the reason, the things that are meaningful to us won't always be there
if we don't make efforts to preserve them.

## WeGame - The rise and fall

When I was in high school, one of my most visited websites was WeGame. No, not
Tencent's game portal - though that's mostly what you'll find if you try to
search for it. WeGame launched in 2008[^1] as a gaming focused video hosting
platform that aimed to compete with Youtube.

<Image src="wegame_shot.webp" alt="Screenshot of WeGame" />

At the time if you wanted to record footage of your PC games, options were very
limited. There were Fraps, HyperCam, Bandicam, each with their own drawbacks -
large file sizes, difficult learning curves, and watermarks. Hypercam's
watermark in particular reached meme status due to its prevelance. Even
appearing on Reddit's original r/place. WeGame aimed to make it simple to share
your gameplay with others by providing their own recording software that could
upload your gameplay directly to their website.

<Image src="unregistered_hypercam2.png" alt="Unregistered Hypercam 2 on Reddit's r/place" />

Every week, WeGame would produce a Weekly Video Review. This would generally
involve two guys sitting on a couch, talking about the latest news on the
website, and highlighting some of the best videos of that week. In the early
days it was hosted by Gorndt and Oxhorn (Machinima creator known for creating
[ROFLMAO!](https://www.youtube.com/watch?v=iEWgs6YQR9A)). After Oxhorn's
departure from the company, he would be replaced by the company's CEO, Jared.

<iframe 
    title="vimeo-player" 
    src="https://player.vimeo.com/video/15500493?h=2f79e354b0" 
    style="width:100%;max-width:640px;aspect-ratio:4/3"
    frameborder="0" 
    allowfullscreen
></iframe>

If at this point you're questioning what WeGame has to do with "Why I homelab",
you're not alone. At the time it didn't occur to me that I should be saving
these videos. In 2011, the social media platform Tagged acquired WeGame[^2]. The
result is that WeGame was shut down, and most of its content lost forever.
Including the weekly video reviews.

## Insert Koin - Trying to keep a community alive

WeGame had a strong community of which I was an active member. When news came
that WeGame would be shutting down, I wanted to preserve that community. So I
created a forum called "The WeGame Ruins", which I later renamed to Insert Koin.

<Image src="insert_koin.png" alt="Screenshot of Insert Koin forum" />

The above screenshot is possible thanks to the Wayback Machine. The forum was
decently active for a time. But I was in my last year of high school, had no
funding, and little experience with hosting or maintaining a forum. I no longer
remember how or why, but eventually I broke the forum and lost all posts. I
re-created it, but many users never returned, and it never gained traction
again. So just like the Wegame forum before it, it would become lost to time.

During the time Insert Koin was running, myself and some of the community
members had started recording an Insert Koin Podcast. We would write up show
notes, hop on Mumble, and just chat about various gaming related topics in the
news. Then I'd lightly edit it and release it on the forum. We recorded 4
episodes. Like all the written content, that podcast too is lost to time.

## The media we've lost

It's hard to list the media that I've lost throughout the years. It's not
something I have a running tally of in my head. But periodically something will
happen that reminds me of an old video I watched or an old game I played. But
when I go to look for it, I can no longer find it. In the 2010s I didn't think
much about it. It's only now that I'm starting to think back on my teenage years
with nostalgia that I'm regretting not doing a better job of preservation. In
particular I really wish I had kept the Insert Koin Podcast (even though I'm
sure listening to it today would make me cringe).

I don't know how many WeGame Weekly Video reviews there were. But I've only been
able to recover a single episode, which had been re-uploaded to and privated on
YouTube. There was an animated series I watched called "Worm Wars", which was
left with an indefinite cliffhanger. It was lost media until 3 years ago when
someone
[re-uploaded it to YouTube](https://www.youtube.com/watch?v=g98JTbwMOrU&t=656s).

A few other examples off the top of my head:

### yfinder.de

I found this blog from the .theprodukkt team website. Wayfinder was one of the
devlopers of the incredibly impressive first person shooder in 96kb .kkrieger.
Wayfinder's blog, yfinder.de consisted of pages upon pages of photos of
inanimate objects that looked vaguely like faces. Some parts of his blog are
still archived on The Wayback Machine. But most of it is no longer accessible.

<Image src="yfinder.png" alt="A backpack that looks a little like a face" />

### GameMaker TV, GM King, GM Arcade

GameMaker TV was a series that covered news and projects involving GameMaker. It
later merged with GM King, which was a magazine covering similar topics. And GM
Arcade was a website that allowed you to upload and play games built with
GameMaker. GM Arcade also had an SDK which allowed you to implement account
integrations into your game for things like achievements and leaderboards.

I've been able to find blog posts about GameMaker TV, but unfortunately it seems
the videos are long gone. GM Arcade is available on the Wayback machine, but
only text remains. I was able to find the description page for one of the first
games I made, which was pretty neat.
https://web.archive.org/web/20080803050319/http://gmarcade.com/joomla/index.php?option=com_staticxt&Itemid=31&id=52

Much of the GameMaker Community forum is archived. Maybe I'll take some time to
see if I can find the threads for my other games sometime.

### The unknown unknowns

Then there's all the media that may or may not still exist, but I've forgotten
about or can't find it. The internet is vast and filled with noise. Even if
something is still out there, it doesn't mean it can reasonably be found. There
are games that I have vague visual memories of, but not enough to even know what
search terms to use.

### The things that were never on the internet in the first place

So far I've only discussed media shared over the internet. But I've also lost
personal media. Photos, documents, projects. Things that I stored on USB drives,
or didn't backup when I wiped a system.

### So why do I homelab?

One year ago, I started my home lab with the purchase of a QNAP TS-464 with 64TB
of total storage (48TB usable with one drive of redundancy). The goal was to be
certain that I don't have to delete things anymore, and that I can take backups
of things I enjoy. Decades from now I want to be able to look back on a library
of things that were important to me.

[^1]:
    [\[TechCrunch\] WeGame Launches as YouTube for Gamers](https://techcrunch.com/2008/01/09/wegame-launches-as-youtube-for-gamers/)

[^2]:
    [\[TechCrunch\] Tagged Buys WeGame](https://techcrunch.com/2011/09/21/tagged-wegame/)
