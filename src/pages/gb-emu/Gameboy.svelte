<script lang="ts">
  import { onMount } from "svelte";
  import { Gameboy } from "./gameboy.ts";
  import Registers from "./Registers.svelte";

  let emulator: Gameboy;
  onMount(async () => {
    const buffer = await fetch("/rom.gb").then((response) =>
      response.arrayBuffer(),
    );
    const rom = new Uint8Array(buffer);
    emulator = new Gameboy(rom);
  });
</script>

{#if emulator}
  <div class="row">
    <Registers {emulator} />
    <button
      on:click={() => {
        emulator.step();
        emulator = emulator;
      }}>Step</button
    >
  </div>
  <div class="logs">
    {#each emulator.logs as line}
      <p class="log-line">{line}</p>
    {/each}
  </div>
{/if}

<style>
  .row {
    display: flex;
    flex-direction: row;
  }

  .logs {
    display: flex;
    flex-direction: column;
    background-color: var(--color-dark);
    border-radius: 0.25rem;
    height: 10rem;
    overflow-y: scroll;
  }

  .log-line {
    color: var(--color-light);
    font-family: monospace;
    margin: 0;
    padding: 0;
  }
</style>
