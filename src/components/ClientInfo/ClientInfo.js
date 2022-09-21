import Map from '../Map/Map';
import '../ClientInfo/ClientInfo.css';
import TranscriptSection from '../TranscriptSection/TranscriptSection';
import NotePad from '../Notepad/Notepad';

export default function ClientInfo() {

    return(
        <div>
            <div className='clientInfoSection'>
                <div>
                    <h1 className="sectionTitles">Client Information</h1>
                </div> 
                <div className="clientInfo">
                    <h1>Client Name:</h1>
                    <h1>Client Phone:</h1>
                    <h1>Client ZipCode:</h1>
                    <h1>Previous Contact:</h1>
                </div>  
                <Map />             
            </div>
            <div className="transcriptSection">
                <div>
                    <h1 className="sectionTitles">Past Transcripts</h1>
                </div>
            </div>
            <div className="notepadSection">
                <h1 className="sectionTitles">Notepad</h1>
                <NotePad />
            </div>            
        </div>  
    );
};




