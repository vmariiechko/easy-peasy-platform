import React, {DragEvent, useState} from 'react';
import className from 'classnames';
import { FaUpload } from 'react-icons/fa';
import { useDroppable } from '@dnd-kit/core';

interface ImageDropZoneProps  {
    onImageDrop:  (files: File) => void;
}
const ImageDropZone: React.FC<ImageDropZoneProps> = ({ onImageDrop }) => {
    const [isDragging, setIsDragging] = useState(false);
    const { setNodeRef } = useDroppable({ id: 'image-drop-zone' });

    const handleOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };
    const handleLeave = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
    }
    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        onImageDrop(file);
    };
    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = (event.target.files as FileList)[0];
        if(file){
            onImageDrop(file);
        }
    };

    const imageDropZoneClasses = className(
        'flex flex-col gap-5 text-center text-indigo-800 dark:text-indigo-300 justify-center items-center w-full h-full border border-dashed rounded-lg border-indigo-800 transition-colors duration-300', {
            'bg-indigo-500/20':  isDragging
        }
    );

    return (
        <div
            ref={setNodeRef}
            className={imageDropZoneClasses}
            onDrop={handleDrop}
            onDragOver={handleOver}
            onDragLeave={handleLeave}
        >
            <p className='hidden md:block'>Drag and drop your image here</p>
            <label
                htmlFor="image"
                className="underline cursor-pointer text-center hover:text-orange-500 transition-colors"
            >
                <FaUpload className="text-3xl mx-auto mb-3" /> choose a profile picture
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    className="opacity-0 absolute -z-10"
                    onChange={handleFileInputChange}
                />
            </label>
            <p>Max size is 5 MB</p>
        </div>
    );
};

export default ImageDropZone;
