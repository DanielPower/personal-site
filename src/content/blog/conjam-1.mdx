---
title: "Conjam Part 1"
tags: ["gamejam", "games"]
---

Let's ignore the fact that I'm 10 weeks behind on my weekly blog posts and get
straight into my latest game jam.
[Conjam](https://www.cs.mun.ca/~jaharrhy/gamedev/jams/conjam-apr2024/) is a
local game jam themed around games like Conway's Game of Life, Falling Sands,
and other simulation/cellular automata games.

For my part, this was a great opportunity to start playing with WebGL, since I
can implement the game logic as a shader pipeline to maximize performance in
large simulations.

I'm yet sure what I'm going to do for the final game, but as a proof of concept
for the shader pipeline, I've implemented a simple Game of Life simulation.

```glsl
precision highp float;
uniform sampler2D u_texture;
uniform vec2 u_resolution;
varying vec2 v_texCoord;

int countNeighbors() {
    int neighbors = 0;
    if (texture2D(u_texture, v_texCoord + vec2(-1.0 / u_resolution.x, -1.0 / u_resolution.y)).r == 1.0) neighbors++;
    if (texture2D(u_texture, v_texCoord + vec2(-1.0 / u_resolution.x, 0.0 / u_resolution.y)).r == 1.0) neighbors++;
    if (texture2D(u_texture, v_texCoord + vec2(-1.0 / u_resolution.x, 1.0 / u_resolution.y)).r == 1.0) neighbors++;
    if (texture2D(u_texture, v_texCoord + vec2(0.0 / u_resolution.x, -1.0 / u_resolution.y)).r == 1.0) neighbors++;
    if (texture2D(u_texture, v_texCoord + vec2(0.0 / u_resolution.x, 1.0 / u_resolution.y)).r == 1.0) neighbors++;
    if (texture2D(u_texture, v_texCoord + vec2(1.0 / u_resolution.x, -1.0 / u_resolution.y)).r == 1.0) neighbors++;
    if (texture2D(u_texture, v_texCoord + vec2(1.0 / u_resolution.x, 0.0 / u_resolution.y)).r == 1.0) neighbors++;
    if (texture2D(u_texture, v_texCoord + vec2(1.0 / u_resolution.x, 1.0 / u_resolution.y)).r == 1.0) neighbors++;
    return neighbors;
}

void main() {
    vec4 texColor = texture2D(u_texture, v_texCoord);
    int neighbors = countNeighbors();
    if (texColor.r == 1.0) {
        if (neighbors < 2) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            return;
        }
        if (neighbors > 5) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            return;
        }
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        return;
    }
    if (neighbors == 3) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        return;
    }
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
```
