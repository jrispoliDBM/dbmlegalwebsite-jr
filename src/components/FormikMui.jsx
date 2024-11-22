import React, { useState } from 'react';

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
import { Box } from '@mui/system';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export const TextField = ({ field, form, ...props }) => (
    <MuiTextField
        {...field}
        {...props}
        error={form && form.errors && form.touched && form.touched[field.name] && form.errors[field.name] && true}
        helperText={form && form.errors && form.errors[field.name]}
    />
);

export const FormSwitch = ({ field, label, form, ...props }) => {
    return <FormControlLabel control={<Switch {...field} {...props} />} label={label} />;
};

export const BlackFormSwitch = ({ field, label, form, ...props }) => {
    return <FormControlLabel control={<Switch {...field} {...props} />} label={<Typography color='#111111'>{label}</Typography>} />;
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
                    <FormControlLabel key={`${item}ActiveState`} value={item} control={<Radio />} label={item} {...props} />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export const BlackGenericRadioGroup = ({ activeStates, field, label, items, form, ...props }) => {
    return (
        <FormControl>
            <RadioGroup {...field} {...props} id="genericRadioGroupType" row>
                {activeStates.map((item) => (
                    <FormControlLabel
                        key={`${item}ActiveState`}
                        value={item}
                        control={<Radio sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }} />}
                        label={<Typography color='#111111'>{item}</Typography>}
                        color='black'
                        sx={{
                            color: 'black', // Ensures the entire label text is black
                            '&.Mui-checked': { color: 'black' }, // Ensures the radio button is black when selected,
                            '&.MuiFormControlLabel-label': { color: 'black' } // Ensures the radio button is black when selected,    

                        }}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

// Custom Phone Input component
export const PhoneNumberInput = ({ field, form, label = 'Enter Cell Number' }) => {
    const [focused, setFocused] = useState(false);
    return (
        <TextField
            label={field.value.length > 0 ? label : <Box pl={focused ? 0 : 10}>{label}</Box>}
            placeholder=""
            fullWidth
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            error={form.errors && form.touched && form.errors[field.name] && form.touched[field.name]}
            helperText={form.errors && form.touched && form.errors[field.name] && form.touched[field.name] ? form.errors[field.name] : ''}
            InputProps={{
                inputComponent: PhoneInputCustom,
                inputProps: {
                    value: field.value,
                    onChange: (value) => form.setFieldValue(field.name, value)
                }
            }}
        />
    );
};

// Custom component to integrate PhoneInput with MUI TextField
const PhoneInputCustom = ({ inputRef, ...props }) => {
    return (
        <PhoneInput
            country={'us'}
            inputStyle={{
                width: '100%',
                height: '1.4375em', // match MUI TextField height
                border: 'none',
                fontSize: '1rem',
                padding: '6px 40px 7px'
            }}
            buttonStyle={{ border: 'none', background: 'none' }}
            dropdownStyle={{ width: 'auto' }}
            {...props}
        />
    );
};
