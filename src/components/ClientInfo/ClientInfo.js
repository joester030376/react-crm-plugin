import Map from '../Map/Map';
import '../ClientInfo/ClientInfo.css';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//import TranscriptSection from '../TranscriptSection/TranscriptSection';
=======
import TranscriptSection from '../TranscriptSection/TranscriptSection';
>>>>>>> Added a new notepad component. Needs css done and needs a submit button and some other items to save notes to a database.
=======
// import TranscriptSection from '../TranscriptSection/TranscriptSection';
>>>>>>> Added handlers for value changes in each of the fields.
=======
//import TranscriptSection from '../TranscriptSection/TranscriptSection';
>>>>>>> Made an intake form with a simple validation check before submission to the database.
import NotePad from '../Notepad/Notepad';

export default function ClientInfo() {

    return(
        <div>
            <div className='clientInfoSection'>
                <div>
                    <h1 className="sectionTitles">Client Information</h1>
                </div> 
                <div className="clientInfo">
                    <p>Client Name:</p>
                    <p>Client Phone:</p>
                    <p>Client ZipCode:</p>
                    <p>Previous Contact:</p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Made an intake form with a simple validation check before submission to the database.
                </div> 
                <div>
                    <Map />   
                </div>                          
<<<<<<< HEAD
=======
                </div>  
                <Map />             
>>>>>>> Added handlers for value changes in each of the fields.
=======
>>>>>>> Made an intake form with a simple validation check before submission to the database.
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




