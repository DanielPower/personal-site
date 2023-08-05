---
title: 'Gump Jam - Day 1'
date: '2023-08-05'
---

Yesterday was the first day of Gump Jam - a private game jam I'm participating
in. My goal for day one was to setup the skeleton of the project, and the
tooling for building, hot reload, deployment, etc.

# Pre-jam preparation

## Deciding on a development stack

Most of my previous game jam entries have been done with Love2D[^1]. And while I
quite like the game engine, and am a huge fan of Concord[^2]. However when
writing Lua, I find myself missing the type safety and language server features
of Typescript. There are Teal[^3] and lua-language-server but neither are as
mature or versatile as Typescript, and the library ecosystem generally does not
provide sufficient typing.

### Requirements

1. Runs in the web browser
2. Has a solid ECS implementation
3. Has good developer tooling (hot reload, type safety, etc.)
4. Can be learned quickly enough to churn out a game in one week

### Game framework contenders

1. Bevy[^4], because I'm interested in learning more rust
2. Some Typescript framework, because it's the language I'm most proficient in
3. Love2D and Concord as a fallback, since I know I can be productive with it
4. Haxe was very briefly considered

While I did briefly look into Bevy again, I became overwhelmed, as I lack the
foundational rust knowledge needed to make
the best use of it. Bevy looks incredibly powerful and elegant (my interest
was recently re-ignited by a demonstration of reducing boilerplate using rust
macros[^5]). But a jam with a tight timeline isn't the best time to learn it.

Typescript is the most likely option to produce an end-result, so I made the call.

### My Typescript ECS stack

I wanted an ECS implementation that closely matched Concord's API.
Allowing multiple pools (its way of querying for components) per-system, and
multiple events per-system (as opposed to just an update event). The way I
use Concord, each system might have keyboard events, render and update events,
or other arbitrary game events. Concord manages calling each system's callback
any time an event occurs.

Initially I began writing my own ECS implementation[^6], but quickly realized
that the exact API I was hoping for was not trivial to achieve in a type-safe
way. Ultimately I ended up choosing Miniplex[^7].

For rendering, I want to have the option to use WebGL shaders, though
I'm not necessarily sure I'll end up doing so. After going through over an hour
of tutorials just to get a triangle rendered with WebGL directly, I decided to
use Two.js, as it takes care of the heavy lifting for me, but will allow me
to override its shaders if needed.

## The big time sink

The page wrapping the game canvas is very simple. I just wanted it to consist of
a header and some text describing the project. I could have even just skipped
this and had the canvas take up the entire page.

Because I wanted hot reload, and I was already using Sveltekit for my personal
site (the one you're reading right now), I figured I could just copy over some
boilerplate from my personal site, and strip it down to a single page with a
canvas on it. And initially that worked well enough, hot reload and all. Though
this decision cost me much of the evening.

The first problem was noticeable almost immediately. Any time I'd make a change
to the code, instead of the game restarting, it would continue running, but all
the entities would become duplicated. This is because the ECS state was a global singleton,
but the initialization code ran on component mount. Meaning each time code would
change, the component would re-mount, and re-initialize the game without
cleaning up old state. This was easily addressed by
switching from hot module reloading to page refreshing.

The second problem was much more confusing, and honestly I still don't have the
full answer. Upon loading an image into Two.js, its width and
height would be equal to 0. At some arbitrary time later, the width and height
would become populated. Manually triggering a Two.js update
would not cause these values to populate. Since this only occurred the first
time each image was loaded, I assumed it was due to the image needing to be
pre-loaded before use in Two.js It seems that was correct. However, no matter how
I went about waiting for the images to load, they would not behave correctly
under Sveltekit.

I created a function that would store a promise for every texture, begin
loading the texture, and set its `onload` callback to resolve the promise.
Surely waiting for all of those promises before creating any Two.js sprites
would address the issue, right? And it did, but somehow this resulted an even stranger
bug where all images would render as pure black rectangles. But hey, at least
the size property was populated.

Ultimately, I ripped out the completely unnecessary complication of Sveltekit,
and just went for a very simple static html page, and suddenly all the problems
went away.

# Day 1 conclusion

It's not much, but I did complete my goal of setting up the skeleton for the
project going forward. And decorated it with a nice bouncy rat fitting with the
theme of the jam.

![Screenshot of day 1 progress](/rat-day1.png)

**Day 1 build: https://rat.danielpower.ca/builds/day1**

## The theme, and the concept

The theme of the game jam is "Rat Sanitation". The game idea I've come up with
for the theme is a callback to one of the longest running RPG tropes[^8]. Kill
the rats in the tavern cellar.

_Quest 1: Kill the rats in the tavern cellar._

What if killing the rats in the tavern cellar was not just quest 1, but also
quests 2, 3, 4, and so on. An infinitely running quest of discovering a never
ending series of sub-cellars under the tavern's cellars, each infested with more
and more powerful rats.

I'm going to attempt to implement an idle/clicker game which tackles the problem
of these exponentially multiplying rats, deep into the depths of the mega, giga,
tera, and peta sub-cellars.

Unless I run out of motivation before it comes time to write tomorrow's update.

[^1]: [Love2D](https://www.love2d.org) is a Cross-platform game framework scripted using Lua.
[^2]:
    [Concord](https://github.com/Keyslam-Group/Concord) is an ECS library for
    Lua. It pairs well with Love2D.

[^3]:
    [Teal](https://github.com/teal-language/tl) is a typed dialect of Lua, in
    the same way that Typescript is a typed dialect of Javascript.

[^4]: [Bevy](https://bevyengine.org/) is an ECS game framework written in Rust.
[^5]: [rust macros are magic (Youtube)](https://www.youtube.com/watch?v=ModFC1bhobA)
[^6]: [typescript-ecs (Github)](https://github.com/DanielPower/typescript-ecs)
[^7]: [Miniplex (Github)](https://github.com/hmans/miniplex)
[^8]:
    [Discussion: Origin of killing rats in tavern
    cellars](https://dungeonfantastic.blogspot.com/2015/12/where-did-rats-in-basement-thing-come.html)
