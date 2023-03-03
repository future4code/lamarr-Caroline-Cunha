import { validateCharacter } from "../src/funcs/validateCharacter";

describe("teste validateCharacter", () => {
    test("Teste a: Should return false for empty name", () => {
        const result = validateCharacter({
          name: "",
          life: 1500,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });
    
      test("Teste b: Should return false for life 0", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 0,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
      });

      test("Teste c: Should return true for all valid inputs", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(true);
      });

      test("Teste d: Should return false for defense 0", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: 300,
          defense: 0,
        });
    
        expect(result).toBe(false);
      });
    
      test("Teste e: Should return false for life or strength or defense < 0", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 0,
          strength: 0,
          defense: 0,
        });
    
        expect(result).toBe(false);
      });

      test("Teste f: Should return true for all valid information", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: 50,
          defense: 50,
        });
    
        expect(result).toBe(true);
      });

})