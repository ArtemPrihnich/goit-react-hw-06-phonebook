import React from 'react'
import { nanoid } from 'nanoid'
import { Box, Input, Label } from './ContactsFilter.styled'
import { getFilter } from 'redux/filter/filter-selectors';
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from 'redux/filter/filter-slice';

export default function ContactsFilter() {
    const filterInpuId = nanoid();

    const filter = useSelector(getFilter)
    const dispatch = useDispatch()


    const handleChange = (e) => {
        const { name, value } = e.currentTarget
        if (name === 'filter') {
            dispatch(setFilter(value))
        }
    };
    return (
        <Box>
            <Label htmlFor={filterInpuId}> Write a name for quick search</Label>
            <Input type="text" name='filter' id={filterInpuId} value={filter} placeholder='Enter some name ...' onChange={handleChange} />
        </Box >
    )
}
