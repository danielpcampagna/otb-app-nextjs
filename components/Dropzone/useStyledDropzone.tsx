import React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

export const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#cceecc',
    borderStyle: 'dashed',
    backgroundColor: '#e9fae9',
    color: '#7bbd7b',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

export const focusedStyle = {
    borderColor: '#2196f3'
};

export const acceptStyle = {
    borderColor: '#00e676'
};

export const rejectStyle = {
    borderColor: '#ff1744',
    backgroundColor: '#fae9e9',
    color: '#bd7b7b',
};


export function useStyledDropzone(options?: DropzoneOptions | undefined) {
    const state = useDropzone(options);

    const {
        isFocused,
        isDragAccept,
        isDragReject
    } = state;

    const style = React.useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    return { ...state, style };
}