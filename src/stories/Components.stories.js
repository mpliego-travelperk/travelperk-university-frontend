import React from 'react';
import {Tag} from '../components/Tag'

export default {
    title: 'Components',
    component: Tag
};

export const TagDisplay = () => (
    <Tag.Display name="cilantro"/>
);

export const TagAddDisplay = () => (
    <Tag.Add placeholder="New Tag"/>
);

