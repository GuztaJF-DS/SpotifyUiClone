import SecondsToHours from '../MenuFunctions/SecondsToHours';

test('Test if it Returns the correct Hour',()=>{
    expect(SecondsToHours('4719')).toBe('1:18:39')
}) 