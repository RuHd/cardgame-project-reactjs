import { generateAttackPts, generateCards } from "../utils/functions"

test('It should return a number greater than 500', () => {
    expect(generateAttackPts()).toBeGreaterThan(500) 
})

test("it should return an array", ()=> {
    expect(generateCards([1,2,3,4,5])).toBeDefined()
})

