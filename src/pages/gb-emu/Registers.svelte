<script lang="ts">
  import type { Gameboy } from "./gameboy";
  import { formatBytes } from "./util";

  export let emulator: Gameboy;
  const groups = [
    ["BC", "b", "c"],
    ["DE", "d", "e"],
    ["HL", "h", "l"],
  ] as const;
  const flags = ["z", "n", "h", "c"] as const;
</script>

<table>
  <tbody>
    <tr>
      <td class="key">A</td>
      <td class="value">
        {formatBytes(emulator.registers.a)}
      </td>
    </tr>
    {#each groups as [name, high, low]}
      <tr>
        <td class="key">{name}</td>
        <td class="value">
          {formatBytes(emulator.registers[high])}{formatBytes(
            emulator.registers[low],
          )}
        </td>
      </tr>
    {/each}
    <tr>
      <td class="key">PC</td>
      <td class="value">{formatBytes(emulator.registers.pc, 2)}</td>
    </tr><tr>
      <td class="key">SP</td>
      <td class="value">{formatBytes(emulator.registers.sp, 2)}</td>
    </tr>
    <tr>
      <td class="key">Flags</td>
      <td class="value">
        {flags
          .map((flag) =>
            emulator.registers.flags[flag] ? flag.toUpperCase() : "-",
          )
          .join("")}
      </td>
    </tr>
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
  }

  td {
    border: 1px solid white;
    padding: 0 0.25rem;
  }
  td.key {
    text-align: left;
  }
  td.value {
    font-family: monospace;
  }
</style>
