import {calculation} from '../utils/calculation';

describe("String Calculator",  ()=>{
    it("should return zero when empty is passed", ()=>{
      expect(calculation('')).toEqual(0);
    });
    it("should return number itself when one string is passed", ()=>{
        expect(calculation('1')).toEqual(1);
      });
    it("should return sum of numbers when two string is passed", ()=>{
        expect(calculation('1,2')).toEqual(3);
    });
    it("should return sum of numbers when unknown amount of numbers is passed", ()=>{
        expect(calculation('1,2,3,4,5,6,7,8')).toEqual(36);
    });
  });