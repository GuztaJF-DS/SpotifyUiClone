import SecondsToHours from '../Pages/SecondsToHours';
import CreateTrackList from '../Pages/CreateTrackList';
import TestData from './Testdata.json';
import renderer from 'react-test-renderer'

test('it Returns the correct Hour',()=>{
    expect(SecondsToHours('4719')).toBe('1:18:39')
}) 

test("It Creates TrackList",()=>{
    const tree=renderer.create(<CreateTrackList JSONData={TestData} AlbumId={'0'}/>)
    expect(tree).toMatchSnapshot()
})
