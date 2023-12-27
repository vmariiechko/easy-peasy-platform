import {BsFillVolumeDownFill} from "react-icons/bs";
import React from "react";
import {TranslationContentData} from "../interfaces/translationContentData";
import Button from "./Button";
import {LuCopyPlus} from "react-icons/lu";
import ToolTip from "./ToolTip";
import {useAddWordToDictionary} from "../context/ReadingContext";
import {useToast} from "../context/ToastContext";
import {ToastType} from "../enums/toast";
import {v4 as uuid} from 'uuid';
import {playAudio} from "../utils/playAudio";

interface TranslationContentProps {
    word: string;
    fetchedData: TranslationContentData
}
const TranslationContent: React.FC<TranslationContentProps> = ({word, fetchedData}) => {
    const addWord = useAddWordToDictionary();
    const toast = useToast();

    const handleClick = (selectedWord: string) => {
        const addedWord = {
            id: uuid(),
            word: selectedWord,
            definition:  fetchedData.definitions[0][0],
            audio: fetchedData.audio,
        }
        const status: ToastType = addWord(addedWord);
        toast?.open('Your word has been successfully added!', status);
    }
    const handlePlay = async () => {
        if (fetchedData && fetchedData.audio) {
            await playAudio(fetchedData.audio);
        }
    };
    return <article className='text-indigo-50'>
        <header className='flex justify-between'>
            <h5>{word}{fetchedData &&<span className='opacity-60 ml-2'>{fetchedData.transcription}</span>}</h5>
            {fetchedData && fetchedData.audio && <button
                className='cursor-pointer'
                onClick={handlePlay}
            >
                <BsFillVolumeDownFill className='text-lg'/>
            </button>}
        </header>
        {fetchedData && <main>
            {fetchedData.definitions.map((definitionsArr, arrIndex) => {
                return <ul className='[&:not(:last-of-type)]:border-b border-white/50 py-2' key={arrIndex}>{definitionsArr
                    .map((definition, defIndex) => <li className='mb-2' key={defIndex}>{definition}</li>)
                }</ul>
            })}
            <ToolTip secondary tooltip='Add to your vocabulary list if you are signed in.'>
                <Button secondary outline small
                        onClick={() => handleClick(word)}>
                    <span>add<LuCopyPlus className='text-sm ml-2 inline align-baseline'/></span>
                </Button>
            </ToolTip>
        </main>}
    </article>
}

export default TranslationContent;