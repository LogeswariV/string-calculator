import {calculation} from '../utils/calculation';

describe("String Calculator",  ()=>{
    it("should return zero when empty is passed", ()=>{
      expect(calculation('')).toEqual(0);
    });
  });