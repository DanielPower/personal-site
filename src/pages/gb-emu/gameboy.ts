import { operations } from "./cpu";

export class Gameboy {
  memory: Uint8Array;
  registers: {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    h: number;
    l: number;
    pc: number;
    sp: number;
    flags: {
      z: boolean;
      n: boolean;
      h: boolean;
      c: boolean;
    };
  };
  logs: string[];
  constructor(rom: Uint8Array) {
    this.memory = new Uint8Array(0x10000);
    for (let i = 0; i < rom.length; i++) {
      this.memory[i] = rom[i];
    }
    this.registers = {
      a: 1,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      h: 0,
      l: 0,
      pc: 0x0100,
      sp: 0xfffe,
      flags: {
        z: false,
        n: false,
        h: false,
        c: false,
      },
    };
    this.logs = [];
  }
  step(): boolean {
    const instruction = this.memory[this.registers.pc];
    const operation = operations[instruction];
    if (operation) {
      const disassembly = operation(this);
      this.log(
        `${this.registers.pc.toString(16).padStart(4, "0").toUpperCase()}: ${disassembly}`,
      );
      return true;
    }
    this.log(
      `Unknown instruction: ${instruction.toString(16).padStart(2, "0").toUpperCase()}`,
    );
    return false;
  }
  log(message: string): void {
    this.logs.push(message);
  }
}
