describe("utility functions", function()  {
  describe("fullName()", function()  {
    it("concatenates two name parts with a space", function()     {
      expect(fullName("Billy","Bob")).toEqual("Billy Bob");

    });
  });

  describe("isOver21()", ()=> {
    it("returns true when the age is 21", () =>{
      expect(isOver21("1997-01-01")).toBe(true);
    });
    it("returns true when the age is 21", () =>{
      expect(isOver21("1992-01-01")).toBe(true);
    });
    it("returns true when the age is 21", () =>{
      expect(isOver21("2000-01-01")).toBe(false);
    });

    // it("returns true when the age is over 21", ()=> {});
    // it("returns false when the age under 21", ()=> {});
  });

} );
