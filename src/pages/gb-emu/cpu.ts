import type { Gameboy } from "./gameboy";

export type Register8 = {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  h: number;
  l: number;
  pc: number;
  sp: number;
};

export type Register16 = {
  bc: number;
  de: number;
  hl: number;
  sp: number;
};

const not_implemented = (emulator: Gameboy) => {
  return "Not implemented";
};

export type Condition = "NZ" | "Z" | "NC" | "C";

const noop = (emulator: Gameboy) => {
  emulator.registers.pc++;
  return "NOP";
};

const check_condition = (emulator: Gameboy, condition: Condition) => {
  switch (condition) {
    case "NZ":
      return (emulator.registers.a & 0x80) === 0;
    case "Z":
      return (emulator.registers.a & 0x80) !== 0;
    case "NC":
      return (emulator.registers.a & 0x40) === 0;
    case "C":
      return (emulator.registers.a & 0x40) !== 0;
  }
};

const jp = (emulator: Gameboy) => {
  const low = emulator.memory[emulator.registers.pc + 1];
  const high = emulator.memory[emulator.registers.pc + 2];
  emulator.registers.pc = (high << 8) | low;
  return "JP 0x" + ((high << 8) | low).toString(16);
};

const jp_if = (emulator: Gameboy, condition: Condition) => {
  const low = emulator.memory[emulator.registers.pc + 1];
  const high = emulator.memory[emulator.registers.pc + 2];
  const address = (high << 8) | low;
  if (check_condition(emulator, condition)) {
    emulator.registers.pc = address;
  } else {
    emulator.registers.pc += 3;
  }
  return `JP ${condition}, 0x${address.toString(16)}`;
};

const jp_hl = (emulator: Gameboy) => {
  emulator.registers.pc = (emulator.registers.h << 8) | emulator.registers.l;
  return "JP HL";
};

const jr = (emulator: Gameboy) => {
  const offset = emulator.memory[emulator.registers.pc + 1];
  emulator.registers.pc += offset;
  return `JR ${offset}`;
};

const jr_if = (emulator: Gameboy, condition: Condition) => {
  const offset = emulator.memory[emulator.registers.pc + 1];
  if (check_condition(emulator, condition)) {
    emulator.registers.pc += offset;
  } else {
    emulator.registers.pc += 2;
  }
  return `JR ${condition}, ${offset}`;
};

const xor_r = (emulator: Gameboy, register: keyof Register8) => {
  emulator.registers.a ^= emulator.registers[register];
  emulator.registers.pc++;
  return `XOR ${register}`;
};

const xor_n = (emulator: Gameboy) => {
  emulator.registers.a ^= emulator.memory[emulator.registers.pc + 1];
  emulator.registers.pc += 2;
  return `XOR n`;
};

const ld_r8_r8 = (
  emulator: Gameboy,
  dest: keyof Register8,
  src: keyof Register8,
) => {
  emulator.registers[dest] = emulator.registers[src];
  emulator.registers.pc++;
  return `LD ${dest}, ${src}`;
};

const ld_r8_n8 = (emulator: Gameboy, dest: keyof Register8) => {
  emulator.registers[dest] = emulator.memory[emulator.registers.pc + 1];
  emulator.registers.pc += 2;
  return `LD ${dest}, $${emulator.registers[dest].toString(16)}`;
};

const ld_r16_n16 = (
  emulator: Gameboy,
  d1: keyof Register8,
  d2: keyof Register8,
) => {
  const low = emulator.memory[emulator.registers.pc + 1];
  const high = emulator.memory[emulator.registers.pc + 2];
  emulator.registers[d1] = low;
  emulator.registers[d2] = high;
  emulator.registers.pc += 3;
  return `LD ${d1}${d2}, $${high.toString(16)}${low.toString(16)}`;
};

const ld_r16 = (
  emulator: Gameboy,
  d1: keyof Register8,
  d2: keyof Register8,
) => {
  const address = (emulator.registers[d1] << 8) | emulator.registers[d2];
  emulator.registers.a = emulator.memory[address];
  emulator.registers.pc++;
  return `LD A, ${d1}${d2}`;
};

