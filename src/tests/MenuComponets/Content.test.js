import React from "react";
import renderer from 'react-test-renderer';
import { Routes,Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'

import Content from "../../MenuComponents/Content";
import Song from '../../MenuComponents/Song'

it('renders?',()=>{
    const tree=renderer.create(
        <BrowserRouter>
        <Routes>
        <Route path="/Album/:id" element={<Song />}>
        </Route>
        <Route path="/" element={<><Content/></>} />
      </Routes></BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})