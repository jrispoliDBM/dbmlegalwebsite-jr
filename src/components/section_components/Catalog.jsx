import React from 'react';
import { Stack, Typography } from '@mui/material';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Catalog = ({ section, textColor }) => {
    return (
        <>
            {section.items
                .sort((a, b) => a.order - b.order)
                .map((item, index) => (
                    <Stack p={2} key={index}>
                        {item.headerBefore && (
                            <Typography color={textColor} variant="h4" fontWeight="bold" pb={1} pt={index > 0 ? 3 : 0}>
                                {item.headerBefore}
                            </Typography>
                        )}
                        <Stack direction="row" spacing={1} alignItems="flex-start">
                            {item.iconBefore && item.iconBefore === 'CheckSharp' && (
                                <CheckSharpIcon color="primary" sx={{ fontSize: 35 }} />
                            )}
                            <Stack direction="column">
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    color="primary"
                                    pl={
                                        typeof section.indentItems === 'number' &&
                                        (!section.indentCharacter || (item.title && item.title.trim().startsWith(section.indentCharacter)))
                                            ? section.indentItems
                                            : 0
                                    }
                                >
                                    {item.title}
                                </Typography>
                                {item.detailText &&
                                    item.detailText.split('\n').map((text, index) => (
                                        <Stack direction="row" spacing={1} key={index}>
                                            {text.trim() && item.useCheckmarkBeforeDetailTextParagraphs && (
                                                <CheckCircleIcon color="primary" />
                                            )}
                                            <Typography
                                                variant="h6"
                                                color={textColor}
                                                gutterBottom
                                                pl={
                                                    typeof section.indentItems === 'number' &&
                                                    (!section.indentCharacter || (text && text.trim().startsWith(section.indentCharacter)))
                                                        ? section.indentItems
                                                        : 0
                                                }
                                            >
                                                {text}
                                            </Typography>
                                        </Stack>
                                    ))}
                            </Stack>
                        </Stack>
                    </Stack>
                ))}
        </>
    );
};

export default Catalog;
