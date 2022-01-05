import SecondsToHours from '../MenuFunctions/SecondsToHours';
import CreateTrackList from '../MenuFunctions/CreateTrackList';
import TestData from './Testdata.json';
import TestRenderer from 'react-test-renderer';

test('it Returns the correct Hour',()=>{
    expect(SecondsToHours('4719')).toBe('1:18:39')
}) 

test("It Creates TrackList",()=>{
    const tree=TestRenderer.create(<CreateTrackList JSONData={TestData} AlbumId={'0'}/>)
    expect(tree).toMatchSnapshot()
})
