import React from 'react';
import { FileWithPath } from "react-dropzone";
import { useStyledDropzone } from './useStyledDropzone';

import style from './dropzone.module.scss';
import { upload } from '../../client-services/table';

export function Dropzone() {
    const {
        getRootProps,
        getInputProps,
        style,
        acceptedFiles
    } = useStyledDropzone({
        accept: {
            'text/csv': [],
            'application/csv': [],
            'text/comma-separated-values': [],
        }
    });
    
    function handleUpload() {
        acceptedFiles.forEach((file: FileWithPath) => {
            upload(file)
        })
    }


    const files = acceptedFiles.map((file: FileWithPath) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const actions = acceptedFiles.length > 0 && (
        <>
            <button className='primary' onClick={handleUpload}>Upload</button>
            <button className='secondary'>Reset</button>
        </>
    )

    return (
        // <section className="Dropzone container">
        <section className="Dropzone container">
            <div {...getRootProps<any>({ style })}>
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some .csv files here, or click to select files</p>
                </div>
                <aside>
                    <h4>Files</h4>
                    <ul>{files}</ul>
                </aside>
            </div>

            { actions }
        </section>
    )
}
