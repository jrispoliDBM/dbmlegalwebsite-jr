import React from 'react';

import {
    TextField as MuiTextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Radio,
    RadioGroup,
    Stack,
    FormControlLabel,
    Switch,
    Typography
} from '@mui/material';

export const TextField = ({ field, form, ...props }) => (
    <MuiTextField
        {...field}
        {...props}
        error={form.touched[field.name] && form.errors[field.name] && true}
        helperText={form.errors[field.name]}
    />
);

export const FormSwitch = ({ field, label, form, ...props }) => {
    return <FormControlLabel control={<Switch {...field} {...props} />} label={label} />;
};

export const FormSelect = ({ field, label, items, form, meta, hiddenValues = [], ...props }) => {
    // console.log('field', field)
    // console.log('items', items)
    return (
        <MuiTextField
            {...field}
            {...props}
            id={field.name}
            label={label}
            error={form.touched[field.name] && form.errors[field.name] && true}
            helperText={form.errors[field.name]}
            select
        >
            {items &&
                items.map((item, index) => {
                    const itemObj = item.id ? item : { id: index, name: item };
                    return (
                        <MenuItem
                            key={itemObj.id}
                            value={itemObj.name}
                            sx={{ display: hiddenValues.includes(itemObj.name) ? 'none' : 'block' }}
                        >
                            {itemObj.name}
                        </MenuItem>
                    );
                })}
        </MuiTextField>
    );
};

export const FormMultiSelect = ({ field, label, items, form, meta, hiddenValues = [], ...props }) => {
    return (
        <FormControl>
            <InputLabel htmlFor={field.name}>{label}</InputLabel>
            <Select
                {...field}
                multiple
                id={field.name}
                label={label}
                error={form.touched[field.name] && form.errors[field.name] && true}
                renderValue={(selected) => (
                    <div>
                        {selected.map((value) => (
                            <span key={value}>{value}, </span>
                        ))}
                    </div>
                )}
                sx={{ minWidth: 120 }}
                {...props}
            >
                {items &&
                    items.map((item, index) => {
                        const itemObj = item.id ? item : { id: index, name: item };
                        return (
                            <MenuItem
                                key={itemObj.id}
                                value={itemObj.name}
                                sx={{
                                    display: hiddenValues.includes(itemObj.name) ? 'none' : 'block'
                                }}
                            >
                                {itemObj.name}
                            </MenuItem>
                        );
                    })}
            </Select>
        </FormControl>
    );
};


export const GenericRadioGroup = ({ activeStates, field, label, items, form, ...props }) => {
    return (
        <FormControl>
            <RadioGroup {...field} {...props} id="genericRadioGroupType" row>
                {activeStates.map((item) => (
                    <FormControlLabel key={`${item}ActiveState`} value={item} control={<Radio />} label={item} />
                ))}
            </RadioGroup>
        </FormControl>
    );
};