const ld_r16_r16 = (
  emulator: Gameboy,
  d1: keyof Register8,
  d2: keyof Register8,
  s1: keyof Register8,
  s2: keyof Register8,
) => {
  emulator.registers[d1] = emulator.registers[s1];
  emulator.registers[d2] = emulator.registers[s2];
  emulator.registers.pc++;
  return `LD ${d1}${d2}, ${s1}${s2}`;
};

const ldh_n_a = (emulator: Gameboy) => {
  emulator.memory[0xff00 + emulator.memory[emulator.registers.pc + 1]] =
    emulator.registers.a;
  emulator.registers.pc += 2;
  return `LDH (0xff00 + n), A`;
};

const ld_sp_hl = (emulator: Gameboy) => {
  emulator.registers.sp = (emulator.registers.h << 8) | emulator.registers.l;
  emulator.registers.pc++;
  return "LD SP, HL";
};

const inc_r8 = (emulator: Gameboy, register: keyof Register8) => {
  emulator.registers[register]++;
  emulator.registers.pc++;
  return `INC ${register}`;
};

const inc_r16 = (
  emulator: Gameboy,
  d1: keyof Register8,
  d2: keyof Register8,
) => {
  const value = ((emulator.registers[d1] << 8) | emulator.registers[d2]) + 1;
  emulator.registers[d1] = value >> 8;
  emulator.registers[d2] = value & 0xff;
  emulator.registers.pc++;
  return `INC ${d1}${d2}`;
};

const inc_sp = (emulator: Gameboy) => {
  emulator.registers.sp++;
  return "INC SP";
};

const dec_r = (emulator: Gameboy, register: keyof Register8) => {
  emulator.registers[register]--;
  emulator.registers.pc++;
  return `DEC ${register}`;
};

export const operations: ((emulator: Gameboy) => string)[] = [];
operations[0x00] = noop;
operations[0x01] = not_implemented;
operations[0x02] = not_implemented;
operations[0x03] = not_implemented;
operations[0x04] = (emulator: Gameboy) => ld_r8_r8(emulator, "b", "b");
operations[0x05] = (emulator: Gameboy) => ld_r8_r8(emulator, "d", "b");
operations[0x06] = (emulator: Gameboy) => ld_r8_n8(emulator, "b");
operations[0x07] = not_implemented;
operations[0x08] = not_implemented;
operations[0x09] = not_implemented;
operations[0x0a] = not_implemented;
operations[0x0b] = not_implemented;
operations[0x0c] = not_implemented;
operations[0x0d] = not_implemented;
operations[0x0e] = (emulator: Gameboy) => ld_r8_n8(emulator, "c");
operations[0x0f] = not_implemented;
operations[0x20] = (emulator: Gameboy) => jr_if(emulator, "NZ");
operations[0x21] = (emulator: Gameboy) => ld_r16_n16(emulator, "h", "l");
operations[0x30] = (emulator: Gameboy) => inc_r16(emulator, "b", "c");
operations[0x31] = (emulator: Gameboy) => inc_r16(emulator, "d", "e");
operations[0x32] = (emulator: Gameboy) => inc_r16(emulator, "h", "l");
operations[0x33] = inc_sp;
operations[0xa8] = (emulator: Gameboy) => xor_r(emulator, "b");
operations[0xa9] = (emulator: Gameboy) => xor_r(emulator, "c");
operations[0xaa] = (emulator: Gameboy) => xor_r(emulator, "d");
operations[0xab] = (emulator: Gameboy) => xor_r(emulator, "e");
operations[0xac] = (emulator: Gameboy) => xor_r(emulator, "h");
operations[0xad] = (emulator: Gameboy) => xor_r(emulator, "l");
operations[0xaf] = (emulator: Gameboy) => xor_r(emulator, "a");
operations[0xc2] = (emulator: Gameboy) => jp_if(emulator, "NZ");
operations[0xc3] = jp;
operations[0xca] = (emulator: Gameboy) => jp_if(emulator, "Z");
operations[0xd2] = (emulator: Gameboy) => jp_if(emulator, "NC");
operations[0xda] = (emulator: Gameboy) => jp_if(emulator, "C");
operations[0xe9] = jp_hl;
operations[0xee] = xor_n;
